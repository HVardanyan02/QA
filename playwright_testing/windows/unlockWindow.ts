import { Locator, Page } from "@playwright/test"

export class UnlockWindow {
private readonly page: Page
private readonly gotItButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.gotItButton = page.getByRole('button', { name: 'Got it' })
        this.title = page.getByText('Unlock more on X')
    }

    private async clickGotItButton(){
        await this.gotItButton.click()
        return this.page
    }

    public async clickGotItButtonAndGoNext(){
        return await this.clickGotItButton()
    }
}
