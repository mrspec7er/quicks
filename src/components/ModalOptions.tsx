import { MessageType } from "../utility/dataChat";

interface OptionsModalProps {
  setOptionModal: React.Dispatch<React.SetStateAction<number>>;
  deleteMessage: (id: number) => void;
  id: number;
  setEditedData: React.Dispatch<React.SetStateAction<MessageType | null>>;
  message: MessageType;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
}

const OptionsModal = ({
  setOptionModal,
  deleteMessage,
  setEditedData,
  setNewMessage,
  id,
  message,
}: OptionsModalProps) => {
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
            onClick={() => {
              setEditedData(message);
              setNewMessage(message.message);
            }}
            className="px-5 rounded text-primaryBlue w-full h-full text-start hover:bg-primaryWhite py-3"
            type="button"
          >
            Edit
          </button>
          <hr className="border border-primaryWhite" />

          <button
            onClick={() => deleteMessage(id)}
            className="px-5 rounded text-indicatorRed w-full h-full text-start hover:bg-primaryWhite py-3"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsModal;
