const puppeteer = require('puppeteer');
// const $ = require('cheerio');
// const url = 'https://www.reddit.com';

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html");
    await page.pdf(
        {
            path: 'pdf/spring.pdf'
        });

    browser.close();
}

run();