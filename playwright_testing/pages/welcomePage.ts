import { Locator, Page } from "@playwright/test"
import { SignInWindow } from "../windows/signinWindow"
import { CreateAccountWindow } from "../windows/createAccountWindow"


export class WelcomePage {
private readonly page: Page
private readonly signinButton: Locator
private readonly createAccountButton: Locator

    constructor(page: Page) {
        this.page = page
        this.signinButton = page.getByTestId('loginButton')
        this.createAccountButton = page.getByTestId('signupButton')
    }

    async clickSignInButton() {
        await this.signinButton.click(); 
        return new SignInWindow(this.page)
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
        return new CreateAccountWindow(this.page)
    }
}



// import { Locator, Page } from "@playwright/test"
// import { SignInWindow } from "../windows/signinWindow"


// export class WelcomePage {
// private readonly page: Page
// private readonly signinButton: Locator

//     constructor(page: Page) {
//         this.page = page
//         this.signinButton = page.getByTestId('loginButton')
//     }

//     async clickSignInButton() {
//         await this.signinButton.click(); 
//         return new SignInWindow(this.page)
//     }
// }
