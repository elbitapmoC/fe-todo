import ToDoList from "./Components/ToDoList";
import Title from "./Components/Title";
import Form from "./Components/Form";
import { useEffect, useState } from "react";
import "./App.css";

interface ToDoType {
  id: string;
  task: string;
  completed: boolean;
  editMode: boolean;
}

function App() {
  const [todos, setTodos] = useState<ToDoType[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <Title title="Todo List App" />
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
