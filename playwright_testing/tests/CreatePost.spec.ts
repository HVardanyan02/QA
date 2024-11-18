import { expect, test } from '../utils/fixturesNew';
import { CreatePost } from '../pages/HomePage/Feed/createPost';
import { PostComponent } from '../components/postComponent';


test('Verify post button is disabled. Message is visible @C126', async ({ mainPage, request }) => {
  const createPost = new CreatePost(mainPage.getPage());
  let post: PostComponent;

  await test.step('Enter text less than 280 characters and verify post button is enabled', async () => {
    post = await createPost.fillTweetAndClickPost('new tweet');
  });

  await test.step('Verify own post rection funcionality', async () => {
    await post.clickLikeIcon();
    //const message = await mainPage.locator('Nice work! Your timeline’s getting better. The more you like, the better your timeline will be – keep liking the stuff you’re into.');
    // await expect(message).toBeVisible();
    //const unlikeColor = 'rgb(113, 118, 123)';
    await expect(post.likeIcon).toHaveCSS("color", "rgb(249, 24, 128)");
    await expect(post.likeIcon).toHaveText('1');
  });

  // Optional cleanup
  // await test.step('Cleanup: Delete the created post', async () => {
  //   if (postId) {
  //     const response = await deletePost(postId, request);
  //     expect(response.status()).toBe(204); 
  //   }
  // });
});






































































































// import { test, expect } from "@playwright/test";
// import { WelcomePage } from "../pages/welcomePage";
// import { SignInWindow } from "../windows/signinWindow";
// import { PasswordWindow } from "../windows/passwordWindow";
// import { CreatePost } from "../pages/HomePage/Feed/CreatePostComponent/createPost";
// import loginData from "../test-data/loginData.json";

// const deletePost = async (postId, request) => {
//   const response = await request.delete(`https://x.com/home/${postId}`, {
//     headers: {
//       Authorization: `Bearer ece3a2f26e573b672e9c84cec31990662bfca006`, 
//     },
//   });
//   return response;
// };

// test.beforeEach(async ({ welcomePage}) => {
//   await welcomePage.clickCreateAccountButton();
// });

// loginData.users.forEach((user, index) => {
//   test(`Verify post button is disabled. Message is visible for User ${index + 1} @C126`, async ({ page, request }) => {
//     await page.goto('https://x.com/');
//     const welcomePage = new WelcomePage(page);

//     let signinWindow: SignInWindow;
//     await test.step('Click on signin button and verify signin window is displayed', async () => {
//       signinWindow = await welcomePage.clickSignInButton();
//       await expect(signinWindow.title, "Sign-in window title should be visible").toBeVisible();
//     });

//     let passwordWindow: PasswordWindow;
//     await test.step('Enter username and click next button. Verify password window is displayed', async () => {
//       passwordWindow = await signinWindow.fillUserNameAndGoNext(user.username);
//       await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//     });

//     await test.step('Fill password and verify login button is enabled', async () => {
//       await passwordWindow.fillPasswordAndClickLogin(user.password);
//     });

//     const createPost = new CreatePost(page);
//     let postId;

//     await test.step('Enter text less than 280 characters and verify post button is enabled', async () => {
//       postId = await createPost.fillTweetAndClickPost('new tweet');
//     });

//     await test.step('Cleanup: Delete the created post', async () => {
//       if (postId) {
//         const response = await deletePost(postId, request);
//         expect(response.status()).toBe(204); 
//       }
//     });
//   });
// });

























// import test, { expect } from "@playwright/test";
// import { WelcomePage } from "../pages/welcomePage";
// import { SignInWindow } from "../windows/signinWindow";
// import { PasswordWindow } from "../windows/passwordWindow";
// import { CreatePost } from "../pages/HomePage/Feed/CreatePostComponent/createPost";
// import loginData from "../test-data/loginData.json"
// //import { UnlockWindow } from "../windows/unlockWindow";

// loginData.users.forEach((user, index) => {
//   test(`Verify post button is disabled.Message is visible User ${index + 1} @C126`, async ({ page }) => {
//     await page.goto('https://x.com/');
//     const welcomePage = new WelcomePage(page);
    

//     let signinWindow: SignInWindow;
//     await test.step('Click on signin button and verify signin window is displayed', async () => {
//         signinWindow = await welcomePage.clickSignInButton();
//         await expect(signinWindow.title, "Sign-in window title should be visible").toBeVisible();
//     });

//     let passwordWindow: PasswordWindow;
//     await test.step('Enter username and click next button. Verify password window is displayed', async () => {
//         passwordWindow = await signinWindow.fillUserNameAndGoNext(user.username);
//         await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//     });

//     await test.step('Fill password and verify login button is enabled', async () => {
//         await passwordWindow.fillPasswordAndClickLogin(user.password);
//     });

//     const createPost = new CreatePost(page);
//     //let unlockWindow: UnlockWindow;
//     await test.step('Enter text less than 280 characters and verify post button is enabled', async () => {
//         await createPost.fillTweetAndClickPost('0123456789012345asdf');
//         //expect(unlockWindow.clickGotItButtonAndGoNext())
//     });
//   });
// });
































// import test, { expect } from "@playwright/test";
// import { WelcomePage } from "../pages/welcomePage";
// import { SignInWindow } from "../windows/signinWindow";
// import { PasswordWindow } from "../windows/passwordWindow";
// import { AdditionalWindow } from "../windows/additionalWindow";
// import { CreatePost } from "../pages/HomePage/Feed/CreatePostComponent/createPost";

// test('Verify user can login with valid credentials @C126', async ({ page }) => {
//     await page.goto('https://x.com/');
//     const welcomePage = new WelcomePage(page);

//     let signinWindow: SignInWindow;
//     await test.step('Click on sign-in button and verify sign-in window is displayed', async () => {
//         signinWindow = await welcomePage.clickSignInButton();
//         await expect(signinWindow.title, "Sign-in window title should be visible").toBeVisible();
//     });

//     let additionalWindow: AdditionalWindow;
//     await test.step('Enter valid username and click next button. Verify additional window is displayed', async () => {
//         additionalWindow = await signinWindow.fillUserNameAndGoNext('Automation96078');
//         await expect(additionalWindow.title, "Additional window title should be visible").toBeVisible();
//     });

//     let passwordWindow: PasswordWindow;
//     await test.step('Enter phone or email and click next button. Verify password window is displayed', async () => {
//         passwordWindow = await additionalWindow.fillPhoneNumberOrEmailAndGoNext('automation_user@yopmail.com');
//         await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//     });

//     await test.step('Fill password and verify login button is enabled', async () => {
//         await passwordWindow.fillPasswordAndClickLogin('$automation_user123');
//     });

//     const createPost = new CreatePost(page);
//     await test.step('Enter text less than 280 characters and verify post button is enabled', async () => {
//         await createPost.fillTweetAndClickPost('0123456789');
//     });
// });









