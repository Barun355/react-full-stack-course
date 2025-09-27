# Online Status

## App.jsx

```javascript
import { useState } from "react";
import ChatHeader from "./components/ChatHeader";

export default function App() {

  return (
    <div className="flex flex-col h-screen w-[400px] mx-auto border border-gray-300 font-sans">
      <ChatHeader />
    </div>
  );
}
```


## OfflineBanner.jsx

```javascript

export default function OfflineBanner() {
  return (
    <div className="bg-red-500 text-white text-center font-bold py-2">
      🔴 You are offline. Messages will send when back online.
    </div>
  );
}

```

## ChatHeader.jsx

```javascript

export default function ChatHeader() {
  return (
    <div className="bg-[#075E54] text-white font-bold p-3">
      Chat with Friend
    </div>
  );
}

```

## MessageList.jsx

```javascript

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-3 bg-[#e5ddd5]">
        <div key={i} className="bg-[#dcf8c6] my-1.5 px-4 py-2 rounded-xl max-w-[70%] self-end">
          message list
        </div>
    </div>
  );
}

```

## MessageInput.jsx

```javascript

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

```