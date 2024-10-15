import { Locator, Page } from "@playwright/test"

export class LoginPage {
private readonly page: Page
private readonly usernameField: Locator
private readonly phoneNumberOrEmailField: Locator   //new
private readonly passwordField: Locator
private readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = page.getByPlaceholder('Username')
        this.phoneNumberOrEmailField = page.getByText('Email or phone number')   //new
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button',{name: 'Login'})
    }

    private async fillUserName(username: string){
        await this.usernameField.fill(username);
        return this;
    }

    private async fillPassword(password: string){
        await this.passwordField.fill(password);
        return this;
    }

    //new
    private async fillPhoneNumberOrEmail(phoneNumberOrEmail: string){
        await this.phoneNumberOrEmailField.fill(phoneNumberOrEmail);
        return this;
    }
    //

    public async clickLoginButton(){
        await this.loginButton.click()
    }

    public async fillCredentials(username: string, password: string, phoneNumberOrEmail: string){
        await this.fillUserName(username);
        await this.fillPhoneNumberOrEmail(phoneNumberOrEmail)    //new
        await this.fillPassword(password);
        return this;
    }
}
