
import { useState } from "react";

export default function MessageInput() {

  return (
    <div className="flex p-3 bg-gray-100">
      <input
        className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none"
        placeholder="Type a message"
      />
      <button
        className="ml-2 bg-[#25D366] text-white rounded-full px-4 py-2 hover:bg-[#20b259] transition-colors"
      >
        Send
      </button>
    </div>
  );
}
