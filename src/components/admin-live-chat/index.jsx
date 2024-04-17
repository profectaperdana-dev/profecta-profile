"use client";
import Cookies from "js-cookie";
import ChatArea from "./chat-area";
import { ChatProvider } from "./chat-context";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminLiveChat = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    if (!token) {
      router.replace("/admin-live-chat-login");
      return;
    }

    // Validate the token by making an API call

    const validateToken = async () => {
      try {
        const res = await fetch("/api/live_chat/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Token validation failed");
      } catch (error) {
        console.error(error);
        router.replace("/admin-live-chat-login"); // Redirect to login if token validation fails
      }
    };

    validateToken();
  }, [router]);
  return (
    <ChatProvider>
      <div className="d-flex" style={{ maxHeight: "100vh" }}>
        <div
          className="bg-light overflow-auto"
          style={{ minHeight: "100vh", minWidth: "23.5rem" }}
        >
          <Sidebar />
        </div>
        <div
          className="flex-fill"
          style={{
            minHeight: "100vh",
            backgroundColor: "#f2f7ec",
            zIndex: "1",
          }}
        >
          <ChatArea />
        </div>
      </div>
    </ChatProvider>
  );
};

export default AdminLiveChat;
