const puppeteer = require('puppeteer');

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5000');
    //await page.screenshot({path: 'button.png'});
    const t = Date.parse('14 Aug 2022 12:51:00 GMT') - Date.now();
    console.log(t);
    await page.waitForTimeout(t);
    page.click('[id="button"]'); 

    await browser.close();
};

main();