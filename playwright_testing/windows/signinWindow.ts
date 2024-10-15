import { Locator, Page } from "@playwright/test"
import { PasswordWindow } from "./passwordWindow"
import { AdditionalWindow } from "./additionalWindow"


export class SignInWindow {
private readonly page: Page
private readonly usernameField: Locator
private readonly nextButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = page.getByLabel('Phone, email, or username')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.title = page.getByText('Sign in to X')
    }

    private async fillUserName(username: string){
        await this.usernameField.fill(username);
        return this;
    }
    //correct version
    // private async clickNextButton(){
    //     await this.nextButton.click()
    //     return new PasswordWindow(this.page)
    // }

    private async clickNextButton(){
        await this.nextButton.click();
        return new AdditionalWindow(this.page)
    }
    public async fillUserNameAndGoNext(username: string){
        await this.fillUserName(username)
        return await this.clickNextButton()
    }
}
