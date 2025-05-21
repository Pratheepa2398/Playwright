const {test, expect} = require('@playwright/test');

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    //click on login button - property
    await page.click('id=login2');

    //provide user name - Css
    await page.fill('#loginusername','prathee');

    //provide password - id
    await page.fill("input[id='loginpassword']", 'test@123');

    //click on the login button - xpath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link present or not - xpath
    const logoutLink = await page.locator("//a[@id='logout2']");

    await expect(logoutLink).toBeVisible();

    await page.close();


})