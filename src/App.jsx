// import React from "react";
import "./styles.css";
import React, { useState } from 'react';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(['あああああ', 'いいいいいい']);
  const [completeTodos, setCompleteTodos] = useState(['ううううう']);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAddTodos = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAddTodos}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              //mapなどを使用してループ処理でレンダリングを行う時は、何個目の要素かわからなくなってしまうため
              //keyを設定しないとエラーになる
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
            )
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          })}
        </ul>
      </div>
    </>
  );
};
