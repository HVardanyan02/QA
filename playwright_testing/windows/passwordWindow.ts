import { Locator, Page } from "@playwright/test"

export class PasswordWindow {
    
private readonly page: Page
private readonly password: Locator
private readonly loginButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.password = page.getByLabel('Password', { exact: true })
        this.loginButton = page.getByTestId('LoginForm_Login_Button')
        this.title = page.getByText('Enter your password')
    }

    private async fillPassword(password: string){
        await this.password.fill(password);
        return this;
    }

    public async isLoginButtonEnabled(): Promise<boolean> {
        return await this.loginButton.isEnabled();
    }

    public async clickLoginButton(){
        await this.loginButton.click()
        // todo
    }

    //new
    public async fillPasswordAndClickLogin(password: string) {
        await this.fillPassword(password);
        const isEnabled = await this.isLoginButtonEnabled();
        if (isEnabled) {
            await this.clickLoginButton();
        } else {
            throw new Error("Login button is not enabled after filling the password.");
        }
    }
}