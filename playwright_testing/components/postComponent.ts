import { Locator, Page } from "@playwright/test";

export class PostComponent {
  private readonly page: Page;
  private readonly id: string | undefined;
  private readonly parent: Locator
  public readonly likeIcon: Locator;

  constructor(page: Page, id?: string) {
    this.page = page;
    this.id = id;
    this.parent = id ? this.page.getByRole('article').filter({has: this.page.locator(`a[href*='${id}']`)}) : this.page.getByRole('article')

    this.likeIcon = this.parent.locator("button[data-testid*='like'] > div[style]")
  }


  public async clickLikeIcon(){
    await this.likeIcon.click();
  }
}

















// import { Locator, Page } from "@playwright/test";

// export class CreatePost {
//   private readonly page: Page;
//   private readonly tweetField: Locator;
//   private readonly tweetButton: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.tweetField = page.getByTestId('tweetTextarea_0').locator('div').nth(2);
//     this.tweetButton = page.getByTestId("tweetButtonInline");
//   }

//   private async WriteTweetField(tweet: string) {
//     await this.tweetField.fill(tweet);
//     return this;
//   }

//   private async clickPostButton() {
//     await this.tweetButton.click();
//     return this;
//   }

//   public async isPostButtonEnabled(): Promise<boolean> {
//     return await this.tweetButton.isEnabled();
//   }

//   public async fillTweetAndClickPost(tweet: string) {
//     await this.WriteTweetField(tweet);
//     const isEnabled = await this.isPostButtonEnabled();
//     if (isEnabled) {
//       await this.clickPostButton();
//     } else {
//       throw new Error("Post button is not enabled after filling the tweet.");
//     }
//     return await this.clickPostButton();
//   }
// }
