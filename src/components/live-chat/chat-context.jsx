const { createContext, useContext, useState, useEffect } = require("react");

const chatContext = createContext();

export const useChatContext = () => {
  return useContext(chatContext);
};

export const ChatProvider = ({ children }) => {
  const [senderData, setSenderData] = useState({
    name: "",
    email: "",
  });

  const [isHide, setIsHide] = useState(false);

  const btnChatHandler = (e) => {
    e.preventDefault();
    setIsHide(!isHide);
  };

  function convertMySQLDateTimeToDDMMYYYY(mysqlDateTime) {
    // Misalnya, mysqlDateTime berisi "2023-01-15 12:30:00"

    // Bagi tanggal dan waktu
    const [datePart, timePart] = mysqlDateTime.split(" ");

    // Bagi komponen tanggal
    const [year, month, day] = datePart.split("-");

    // Hasilkan string dengan format "DD-MM-YYYY"
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  function convertMySQLDateTimeToHourMinute(mysqlDateTime) {
    // Misalnya, mysqlDateTime berisi "2023-01-15 12:30:00"

    // Bagi tanggal dan waktu
    const [datePart, timePart] = mysqlDateTime.split(" ");

    // Bagi komponen waktu
    const [hours, minutes] = timePart.split(":");

    // Hasilkan string dengan format "hour:minute"
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  }

  useEffect(() => {}, [senderData]);
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
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
