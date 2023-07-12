// import React from "react";
import "./styles.css";
import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

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
      <InputTodo disabled={incompleteTodos.length >= 5} todoText={todoText} onChange={onChangeTodoText} onClick={onClickAddTodos} />
      {/* propsとしてtodoText、onChange、onClickを渡して、各々にstateを渡している */}

      {incompleteTodos.length >= 5 &&  (<p style={{ color:"red" }}>登録できるToDoは5個までだぞ！！</p>)}
     
      <IncompleteTodo 
        todos={incompleteTodos} 
        onClickCompTodos={onClickCompTodos} 
        onClickDelTodos={onClickDelTodos}
      />

    <CompleteTodo
      todos={completeTodos}
      onClickBackTodos={onClickBackTodos}
    />
    </>
  );
};
