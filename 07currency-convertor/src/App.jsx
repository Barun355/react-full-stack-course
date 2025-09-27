import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const currencyInfo = useCurrencyInfo("usd")

  return (
    <div className="">
      Currency Convertor
    </div>
  )
}

export default App
