const {test, expect} = require('@playwright/test');

test('AssertionsTest', async({page})=>{

    //Open the URl
    await page.goto('https://demo.nopcommerce.com/register');

    //1)Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) Page has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) Element is Visible
    const logoElement = await page.locator('//img[@alt="nopCommerce demo store"]');
    await expect(logoElement).toBeVisible();

    //4) Element is enabled or not
    const SearchBox = await page.locator('#small-searchterms');
    await expect(SearchBox).toBeEnabled();

    //5) Radio/Checkbox is checked or not

    //Radio button
    const maleRadioButton = await page.locator('#gender-male');
    maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    //Checkbox
    const newsletterCheckbox = await page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked();

    //6) Element has attribute
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');

    //7) Element matches Text
    await expect(await page.locator('div[class="page-title"] h1')).toHaveText('Register');

    //8)Element contains Text
    await expect(await page.locator('div[class="page-title"] h1')).toContainText('Reg');

    //9) Input has a value
    const firtName = await page.locator('#FirstName');
    await firtName.fill('Prathee');
    await expect(firtName).toHaveValue('Prathee');

    const lastName = await page.locator('#LastName');
    await lastName.fill('k');
    await expect(lastName).toHaveValue('k');

    
    //10) List of Elements has given length
    const options = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);




})
