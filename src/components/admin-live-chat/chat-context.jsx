import fetch from "isomorphic-unfetch";
import { data } from "@/json/chat";
import url from "@/utils/globals";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
const {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} = require("react");

const chatContext = createContext();

export const useChatContext = () => {
  return useContext(chatContext);
};

export const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState(null);
  const [socketData, setSocketData] = useState(null);
  const [roomId, setRoomId] = useState("");

  const socket = useMemo(() => io(url.PROFECTA_PROFILE_URL), []);

  function convertMySQLDateTimeToDDMMYYYY(mysqlDateTime) {
    const dateObject = new Date(mysqlDateTime);

    // Mendapatkan tanggal, bulan, dan tahun dari objek Date
    const tanggal = dateObject.getDate();
    const bulan = dateObject.getMonth() + 1; // Perlu ditambahkan 1 karena indeks bulan dimulai dari 0
    const tahun = dateObject.getFullYear();

    // Menggabungkan tanggal, bulan, dan tahun menjadi format yang diinginkan (d-m-Y)
    const formattedDate = `${tanggal < 10 ? "0" : ""}${tanggal}-${
      bulan < 10 ? "0" : ""
    }${bulan}-${tahun}`;
    return formattedDate;
  }

  function convertMySQLDateTimeToHourMinute(mysqlDateTime) {
    const dateObject = new Date(mysqlDateTime);

    // Mendapatkan jam, menit, dan detik dari objek Date
    const jam = dateObject.getHours();
    const menit = dateObject.getMinutes();
    const detik = dateObject.getSeconds();

    // Mengonversi jam menjadi format 12 jam (AM/PM)
    const jam12Jam = jam % 12 || 12; // Menggunakan 12 jam jika jam adalah 0 atau 12
    const ampm = jam < 12 ? "AM" : "PM";

    // Menggabungkan jam, menit, detik, dan AM/PM menjadi format yang diinginkan (H:i:sa)
    const formattedTime = `${jam12Jam}:${
      menit < 10 ? "0" : ""
    }${menit} ${ampm}`;

    return formattedTime;
  }

  function getDateToday() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  const getChat = async () => {
    const response = await fetch(
      `/api/live_chat/get_chat/${getDateToday()}/${getDateToday()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setChatData(data);
    });
  };

  const read_all_messages = async (uniqid) => {
    const response = await fetch(`/api/live_chat/read_all_messages/${uniqid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getChat();
    }, 1000); // Misalnya, refresh data setiap 5 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, []);

  useEffect(() => {
    setSocketData(socket);
    return () => {
      socket.disconnect(); // Memastikan socket terputus saat komponen di-unmount
    };
  }, [socket]);

  return (
    <chatContext.Provider
      value={{
        chatData,
        setChatData,
        convertMySQLDateTimeToDDMMYYYY,
        convertMySQLDateTimeToHourMinute,
        getDateToday,
        socketData,
        setSocketData,
        roomId,
        setRoomId,
        read_all_messages,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
