const {test, expect} = require('@playwright/test');

test('frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allframes = await page.frames();
    console.log("Number of Frames:", allframes.length);

    //approach 1 - using name or url

    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.fill('[name="mytext1"]', 'Hello');


    //approach 2 - using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]');
    inputbox.fill('Hello');

    await page.waitForTimeout(5000);

  
    
})