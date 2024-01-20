import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { useChatContext } from "./chat-context";
const ChatCard = ({ children }) => {
  const { isHide, btnChatHandler } = useChatContext();
  return (
    <div
      className={`position-fixed bottom-0 start-0 ${
        isHide ? "m-3" : "my-3 mx-3"
      }`}
      style={{ zIndex: 3, maxHeight: "85vh" }}
    >
      {children}
      <button
        className="btn btn-success rounded-pill p-2 fw-bold"
        onClick={btnChatHandler}
        hidden={isHide ? true : false}
      >
        <FaRegCommentDots className="fs-3" /> Chat with us
      </button>
    </div>
  );
};

export default ChatCard;
