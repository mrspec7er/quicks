import { MessageType } from "../utility/dataChat";

interface ReplyModalProps {
  setOptionModal: React.Dispatch<React.SetStateAction<number>>;
  message: MessageType;
  setReplyMessage: React.Dispatch<
    React.SetStateAction<{
      name: string;
      message: string;
    }>
  >;
}

const ReplyModal = ({
  setOptionModal,
  message,
  setReplyMessage,
}: ReplyModalProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      onClick={() => {
        setOptionModal(0);
      }}
      className="flex justify-center absolute top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-full w-full"
    >
      <div
        onClick={() => console.log("Unreset ID")}
        className="relative h-max top-1/4 flex justify-center"
      >
        <div className="fixed top-[45vh] border-2 border-primaryWhite bg-white w-32 rounded-lg shadow-lg">
          <button
            className="px-5 rounded text-primaryBlue w-full h-full text-start hover:bg-primaryWhite py-3"
            type="button"
          >
            Share
          </button>
          <hr className="border border-primaryWhite" />

          <button
            onClick={() =>
              setReplyMessage({ message: message.message, name: message.name })
            }
            className="px-5 rounded text-indicatorRed w-full h-full text-start hover:bg-primaryWhite py-3"
            type="button"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
