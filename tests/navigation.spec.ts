import { test, expect } from 'playwright/test';
import { menuHelper } from '../helpers/menu-helper';
import { generalHelper } from '../helpers/general-helper';

test.afterEach(async ({ page }, testInfo) => {
  const general = new generalHelper(page);
  await general.screenshotOnFail(testInfo)
});

test('Verify navbar has links and brand logo', async ({ page }) => {
  const menu = new menuHelper(page);
  const general = new generalHelper(page);

  await general.goToHomepage();
  await menu.verifyNavbar();
});

test('Verify user can go to resources', async ({ page }) => {
  const menu = new menuHelper(page);
  const general = new generalHelper(page);

  await general.goToHomepage();
  await menu.navToResources();
 
});
