const { createContext, useContext, useState, useEffect } = require("react");
import url from "@/utils/globals";

const homeContext = createContext();

export const useHomeContext = () => {
  return useContext(homeContext);
};

export const HomeProvider = ({ children }) => {
  const [homeData, setHomeData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [recentBlogData, setRecentBlogData] = useState(null);

  const gethome = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/gethomepage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setHomeData(data);
    });
  };

  const getportfolio = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getportfolio`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setPortfolioData(data);
    });
  };

  const getcontact = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getcontact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setContactData(data);
    });
  };

  const getrecentblog = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getblog/recent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setRecentBlogData(data);
    });
  };

  function replaceZeroWithCountryCode(number = "") {
    // Cek apakah nomor telepon dimulai dengan angka 0
    if (number.startsWith("0")) {
      // Ganti angka 0 di awal dengan kode negara 62
      return "62" + number.slice(1);
    }
    // Jika tidak dimulai dengan angka 0, kembalikan nomor telepon tanpa perubahan
    return number;
  }

  useEffect(() => {
    gethome();
    getportfolio();
    getcontact();
    getrecentblog();
  }, []);
  return (
    <homeContext.Provider
      value={{
        homeData,
        url,
        portfolioData,
        contactData,
        recentBlogData,
        replaceZeroWithCountryCode,
      }}
    >
      {children}
    </homeContext.Provider>
  );
};
