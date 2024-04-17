import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeadset } from "react-icons/fa6";
import { useChatContext } from "./chat-context";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const {
    chatData,
    convertMySQLDateTimeToDDMMYYYY,
    convertMySQLDateTimeToHourMinute,
    setChatData,
    socketData,
    setRoomId,
    read_all_messages,
  } = useChatContext();

  const getMessagesHandler = (index) => {
    setActiveLink(index);
    socketData.emit("join_room", index);
    setRoomId(index);
    read_all_messages(index);
  };

  function getLastMessageTime(chat) {
    if (chat.live_chat_message && chat.live_chat_message.length > 0) {
      const lastMessage =
        chat.live_chat_message[chat.live_chat_message.length - 1];
      return new Date(lastMessage.createdAt);
    }
    // Jika chat tidak memiliki messages, kembalikan tanggal minimum
    return new Date(Number.MIN_VALUE);
  }

  return (
    <div>
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white  h-100 align-content-stretch "
        style={{ width: "24rem" }}
      >
        <div
          className="d-flex align-items-center text-white flex-shrink-0 p-3 text-decoration-none border-bottom"
          style={{ backgroundColor: "#84b544" }}
        >
          <span className="fs-5 fw-semibold text-center">
            <div>
              <FaHeadset className="display-2 mb-2" />
            </div>{" "}
            Hello, <span className="text-white">Jaygarcia Saturn</span>!
            <div className="my-2">
              Welcome to Profecta Live Chat Administrator{" "}
            </div>
          </span>
        </div>
        {/* <div>{getDateToday()}</div> */}
        <div className="list-group list-group-flush border-bottom scrollarea">
          {chatData
            ? chatData.data
                .sort((a, b) => {
                  const timeA = getLastMessageTime(a);
                  const timeB = getLastMessageTime(b);

                  return timeB - timeA;
                })
                .map((item, i) => (
                  <Link
                    key={i}
                    href={`/admin-live-chat/${item.uniqid}`}
                    className="list-group-item list-group-item-action py-3 lh-sm"
                    aria-current="true"
                    style={
                      activeLink === item.uniqid
                        ? { backgroundColor: "#f2f7ec", color: "black" }
                        : {}
                    }
                    onClick={() => getMessagesHandler(item.uniqid)}
                  >
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <strong className="mb-1">{item.name}</strong>
                      <small style={{ fontSize: "9pt" }}>
                        {convertMySQLDateTimeToDDMMYYYY(
                          item.live_chat_message[0] != undefined
                            ? item.live_chat_message[0]["createdAt"]
                            : ""
                        )}
                        ,{" "}
                        {convertMySQLDateTimeToHourMinute(
                          item.live_chat_message[0] != undefined
                            ? item.live_chat_message[0]["createdAt"]
                            : ""
                        )}
                      </small>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-10">
                        <div className="col-10 mb-1 small text-truncate">
                          {item.live_chat_message[0] != undefined
                            ? item.live_chat_message[0]["message"]
                            : ""}{" "}
                        </div>
                      </div>
                      <div className="col-2">
                        {item.live_chat_message.filter(
                          (message) => !message.isReaded
                        ).length > 0 ? (
                          <span className="badge text-bg-danger">new</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </Link>
                ))
            : "No chat today"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
