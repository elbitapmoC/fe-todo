import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ todos, setTodos }: { todos: any; setTodos: any }) => {
  const taskRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: taskRef.current?.value,
        completed: false,
        editMode: false,
      },
    ]);

    if (taskRef.current) {
      taskRef.current.value = "";
    }
  };

  return (
    <form className="mt-12 mb-8" onSubmit={handleSubmit}>
      <label htmlFor="toDoTask" className="hidden">
        To Do Input
      </label>
      <input
        type="text"
        name="toDoTask"
        id="toDoTask"
        placeholder="Enter a task..."
        className="p-2.5 border-2 bg-transparent"
        ref={taskRef}
        required
      />
      <button type="submit" className="focus:outline-none border-none">
        Submit
      </button>
    </form>
  );
};

export default Form;
