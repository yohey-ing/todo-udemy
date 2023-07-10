// import React from "react";
import "./styles.css";
import React, { useState } from 'react';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    }
  
    const onClickBackTodos = (index) => {
      const newCompleteTodos = [...completeTodos]; //配列コピー
      newCompleteTodos.splice(index, 1); //index番目の要素を1つ削除

      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]; //未完了の配列をコピーして末尾に完了のindex番目を追加する
      setCompleteTodos(newCompleteTodos); //state更新
      setIncompleteTodos(newIncompleteTodos);

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
            <button onClick={() => onClickBackTodos(index)}>戻す</button>
          </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
