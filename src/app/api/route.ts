import axios from "axios"
import {JSDOM } from "jsdom"
import { NextResponse } from "next/server"

export const GET = async () => {
  const { data } = await axios.get("https://www.safra.com.br/central-de-conteudo/analisar/analise-de-acoes-petrobras-petr4.htm" )
  const dom = new JSDOM(data)
  const result =  dom.window.document.querySelector(".sub")?.textContent
  console.log(NextResponse.json(result))
  return NextResponse.json(result)
}