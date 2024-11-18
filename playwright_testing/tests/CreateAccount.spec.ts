import test, { expect } from "@playwright/test";
import { WelcomePage } from "../pages/welcomePage";
import { CreateAccountWindow } from "../windows/createAccountWindow";
import { AuthenticateWindow } from "../windows/authenticateCheck";

test.use({ headless: false });

test('Verify user can create account with valid credentials @C124',async ({ page }) => {
    
        await page.goto('https://x.com/');
        const welcomePage = new WelcomePage(page)

        let createAccountWindow: CreateAccountWindow;
        await test.step('Click on create account button and verify create account window is displayed',async() =>{
            createAccountWindow = await welcomePage.clickCreateAccountButton()
            await expect(createAccountWindow.title, "create account window title should be visible").toBeVisible()
        })

        let authenticateWindow: AuthenticateWindow;
        await test.step('Enter valid Name, Email, and Date of birth. Verify next button is enabled', async () => {
            authenticateWindow = await createAccountWindow.fillCredentialsAndGoNext('User', 'user@mail.ru', 'June', '10', '2005');
            await expect(authenticateWindow.title, 'Authentication window should be visible').toBeVisible();
        });

        await test.step('Handle CAPTCHA for Testing', async () => {
            const frame = await page.frameLocator('iframe[title="arkose-frame"]');
            const arrowButton = frame.locator('text="Move to Orbit"');
            await arrowButton.click();
        });

       //verification code 
    
})