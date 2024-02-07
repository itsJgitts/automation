import { test, expect } from 'playwright/test';
import { generalHelper } from '../helpers/general-helper';
import { AxeBuilder } from '@axe-core/playwright';
import { VIEWPORTS } from '../config/a11yconfig';

test.afterEach(async ({ page }, testInfo) => {
    const general = new generalHelper(page);
    await general.screenshotOnFail(testInfo)
});


test('Tests homepage for accessiblity', async ({ page }, testInfo) => {
    const general = new generalHelper(page);

    await general.goToHomepage();
    page.setViewportSize(VIEWPORTS.small)
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'])
        .options({ reporter: "no-passes" })
        .analyze();

    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

