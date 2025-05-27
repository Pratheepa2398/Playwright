const {test, expect} = require('@playwright/test');

test('handle input box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Input box Name
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEditable();
    await expect(await page.locator('#name')).toBeEnabled();

    await page.locator('#name').fill('Prathee');

    await page.waitForTimeout(5000);

    await expect(await page.locator('#email')).toBeVisible();
    await expect(await page.locator('#email')).toBeEmpty();
    await expect(await page.locator('#email')).toBeEditable();
    await expect(await page.locator('#email')).toBeEnabled();

    await page.locator('#email').fill('Prathee@gmail.com');

    await page.waitForTimeout(5000);

    await expect(await page.locator('#phone')).toBeVisible();
    await expect(await page.locator('#phone')).toBeEmpty();
    await expect(await page.locator('#phone')).toBeEditable();
    await expect(await page.locator('#phone')).toBeEnabled();

    await page.locator('#phone').fill('123456789');

    await page.waitForTimeout(5000);


})