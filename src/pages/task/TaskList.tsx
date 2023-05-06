import { TodoType } from "../../utility/dataTodo";
import EachTask from "./EachTask";
import TaskForm from "./TaskForm";

const TaskList = ({
  setTodos,
  todos,
  taskForm,
  setTaskForm,
}: {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todos: TodoType[];
  taskForm: boolean;
  setTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function handleCompleted(task: TodoType) {
    setTodos((data) =>
      data.map((i) => {
        if (i.id === task.id) {
          const taskRef = i;
          taskRef.completed = true;
          return taskRef;
        } else {
          return i;
        }
      })
    );
  }

  function handleUncompleted(task: TodoType) {
    setTodos((data) =>
      data.map((i) => {
        if (i.id === task.id) {
          const taskRef = i;
          taskRef.completed = false;
          return taskRef;
        } else {
          return i;
        }
      })
    );
  }

  return (
    <div className="py-3 max-h-[85%] overflow-y-auto">
      {todos.map((i, n) => (
        <EachTask
          setTodos={setTodos}
          task={i}
          key={n}
          handleCompleted={handleCompleted}
          handleUncompleted={handleUncompleted}
        />
      ))}
      {taskForm ? (
        <TaskForm setTaskForm={setTaskForm} setTodos={setTodos} />
      ) : null}
    </div>
  );
};

export default TaskList;

// const TaskForm = ({
//   setTodos,
//   setTaskForm,
// }: {
//   setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
//   setTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [completed, setCompleted] = useState(false);
//   const [description, setDescription] = useState("");
//   const [descActive, setDescActive] = useState(false);

//   function hanleAddTask(keyCode: number) {
//     if (keyCode === 13) {
//       if (!title) {
//         alert("Task Name Required!");
//         return false;
//       }
//       setTodos((data) => [
//         {
//           category: TodoCategory.PERSONAL,
//           completed,
//           date,
//           title,
//           description,
//           id: data.length,
//         },
//         ...data,
//       ]);
//       setTaskForm(false);
//       setTitle("");
//       setDate("");
//       setCompleted(false);
//       setDescription("");
//       setDescActive(false);
//     }
//   }
//   return (
//     <div
//       onKeyDown={(e) => hanleAddTask(e.keyCode)}
//       className="px-7 absolute bottom-0 w-full h-[40%] bg-white"
//     >
//       <hr className="border border-primaryWhite" />

//       <div className="flex justify-between pt-3">
//         <div className="flex items-center gap-7">
//           <input
//             onChange={() => setCompleted((current) => !current)}
//             type="checkbox"
//           />
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Type Task Title"
//             className="border w-72 py-1 px-3 placeholder-primaryBlack rounded border-primaryGray"
//           />
//         </div>
//         <div className="relative flex items-center gap-3">
//           <MdKeyboardArrowUp />
//           <BiDotsHorizontalRounded />
//         </div>
//       </div>
//       <div className="ml-10">
//         <div className="flex items-center gap-3 my-2">
//           <div className={`text-xl ${date ? "text-primaryBlue" : null}`}>
//             <BsClock />
//           </div>
//           <input
//             onChange={(e) => setDate(e.target.value)}
//             className="border rounded py-1 px-2 border-primaryGray"
//             type="date"
//           />
//         </div>
//         <div className="flex items-center gap-2">
//           <div
//             onClick={() => setDescActive((current) => !current)}
//             className={`text-2xl ${description ? "text-primaryBlue" : null}`}
//           >
//             <MdOutlineModeEdit />
//           </div>
//           {descActive ? (
//             <textarea
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-[80%] border border-primaryGray px-2 rounded"
//             />
//           ) : (
//             <p>No Description</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// import {
//   MdKeyboardArrowUp,
//   MdOutlineModeEdit,
//   MdKeyboardArrowDown,
// } from "react-icons/md";
// import { BiDotsHorizontalRounded } from "react-icons/bi";
// import { BsClock } from "react-icons/bs";

// const EachTask = ({
//   task,
//   handleCompleted,
//   handleUncompleted,
//   setTodos,
// }: {
//   task: TodoType;
//   handleCompleted(task: TodoType): void;
//   handleUncompleted(task: TodoType): void;
//   setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
// }) => {
//   const [taskDetail, setTaskDetail] = useState(false);
//   const [newDescription, setNewDescription] = useState("");
//   const [deleteButton, setDeleteButton] = useState(false);

//   function handleEditDesc(keyEven: number) {
//     if (keyEven === 13) {
//       setNewDescription("");
//       setTodos((data) =>
//         data.map((i) => {
//           if (i.id === task.id) {
//             const newTodo = i;
//             newTodo.description = newDescription;
//             return newTodo;
//           } else {
//             return i;
//           }
//         })
//       );
//     }
//   }

//   function handleEditDate(timeValue: string) {
//     setTodos((data) =>
//       data.map((i) => {
//         if (i.id === task.id) {
//           const newTodo = i;
//           newTodo.date = timeValue;
//           return newTodo;
//         } else {
//           return i;
//         }
//       })
//     );
//     console.log(newDescription, task.id);
//   }

//   function handleDeleteTodo() {
//     setTodos((data) => data.filter((i) => i.id !== task.id));
//     setDeleteButton(false);
//   }

//   return (
//     <>
//       {task.completed ? (
//         <div
//           className="mx-7 text-primaryGray"
//           onClick={() => setDeleteButton(false)}
//         >
//           <div className="flex justify-between">
//             <div className="flex items-center gap-7">
//               <input
//                 onChange={() => handleUncompleted(task)}
//                 id="checkbox1"
//                 className="bg-primaryGray"
//                 type="checkbox"
//                 checked={task.completed}
//               />
//               <p className="font-medium">
//                 <s>{task.title}</s>
//               </p>
//             </div>
//             <div className="relative flex items-center gap-3">
//               <p className="whitespace-nowrap">{task.date}</p>
//               {!taskDetail ? (
//                 <button
//                   className="hover:scale-125"
//                   onClick={() => setTaskDetail((current) => !current)}
//                 >
//                   <MdKeyboardArrowDown />
//                 </button>
//               ) : (
//                 <button
//                   className="hover:scale-125"
//                   onClick={() => setTaskDetail((current) => !current)}
//                 >
//                   <MdKeyboardArrowUp />
//                 </button>
//               )}
//               <button
//                 onClick={(e) => {
//                   setDeleteButton((current) => !current);
//                   e.stopPropagation();
//                 }}
//               >
//                 <BiDotsHorizontalRounded />
//               </button>
//               {deleteButton ? (
//                 <div>
//                   <button
//                     onClick={handleDeleteTodo}
//                     className="px-5 py-1 bg-white z-10 absolute right-3 top-7 text-indicatorRed rounded border border-primaryGray"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           {taskDetail ? (
//             <div className="ml-10">
//               <div className="flex items-center gap-3 my-2">
//                 <div
//                   className={`text-xl ${task.date ? "text-primaryBlue" : null}`}
//                 >
//                   <BsClock />
//                 </div>
//                 <input
//                   value={task.date}
//                   onChange={(e) => handleEditDate(e.target.value)}
//                   className="border rounded py-1 px-2"
//                   type="date"
//                 />
//               </div>
//               <div className="flex items-center gap-3">
//                 <div
//                   onClick={() =>
//                     setNewDescription(
//                       task.description && task.description !== ""
//                         ? task.description
//                         : " "
//                     )
//                   }
//                   className={`text-2xl ${
//                     task.description ? "text-primaryBlue" : null
//                   }`}
//                 >
//                   <MdOutlineModeEdit />
//                 </div>
//                 {newDescription ? (
//                   <textarea
//                     className="w-[80%] border px-2 rounded"
//                     value={newDescription}
//                     onKeyDown={(e) => handleEditDesc(e.keyCode)}
//                     onChange={(e) => setNewDescription(e.target.value)}
//                   />
//                 ) : (
//                   <p className="max-w-sm">{task.description}</p>
//                 )}
//               </div>
//             </div>
//           ) : null}

//           <hr className="border border-primaryGray mt-5" />
//         </div>
//       ) : (
//         <div onClick={() => setDeleteButton(false)} className="mx-7">
//           <div className="flex justify-between">
//             <div className="flex items-center gap-7">
//               <input
//                 onChange={() => handleCompleted(task)}
//                 checked={task.completed}
//                 type="checkbox"
//               />
//               <p className="font-medium">{task.title}</p>
//             </div>
//             <div className="flex items-center gap-3 relative">
//               <p className="text-sm text-indicatorRed whitespace-nowrap">
//                 {Math.round(
//                   (new Date(task.date).getTime() - new Date().getTime()) /
//                     (1000 * 60 * 60 * 24)
//                 )}
//                 <span className="pl-1">Days Left</span>
//               </p>
//               <p className="whitespace-nowrap">{task.date}</p>
//               {taskDetail ? (
//                 <button
//                   className="hover:scale-125"
//                   onClick={() => setTaskDetail((current) => !current)}
//                 >
//                   <MdKeyboardArrowDown />
//                 </button>
//               ) : (
//                 <button
//                   className="hover:scale-125"
//                   onClick={() => setTaskDetail((current) => !current)}
//                 >
//                   <MdKeyboardArrowUp />
//                 </button>
//               )}
//               <button
//                 onClick={(e) => {
//                   setDeleteButton((current) => !current);
//                   e.stopPropagation();
//                 }}
//               >
//                 <BiDotsHorizontalRounded />
//               </button>
//               {deleteButton ? (
//                 <div>
//                   <button
//                     onClick={handleDeleteTodo}
//                     className="px-5 py-1 bg-white z-10 absolute right-3 top-7 text-indicatorRed rounded border border-primaryGray"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           {!taskDetail ? (
//             <div className="ml-10">
//               <div className="flex items-center gap-3 my-2">
//                 <div
//                   className={`text-xl ${task.date ? "text-primaryBlue" : null}`}
//                 >
//                   <BsClock />
//                 </div>
//                 <input
//                   value={task.date}
//                   onChange={(e) => handleEditDate(e.target.value)}
//                   className="border rounded py-1 px-2"
//                   type="date"
//                 />
//               </div>
//               <div className="flex items-center gap-3">
//                 <div
//                   onClick={() =>
//                     setNewDescription(
//                       task.description && task.description !== ""
//                         ? task.description
//                         : " "
//                     )
//                   }
//                   className={`text-2xl ${
//                     task.description ? "text-primaryBlue" : null
//                   }`}
//                 >
//                   <MdOutlineModeEdit />
//                 </div>
//                 {newDescription ? (
//                   <textarea
//                     className="w-[80%] border px-2 rounded"
//                     value={newDescription}
//                     onKeyDown={(e) => handleEditDesc(e.keyCode)}
//                     onChange={(e) => setNewDescription(e.target.value)}
//                   />
//                 ) : (
//                   <p className="max-w-sm">{task.description}</p>
//                 )}
//               </div>
//             </div>
//           ) : null}
//           <hr className="border border-primaryGray mt-5" />
//         </div>
//       )}
//     </>
//   );
// };
