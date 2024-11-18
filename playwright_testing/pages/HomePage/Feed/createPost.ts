import { Locator, Page } from "@playwright/test";
import { PostComponent } from "../../../components/postComponent";

export class CreatePost {
  private readonly page: Page;
  private readonly tweetField: Locator;
  private readonly tweetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tweetField = page.getByTestId('tweetTextarea_0').locator('div').nth(2);
    this.tweetButton = page.getByTestId("tweetButtonInline");
  }

  private async WriteTweetField(tweet: string) {
    await this.tweetField.fill(tweet);
    return this;
  }

  private async clickPostButton() {
    const [createTweetResponse]= await Promise.all([
      this.page.waitForResponse(
        (res) => res.url().includes("/CreateTweet") && res.request().method() == "POST" && res.status() === 200
      ),
      this.tweetButton.click()
    ])

    const postId = (await createTweetResponse.json())?.data?.create_tweet?.tweet_results?.result?.rest_id
    return new PostComponent(this.page, postId);
  }

  public async isPostButtonEnabled(): Promise<boolean> {
    return await this.tweetButton.isEnabled();
  }

  public async fillTweetAndClickPost(tweet: string){
    await this.WriteTweetField(tweet);
    const isEnabled = await this.isPostButtonEnabled();
    if (isEnabled) {
      return await this.clickPostButton();
    } else {
      throw new Error("Post button is not enabled after filling the tweet.");
    }
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
