import React from 'react';

export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props; //渡されたpropsを取り出して分割代入する
    return (
        <div className="input-area">
        <input
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChange}
         />
        <button onClick={onClick}>追加</button>
      </div>
    )
}