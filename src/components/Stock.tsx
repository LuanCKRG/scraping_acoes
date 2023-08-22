import { SafraProps } from "@/types"

export const Stock = ({title, recomendation, price, src, date, font}: SafraProps) => {
  return (
    <section className="flex flex-col border-2 rounded-lg p-2">
      <div className="w-full border-b-2">
        <h2 className="text-center">
          <b>{title}</b>
        </h2>
      </div>
      <div>
        <div>
          Preço-alvo: <b>{price}</b>
        </div>
        <div>
          Recomendação: <b>{recomendation}</b>
        </div>
        <div>
          Data: <b>{date}</b>
        </div>
        <div>
          Orgão: <b>{font}</b>
        </div>
      </div>
      <div className="mx-auto underline">
        <a href={src}>
          Fonte
        </a>
      </div>
    </section>
  )
}