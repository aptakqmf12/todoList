import React, {useState} from 'react'

class App extends React.Component{
  state = {
    taskList:[
      {todo:'할일1', date:20210222},
      {todo:'할일2'},
      {todo:'할일3'},
      {todo:'할일4'}
    ],
    task:''
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     taskList:[
  //       {todo:'할일1'},
  //       {todo:'할일2'},
  //       {todo:'할일3'},
  //       {todo:'할일4'}
  //     ],
  //     task:''
  //   }
  // }
  onClickHandler = (e) => {
    e.preventDefault();
    const task = {todo: this.state.task, date : this.state.date};
    const tasks = [...this.state.taskList, task]; //
    this.setState({
      taskList:tasks,
      task :''
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      task : e.target.value
    })
  }

  render(){

    const taskDisplay = this.state.taskList.map( (task, i) =>{
      return (
        <div key={i}>
          <p>{task.todo} {task.date}</p>
          <button>삭제</button>
        </div>
      )
    });

    return (
      <div className="App">

        <div>
          <form>
            <input value={this.state.task} onChange={this.onChangeHandler}></input>
            <button onClick={this.onClickHandler}>저장</button>
          </form>
        </div>

        <div>
          {taskDisplay}
        </div>

      </div>
    );
  }
}

export default App;
