import React from 'react';

const Task = ({ task }) => {
  // console.log('This is from Task: ', task);
  return (
    <div>
      {task.map(task => (
        <div key={task.id}>
          <li>{task.task}</li>
        </div>
      ))}
    </div>
  );
};

export default Task;

// {this.state.tasks.map(task => {
//   return (

//   );
// })}

// <div key={`task_${props.id}`}>
// <span>{props.task}</span>
// <button value={props.id} onClick={props.deleteTask}>
//   Complete
// </button>
// </div>

{
  /* <Task id={task.id} task={task.task} deleteTask={this.deleteTask} />; */
}
