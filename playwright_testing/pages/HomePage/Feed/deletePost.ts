import { Locator, Page } from "@playwright/test";
import { PostComponent } from "../../../components/postComponent";

export class DeletePost {
  private readonly page: Page;
  private readonly moreIcon: Locator;
  private readonly delete: Locator;
  private readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moreIcon = page.getByTestId('caret');
    this.delete = page.getByRole('menuitem', { name: 'Delete' });
    this.deleteButton = page.getByTestId('confirmationSheetConfirm')
    
  }

  private async clickDelete() {
    await this.delete.click();
    return this;
  }

  private async clickDeleteButton() {
    const [deleteTweetResponse]= await Promise.all([
      this.page.waitForResponse(
        (res) => res.url().includes("/DeleteTweet") && res.request().method() == "POST" && res.status() === 200
      ),
      this.deleteButton.click()
    ])

    const deletePostId = (await deleteTweetResponse.json())?.data?.delete_tweet?.tweet_results;
    return new PostComponent(this.page, deletePostId);
  }

  public async deleteTweet(post: PostComponent){
    await post.clickMoreIcon();
    await this.clickDelete();
    return await this.clickDeleteButton();
  }
}
