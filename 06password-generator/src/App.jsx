import { useEffect, useState } from "react";

function App() {

  const [password, setPassword] = useState("some random password")

  function generatePassword(
    length=12,
    isNumberAllowed,
    isSpecialCharacterAllowed
  ) {
    let newPassword = "";

    let baseSymbol = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) {
      baseSymbol = baseSymbol + "0123456789"
    }

    if (isSpecialCharacterAllowed) {
      baseSymbol =  baseSymbol + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }

    for (let i = 0; i < length; i++) {
      
      const index = Math.floor(Math.random() * baseSymbol.length)
      newPassword = newPassword + baseSymbol.charAt(index)

    }
    console.log(newPassword)
    setPassword(newPassword)
  }

  useEffect(() => {
    generatePassword(12, false, false)
  }, [])

  return (
    <div>
      <h1>Passoword Generator: {password}</h1>
    </div>
  );
}

export default App;
