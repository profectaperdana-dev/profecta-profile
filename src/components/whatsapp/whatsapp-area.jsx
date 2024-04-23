import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import url from "@/utils/globals";

const WhatsappArea = () => {
  //   const { isHide, btnChatHandler } = useChatContext();
  const [isHide, setIsHide] = useState(false);
  const [contactPhone, setContactPhone] = useState(null);

  const getareaandphone = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getcontact/areaandphone`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      //   console.log(data);
      setContactPhone(data);
    });
  };

  function replaceZeroWithCountryCode(number) {
    // Cek apakah nomor telepon dimulai dengan angka 0
    if (number.startsWith("0")) {
      // Ganti angka 0 di awal dengan kode negara 62
      return "62" + number.slice(1);
    }
    // Jika tidak dimulai dengan angka 0, kembalikan nomor telepon tanpa perubahan
    return number;
  }

  useEffect(() => {
    getareaandphone().then(() => {
      console.log(contactPhone);
    });
  }, []);

  return (
    <div
      className={`position-fixed bottom-0 start-0 ${
        isHide ? "m-3" : "my-3 mx-3"
      }`}
      style={{ zIndex: 3, maxHeight: "85vh" }}
    >
      <div className="btn-group dropup">
        {" "}
        <button
          className="btn btn-success rounded-pill p-2 fw-bold"
          data-bs-toggle="dropdown"
          //   onClick={``}
          hidden={isHide ? true : false}
        >
          <FaWhatsapp className="fs-1" />
          {/* <FaRegCommentDots className="fs-3" /> */}
        </button>
        <ul class="dropdown-menu">
          {contactPhone
            ? contactPhone?.data?.map((item, i) => (
                <li key={i}>
                  <a
                    class="dropdown-item"
                    target="_blank"
                    href={`https://wa.me/${replaceZeroWithCountryCode(
                      item.phone_1
                    )}`}
                  >
                    <FaWhatsapp /> {item.area_by.name}
                  </a>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default WhatsappArea;
