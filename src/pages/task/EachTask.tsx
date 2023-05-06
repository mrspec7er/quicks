import {
  MdKeyboardArrowUp,
  MdOutlineModeEdit,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBookmarks, BsClock } from "react-icons/bs";
import { useState } from "react";
import { TodoType, StickerType } from "../../utility/dataTodo";

const EachTask = ({
  task,
  handleCompleted,
  handleUncompleted,
  setTodos,
}: {
  task: TodoType;
  handleCompleted(task: TodoType): void;
  handleUncompleted(task: TodoType): void;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) => {
  const [taskDetail, setTaskDetail] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [deleteButton, setDeleteButton] = useState(false);
  const [stickerOption, setStickerOption] = useState(false);

  function handleEditDesc(keyEven: number) {
    if (keyEven === 13) {
      setNewDescription("");
      setTodos((data) =>
        data.map((i) => {
          if (i.id === task.id) {
            const newTodo = i;
            newTodo.description = newDescription;
            return newTodo;
          } else {
            return i;
          }
        })
      );
    }
  }

  function handleEditDate(timeValue: string) {
    setTodos((data) =>
      data.map((i) => {
        if (i.id === task.id) {
          const newTodo = i;
          newTodo.date = timeValue;
          return newTodo;
        } else {
          return i;
        }
      })
    );
  }

  function handleDeleteTodo() {
    setTodos((data) => data.filter((i) => i.id !== task.id));
    setDeleteButton(false);
  }

  function handleSetSticker(label: StickerType) {
    setTodos((data) =>
      data.map((i) => {
        if (i.id === task.id) {
          const newTodo = i;
          const stickerList = i.sticker ?? [];
          newTodo.sticker = [...stickerList, label];
          console.log(newTodo);

          return newTodo;
        } else {
          return i;
        }
      })
    );
    setStickerOption(false);
  }

  return (
    <>
      {task.completed ? (
        <div
          className="mx-7 text-primaryGray"
          onClick={() => {
            setDeleteButton(false);
            setStickerOption(false);
          }}
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-7">
              <input
                onChange={() => handleUncompleted(task)}
                id="checkbox1"
                className="bg-primaryGray"
                type="checkbox"
                checked={task.completed}
              />
              <p className="font-medium">
                <s>{task.title}</s>
              </p>
            </div>
            <div className="relative flex items-center gap-3">
              <p className="whitespace-nowrap">{task.date}</p>
              {!taskDetail ? (
                <button
                  className="hover:scale-125"
                  onClick={() => setTaskDetail((current) => !current)}
                >
                  <MdKeyboardArrowDown />
                </button>
              ) : (
                <button
                  className="hover:scale-125"
                  onClick={() => setTaskDetail((current) => !current)}
                >
                  <MdKeyboardArrowUp />
                </button>
              )}
              <button
                onClick={(e) => {
                  setDeleteButton((current) => !current);
                  e.stopPropagation();
                }}
              >
                <BiDotsHorizontalRounded />
              </button>
              {deleteButton ? (
                <div>
                  <button
                    onClick={handleDeleteTodo}
                    className="px-5 py-1 bg-white z-10 absolute right-3 top-7 text-indicatorRed rounded border border-primaryGray"
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          {taskDetail ? (
            <div className="ml-10">
              <div className="flex items-center gap-3 my-2">
                <div
                  className={`text-xl ${task.date ? "text-primaryBlue" : null}`}
                >
                  <BsClock />
                </div>
                <input
                  value={task.date}
                  onChange={(e) => handleEditDate(e.target.value)}
                  className="border rounded py-1 px-2"
                  type="date"
                />
              </div>
              <div className="flex items-center gap-3">
                <div
                  onClick={() =>
                    setNewDescription(
                      task.description && task.description !== ""
                        ? task.description
                        : " "
                    )
                  }
                  className={`text-2xl ${
                    task.description ? "text-primaryBlue" : null
                  }`}
                >
                  <MdOutlineModeEdit />
                </div>
                {newDescription ? (
                  <textarea
                    className="w-[80%] border px-2 rounded"
                    value={newDescription}
                    onKeyDown={(e) => handleEditDesc(e.keyCode)}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                ) : (
                  <>
                    {task.description ? (
                      <p className="max-w-sm">{task.description}</p>
                    ) : (
                      <p className="max-w-sm">No Description</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ) : null}

          <hr className="border border-primaryGray mt-5" />
        </div>
      ) : (
        <div
          onClick={() => {
            setDeleteButton(false);
            setStickerOption(false);
          }}
          className="mx-7"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-7">
              <input
                onChange={() => handleCompleted(task)}
                checked={task.completed}
                type="checkbox"
              />
              <p className="font-medium">{task.title}</p>
            </div>
            <div className="flex items-center gap-3 relative">
              <p className="text-sm text-indicatorRed whitespace-nowrap">
                {Math.round(
                  (new Date(task.date).getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
                <span className="pl-1">Days Left</span>
              </p>
              <p className="whitespace-nowrap">{task.date}</p>
              {taskDetail ? (
                <button
                  className="hover:scale-125"
                  onClick={() => setTaskDetail((current) => !current)}
                >
                  <MdKeyboardArrowDown />
                </button>
              ) : (
                <button
                  className="hover:scale-125"
                  onClick={() => setTaskDetail((current) => !current)}
                >
                  <MdKeyboardArrowUp />
                </button>
              )}
              <button
                onClick={(e) => {
                  setDeleteButton((current) => !current);
                  e.stopPropagation();
                }}
              >
                <BiDotsHorizontalRounded />
              </button>
              {deleteButton ? (
                <div>
                  <button
                    onClick={handleDeleteTodo}
                    className="px-5 py-1 bg-white z-10 absolute right-3 top-7 text-indicatorRed rounded border border-primaryGray"
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          {!taskDetail ? (
            <div className="ml-10">
              <div className="flex items-center gap-3 my-2">
                <div
                  className={`text-xl ${task.date ? "text-primaryBlue" : null}`}
                >
                  <BsClock />
                </div>
                <input
                  value={task.date}
                  onChange={(e) => handleEditDate(e.target.value)}
                  className="border rounded py-1 px-2"
                  type="date"
                />
              </div>
              <div className="flex items-center gap-3">
                <div
                  onClick={() =>
                    setNewDescription(
                      task.description && task.description !== ""
                        ? task.description
                        : " "
                    )
                  }
                  className={`text-2xl ${
                    task.description ? "text-primaryBlue" : null
                  }`}
                >
                  <MdOutlineModeEdit />
                </div>
                {newDescription ? (
                  <textarea
                    className="w-[80%] border px-2 rounded"
                    value={newDescription}
                    onKeyDown={(e) => handleEditDesc(e.keyCode)}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                ) : (
                  <>
                    {task.description ? (
                      <p className="max-w-sm">{task.description}</p>
                    ) : (
                      <p className="max-w-sm">No Description</p>
                    )}
                  </>
                )}
              </div>
              <div className="flex items-center p-2 rounded gap-3 my-2 bg-primaryWhite">
                <div
                  onClickCapture={(e) => {
                    setStickerOption(true);
                    e.stopPropagation();
                  }}
                  className={`text-xl ${
                    task.sticker ? "text-primaryBlue" : null
                  }`}
                >
                  <BsBookmarks />
                </div>
                {stickerOption ? (
                  <div className="bg-gray-50 relative text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <div className="absolute text-sm top-5 -left-9 border-2 border-primaryWhite p-2 w-52 bg-white rounded">
                      <div
                        className="rounded bg-stickersGray py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.IMPORTANT)}
                      >
                        {StickerType.IMPORTANT}
                      </div>
                      <div
                        className="rounded bg-stickersChoco py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.OFFLINE)}
                      >
                        {StickerType.OFFLINE}
                      </div>
                      <div
                        className="rounded bg-stickersLightChoco py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.VIRTUAL)}
                      >
                        {StickerType.VIRTUAL}
                      </div>
                      <div
                        className="rounded bg-stickersGreen py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.ASAP)}
                      >
                        {StickerType.ASAP}
                      </div>
                      <div
                        className="rounded bg-stickersLightGreen py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.CLIENT)}
                      >
                        {StickerType.CLIENT}
                      </div>
                      <div
                        className="rounded bg-stickersPurple py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.SELF)}
                      >
                        {StickerType.SELF}
                      </div>
                      <div
                        className="rounded bg-stickersPink py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() =>
                          handleSetSticker(StickerType.APPOINTMENTS)
                        }
                      >
                        {StickerType.APPOINTMENTS}
                      </div>
                      <div
                        className="rounded bg-stickersGreen py-1 px-2 hover:bg-opacity-70 hover:cursor-pointer mb-2"
                        onClick={() => handleSetSticker(StickerType.COURT)}
                      >
                        {StickerType.COURT}
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="flex gap-3">
                  {task.sticker?.map((i) => (
                    <p
                      className={`py-1 text-sm px-2 rounded bg-${stickerColor(
                        i
                      )}`}
                    >
                      {i}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          <hr className="border border-primaryGray mt-5" />
        </div>
      )}
    </>
  );
};

function stickerColor(label: StickerType) {
  if (label === StickerType.IMPORTANT) {
    return "stickersGray";
  }
  if (label === StickerType.OFFLINE) {
    return "stickersChoco";
  }
  if (label === StickerType.VIRTUAL) {
    return "stickersLightChoco";
  }
  if (label === StickerType.ASAP) {
    return "stickersGreen";
  }
  if (label === StickerType.CLIENT) {
    return "stickersLightGreen";
  }
  if (label === StickerType.SELF) {
    return "stickersPurple";
  }
  if (label === StickerType.APPOINTMENTS) {
    return "stickersPink";
  }
  if (label === StickerType.COURT) {
    return "stickersGreen";
  }
}

export default EachTask;
