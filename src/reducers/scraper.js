const puppeteer = require('puppeteer');

async function scrapeThoughts = (url) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('//*[@id="imgBlkFront"]')
	
	const src = await el.getProperty('src')
	const srcTxt = await src.jsonValue()

	return {srcTxt}
}