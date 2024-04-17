import {
  FaCheck,
  FaCheckDouble,
  FaCircleMinus,
  FaCircleXmark,
  FaPaperPlane,
} from "react-icons/fa6";
import Image from "next/image";
import { useChatContext } from "./chat-context";
import { useEffect, useState } from "react";

const ChatArea = () => {
  const {
    senderData,
    isHide,
    btnChatHandler,
    convertMySQLDateTimeToHourMinute,
    convertMySQLDateTimeToDDMMYYYY,
    roomId,
    socketData,
  } = useChatContext();
  const data = {
    id: "1",
    uniqid: roomId,
    name: senderData.name,
    email: senderData.email,
    messages: [
      {
        message: `Hai, ${senderData.name}! Selamat datang di Profecta Live Chat. Ada yang bisa dibantu?`,
        datetime: generateDatetime(),
        role: "Receiver",
        isReaded: true,
      },
    ],
  };

  const [chatData, setChatData] = useState(null);

  const getchat = async () => {
    const response = await fetch(`/api/live_chat/get_current_chat/${roomId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setChatData(data);
    });
  };

  function generateDatetime() {
    let currentDate = new Date();

    // Ambil tanggal, bulan, dan tahun dari objek Date
    let day = String(currentDate.getDate()).padStart(2, "0");
    let month = String(currentDate.getMonth() + 1).padStart(2, "0");
    let year = String(currentDate.getFullYear());

    // Gabungkan tanggal, bulan, dan tahun dalam format "YYYY-MM-DD"
    let formattedDate = `${year}-${month}-${day}`;

    // Ambil jam, menit, dan detik dari objek Date
    let hours = String(currentDate.getHours()).padStart(2, "0");
    let minutes = String(currentDate.getMinutes()).padStart(2, "0");
    let seconds = String(currentDate.getSeconds()).padStart(2, "0");

    // Gabungkan jam, menit, dan detik dalam format "HH:mm:ss"
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedDate + " " + formattedTime;
  }

  const sendMessageHandler = (e) => {
    e.preventDefault();

    const newMessage = {
      name: senderData.name,
      email: senderData.email,
      message: e.target.message.value, // Ambil nilai dari textarea
      datetime: generateDatetime(),
      role: "Sender",
      isReaded: false,
      uniqid: roomId,
    };

    const sendMessage = async () => {
      try {
        const response = await fetch("/api/live_chat/send_message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        });

        if (!response.ok) {
          // console.log(newMessage);
          throw new Error(`Failed to send message. Status: ${response.status}`);
        }
        return response.json();
      } catch (error) {
        console.error("Error sending message: ", error.message);
        throw error;
      }
    };
    sendMessage();
    socketData.emit("send_msg", newMessage);

    setChatData({
      ...chatData,
      data: [...chatData.data, newMessage],
    });
    e.target.message.value = "";
  };

  useEffect(() => {
    getchat();
  }, [roomId, getchat]);

  useEffect(() => {
    socketData.on("receive_msg", (data) => {
      setChatData((prev) => [...prev, data]);
    });
  }, [chatData]);
  return (
    <div
      className="card border-dark shadow"
      style={{ maxWidth: "23rem", height: "85vh" }}
      hidden={isHide ? false : true}
    >
      <div className="card-header bg-white rounded-pill border-success">
        <div className="row justify-content-between ">
          <div className="col-9 my-auto text-success fw-bold">
            Profecta Live Chat Room ({roomId})
          </div>
          <a href="#!" className="col-1" onClick={btnChatHandler}>
            <FaCircleMinus className="text-info fs-4" />
          </a>
          <div className="col-2">
            <FaCircleXmark className="text-danger fs-4" />
          </div>
        </div>
      </div>
      <div className="card-body overflow-auto">
        {chatData
          ? chatData.data.map((item, i) => (
              <div
                key={i}
                className={`d-flex ${
                  item.role != "Receiver" ? "flex-row-reverse" : "flex-row"
                } mb-2 `}
              >
                <Image
                  src="/favicon.png"
                  width={30}
                  height={30}
                  className={`rounded-circle float-start ${
                    item.role != "Receiver" ? "ms-1" : "me-1"
                  } `}
                  alt="logo"
                />
                <div
                  className={`${
                    item.role != "Receiver"
                      ? "bg-dark rounded-start"
                      : "bg-success rounded-end"
                  } bg-opacity-10 p-2 lh-sm`}
                  style={{ minWidth: "70%", maxWidth: "80%", fontSize: "10pt" }}
                >
                  <div className="">
                    <h6>{item.role == "Receiver" ? "Admin" : data.name}</h6>
                  </div>
                  <div>{item.message}</div>
                  <div className="row justify-content-between mt-2">
                    <div className="col-4">
                      <small className="" style={{ fontSize: "7pt" }}>
                        {convertMySQLDateTimeToHourMinute(item.createdAt)}
                      </small>
                    </div>
                    <div className="col-4">
                      <small className="" style={{ fontSize: "7pt" }}>
                        {convertMySQLDateTimeToDDMMYYYY(item.createdAt)}
                      </small>
                    </div>
                  </div>
                </div>
                {item.role != "Receiver" ? (
                  <div className={`me-1 align-self-end`}>
                    {item.isReaded ? <FaCheckDouble /> : <FaCheck />}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))
          : ""}
      </div>
      <div className="card-footer bg-transparent border-none">
        <form onSubmit={sendMessageHandler}>
          <div className="row justify-content-center gx-2">
            <div className="col-10 my-auto">
              <textarea
                className="form-control rounded"
                style={{
                  border: "none",
                  fontSize: "10pt",
                  overflow: "auto",
                  resize: "none",
                }}
                rows={2}
                placeholder="Type here..."
                name="message"
              ></textarea>
            </div>
            <div className="col-2 my-auto">
              <button type="submit" className="btn btn-success rounded-circle">
                <FaPaperPlane className="mb-1" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
