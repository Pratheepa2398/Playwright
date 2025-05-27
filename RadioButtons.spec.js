const {test, expect} = require('@playwright/test');

test('handle radio buttons', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio buttons
    await page.locator('#male').check();

    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();

    await expect(await page.locator('#female').isChecked()).toBeFalsy();


    await page.waitForTimeout(5000);


    
})