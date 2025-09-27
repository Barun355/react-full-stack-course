import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import OfflineBanner from "./components/OfflineBanner"
import useOnlineStatus from "./hooks/useOnlineStatus";

export default function App() {

  const isOnline = useOnlineStatus()

  return (
    <div className="flex flex-col h-screen w-[400px] mx-auto border border-gray-300 font-sans">
      {
        !isOnline && <OfflineBanner />
      }
      <ChatHeader />
      <MessageList messages={["hello world", "how are you", "I am doing good.", "hello world"]} />
      <MessageInput />
    </div>
  );
}