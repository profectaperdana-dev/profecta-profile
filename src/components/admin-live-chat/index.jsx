import ChatArea from "./chat-area";
import { ChatProvider } from "./chat-context";
import Sidebar from "./sidebar";

const AdminLiveChat = () => {
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
