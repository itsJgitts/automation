import { test } from 'playwright/test';
import { generalHelper } from '../helpers/general-helper';
import { injectAxe, checkA11y } from 'axe-playwright';
import { Browser, Page, chromium  } from 'playwright';
import { a11yConfig } from '../config/a11yconfig';

let browser: Browser;
let newPage: Page;

test.beforeEach(async ({page}) => {
    const general = new generalHelper(page);

    browser = await chromium.launch()
    newPage = await browser.newPage()
    await general.goToHomepage();
    await injectAxe(newPage)
})

test.afterEach(async ({ page }, testInfo) => {
    const general = new generalHelper(page);
    await general.screenshotOnFail(testInfo)
});
      
test('Test accessibility on homepage', async ({ page }) => {
    const general = new generalHelper(page);
    
    await general.goToHomepage();
    await checkA11y(newPage, a11yConfig)
});



test.afterEach(async ({ page }, testInfo) => {
  const general = new generalHelper(page);
  await general.screenshotOnFail(testInfo)
});

