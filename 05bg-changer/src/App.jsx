import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red")
  
  return (
    <div className="h-screen w-screen flex justify-center items-end p-10" style={{
      backgroundColor: backgroundColor
    }}>
      <div className="bg-gray-100 w-fit h-fit p-4 rounded-full flex gap-3">
        <button className="bg-gray-300 rounded-full px-6 py-1">Red</button>
        <button className="bg-gray-300 rounded-full px-6 py-1">Green</button>
        <button className="bg-gray-300 rounded-full px-6 py-1">Yellow</button>
      </div>
    </div>
  );
}

export default App;