import React from 'react';

export const CompleteTodo = (props) => {
    const { todos, onClickBackTodos } = props;
    return (
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBackTodos(index)}>戻す</button>
          </div>
            );
          })}
        </ul>
      </div>

    )
}