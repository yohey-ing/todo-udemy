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
  };
  const onClickDelTodos = (index) => {
    const newTodos = [...incompleteTodos]; //押される前の配列をコピーしてくる
    newTodos.splice(index, 1); //配列の中からindex番目のタスク1つ削除する
    setIncompleteTodos(newTodos); //stateの更新
  };

  const onClickCompTodos = (index) => {
    const newIncompleteTodos = [...incompleteTodos]; //押される前の配列をコピーする
    newIncompleteTodos.splice(index, 1); //配列の中からindex番目のタスクを1つ削除する
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; //配列をコピーして、最後に要素を追加する
    console.log(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAddTodos}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button>戻す</button>
          </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
