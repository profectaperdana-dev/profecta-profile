"use client";

import answer_question_data from "@/src/data/answer-question-data";
import url from "@/utils/globals";
import React, { useEffect, useState } from "react";

const FaqArea = () => {
  const [faqData, setFaqData] = useState(null);

  const getFaqData = async () => {
    try {
      const response = await fetch(`${url.PROFECTA_API_URL}/api/getfaq`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error sending message: ", error.message);
      throw error;
    }
  };
  useEffect(() => {
    getFaqData().then((data) => {
      setFaqData(data);
    });
  }, []);

  return (
    <>
      <div className="faq-page-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-custom-accordio-2">
                <div className="accordion" id="accordionExample">
                  {faqData
                    ? faqData.data
                        .slice(0, faqData.data.length / 2 + 1)
                        .map((item, i) => (
                          <div key={i} className="accordion-items">
                            <h2
                              className="accordion-header"
                              id={`heading${item.id}`}
                            >
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${item.id}`}
                                aria-expanded={
                                  item.id === "One" ? "true" : "false"
                                }
                                aria-controls={`collapse${item.id}`}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${item.id}`}
                              className={`accordion-collapse ${
                                item.show ? "show" : ""
                              } collapse`}
                              aria-labelledby={`heading${item.id}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body w-full">
                                {item.answer}
                                <div className="accordio-icon ">
                                  <i className="flaticon-bubble-chat fs-1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                    : ""}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-custom-accordio-2">
                <div className="accordion" id="accordionExample2">
                  {faqData
                    ? faqData.data
                        .slice(faqData.data.length / 2 + 1, faqData.data.length)
                        .map((item, i) => (
                          <div key={i} className="accordion-items">
                            <h2
                              className="accordion-header"
                              id={`heading${item.id}`}
                            >
                              <button
                                className="accordion-buttons collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${item.id}`}
                                aria-expanded={
                                  item.id === "One2" ? "true" : "false"
                                }
                                aria-controls={`collapse${item.id}`}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${item.id}`}
                              className={`accordion-collapse ${
                                item.show ? "show" : ""
                              } collapse`}
                              aria-labelledby={`heading${item.id}`}
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body w-full">
                                {item.answer}
                                <div className="accordio-icon ">
                                  <i className="flaticon-bubble-chat fs-1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
