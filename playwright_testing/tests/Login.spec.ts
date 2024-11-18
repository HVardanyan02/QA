import  {test, expect} from "../utils/fixtures"
import { WelcomePage } from "../pages/welcomePage";
import { SignInWindow } from "../windows/signinWindow";
import { PasswordWindow } from "../windows/passwordWindow";
import loginData from "../test-data/loginData.json"

let user: {
  "username": string,
  "password": string,
  "email": string
}

test.beforeEach("Get user data", async ()=>{
  user = loginData.users.default
})

  test(`Verify user can login with valid credentials  @C2`, async ({ welcomePage }) => {
    let signinWindow: SignInWindow;
    await test.step('Click on signin button and verify signin window is displayed', async () => {
        signinWindow = await welcomePage.clickSignInButton();
        await expect(signinWindow.title, "Sign-in window title should be visible").toBeVisible();
    });

    let passwordWindow: PasswordWindow;
    await test.step('Enter username and click next button. Verify password window is displayed', async () => {
        passwordWindow = await signinWindow.fillUserNameAndGoNext(user.username);
        await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
    });

    await test.step('Fill password and verify login button is enabled', async () => {
        await passwordWindow.fillPasswordAndClickLogin(user.password);
    });

});































// import test, { expect } from "@playwright/test";
// import { WelcomePage } from "../pages/welcomePage";
// import { SignInWindow } from "../windows/signinWindow";
// import { PasswordWindow } from "../windows/passwordWindow";
// //import { AdditionalWindow } from "../windows/additionalWindow";

// test('Verify user can login with valid credentials @C123',async ({ page }) => {
//        await page.goto('https://x.com/');
//        const welcomePage = new WelcomePage(page)

//         let signinWindow: SignInWindow;
//         await test.step('Click on signin button and verify signin window is displayed',async() =>{
//             signinWindow = await welcomePage.clickSignInButton()
//             await expect(signinWindow.title, "signin window title should be visible").toBeVisible()
//         })

//         // let additionalWindow: AdditionalWindow
//         // await test.step('Enter valid username and click next button. Verify additional window is displayed', async() =>{
//         //     additionalWindow = await signinWindow.fillUserNameAndGoNext('Automation96078')
//         //     await expect(additionalWindow.title,"Additional widow title should be visible").toBeVisible();
//         // })

//         // let passwordWindow: PasswordWindow;
//         // await test.step('Enter phone or email and click next button. Verify additional window is displayed', async () => {
//         //     //passwordWindow = await additionalWindow.fillPhoneNumberOrEmailAndGoNext('automation_user@yopmail.com');
//         //     passwordWindow = await signinWindow.fillUserNameAndGoNext('Automation96078');
//         //     await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//         // });

//         let passwordWindow: PasswordWindow;
//         await test.step('Enter username and click next button. Verify password window is displayed', async () => {
//             passwordWindow = await signinWindow.fillUserNameAndGoNext('Automation96078');
//             await expect(passwordWindow.title, "Password window should be visible").toBeVisible();
//         });

//         await test.step('Fill password and verify login button is enabled', async () => {
//             await passwordWindow.fillPasswordAndClickLogin('$automation_user123');
//     });

// })
