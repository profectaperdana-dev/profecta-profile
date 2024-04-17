import url from "@/utils/globals";
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
  const [senderData, setSenderData] = useState({
    name: "",
    email: "",
  });
  const [roomId, setRoomId] = useState("");
  const [socketData, setSocketData] = useState(null);
  const [isHide, setIsHide] = useState(false);

  const socket = useMemo(() => io(url.PROFECTA_PROFILE_URL), []);

  const btnChatHandler = (e) => {
    e.preventDefault();
    setIsHide(!isHide);
  };

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

  useEffect(() => {
    setSocketData(socket);
    return () => {
      socket.disconnect(); // Memastikan socket terputus saat komponen di-unmount
    };
  }, [socket]);
  return (
    <chatContext.Provider
      value={{
        senderData,
        setSenderData,
        isHide,
        setIsHide,
        btnChatHandler,
        convertMySQLDateTimeToDDMMYYYY,
        convertMySQLDateTimeToHourMinute,
        roomId,
        setRoomId,
        socketData,
        setSocketData,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
