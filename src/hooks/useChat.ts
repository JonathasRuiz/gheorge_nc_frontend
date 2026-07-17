import { useState, useRef, useCallback } from "react"
import api from "@/lib/api"

export interface Message {
  role: "user" | "assistant"
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = { role: "user", content }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      abortControllerRef.current = new AbortController()

      const response = await api.post(
        "/chat",
        { messages: newMessages },
        {
          signal: abortControllerRef.current.signal,
          responseType: "text",
        }
      )

      const assistantMessage: Message = {
        role: "assistant",
        content: response.data,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        return
      }
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [messages])

  const clearMessages = useCallback(() => {
    setMessages([])
    abortControllerRef.current?.abort()
  }, [])

  return { messages, isLoading, sendMessage, clearMessages }
}
