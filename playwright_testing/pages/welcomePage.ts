import { Locator, Page } from "@playwright/test"
import { SignInWindow } from "../windows/signinWindow"


export class WelcomePage {
private readonly page: Page
private readonly signinButton: Locator

    constructor(page: Page) {
        this.page = page
        this.signinButton = page.getByTestId('loginButton')
    }

    async clickSignInButton() {
        await this.signinButton.click(); 
        return new SignInWindow(this.page)
    }
}
