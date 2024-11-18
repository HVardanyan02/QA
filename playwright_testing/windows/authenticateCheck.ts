import { Locator, Page } from "@playwright/test"

export class AuthenticateWindow {
private readonly page: Page
private readonly authenticateNextButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.authenticateNextButton = page.getByRole('button', { name: 'Next' })
        const frame = page.frameLocator('iframe[title="arkoseFrame"]'); 
        const title = frame.locator('text="Authenticate your account"');
        this.title = page.locator('iframe[title="arkoseFrame"]')
    }

    private async clickAuthenticateButton(){
        await this.authenticateNextButton.click();
        return this
    }
}

