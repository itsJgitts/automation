import { Page } from 'playwright';

export class generalHelper {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async goToHomepage() {
    await this.page.goto('/');
  }


  async screenshotOnFail(testInfo) {
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshotPath = testInfo.outputPath(`failure.png`);
        testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' });
        await this.page.screenshot({ path: screenshotPath, timeout: 5000 });
      }
  }

}