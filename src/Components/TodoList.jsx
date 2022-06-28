import React from "react";
import { Todo } from "./Todo";
import "../App.css";
export const TodoList = ({ sno, tatext, text, tatodos, setTaTodos }) => {
  console.log(tatodos);
  return (
    <div className="tatodo-container">
      <div className="tatodo-list">
        {tatodos.map((tatodo) => (
          <Todo
            key={tatodo.sno}
            sno={tatodo.sno}
            text={tatodo.text}
            setTaTodos={setTaTodos}
            tatodo={tatodo}
            tatodos={tatodos}
            tatext={tatodo.tatext}
          />
        ))}
      </div>
    </div>
  );
};
