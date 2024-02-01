import { test, expect } from '@playwright/test';
import { menuHelper } from '../helpers/menu-helper';
import { generalHelper } from '../helpers/general-helper';

test('Verify navbar has links and brand logo', async ({ page }) => {
  const menu = new menuHelper(page);
  const general = new generalHelper(page);

  await general.goToHomepage();
  await menu.verifyNavbar();
});
