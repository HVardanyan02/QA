import { Page } from "@playwright/test";

export class ClickXIcon {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    async goto() {
        await this.page.goto(
          "https://x.com/TheWebTester/status/1593906285300400128"
        );
      }
    
      async clickXIcon() {
        await this.page.locator('span:has-text("X")').click(); 
      }
      
      async gotoStartPage() {
        await this.page.goto("https://x.com/");
      }
}