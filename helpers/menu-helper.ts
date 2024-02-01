import { expect, type Locator, type Page } from '@playwright/test';

export class menuHelper {
  readonly page: Page;
  readonly brand: Locator;
  readonly homeNavlink: Locator;
  readonly resourcesNavlink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.brand = page.locator('.navbar-brand');
    this.homeNavlink = page.locator('.nav-link:has-text("Home")');
    this.resourcesNavlink = page.locator('.nav-link:has-text("Resources")');
  }

  async verifyNavbar() {
    await expect(this.brand).toBeVisible();
    await expect(this.homeNavlink).toBeVisible();
    await expect(this.homeNavlink).toHaveAttribute('href', '/home');
    await expect(this.resourcesNavlink).toBeVisible();
    await expect(this.resourcesNavlink).toHaveAttribute('href', '/resources');
  }

}