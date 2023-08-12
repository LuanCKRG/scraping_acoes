"use client";
import { SearchProvider } from "@/context/SearchProvider";
import { SearchBar } from "@/components/SearchBar";
import { ListStock } from "@/components/ListStock";

const Home = () => {
  // const response = await fetch('http://localhost:3000/api')
  // const user = await response.json()

  return (
    <SearchProvider>
      <div className="flex flex-col">
        <header className="text-center py-4 border-2 rounded-b-md">
          <h1 className="text-xl">Resumo</h1>
        </header>
        <SearchBar />

        <ListStock />
      </div>
    </SearchProvider>
  );
};

export default Home;
