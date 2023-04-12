import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  //const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className=
    {` TodoCounter ${!!loading && " TodoCounter--Loading"}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOS
      </h2>
  );
}

export { TodoCounter };
