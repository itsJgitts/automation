import { expect } from 'playwright/test';
import { Page, Locator} from 'playwright';

export class menuHelper {
  readonly page: Page;
  readonly brand: Locator;
  readonly homeNavlink: Locator;
  readonly resourcesNavlink: Locator;
  readonly currentUrl: string;


  constructor(page: Page) {
    this.page = page;
    this.brand = page.locator('.navbar-brand');
    this.homeNavlink = page.locator('.nav-link:has-text("Home")');
    this.resourcesNavlink = page.locator('.nav-link:has-text("Resources")');
    this.currentUrl = page.url()
  }

  async verifyNavbar() {
    await expect(this.brand).toBeVisible();
    await expect(this.homeNavlink).toBeVisible();
    await expect(this.homeNavlink).toHaveAttribute('href', '/home');
    await expect(this.resourcesNavlink).toBeVisible();
    await expect(this.resourcesNavlink).toHaveAttribute('href', '/resources');
  }


  async navToResources() {
    await this.resourcesNavlink.click();
    await expect(this.page).toHaveURL('/resources');

  }

}