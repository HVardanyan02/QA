import { expect, test } from '../utils/fixturesNew';
import { PostComponent } from '../components/postComponent';
import { DeletePost } from '../pages/HomePage/Feed/deletePost';
import { CreatePost } from '../pages/HomePage/Feed/createPost';

test('Verify delete button functionality. Verify message is visible @C127', async ({ mainPage, request }) => {
  const createPost = new CreatePost(mainPage.getPage());
  const deletePost = new DeletePost(mainPage.getPage());
  let post: PostComponent;

  await test.step('Enter text less than 280 characters and verify post button is enabled', async () => {
    post = await createPost.fillTweetAndClickPost('new tweet');
  });

  await test.step('Verify newly created post delete funcionality', async () => {
    await deletePost.deleteTweet(post);
    await expect(mainPage.locator('text=Your post was deleted')).toBeVisible();
  });
});
