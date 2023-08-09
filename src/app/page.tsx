import { BiSearchAlt } from 'react-icons/bi'

const Home = async () => {

  // const response = await fetch('http://localhost:3000/api')
  // const user = await response.json()

  return (
    <div className="flex flex-col">
      <header className="text-center py-4 border-2 rounded-b-md">
        <h1 className="text-xl">
          Resumo
        </h1>
      </header>
      <div className="flex justify-center items-center mt-4 px-4 bg-red-500">
          <input className="w-full max-w-xs sm:max-w-md p-2 bg-black border-white border-2 focus:outline-none" type="text" />
          <span className="border-2 rounded-r-sm">
            <BiSearchAlt size={35} />
          </span>
      </div>
      <div className="rounded  border-solid">
        <h1>PETR4</h1>
        <p>Petrobrás</p>
        {/* <p>{JSON.stringify(user)}</p> */}
        <p>Fonte: Safra</p>
      </div>
    </div>
  )
}

export default Home