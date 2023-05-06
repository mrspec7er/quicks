import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { MessageType, chatsRoom1, chatsRoom2 } from "../../utility/dataChat";
import EachChat from "./EachChat";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const ChatRoom = ({
  setChatOpen,
  setChatRoom,
  chatRoom,
}: {
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChatRoom: React.Dispatch<React.SetStateAction<number>>;
  chatRoom: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState(
    chatRoom === 1 ? chatsRoom1 : chatsRoom2
  );
  const [newMessage, setNewMessage] = useState("");
  const [newMessageButton, setNewMessageButton] = useState(true);
  const [messageModal, setMessageModal] = useState(0);
  const [editedData, setEditedData] = useState<MessageType | null>(null);
  const [replyMessage, setReplyMessage] = useState({ name: "", message: "" });
  const [replyModal, setReplyModal] = useState(0);

  function handleSubmit() {
    const today = new Date();
    const m_names = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = `${
      m_names[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()} `;

    const time = today.getHours() + ":" + today.getMinutes();

    console.log(date, time);

    console.log(replyMessage);

    const body: MessageType = {
      date: date,
      id: chatData.length + 1,
      message: newMessage,
      name: "You",
      readStatus: false,
      time: time,
      userID: 1,
      reply: replyMessage.message,
    };

    setChatData((current) => [...current, body]);
    setNewMessage("");
    setReplyMessage({ message: "", name: "" });
  }

  const handleScroll = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log(e.target.clientHeight);

    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
    if (bottom) {
      setNewMessageButton(false);
    }
  };

  function deleteMessage(id: number) {
    setChatData((current) => current.filter((i) => i.id !== id));
  }

  function editMessage(message: MessageType) {
    console.log(message);

    setChatData((current) =>
      current.map((i) => {
        if (i.id === message.id) {
          const editedMessage = message;
          editedMessage.message = newMessage;
          return editedMessage;
        } else {
          return i;
        }
      })
    );

    setEditedData(null);
    setNewMessage("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-primaryBlack w-[40%] h-[65vh] fixed right-7 bottom-32 rounded">
      <div className="h-[15%]">
        <div className="mx-7 flex justify-between items-center py-3">
          <div className="flex gap-3 items-center">
            <div
              onClick={() => {
                setChatOpen(true);
                setChatRoom(0);
              }}
              className="text-2xl font-bold"
            >
              <AiOutlineArrowLeft />
            </div>
            <div>
              <p className="font-medium text-base text-primaryBlue">
                I-589-AMARKHIL, Obaidullah [Affirmative Filling with ZHN]
              </p>
              <p className="text-sm">3 Participants</p>
            </div>
          </div>
          <div
            onClick={() => {
              setChatOpen(false);
              setChatRoom(0);
            }}
            className="text-xl font-bold"
          >
            <AiOutlineClose />
          </div>
        </div>
        <hr className="border border-primaryWhite" />
      </div>

      <div
        onScroll={(e: any) => handleScroll(e)}
        className={`px-7 overflow-y-auto text-sm ${
          newMessageButton ? "h-[65%]" : "h-[70%]"
        }`}
      >
        {chatData.map((i, n) => (
          <EachChat
            replyModal={replyModal}
            setReplyMessage={setReplyMessage}
            setReplyModal={setReplyModal}
            key={i.id}
            currentReadStatus={chatData?.[n + 1]?.readStatus}
            currentDate={chatData?.[n - 1]?.date}
            deleteMessage={deleteMessage}
            messageModal={messageModal}
            setMessageModal={setMessageModal}
            setEditedData={setEditedData}
            setNewMessage={setNewMessage}
            i={i}
          />
        ))}
      </div>
      <div
        className={`flex flex-col items-center mx-7 relative ${
          newMessageButton ? "h-[20%]" : "h-[15%]"
        }`}
      >
        {isLoading ? (
          <div
            className="absolute top-3 flex items-center p-2 mb-4 text-sm rounded-lg bg-primaryBlue bg-opacity-30 w-full"
            role="alert"
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-primaryWhite animate-spin fill-primaryGray"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
            <div>Please wait..</div>
          </div>
        ) : (
          <>
            {newMessageButton && !replyMessage.name ? (
              <a
                href="#new-message"
                className="text-primaryBlue bg-primaryBlue bg-opacity-30 font-medium py-1 px-2 my-2 rounded-md"
              >
                New Message
              </a>
            ) : null}
          </>
        )}

        {editedData ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editMessage(editedData);
            }}
            className="flex items-center w-full absolute bottom-3"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="bg-gray-50 placeholder-primaryBlack border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type a new message"
                required
              />
            </div>
            <button
              type="submit"
              className="py-2.5 px-5 ml-2 text-sm font-medium text-white bg-primaryBlue rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Send
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex items-end w-full absolute bottom-3"
          >
            <div className="relative w-full">
              {replyMessage.name ? (
                <div className=" p-2 text-sm rounded-t-lg bg-primaryWhite w-full">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-medium">{replyMessage.name}</p>
                    <div
                      onClick={() => setReplyMessage({ message: "", name: "" })}
                      className="text-lg"
                    >
                      <MdClose />
                    </div>
                  </div>
                  <p>{replyMessage.message}</p>
                </div>
              ) : null}
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="bg-gray-50 placeholder-primaryBlack border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Type a new message"
                required
              />
            </div>
            <button
              type="submit"
              className="py-2.5 px-5 ml-2 text-sm font-medium text-white bg-primaryBlue rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
