import React from 'react'
import {connect} from 'react-redux'
import TaskCard from './TaskCard'
const ToDoList =(props)=>{
    return (
    <div className='list'>{props.todos.map(el=><TaskCard task ={el}/>)}</div>
    );
    
}
const mapStatetoProps =(state)=>{
    return {
      todos: state.tasks
    }}
export default connect(mapStatetoProps)(ToDoList)
