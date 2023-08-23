"use client"

import { useState } from "react"
import { useStocks } from "@/context/LisofStocksProvider"
import { BiSearchAlt } from "react-icons/bi"
import { SafraProps } from "@/types"

export const SearchBar = () => {
	const [search, setSearch] = useState<string>("")
	const { handleListOfStocks } = useStocks()

	async function updateListOfStocks() {
		try {
			const result = await fetch(`/api/${search}`, { cache: "no-store" })
			const res: SafraProps[] = await result.json()
			handleListOfStocks(res)
		} catch (e) {
			return
		}
	}

	return (
		<span className="flex justify-center items-center my-4 px-4">
			<div className="flex w-full max-w-xs sm:max-w-md border-white border-2 rounded-lg">
				<input
					className="w-full p-2 bg-black rounded-l-lg focus:outline-none text-center"
					placeholder="Digite uma ação. Ex.: PETR4, GGBR4, SNAG11"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
					type="text"
				/>
				<span
					onClick={() => updateListOfStocks()}
					className="flex justify-center cursor-pointer px-2 items-center rounded-r-lg"
				>
					<BiSearchAlt size={30} />
				</span>
			</div>
		</span>
	)
}
