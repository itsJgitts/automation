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


  // const navItems = {
  //   nav1: { name: 'About CP', href: '/about-cp' },
  //   nav2: { name: 'Information Resources', href: '/info-resources' },
  //   nav3: { name: 'About My CP Guide', href: '/about-us' }
  // }
  // await expect(
  //   page.locator('div[role="navigation"]').getByRole('link', { name: navItems.nav1.name })
  // ).toHaveAttribute('href', navItems.nav1.href)
  // await expect(
  //   page.locator('div[role="navigation"]').getByRole('link', { name: navItems.nav2.name })
  // ).toHaveAttribute('href', navItems.nav2.href)

  async navToResources() {
    await this.resourcesNavlink.click();
    await expect(this.page).toHaveURL('/resources');

  }

}