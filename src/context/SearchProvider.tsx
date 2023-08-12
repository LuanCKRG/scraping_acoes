import { createContext, useContext, useState } from "react";

interface SearchBarProps {
  search: string;
  handleSearch: () => void;
}

const SearchContext = createContext<SearchBarProps>({} as SearchBarProps);

export const SearchProvider: React.FC = ({ children }: React.ReactNode) => {
  const [search, setSearch] = useState<string>("");

  function handleSearch(newValue: string) {
    setSearch(newValue);
  }

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
