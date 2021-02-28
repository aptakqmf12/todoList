import React, {useState} from 'react'
import TaskAdd from './component/TaskAdd'
import TaskRemove from './component/TaskRemove';
import {firestore} from "./firebase"

class App extends React.Component{
  
  state = {
    // 입력받고 뿌려질떄 쓰이는 값
    taskList:[{ todo:""}],
    task:'' //입력받을떄 쓰이는 값
  }
  
  //서버에서 데이터를 받아 
  componentDidMount(){
    const receivedTaskList = [...this.state.taskList];
    firestore.collection('test').get()
    .then(docs => {
      docs.forEach( doc => {
        receivedTaskList.push( {todo:doc.data().todo, id:doc.id} )
        
      })
      this.setState({ taskList : receivedTaskList  })
    })
    
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const task_Clcik = {todo: this.state.task, date : this.state.date}; //입력한 값
    const tasks_Clcik = [...this.state.taskList, task_Clcik]; //입력된 모든 리스트array
    // 스프레드오퍼레이터로 대입하는경우 [...arr, item] arr제일 끝자리에 item 그대로 push (item이 arr면 arr 통채로 들어감)
    this.setState({
      taskList : tasks_Clcik,
      task :''
    })

  }

  onChangeHandler = (e) => {
    this.setState({
      task : e.target.value
    })
  }

  deleteHandler = (id) => {
     //filter함수는 조건에 맞는 el만 재조합하여 새로운 array로 리턴해줌. 따라서 tasks_Delete는 삭제버튼을 클릭한 i번쨰 요소만 빼고 만든 새로운 집합
    // 
    // 

    firestore.collection('test').doc(id).delete()
    .then( () =>{
      const tasks_Delete = this.state.taskList.filter( (el) => el.id !== id )
      this.setState({ taskList : tasks_Delete })
    })

    


  }

  render(){
    

    return (
      <div className="App">

        <TaskAdd
          value={this.state.task}
          toChildenOnChangeHandler={this.onChangeHandler}
          toChildenOnClickHandler={this.onClickHandler}
        />

        <TaskRemove
          taskList={this.state.taskList}
          toChildrenDeleteHandler={this.deleteHandler}
        />

      </div>
    );
  }
}

// state가 없기떄문에 함수형으로 사용가능



export default App;
