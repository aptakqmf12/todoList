import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    height:30px;
    vertical-align:middle;
    background-color:red;
    color:white;
    border:none;
`

const TaskRemove = ( {taskList, toChildrenDeleteHandler} ) => {
    
    return (
        taskList.map( (el) =>{
            return (
                <div key={el.id}> 
                    <p> {el.id} {el.todo}  </p>
                    <Btn onClick={()=>toChildrenDeleteHandler(el.id)}>삭제</Btn>
                </div>
            )
        })
    )

    // const taskDisplay = task.map( (el, i) =>{
    //   return (
    //     <div key={i}> 
    //       <p>{el.todo} {el.date} </p>
    //       <button onClick={()=>toChildrenDeleteHandler(i)}>삭제</button>
    //     </div>
    //   )
    // })
    // return taskDisplay
  }
  
  

  export default TaskRemove