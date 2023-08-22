import { ListOfStocksProvider } from "@/context/LisofStocksProvider"
import { SearchBar } from "@/components/SearchBar"
import { ListStock } from "@/components/ListStock"

const Home =  () => {

  return (
    <ListOfStocksProvider>
      <div className="flex flex-col">
        <header className="text-center py-4 border-2 rounded-b-md">
          <h1 className="text-xl">Resumo</h1>
        </header>
        <SearchBar />

        <ListStock />
      </div>
    </ListOfStocksProvider>
  )
}

export default Home
