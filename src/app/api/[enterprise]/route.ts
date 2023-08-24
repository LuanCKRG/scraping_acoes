import { SafraProps } from "@/types"
import axios from "axios"
import { JSDOM } from "jsdom"
import { NextResponse } from "next/server"

import puppeteer from "puppeteer-core"
import chrome from '@sparticuz/chromium'

export const GET = async (req: Request, { params }: any) => {
	const enterprise = await params.enterprise

	async function getContentOfScrape(empresa: string) {
		const browser = await puppeteer.launch({ args: chrome.args, executablePath: await chrome.executablePath(), headless: chrome.headless })
		const page = await browser.newPage()
		const url = `https://www.safra.com.br/resultado-de-busca.htm?query=${empresa}`
		await page.goto(url, { waitUntil: "domcontentloaded" })

		await Promise.all([
			page.waitForNavigation(),
			page.evaluate(() => {
				const quote = document.querySelector(".resultados > .item")?.querySelector("a")
				quote?.click()
			})
		])

		// get url fonte das informações
		const src = page.url()

		// get the dom from url
		const { data } = await axios.get(src)
		await browser.close()
		const dom = new JSDOM(data)

		const title = dom.window.document.querySelector("h1.titulo")?.textContent
		const scrape = dom.window.document.querySelector(".sub")?.textContent
		const date = dom.window.document.querySelector("span.info")?.textContent

		return { scrape, src, date, title }
	}

	function getTheResult(phrase: string | undefined | null, src: string, date: string | undefined | null, title: string | undefined | null) {
		const wordsOfScrape = phrase?.split(" ")
		const titleArray = title?.split(" ")
		const recomendations: string[] = ["neutra", "compra", "venda", "revisão"]
		const result: SafraProps = {} as SafraProps


		if (wordsOfScrape !== undefined) {
			for (const word of wordsOfScrape) {
				if (/[R]?[$]?[ ]?(\d{2}\,?\.?)+/.test(word)) {
					result.price = word
					break
				}
				else {
					result.price = "Indeterminado"
				}
			}
		}

		for (const recomendation of recomendations) {
			if (phrase?.includes(recomendation)) {
				result.recomendation = recomendation
			}
		}
   
		if (titleArray !== undefined) {
			for (const word of titleArray) {
				if (/[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4}[0-9]/.test(word)) {
					result.title = word.replace(":", "")
				}
			}
		}
		result.src = src
		result.date = date
		result.font = "Banco Safra"
		return result
	}
	
	const result = getContentOfScrape(enterprise).then(value => getTheResult(value.scrape, value.src, value.date, value.title))

	return NextResponse.json(JSON.stringify([await result.then((value) => value)]))
	//return NextResponse.json(JSON.stringify([{title: 'yes', recomendation: 'compra', price: '34', src: 'confia', date: 'aham', font: 'safra'}, {title: 'yes', recomendation: 'compra', price: '34', src: 'confia', date: 'aham', font: 'pse'}]))
}
