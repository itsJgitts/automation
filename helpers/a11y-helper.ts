import { AxeBuilder } from '@axe-core/playwright';
import { Page } from 'playwright';
import { expect } from 'playwright/test';
import { VIEWPORTS } from '../config/viewConfig';

export class a11yHelper {
    readonly page: Page;
  
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async a11yMobile(page, testInfo) {
        this.page.setViewportSize(VIEWPORTS.small)
        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'])
            .options({ reporter: "no-passes" })
            .analyze();

        await testInfo.attach('accessibility-scan-results', {
            body: JSON.stringify(accessibilityScanResults, null, 2),
            contentType: 'application/json'
        });
              
    expect(accessibilityScanResults.violations).toEqual([]);
    }

    async a11yDesktop(page, testInfo) {
        this.page.setViewportSize(VIEWPORTS.large)
        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'])
            .options({ reporter: "no-passes" })
            .analyze();

        await testInfo.attach('accessibility-scan-results', {
            body: JSON.stringify(accessibilityScanResults, null, 2),
            contentType: 'application/json'
        });
              
    expect(accessibilityScanResults.violations).toEqual([]);
    }
  
  

  
  }

