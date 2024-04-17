import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCheck, FaCheckDouble, FaPaperPlane } from "react-icons/fa6";
import { data } from "@/json/chat";
import { useChatContext } from "./chat-context";

const ChatArea = () => {
  const router = useRouter();
  const [currentChat, setCurrentChat] = useState(null);
  const {
    chatData,
    setChatData,
    convertMySQLDateTimeToHourMinute,
    convertMySQLDateTimeToDDMMYYYY,
    socketData,
    roomId,
    read_all_messages,
  } = useChatContext();

  const getcurrentchat = async () => {
    const response = await fetch(
      `/api/live_chat/get_current_chat/${router.query.uniqid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setCurrentChat(data);
    });
  };

  useEffect(() => {
    getcurrentchat();
  }, [router.query.uniqid, getcurrentchat]);

  useEffect(() => {
    socketData?.on("receive_msg", (data) => {
      setCurrentChat((prev) => [...prev, data]);
      console.log(data);
    });
  }, [currentChat]);

  // useEffect(() => {}, [socketData]);

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
      role: "Receiver",
      isReaded: true,
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
        await socketData.emit("send_msg", newMessage);
        return response.json();
      } catch (error) {
        console.error("Error sending message: ", error.message);
        throw error;
      }
    };
    sendMessage().then(() => {
      socketData.emit("send_msg", newMessage);
    });

    setCurrentChat({
      ...currentChat,
      data: [...currentChat.data, newMessage],
    });

    // setChatData((prevChatData) =>
    //   prevChatData.data.map((item) =>
    //     item.uniqid == router.query.uniqid
    //       ? {
    //           ...item,
    //           live_chat_message: [...item.live_chat_message, newMessage],
    //         }
    //       : item
    //   )
    // );

    // console.log(chatData);
    e.target.message.value = "";
  };

  const readMessageHandler = () => {
    read_all_messages(router.query.uniqid);
  };

  return (
    <div>
      <div
        className="d-flex align-items-start w-100 flex-column mb-3"
        style={{ height: "100vh" }}
      >
        {currentChat ? (
          <>
            <div className="p-2 bg-light w-100 text-dark shadow-sm rounded">
              {currentChat?.room?.name} ({currentChat.room?.email})
            </div>
            <div className="p-2 overflow-auto w-100">
              {" "}
              {currentChat.data.map((item, i) => (
                <div
                  key={i}
                  className={`d-flex  ${
                    item.role != "Receiver" ? "flex-row" : "flex-row-reverse"
                  } mb-2 `}
                >
                  <div
                    className={`${
                      item.role != "Receiver"
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
                        {item.role == "Receiver"
                          ? "You"
                          : currentChat.room?.name}
                      </h6>
                    </div>
                    <div>{item.message}</div>
                    <div
                      className="row justify-content-between mt-2"
                      style={{ minWidth: "12rem" }}
                    >
                      <div className="col-5 align-self-center">
                        <small className="" style={{ fontSize: "7pt" }}>
                          {convertMySQLDateTimeToHourMinute(item.createdAt)}
                        </small>
                      </div>
                      <div className="col-3 text-end align-self-center">
                        <small className="text-end" style={{ fontSize: "7pt" }}>
                          {convertMySQLDateTimeToDDMMYYYY(item.createdAt)}
                        </small>
                      </div>
                    </div>
                  </div>

                  {item.role == "Receiver" ? (
                    <div className={`me-1 align-self-end`}>
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
                      onChange={readMessageHandler}
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
