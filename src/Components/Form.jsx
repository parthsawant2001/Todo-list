import React from "react";
import "../App.css";
export const Form = ({
  inputText,
  setInputText,
  textArea,
  setTextArea,
  tatodos,
  setTaTodos,
}) => {
  let sno;
  if (tatodos.length === 0) {
    sno = 1;
  } else {
    sno = tatodos[tatodos.length - 1].sno + 1;
  }

  const textAreaHandler = (e) => {
    // console.log(e.target.value);
    setTextArea(e.target.value);
  };
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTaTodos([
      ...tatodos,
      { sno: sno, text: inputText, tatext: textArea, tacompleted: false },
    ]);
    setTextArea("");
    setInputText("");
  };

  return (
    <form className="form">
      <h1>TODO LIST</h1>
      <input
        className="title"
        placeholder="Title..."
        value={inputText}
        onChange={inputHandler}
      />
      <textarea
        rows="5"
        className="desc"
        placeholder="Description..."
        value={textArea}
        onChange={textAreaHandler}
        type="tatext"
      />

      <button className="Ctbtn" onClick={submitTodoHandler}>
        {" "}
        Create task
      </button>
    </form>
  );
};
