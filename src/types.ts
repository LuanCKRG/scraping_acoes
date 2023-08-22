export interface ListOfStocksProps {
  stocks: SafraProps[]
}

export interface SafraProps {
  title: string
  recomendation: string
  price: string
  src: string
  date: string | null | undefined
  font: string
}