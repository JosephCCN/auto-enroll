const puppeteer = require('puppeteer');
require('dotenv').config();

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://cusis.cuhk.edu.hk/psp/CSPRD/?cmd=login&languageCd=ENG&');
    //await page.screenshot({path: 'button.png'});
    /*const t = Date.parse('15 Aug 2022 09:27:00 GMT') - Date.now();
    console.log(t);
    await page.waitForTimeout(t);*/
    await page.type('#userNameInput', process.env.USRNAME);
    await page.type('#passwordInput', process.env.PW);

    //await page.keyboard.press('Enter'); 


    await page.evaluate(() => {
        console.log('doing sth');
        Array.from(document.querySelectorAll('span')).filter(li => {
            console.log(li.innerText);
            return li.innerText == 'Sign in'
        }).forEach(ele => {
            if (ele) ele.click();
        });
    });


    await page.waitForTimeout(2000);
    
    await page.screenshot({path: "cusis.png"});


    await browser.close();
};

main();
