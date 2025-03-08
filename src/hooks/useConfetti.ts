'use client'
import { CustomConfettiContext } from "@/context/custom-confetti-context"
import { useContext } from "react"

export const useCustomConfetti = () => {
  const { handleStart, start } = useContext(CustomConfettiContext)

  return { handleStart, start }
}