"use client"
import { useEffect } from "react"

const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState(false)

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true)
            try {
                const response = await fetch('/api/getConversation')
                const data = await response.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                setConversation(data)
                
            } catch (error) {
                console.log(error.message)
            }finally {
                setLoading(false)
        }}
        getConversation()
    }, [])

    return {loading, conversation}
}

export default useGetConversation;