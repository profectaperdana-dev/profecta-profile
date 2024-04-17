import {
  FaCircleMinus,
  FaCircleXmark,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa6";
import { useChatContext } from "./chat-context";
import { io } from "socket.io-client";
import url from "@/utils/globals";
import { useEffect, useMemo } from "react";

const SenderInfo = ({ setIsLogged }) => {
  const {
    senderData,
    setSenderData,
    isHide,
    btnChatHandler,
    setRoomId,
    setSocketData,
    socketData,
  } = useChatContext();

  const senderDataHandler = (e) => {
    setSenderData({ ...senderData, [e.target.name]: [e.target.value] });
  };

  const senderSubmitHandler = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let isValidEmail = emailRegex.test(senderData.email);
    if (senderData.name != "" && senderData.email != "" && isValidEmail) {
      const create_room = async () => {
        try {
          const data = {
            name: senderData.name,
            email: senderData.email,
          };

          const response = await fetch("/api/live_chat/create_room", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error(
              `Failed to send message. Status: ${response.status}`
            );
          }

          return response.json();
        } catch (error) {
          console.error("Error sending message: ", error.message);
          throw error;
        }
      };
      create_room().then((data) => {
        alert(data.message);
        setRoomId(data.roomId);
        setIsLogged(true);
        socketData.emit("join_room", data.roomId);
      });
    }
  };

  return (
    <div
      className="card border-dark shadow"
      style={{ maxWidth: "23rem", height: "85vh" }}
      hidden={isHide ? false : true}
    >
      <div className="card-body p-0">
        <div
          className="text-center pt-2 pb-4 px-3"
          style={{ backgroundColor: "#84b544" }}
        >
          <div className="row justify-content-end ">
            <a href="#!" className="col-1" onClick={btnChatHandler}>
              <FaCircleMinus className="text-info fs-4" />
            </a>
            <div className="col-2">
              <FaCircleXmark className="text-danger fs-4" />
            </div>
          </div>
          <div>
            <div className="mb-3">
              <FaHeadset className="display-1 text-white mx-3" />
              <FaCommentDots className="display-1 text-white mx-3" />
            </div>
            <div className="fw-bold display-6 text-white">
              Welcome to Profecta Live Chat
            </div>
          </div>
        </div>
        <div className="p-4">
          <form onSubmit={senderSubmitHandler}>
            <div className="mb-3">
              <label className="form-label">What is your name? *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type your name..."
                name="name"
                required
                onChange={senderDataHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">We need to know your email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Type your email..."
                name="email"
                required
                onChange={senderDataHandler}
              />
            </div>
            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "#84b544" }}
            >
              Let's chat!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SenderInfo;
