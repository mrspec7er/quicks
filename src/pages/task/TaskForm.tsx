import { useState } from "react";
import { TodoCategory, TodoType } from "../../utility/dataTodo";
import { MdKeyboardArrowUp, MdOutlineModeEdit } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
const TaskForm = ({
  setTodos,
  setTaskForm,
}: {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const [descActive, setDescActive] = useState(false);

  function hanleAddTask(keyCode: number) {
    if (keyCode === 13) {
      if (!title) {
        alert("Task Name Required!");
        return false;
      }
      setTodos((data) => [
        {
          category: TodoCategory.PERSONAL,
          completed,
          date,
          title,
          description,
          id: data.length,
        },
        ...data,
      ]);
      setTaskForm(false);
      setTitle("");
      setDate("");
      setCompleted(false);
      setDescription("");
      setDescActive(false);
    }
  }
  return (
    <div
      onKeyDown={(e) => hanleAddTask(e.keyCode)}
      className="px-7 absolute bottom-0 w-full h-[40%] bg-white"
    >
      <hr className="border border-primaryWhite" />

      <div className="flex justify-between pt-3">
        <div className="flex items-center gap-7">
          <input
            onChange={() => setCompleted((current) => !current)}
            type="checkbox"
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type Task Title"
            className="border w-72 py-1 px-3 placeholder-primaryBlack rounded border-primaryGray"
          />
        </div>
        <div className="relative flex items-center gap-3">
          <div onClick={() => setTaskForm(false)}>
            <MdKeyboardArrowUp />
          </div>
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="ml-10">
        <div className="flex items-center gap-3 my-2">
          <div className={`text-xl ${date ? "text-primaryBlue" : null}`}>
            <BsClock />
          </div>
          <input
            onChange={(e) => setDate(e.target.value)}
            className="border rounded py-1 px-2 border-primaryGray"
            type="date"
          />
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={() => setDescActive((current) => !current)}
            className={`text-2xl ${description ? "text-primaryBlue" : null}`}
          >
            <MdOutlineModeEdit />
          </div>
          {descActive ? (
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="w-[80%] border border-primaryGray px-2 rounded"
            />
          ) : (
            <p>No Description</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
