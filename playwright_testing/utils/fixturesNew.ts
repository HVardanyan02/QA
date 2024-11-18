// import { test as base, expect, Page } from "@playwright/test";
// import { WelcomePage } from "../pages/welcomePage";
// import { SignInWindow } from "../windows/signinWindow";
// import { PasswordWindow } from "../windows/passwordWindow";
// import loginData from "../test-data/loginData.json";
// import { MainPage } from "../pages/HomePage/MainPage/mainPage";
// import { AdditionalWindow } from "../windows/additionalWindow";

// type AuthFixtures = {
//   welcomePage: WelcomePage;
//   signinWindow: SignInWindow;
//   passwordWindow: PasswordWindow;
//   mainPage: MainPage;
//   additionalWindow: AdditionalWindow;
// };

// export const test = base.extend<AuthFixtures>({
//   welcomePage: async ({ page }, use) => {
//     await page.goto('https://x.com/');
//     const welcomePage = new WelcomePage(page);
//     await use(welcomePage);
//   },

//   signinWindow: async ({ welcomePage }, use) => {
//     const user = loginData.users.default
//     const signinWindow = await welcomePage.clickSignInButton();
//     await expect(signinWindow.title, "Sign in window title should be visible").toBeVisible();
//     const additionalWindow = signinWindow.fillUserNameAndGoNext(user.username)
//     await use(signinWindow);
//   },

//   additionalWindow: async ({ signinWindow, page }, use) => {
//     const user = loginData.users.default;
//     const additionalWindow = new AdditionalWindow(page);
//     await additionalWindow.fillPhoneNumberOrEmailAndGoNext(user.email);
//     await use(additionalWindow);
//   },

//   passwordWindow: async ({ additionalWindow, page }, use) => {
//     const user = loginData.users.default;
//     const passwordWindow = new PasswordWindow(page);
//     await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//     await passwordWindow.fillPasswordAndClickLogin(user.password);
//     await use(passwordWindow);
//   },

//   mainPage: async ({ passwordWindow, page }, use) => {
//     const mainPage = new MainPage(page);
//     await use(mainPage);
//   },
// });

// export { expect };
















// //no additional window

import { test as base, expect, Page } from "@playwright/test";
import { WelcomePage } from "../pages/welcomePage";
import { SignInWindow } from "../windows/signinWindow";
import { PasswordWindow } from "../windows/passwordWindow";
import loginData from "../test-data/loginData.json";
import { MainPage } from "../pages/HomePage/MainPage/mainPage";
import { AdditionalWindow } from "../windows/additionalWindow";

type AuthFixtures = {
  welcomePage: WelcomePage;
  signinWindow: SignInWindow;
  passwordWindow: PasswordWindow;
  mainPage: MainPage;
};

export const test = base.extend<AuthFixtures>({
  welcomePage: async ({ page }, use) => {
    await page.goto('https://x.com/');
    const welcomePage = new WelcomePage(page);
    await use(welcomePage);
  },

  signinWindow: async ({ welcomePage }, use) => {
    const signinWindow = await welcomePage.clickSignInButton();
    await expect(signinWindow.title, "Sign in window title should be visible").toBeVisible();
    await use(signinWindow);
  },

  passwordWindow: async ({ signinWindow , page }, use) => {
    const user = loginData.users.default;
    const passwordWindow = new PasswordWindow(page); 
    await signinWindow.fillUserNameAndGoNext(user.username);
    await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
    await use(passwordWindow);
   
  },

  mainPage: async ({ passwordWindow, page }, use) => {
    const user = loginData.users.default; 
    await passwordWindow.fillPasswordAndClickLogin(user.password);
    //await page.goto('https://x.com/home');
    const mainPage = new MainPage(page);
    await use(mainPage);
},
});

export { expect };
