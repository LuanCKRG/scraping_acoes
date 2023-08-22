'use client'

import { ListOfStocksProps, SafraProps } from "@/types"
import { createContext, useContext, useState } from "react"

interface ListOfStocksContextProps {
  listOfStocks: SafraProps[] 
  handleListOfStocks: (newValue: SafraProps[]) => void
}

const ListOfStocksContext = createContext<ListOfStocksContextProps>({} as ListOfStocksContextProps)

export const ListOfStocksProvider = ({ children }: { children: React.ReactNode }) => {
  const [listOfStocks, setListOfStocks] = useState<SafraProps[]>([])

  function handleListOfStocks(newValue: SafraProps[]) {
    setListOfStocks(newValue)
  }

  return (
    <ListOfStocksContext.Provider value={{ listOfStocks, handleListOfStocks }}>
      {children}
    </ListOfStocksContext.Provider>
  )
}

export const useStocks = () => {
  return useContext(ListOfStocksContext)
}
