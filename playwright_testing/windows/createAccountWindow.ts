import { Locator, Page } from "@playwright/test"
import { AuthenticateWindow } from "./authenticateCheck"

export class CreateAccountWindow {
private readonly page: Page
private readonly nameField: Locator
private readonly emailField: Locator
private readonly monthFiled: Locator
private readonly dayField: Locator
private readonly yearFiled: Locator
private readonly nextButton: Locator
public readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.nameField = page.getByText('Name')
        this.emailField = page.getByLabel('Email')
        this.monthFiled = page.getByLabel('Month')
        this.dayField = page.getByLabel('Day')
        this.yearFiled = page.getByLabel('Year')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.title = page.getByText('Create your account')
    }

    private async fillName(name: string){
        await this.nameField.fill(name);
        return this;
    }

    private async fillEmail(email: string) {
        await this.emailField.fill(email);
        return this;
    }

    private async fillMonth(month: string) {
        await this.monthFiled.selectOption(month);
        return this;
    }

    private async fillDay(day: string) {
        await this.dayField.selectOption(day);
        return this;
    }

    private async fillYear(year: string) {
        await this.yearFiled.selectOption(year);
        return this;
    }

    private async clickNextButton(){
        await this.nextButton.click();
        return this
    }

    public async isNextButtonEnabled(): Promise<boolean> {
        return await this.nextButton.isEnabled();
    }

    public async fillCredentialsAndGoNext(name: string, email: string, month: string, day: string, year: string){
        await this.fillName(name)
        await this.fillEmail(email)
        await this.fillMonth(month)
        await this.fillDay(day)
        await this.fillYear(year)
        const isEnabled = await this.isNextButtonEnabled();
        if (isEnabled) {
            await this.clickNextButton();
            return new AuthenticateWindow(this.page); 
        } else {
            throw new Error("Next button is not enabled after filling the data.");
        }
    }
}
