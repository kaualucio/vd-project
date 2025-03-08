'use client'
import { createContext, useState, type PropsWithChildren } from "react";

interface ConfettiContextProps {
  start: boolean;
  handleStart: () => void
}

export const CustomConfettiContext = createContext({} as ConfettiContextProps)

export const CustomConfettiContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(false)

  const handleStart = () => {
    setStart(prevState => (!prevState))
  }

  return (
    <CustomConfettiContext.Provider value={{
      start,
      handleStart
    }}>
      {children}
    </CustomConfettiContext.Provider>
  )
}