import { expect, test } from "@playwright/test";
import { ClickSettings } from "../pages/HomePage/MainPage/Settings";

test('click setting and verify navigation ', async ({ page }) => {
    const setting = new ClickSettings(page);

    await setting.goto();

    await setting.clickSettings();

    // await expect(page).toHaveURL(/.*settings/); 

    const personalizationElement = page.getByText('Personalization');

    // await expect(personalizationElement).toBeVisible(); 

    await setting.gotoSettingsPage();

    await expect(page).toHaveURL('https://x.com/settings/account/personalization');
});
