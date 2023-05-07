import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { groupData } from "../../utility/dataChat";

const Chat = ({
  setChatOpen,
  setChatRoom,
}: {
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChatRoom: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [groupList, setGroupList] = useState(groupData);

  function handleSearching(keyword: string) {
    if (keyword) {
      setGroupList((data) =>
        data.filter((i) => i.name.toLowerCase().includes(keyword))
      );
    } else {
      setGroupList(groupData);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white w-[40%] h-[65vh] fixed right-7 bottom-32 rounded">
      <div className="mx-7 relative pt-3">
        <form>
          <div className="relative">
            <input
              onChange={(e) => handleSearching(e.target.value)}
              type="text"
              id="default-search"
              className="block w-full p-1 px-10 text-sm border placeholder-primaryBlack border-black rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />

            <div className="absolute right-10 bottom-1.5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </form>
      </div>

      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <Loading />
          <p className="mb-7 pt-3">Loading Chats..</p>
        </div>
      ) : (
        <div>
          {groupList.map((i) => (
            <div
              key={i.id}
              onClick={() => {
                setChatOpen(false);
                setChatRoom(i.id);
              }}
              className="w-full px-7 hover:bg-primaryWhite cursor-pointer"
            >
              <div className="flex gap-3 pt-5 pb-7 relative">
                <img className="h-12" src={i.profile} alt="group" />
                <div>
                  <p className="text-primaryBlue font-medium">{i.name}</p>
                  <p className="font-medium text-sm">{i.sender}</p>
                  <p className="text-sm">{i.lastMessage}</p>
                </div>
                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(i.date))}
                </p>
                {i.newMessage ? (
                  <img
                    className="w-2 h-2 absolute right-0 bottom-7"
                    src="/notif.png"
                    alt="notif"
                  />
                ) : null}
              </div>
              <hr className="border border-primaryWhite" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
