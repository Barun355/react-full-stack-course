import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("some random password");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharaterAllowed, setIsSpecialCharaterAllowed] =
    useState(false);
  const [length, setLength] = useState(12);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(
    (length = 12, isNumberAllowed, isSpecialCharacterAllowed) => {
      {
        let newPassword = "";

        let baseSymbol = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (isNumberAllowed) {
          baseSymbol = baseSymbol + "0123456789";
        }

        if (isSpecialCharacterAllowed) {
          baseSymbol = baseSymbol + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        }

        for (let i = 0; i < length; i++) {
          const index = Math.floor(Math.random() * baseSymbol.length);
          newPassword = newPassword + baseSymbol.charAt(index);
        }
        console.log(newPassword);
        setPassword(newPassword);
      }
    },
    [length, isNumberAllowed, isSpecialCharaterAllowed]
  );

  function copyPassword() {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }

  useEffect(() => {
    generatePassword(length, isNumberAllowed, isSpecialCharaterAllowed);
  }, [length, isNumberAllowed, isSpecialCharaterAllowed]);

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="flex flex-col gap-3 bg-gray-300 rounded-md max-w-md mx-auto w-full p-4">
        <h1 className="text-xl">Password Generator</h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-full bg-white rounded-md overflow-hiddenp p-2">
            <input
              type="text"
              className="py-4 px-2 outline-none w-full border-none"
              value={password}
              id="password"
              ref={passwordRef}
            />
            <button
              className="bg-blue-600 text-white py-4 px-6 rounded-md cursor-pointer"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="length" className="text-sm">
                Length: {length}
              </label>
              <input
                type="range"
                name="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min={0}
                max={100}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex justify-center items-center w-fit h-fit gap-4">
                <label htmlFor="isNumberAllowed" className="text-sm">
                  Numbers
                </label>
                <input
                  type="checkbox"
                  value={isNumberAllowed}
                  onChange={(e) => setIsNumberAllowed(e.target.checked)}
                />
              </div>
              <div className="flex justify-center items-center w-fit h-fit gap-4">
                <label htmlFor="isSpecialCharaterAllowed" className="text-sm">
                  Special Character
                </label>
                <input
                  type="checkbox"
                  value={isSpecialCharaterAllowed}
                  onChange={() =>
                    setIsSpecialCharaterAllowed(!isSpecialCharaterAllowed)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
