import OptionsModal from "../../components/ModalOptions";
import ReplyModal from "../../components/ModalReply";
import { MessageType } from "../../utility/dataChat";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const EachChat = ({
  i,
  currentDate,
  currentReadStatus,
  messageModal,
  setMessageModal,
  deleteMessage,
  setEditedData,
  setNewMessage,
  setReplyMessage,
  setReplyModal,
  replyModal,
}: {
  i: MessageType;
  currentDate: string;
  currentReadStatus: boolean;
  deleteMessage: (id: number) => void;
  setMessageModal: React.Dispatch<React.SetStateAction<number>>;
  setEditedData: React.Dispatch<React.SetStateAction<MessageType | null>>;
  messageModal: number;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  setReplyModal: React.Dispatch<React.SetStateAction<number>>;
  replyModal: number;
  setReplyMessage: React.Dispatch<
    React.SetStateAction<{
      name: string;
      message: string;
    }>
  >;
}) => {
  return (
    <>
      <div className="pb-2">
        {i.date !== currentDate ? (
          <div className="flex items-center gap-3 py-3">
            <hr className="w-full border" />
            <p className="whitespace-nowrap font-medium">{i.date}</p>
            <hr className="w-full border" />
          </div>
        ) : null}

        {i.name !== "You" ? (
          <div>
            <p
              className={
                i.userID % 2 === 0
                  ? "text-stickersChoco"
                  : i.userID % 3 === 0
                  ? "text-stickersGreen"
                  : "text-stickersPurple"
              }
            >
              {i.name}
            </p>

            <div className="flex gap-2">
              <div
                className={
                  (i.userID % 2 === 0
                    ? "rounded-md p-2 bg-stickersChoco"
                    : i.userID % 3 === 0
                    ? "rounded-md p-2 bg-stickersGreen"
                    : "rounded-md p-2 bg-stickersPurple") + " max-w-[75%]"
                }
              >
                <p>{i.message}</p>
                <p className="text-xs pt-1">{i.time}</p>
              </div>
              <button
                className="hover:scale-150"
                onClick={() => setReplyModal(i.id)}
              >
                <BiDotsHorizontalRounded />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <p
              className={
                (i.userID % 2 === 0
                  ? "text-stickersChoco"
                  : i.userID % 3 === 0
                  ? "text-stickersGreen"
                  : "text-stickersPurple") + " text-right"
              }
            >
              {i.name}
            </p>
            {i.reply ? (
              <div className="flex justify-end pb-1">
                <div className={"rounded-md p-2 bg-primaryWhite max-w-[75%]"}>
                  <p>{i.reply}</p>
                </div>
              </div>
            ) : null}
            <div className="flex gap-2 justify-end">
              <button
                className="hover:scale-150"
                onClick={() => setMessageModal(i.id)}
              >
                <BiDotsHorizontalRounded />
              </button>
              <div
                className={
                  (i.userID % 2 === 0
                    ? "rounded-md p-2 bg-stickersChoco"
                    : i.userID % 3 === 0
                    ? "rounded-md p-2 bg-stickersGreen"
                    : "rounded-md p-2 bg-stickersPurple") + " max-w-[75%]"
                }
              >
                <p>{i.message}</p>
                <p className="text-xs pt-1">{i.time}</p>
              </div>
            </div>
            {messageModal === i.id ? <div></div> : null}
          </div>
        )}

        {currentReadStatus !== undefined &&
        i.readStatus !== currentReadStatus ? (
          <div
            id="new-message"
            className="flex items-center text-indicatorRed gap-3 py-3"
          >
            <hr className="w-full border border-indicatorRed" />
            <p className="whitespace-nowrap font-medium">New Message </p>
            <hr className="w-full border border-indicatorRed" />
          </div>
        ) : null}
      </div>
      {messageModal === i.id ? (
        <OptionsModal
          key={i.id}
          id={i.id}
          deleteMessage={deleteMessage}
          setOptionModal={setMessageModal}
          setEditedData={setEditedData}
          setNewMessage={setNewMessage}
          message={i}
        />
      ) : null}
      {replyModal === i.id ? (
        <ReplyModal
          message={i}
          setReplyMessage={setReplyMessage}
          setOptionModal={setReplyModal}
        />
      ) : null}
    </>
  );
};

export default EachChat;
