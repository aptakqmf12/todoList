import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    height:30px;
    vertical-align:middle;
    background-color:blue;
    color:white;
`
const Input = styled.input`
    height:30px;
    box-sizing:border-box;
    padding:0 10px;
`

const TaskAdd = (props) => { 
    return (
      <div>
        <form>
          <Input value={props.value} onChange={props.toChildenOnChangeHandler}></Input>
          <Btn onClick={props.toChildenOnClickHandler}>저장</Btn>
        </form>
      </div>
    )
  }

  export default TaskAdd