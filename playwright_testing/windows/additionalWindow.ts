import { Locator, Page } from "@playwright/test"
import { PasswordWindow } from "./passwordWindow"


export class AdditionalWindow {
private readonly page: Page
private readonly phoneNumberOrEmailField: Locator
private readonly nextButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.phoneNumberOrEmailField = page.getByLabel('Phone or email')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.title = page.getByText('Enter your phone number or')
    }

    private async fillPhoneNumberOrEmail(phoneNumberOrEmail: string){
        await this.phoneNumberOrEmailField.fill(phoneNumberOrEmail);
        return this;
    }

    private async clickNextButton(){
        await this.nextButton.click()
        return new PasswordWindow(this.page)
    }

    public async fillPhoneNumberOrEmailAndGoNext(phoneNumberOrEmail: string){
        await this.fillPhoneNumberOrEmail(phoneNumberOrEmail)
        return await this.clickNextButton()
    }
}
