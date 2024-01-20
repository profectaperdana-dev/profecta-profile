import {
  FaCheck,
  FaCheckDouble,
  FaCircleMinus,
  FaCircleXmark,
  FaPaperPlane,
} from "react-icons/fa6";
import Image from "next/image";
import { useChatContext } from "./chat-context";
import { useState } from "react";

const ChatArea = () => {
  const {
    senderData,
    isHide,
    btnChatHandler,
    convertMySQLDateTimeToHourMinute,
    convertMySQLDateTimeToDDMMYYYY,
  } = useChatContext();
  const data = {
    id: "1",
    uniqid: "212",
    name: senderData.name,
    email: senderData.email,
    messages: [
      {
        message: `Hai, ${senderData.name}! Selamat datang di Profecta Live Chat. Ada yang bisa dibantu?`,
        datetime: generateDatetime(),
        role: "receiver",
        isReaded: true,
      },
    ],
  };

  const [chatData, setChatData] = useState(data);

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
      role: "sender",
      isReaded: false,
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
    sendMessage().then((data) => {
      alert(data.message);
    });
    setChatData({
      ...chatData,
      messages: [...chatData.messages, newMessage],
    });
    e.target.message.value = "";
  };
  return (
    <div
      className="card border-dark shadow"
      style={{ maxWidth: "23rem", height: "85vh" }}
      hidden={isHide ? false : true}
    >
      <div className="card-header bg-white rounded-pill border-success">
        <div className="row justify-content-between ">
          <div className="col-9 my-auto text-success fw-bold">
            Profecta Live Chat
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
        {chatData.messages.map((item, i) => (
          <div
            key={i}
            className={`d-flex ${
              item.role == "receiver" ? "flex-row-reverse" : "flex-row"
            } mb-2 `}
          >
            <Image
              src="/favicon.png"
              width={30}
              height={30}
              className={`rounded-circle float-start ${
                item.role == "receiver" ? "ms-1" : "me-1"
              } `}
              alt="logo"
            />
            <div
              className={`${
                item.role == "receiver"
                  ? "bg-dark rounded-start"
                  : "bg-success rounded-end"
              } bg-opacity-10 p-2 lh-sm`}
              style={{ maxWidth: "70%", fontSize: "10pt" }}
            >
              <div className="">
                <h6>{item.role == "receiver" ? "Admin" : data.name}</h6>
              </div>
              <div>{item.message}</div>
              <div className="row justify-content-between mt-2">
                <div className="col-4">
                  <small className="" style={{ fontSize: "7pt" }}>
                    {convertMySQLDateTimeToHourMinute(item.datetime)}
                  </small>
                </div>
                <div className="col-4">
                  <small className="" style={{ fontSize: "7pt" }}>
                    {convertMySQLDateTimeToDDMMYYYY(item.datetime)}
                  </small>
                </div>
              </div>
            </div>
            {item.role != "receiver" ? (
              <div className={`ms-1 align-self-end`}>
                {item.isReaded ? <FaCheckDouble /> : <FaCheck />}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
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
