import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [emailData, setEmailData] = useState({
    username: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [sendingEmailAlert, setSendingEmailAlert] = useState(false);
  const [sendingEmailMessage, setSendingEmailMessage] = useState("");

  const senderDataHandler = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    setIsLoading(true);
    // setSendingEmailMessage("Sending...");
    try {
      const response = await fetch("/api/email/sending_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      //   console.log(response);

      const data = await response.json();
      //   console.log(data);
      if (data?.success) {
        // setSendingEmailMessage(data?.message);
        setEmailData({
          username: "",
          phone: "",
          email: "",
          message: "",
        });
        e.target.username.value = "";
        e.target.phone.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      }

      setSendingEmailMessage(data?.message);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setSendingEmailAlert(true);
    setIsLoading(false);
  };

  // useEffect(() => {
  //   console.log(JSON.stringify(emailData));
  // }, [emailData]);
  return (
    <>
      <form id="contact-form" onSubmit={handleSendEmail}>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-user"></i>
              <input
                className="w-100"
                type="text"
                placeholder="Enter name"
                name="username"
                required
                onChange={senderDataHandler}
                defaultValue={emailData.username}
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-phone"></i>
              <input
                className="w-100"
                type="text"
                placeholder="Phone number"
                name="phone"
                required
                onChange={senderDataHandler}
                defaultValue={emailData.phone}
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-envelope"></i>
              <input
                className="w-100"
                type="email"
                placeholder="Email address"
                name="email"
                required
                onChange={senderDataHandler}
                defaultValue={emailData.email}
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <div className="contact__input">
              <i className="fas fa-pen pen"></i>
              <textarea
                className="w-100"
                placeholder="Message"
                name="message"
                required
                onChange={senderDataHandler}
              >
                {emailData.message}
              </textarea>
            </div>
          </div>
          <div className="col-xxl-12 col-lg-12 col-md-12">
            <div className="contact__btn">
              {isLoading ? (
                "Sending process. Please wait..."
              ) : (
                <button
                  className="tp-btn w-100"
                  disabled={isLoading}
                  type="submit"
                >
                  Get a Quotation
                  {isLoading == "disabled" ? (
                    <i className="fal fa-long-arrow-right"></i>
                  ) : (
                    ""
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </form>

      <div
        className={`alert alert-info alert-dismissible fade ${
          sendingEmailAlert ? "show" : "hide"
        } mt-3`}
        role="alert"
      >
        <strong>Attention!</strong> {sendingEmailMessage}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default ContactForm;
