import { render } from '@testing-library/react';
import React from 'react';
import './TodoList.css'

function TodoList(props) {

  const renderFunc=props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length)&& props.onEmptySearchResults(props.searchValue)}

      {props.searchedTodos.map(renderFunc)}

      
    </section>
  );
}

export { TodoList };
