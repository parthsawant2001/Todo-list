import "./App.css";
import { useState } from "react";
import { Form } from "./Components/Form";
import { TodoList } from "./Components/TodoList";
function App() {
  const [textArea, setTextArea] = useState("");
  const [inputText, setInputText] = useState("");
  const [tatodos, setTaTodos] = useState([]);
  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        textArea={textArea}
        tatodos={tatodos}
        setTaTodos={setTaTodos}
        setTextArea={setTextArea}
      />
      <TodoList setTaTodos={setTaTodos} tatodos={tatodos} />
    </div>
  );
}

export default App;
