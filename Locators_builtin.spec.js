const {test, expect} = require('@playwright/test');

test('Built-inLocators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAlt text
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByPlaceholder
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    //getByRole
    await page.getByRole('button', {type: 'submit'} ).click();

    //getByText
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();


})