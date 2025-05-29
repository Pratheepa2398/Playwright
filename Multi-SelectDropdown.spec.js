const {test, expect} = require('@playwright/test');

test('Handle Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from the multi-select dropdown
    //await page.selectOption('#colors',['Blue','Red', 'Yellow']);

    //Assertions
    //1) Check no of options in the dropdown
    //const multioptions = await page.locator('#colors option');
    //await expect(multioptions).toHaveCount(7);


    //2) Check no of options using JS array
    //const multioptions = await page.$$('#colors option');
    //console.log("Number of options:",multioptions.length);

    //await expect(multioptions.length).toBe(7);

    //3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();
    
    await page.waitForTimeout(5000);


    
})