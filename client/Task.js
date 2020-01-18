import React from 'react';

const Task = (props) => {
  
  return (
    <div>
        {props.task.map((item, index) => ( //make sure you add props to Task in App
          <li key={index}>{item.task}</li>
        ))}
    </div>
  )

}

export default Task;

