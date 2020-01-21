import React from 'react';

// Notes: task in map is the prop that you created in the Task component on App.
const Task = (props) => {
  return (
    <div>
        {props.task.map((item, index) => ( //make sure you add props to Task in App
          <li key={index}>{item.task}</li>
        ))}
    </div>
  )
};

// const Task = props => (
//   <div key={`task_${props.id}`}>
//     <span>{props.task}</span>
//     <button value={props.id} onClick={props.deleteTask}>
//       Complete
//     </button>
//   </div>
// );

export default Task;

