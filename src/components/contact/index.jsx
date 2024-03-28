import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React, { useEffect, useState } from "react";
import ContactArea from "./contact-area";
import ContactInfo from "./contact-info";
import url from "@/utils/globals";
import Footer from "@/src/layout/footers/footer";

const Contact = () => {
  const [areaData, setAreaData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [activatedArea, setActivatedArea] = useState(1);

  const getArea = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getarea`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setAreaData(data);
      // console.log(data);
    });
  };

  const getContact = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getcontact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setContactData(data);
      // console.log(data);
    });
  };

  const filteredContact = async (id) => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getcontact/${id}/filterbyarea`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setContactData(data);
    });
  };

  const filterContactHandler = (id) => {
    setActivatedArea(id);
    filteredContact(id);
  };

  useEffect(() => {
    getArea();
    getContact();
  }, []);

  return (
    <>
      {/* <HeaderOne /> */}
      <Breadcrumb title={" Contact"} innertitle={"Contact Us"} />
      <ContactArea
        areaData={areaData}
        contactData={contactData}
        activatedArea={activatedArea}
        filterContactHandler={filterContactHandler}
      />
      <ContactInfo contactData={contactData} />
      <Footer />
    </>
  );
};

export default Contact;
