export default function MessageList() {
    const messages = ["hello world", "how are you", "I am doing good.", "hello world"]

  return (
    <div className="flex-1 overflow-y-auto p-3 bg-[#e5ddd5]">
      {messages.map((msg, index) => {
        return (
          <div
            className="bg-[#dcf8c6] my-1.5 px-4 py-2 rounded-xl max-w-[70%] self-end"
            key={index}
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
}
