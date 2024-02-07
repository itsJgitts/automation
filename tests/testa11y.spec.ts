import { test } from 'playwright/test';
import { generalHelper } from '../helpers/general-helper';
import { a11yHelper } from '../helpers/a11y-helper';


test.afterEach(async ({ page }, testInfo) => {
    const general = new generalHelper(page);
    await general.screenshotOnFail(testInfo)
});

test('Tests homepage for accessiblity on mobile', async ({ page }, testInfo) => {
  const general = new generalHelper(page);
  const a11y = new a11yHelper(page);

  await general.goToHomepage();
  await a11y.a11yMobile(page, testInfo)

});

test('Tests homepage for accessiblity on desktop', async ({ page }, testInfo) => {
  const general = new generalHelper(page);
  const a11y = new a11yHelper(page);

  await general.goToHomepage();
  await a11y.a11yDesktop(page, testInfo)

});
