import React from 'react';

export const IncompleteTodo = (props) => {
    const { todos, onClickCompTodos, onClickDelTodos } = props;
    return (
     <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              //mapなどを使用してループ処理でレンダリングを行う時は、何個目の要素かわからなくなってしまうため
              //keyを設定しないとエラーになる
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompTodos(index)}>完了</button>
              <button onClick={() => onClickDelTodos(index)}>削除</button>
            </div>
            )
          })}
        </ul>
      </div>
    )
}