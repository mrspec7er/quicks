import { useState } from "react";
import Layouts from "./components/Layout";
import Chat from "./pages/Chat";
import ChatRoom from "./pages/Chat/ChatRoom";
import Tasks from "./pages/task";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatRoom, setChatRoom] = useState(0);
  const [taskOpen, setTaskOpen] = useState(false);
  return (
    <Layouts>
      {chatOpen ? (
        <Chat setChatOpen={setChatOpen} setChatRoom={setChatRoom} />
      ) : null}
      {chatRoom ? (
        <ChatRoom
          setChatOpen={setChatOpen}
          setChatRoom={setChatRoom}
          chatRoom={chatRoom}
        />
      ) : null}

      {taskOpen ? <Tasks /> : null}

      <div className="text-primaryWhite text-center">
        {chatOpen || chatRoom ? (
          <>
            <div
              onClick={() => {
                setChatOpen(false);
                setChatRoom(0);
                setTaskOpen(true);
              }}
              className="fixed bottom-2 right-32"
            >
              <img src="/task-close.png" alt="task" />
            </div>
            <div
              onClick={() => {
                setChatOpen(false);
                setTaskOpen(false);
                setShowMenu(false);
                setChatRoom(0);
              }}
              className="fixed bottom-3 right-7 bg-primaryGray rounded-full"
            >
              <img src="/chat-open.png" className="pl-3" alt="chat" />
            </div>
          </>
        ) : taskOpen ? (
          <>
            <div
              onClick={() => {
                setChatOpen(true);
                setTaskOpen(false);
              }}
              className="fixed bottom-2 right-32"
            >
              <img src="/chat-close.png" alt="task" />
            </div>
            <div
              onClick={() => {
                setChatOpen(false);
                setTaskOpen(false);
                setChatRoom(0);
                setShowMenu(false);
              }}
              className="fixed bottom-3 right-7 bg-primaryGray rounded-full"
            >
              <img src="/task-open.png" className="pl-3" alt="chat" />
            </div>
          </>
        ) : (
          <>
            {showMenu ? (
              <>
                <div
                  onClick={() => {
                    setChatOpen(false);
                    setChatRoom(0);
                    setTaskOpen(true);
                  }}
                  className="fixed bottom-3 right-52"
                >
                  <p className="pb-2">Task</p>
                  <img src="/task-close.png" alt="task" />
                </div>
                <div
                  onClick={() => {
                    setChatOpen(true);
                    setTaskOpen(false);
                  }}
                  className="fixed bottom-3 right-32"
                >
                  <p className="pb-2">Inbox</p>
                  <img src="/chat-close.png" alt="chat" />
                </div>
              </>
            ) : null}
            <div
              onClick={() => setShowMenu((current) => !current)}
              className="fixed bottom-3 right-7"
            >
              <img src="/menu.png" alt="menu" />
            </div>
          </>
        )}
      </div>
    </Layouts>
  );
}

export default App;
