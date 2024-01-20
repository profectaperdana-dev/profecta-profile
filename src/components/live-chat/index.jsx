import ChatArea from "./chat-area";
import ChatCard from "./chat-card";
import { useState } from "react";
import SenderInfo from "./sender-info";
import { ChatProvider } from "./chat-context";

const LiveChat = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <ChatProvider>
      <div>
        <ChatCard>
          {isLogged ? <ChatArea /> : <SenderInfo setIsLogged={setIsLogged} />}
        </ChatCard>
      </div>
    </ChatProvider>
  );
};

export default LiveChat;
