const {test, expect} = require('@playwright/test');

test('handle Checkboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Single checkbox
    await page.locator('#monday').check();

    await expect(await page.locator('#monday')).toBeChecked();
    await expect(await page.locator('#monday').isChecked()).toBeTruthy();
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy();


    //Multiple Checkboxes
    const checkboxLocators = ['#monday','#wednesday','#sunday'];

    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check();

    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked());
        {
        await page.locator(locator).uncheck();
        }

    }

    await page.waitForTimeout(5000);


    
})