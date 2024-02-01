import { expect, type Locator, type Page } from '@playwright/test';

export class generalHelper {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async goToHomepage() {
    await this.page.goto('/');
  }

}