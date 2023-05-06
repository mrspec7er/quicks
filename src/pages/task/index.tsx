import Loading from "../../components/Loading";
import TaskList from "./TaskList";
import fetchData from "../../utility/fetchData";
import { useEffect, useState } from "react";
import { TodoType, TodoCategory, ApiResponse } from "../../utility/dataTodo";

const Tasks = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [changes, setChanges] = useState(0);
  const [taskForm, setTaskForm] = useState(false);

  async function fetchTodo() {
    fetchData("/todos")
      .then((res: ApiResponse[]) => {
        const todoData = res.slice(0, 10);

        todoData.forEach((i) => {
          setTodos((data) => [
            ...data,
            {
              id: i.id,
              title: i.title,
              completed: i.completed,
              category:
                i.id % 2 === 0 ? TodoCategory.PERSONAL : TodoCategory.URGENT,
              date: i.id % 2 === 0 ? "2023-05-23" : "2023-05-25",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, aut maxime?",
            },
          ]);
        });
      })
      .then(() => setIsLoading(false));
  }
  useEffect(() => {
    fetchTodo();
  }, [changes]);

  function handleFilterTask(category: TodoCategory) {
    if (category === TodoCategory.ALL) {
      resetTodo();
    } else {
      fetchTodo().then(() => {
        setTodos((data) => data.filter((i) => i.category === category));
      });
    }
  }

  async function resetTodo() {
    setTodos([]);
    setChanges((current) => current + 1);
  }
  return (
    <div className="bg-white w-[40%] h-[65vh] fixed right-7 bottom-32 rounded">
      <div className="mx-7 ml-24 flex items-center justify-between relative pt-3">
        <select
          onChange={(e) => handleFilterTask(Number(e.target.value))}
          defaultValue={TodoCategory.ALL}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-1.5"
        >
          <option value={0}>My Tasks</option>
          <option value={1}>Personal Erands</option>
          <option value={2}>Urgent To-Do</option>
        </select>
        <div>
          <button
            onClick={() => setTaskForm(true)}
            className="bg-primaryBlue text-white font-medium py-1.5 px-3 rounded"
          >
            New Task
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Loading />
          <p>Loading Task List ..</p>
        </div>
      ) : (
        <TaskList
          taskForm={taskForm}
          setTaskForm={setTaskForm}
          setTodos={setTodos}
          todos={todos}
        />
      )}
    </div>
  );
};

export default Tasks;
