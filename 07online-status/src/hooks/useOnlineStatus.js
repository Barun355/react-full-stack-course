import { useEffect, useState } from "react"


export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState()

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true)
        }
        function handleOffline() {
            setIsOnline(false)
        }
        const online = window.addEventListener("online", handleOnline)
        const offline = window.addEventListener("offline", handleOffline)
        
        return () => {
            window.removeEventListener("online", online)
            window.removeEventListener("offline", offline)
        }
    }, [])


    return isOnline;
}