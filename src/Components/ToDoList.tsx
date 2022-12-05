import IconCheck from "./IconCheck";
import IconEdit from "./IconEdit";
import IconTrash from "./IconTrash";

const ToDoList = ({ todos, setTodos }: { todos: any; setTodos: any }) => {
  const handleDelete = ({ id }: { id: string }) => {
    setTodos(todos.filter((todos: any) => todos.id !== id));
  };

  const EmptyState = () => {
    return (
      <>
        <p>No tasks found!</p>
      </>
    );
  };

  if (todos?.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Task
            </th>
            <th scope="col" className="py-3 px-6 ">
              Modify
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map(
            (
              {
                completed,
                id,
                task,
              }: { completed: boolean; id: string; task: string },
              index: number
            ) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className={`py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
                      completed ? "line-through" : null
                    }`}
                  >
                    {task}
                  </th>
                  <td className="py-4 px-6">
                    <button>
                      <IconCheck />
                    </button>
                    <button>
                      <IconEdit />
                    </button>
                    <button onClick={() => handleDelete(id)}>
                      <IconTrash />
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
