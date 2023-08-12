import axios from "axios"
import { JSDOM } from "jsdom"
import { NextResponse } from "next/server"

export const GET = async () => {
  const { data } = await axios.get(
    "https://www.safra.com.br/central-de-conteudo/analisar/analise-de-acoes-petrobras-petr4.htm"
  )
  const dom = new JSDOM(data)
  const result = dom.window.document.querySelector(".sub")?.textContent
  const recomendations = ["neutra", "compra", "venda"]
  const sim = "Uma flor"
  console.log(sim.includes("Uma"))

  return NextResponse.json(result)
}
