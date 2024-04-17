import { useRouter } from "next/router";
import { useState } from "react";

const AdminLoginArea = () => {
  const [authKey, setAuthKey] = useState("");
  const router = useRouter();

  const authHandler = async (e) => {
    e.preventDefault();
    try {
      ("use server");
      const response = await fetch(`/api/live_chat/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authKey),
      });

      if (!response.ok) throw new Error("Login failed");

      const { token } = await response.json();
      document.cookie = `token=${token}; path=/`;
      router.push("/admin-live-chat");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="contact-page pt-250 pb-250 ps-150 pe-150">
        <div className="container">
          <div className="contact-bg border border-light border-2 rounded">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="contact-us">
                  <div className="tp-section-box tp-section-box-2  p-relative">
                    <span className="tp-section-subtitle right d-inline-block">
                      Need Authentication
                    </span>
                    <h2 className="tp-section-title mb-35">
                      Enter your secret key
                    </h2>
                  </div>
                  <div className="contact">
                    <form id="authform" onSubmit={authHandler}>
                      <div className="contact__form">
                        <input
                          className="form-control"
                          name="auth_key"
                          placeholder="secret key..."
                          onChange={(e) => setAuthKey(e.target.value)}
                        />
                        <p className="ajax-response"></p>
                      </div>
                      <button className="btn btn-success">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLoginArea;
