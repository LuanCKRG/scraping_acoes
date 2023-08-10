import { BiSearchAlt } from "react-icons/bi";

const Home = () => {
  // const response = await fetch('http://localhost:3000/api')
  // const user = await response.json()

  return (
    <div className="flex flex-col">
      <header className="text-center py-4 border-2 rounded-b-md">
        <h1 className="text-xl">Resumo</h1>
      </header>
      <span className="flex justify-center items-center my-4 px-4">
        <div className="flex w-full max-w-xs sm:max-w-md border-white border-2 rounded-lg">
          <input
            className="w-full p-2 bg-black rounded-l-lg focus:outline-none"
            placeholder="Digite uma ação. Ex.: PETR4, GGBR4, SNAG11"
            type="text"
          />
          <span className="flex justify-center px-2 items-center rounded-r-lg">
            <BiSearchAlt size={30} />
          </span>
        </div>
      </span>

      <div className="flex flex-col justify-center px-4">
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
        <section className="flex flex-col border-2 rounded-lg p-2 mb-8">
          <h2 className="text-center">Title</h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
