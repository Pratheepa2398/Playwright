const {test, expect} = require('@playwright/test');

test('Auto Suggest Dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    //Click on the dropdown
    await page.locator("div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)").click();

   //waiting for the options
    await page.waitForTimeout(5000);

    const options = await page.$$("//div[@role='listbox']//span");
    
    for(let option of options)
    {
        const jobTitle = await option.textContent();
        //console.log(jobTitle);

        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    
})