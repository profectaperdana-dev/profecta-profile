import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCheck, FaCheckDouble, FaPaperPlane } from "react-icons/fa6";
import { data } from "@/json/chat";
import { useChatContext } from "./chat-context";

const ChatArea = () => {
  const router = useRouter();
  const [currentChat, setCurrentChat] = useState({});
  const {
    chatData,
    setChatData,
    convertMySQLDateTimeToHourMinute,
    convertMySQLDateTimeToDDMMYYYY,
  } = useChatContext();

  useEffect(() => {
    const getCurrentChat = chatData.find(
      (item) => item.uniqid == router.query.uniqid
    );
    setCurrentChat(getCurrentChat);
  }, [router]);

  function generateTimeOrDate(format) {
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
      message: e.target.message.value, // Ambil nilai dari textarea
      datetime: generateTimeOrDate(),
      status: "receiver",
      isReaded: true,
    };

    setCurrentChat({
      ...currentChat,
      messages: [...currentChat.messages, newMessage],
    });

    setChatData((prevChatData) =>
      prevChatData.map((item) =>
        item.uniqid == router.query.uniqid
          ? { ...item, messages: [...item.messages, newMessage] }
          : item
      )
    );

    // console.log(chatData);
    e.target.message.value = "";
  };

  return (
    <div>
      <div
        className="d-flex align-items-start w-100 flex-column mb-3"
        style={{ height: "100vh" }}
      >
        {currentChat && Object.keys(currentChat).length > 0 ? (
          <>
            <div className="p-2 bg-light w-100 text-dark shadow-sm rounded">
              {currentChat.name} ({currentChat.email})
            </div>
            <div className="p-2 overflow-auto w-100">
              {" "}
              {currentChat.messages.map((item, i) => (
                <div
                  key={i}
                  className={`d-flex  ${
                    item.status === "receiver" ? "flex-row" : "flex-row-reverse"
                  } mb-2 `}
                >
                  <div
                    className={`${
                      item.status === "receiver"
                        ? "bg-dark rounded-end"
                        : "bg-success rounded-start"
                    }  bg-opacity-10 p-2 lh-sm`}
                    style={{
                      maxWidth: "35rem",
                      minWidth: "20rem",
                      fontSize: "10pt",
                    }}
                  >
                    <div className="">
                      <h6>
                        {item.status === "receiver" ? "You" : currentChat.name}
                      </h6>
                    </div>
                    <div>{item.message}</div>
                    <div
                      className="row justify-content-between mt-2"
                      style={{ minWidth: "12rem" }}
                    >
                      <div className="col-5 align-self-center">
                        <small className="" style={{ fontSize: "7pt" }}>
                          {convertMySQLDateTimeToHourMinute(item.datetime)}
                        </small>
                      </div>
                      <div className="col-3 text-end align-self-center">
                        <small className="text-end" style={{ fontSize: "7pt" }}>
                          {convertMySQLDateTimeToDDMMYYYY(item.datetime)}
                        </small>
                      </div>
                    </div>
                  </div>

                  {item.status === "receiver" ? (
                    <div className={`ms-1 align-self-end`}>
                      {item.isReaded ? <FaCheckDouble /> : <FaCheck />}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto p-2 w-100">
              <form onSubmit={sendMessageHandler}>
                <div className="row justify-content-center w-100 gx-2">
                  <div className="col-11 my-auto">
                    <textarea
                      className="form-control rounded"
                      style={{
                        border: "none",
                        fontSize: "12pt",
                        overflow: "auto",
                        resize: "none",
                      }}
                      rows={2}
                      placeholder="Type here..."
                      name="message"
                    ></textarea>
                  </div>
                  <div className="col-1 my-auto">
                    <button
                      type="submit"
                      className="btn btn-success rounded-circle"
                    >
                      <FaPaperPlane className="mb-1" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChatArea;
