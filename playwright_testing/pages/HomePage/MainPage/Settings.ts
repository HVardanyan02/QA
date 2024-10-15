import { Page } from "@playwright/test";

export class ClickSettings {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      "https://x.com/TheWebTester/status/1593906285300400128"
    );
  }

  async clickSettings() {
    await this.page.locator('span:has-text("Settings")').click(); 
  }
  
  async gotoSettingsPage() {
    await this.page.goto("https://x.com/settings/account/personalization");
  }
}