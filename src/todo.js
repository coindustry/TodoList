import React from 'react';

function Todo({todo,index,remove}){
  function handleRemove(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
    <li className="list-group-item" onClick={handleRemove}>
      {todo.text} <button className="btn btn-danger btn-sm float-right">Remove</button>
    </li>
  );
}

export default Todo;