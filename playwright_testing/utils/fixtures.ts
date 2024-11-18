import { test as base } from '@playwright/test';
//import { SignInWindow } from '../windows/signinWindow';
import { WelcomePage } from '../pages/welcomePage';
import { MainPage } from '../pages/HomePage/MainPage/mainPage';

type MyFixtures = {
  welcomePage: WelcomePage;
  mainPage: MainPage
};

export const test = base.extend<MyFixtures>({
  welcomePage: async ({ page }, use) => {
    await page.goto('https://x.com/');
    const welcomePage = new WelcomePage(page);
    //await welcomePage.clickCreateAccountButton();

    await use(welcomePage);
  },


  mainPage: async ({ page }, use) => {
    await page.goto('https://x.com/home')
    const mainPage = new MainPage(page);

    await use(mainPage);
    // open window ...

    //await use();
  },
});
export { expect } from '@playwright/test';
