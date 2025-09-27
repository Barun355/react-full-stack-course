import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState();

  useEffect(() => {
    // currency info api call
    
    const res = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    res.then(data => console.log(data))

    setCurrencyInfo(data);
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
