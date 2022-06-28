import React from "react";
import "../App.css";
export const Todo = ({ sno, text, tatext, tatodo, tatodos, setTaTodos }) => {
  const delateTaHandler = (e) => {
    setTaTodos(tatodos.filter((tael) => tael.sno !== tatodo.sno));
  };
  const completeTaHandler = () => {
    setTaTodos(
      tatodos.map((taitem) => {
        if (taitem.tatext === tatodo.tatext) {
          return {
            ...taitem,
            tacompleted: !taitem.complete,
          };
        }
        return taitem;
      })
    );
  };
  return (
    <>
      <div className="tatodo">
        <div>
          <h5 className="srno">No. {sno}</h5>
          <h2
            className={`tatodo-taitem ${
              tatodo.tacompleted ? "tacompleted" : ""
            }`}
          >
            {text}
          </h2>
          <div className="line"></div>
          <p className="tododesc">{tatext}</p>
        </div>
        <div className="butns">
          <button onClick={completeTaHandler} className="complete">
            check
          </button>
          <button onClick={delateTaHandler} className="Delete">
            delete
          </button>
        </div>
      </div>
    </>
  );
};
