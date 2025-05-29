const {test, expect} = require('@playwright/test');

test('Handle Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select option from the dropdown
    //await page.locator("#country").selectOption({label:'India'});
    //await page.locator("#country").selectOption('India');
    //await page.locator("#country").selectOption({value:'India'});


    //Assertions
    //1) Check no of options in the dropdown - Approach 1
    //const options = await page.locator('#country option');
    //await expect(options).toHaveCount(10);

    //Approach -2
    //const options = await page.$$('#country option');
    //console.log("Number of options:", options.length);
    //await expect(options.length).toBe(10);


    //3) Check presence of value in the dropdown - Approach 1
    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();


    //Approach 2 using looping
    /*const options = await page.$$('#country option');
    let status = false;

    for(const option of options)
    {
        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France'))
        {
            status=true;
            break;
        }

    }
    expect(status).toBeTruthy();*/

    //5) Select option from dropdown using loop 
    const options = await page.$$('#country option');
    for(const option of options)
    {
        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption("#country", value);
            break;
        }

    }
    
    
    await page.waitForTimeout(5000);


    
})