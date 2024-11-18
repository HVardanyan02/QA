import { Locator, Page } from "@playwright/test";

export class MainPage {
    private readonly page: Page;
    private readonly navigationIcons: Locator;
    private readonly postId: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationIcons = page.getByRole('banner').locator('div').filter({ hasText: 'HomeExplore20+' }).nth(3);
        this.postId = page.getByTestId('tweetText');
    }

    public getPage(): Page {
        return this.page;
    }

    locator(selector: string) {
        return this.page.locator(selector);
      }
    
    public async areNavigationIconsVisible(): Promise<boolean> {
        return await this.navigationIcons.isVisible();
    }

    public getPostLocatorById(postId: string): Locator {
        return this.page.locator(`#post-${postId}`);
      }
}
