"use client"

import { useStocks } from "@/context/LisofStocksProvider"
import { Stock } from "./Stock"
import { SafraProps } from "@/types"

export const ListStock = () => {
	const { listOfStocks } = useStocks()

	return (
		<div className="flex flex-col space-y-4 justify-center sm:space-y-0 sm:grid sm:gap-4 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3 px-4">
			{listOfStocks.map(
				({ price, recomendation, date, src, title, font }: SafraProps) => {
					return (
						<Stock
							price={price}
							recomendation={recomendation}
							src={src}
							date={date}
							title={title}
							font={font}
						/>
					)
				}
			)}
		</div>
	)
}
