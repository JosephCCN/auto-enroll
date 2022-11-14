const puppeteer = require('puppeteer');
require('dotenv').config();

const main = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://cusis.cuhk.edu.hk/psc/CSPRD_2/EMPLOYEE/SA/c/SSR_STUDENT_FL.SSR_SHOP_CART_FL.GBL?Page=SSR_SHOP_CART_FL');
    
    //await page.screenshot({path: 'button.png'});
    /*const t = Date.parse('15 Aug 2022 09:27:00 GMT') - Date.now();
    console.log(t);
    await page.waitForTimeout(t);*/
    await page.type('#userNameInput', process.env.USRNAME);
    await page.type('#passwordInput', process.env.PW);

    await page.keyboard.press('Enter'); 
    //login to cusis alr

    await page.screenshot({path: 'shp-c.png'});
    
    await page.waitForTimeout(3000);

    await page.click('[id="DERIVED_REGFRM1_SSR_SELECT$0"]');
    await page.click('[id="DERIVED_REGFRM1_SSR_SELECT$2"]');
    await page.click('[id="DERIVED_REGFRM1_SSR_SELECT$4"]');
    await page.click('[id="DERIVED_REGFRM1_SSR_SELECT$6"]');


    const t = Date.parse(new Date("2022-11-15T01:36:00+08:00")) - Date.now();
    //console.log(t);
    await page.waitForTimeout(t + 50);

    await page.evaluate (() => {
        Array.from(document.querySelectorAll('a')).filter(li => {
            return li.innerText == 'Validate'
        }).forEach(ele => {
           ele.click();

        })
    });

    console.log(new Date(Date.now()));

    await page.waitForTimeout(10000);

    await page.setViewport({width: 900, height: 1000});

    await page.screenshot({path: 'cusis.png'});

    await browser.close();
};

main();
