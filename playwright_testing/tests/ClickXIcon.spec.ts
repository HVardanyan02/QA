import { expect, test } from "@playwright/test";
import { ClickXIcon } from "../pages/HomePage/MainPage/XIcon";

test('click X icon  and verify navigation ', async ({ page }) => {
    const xIcon = new ClickXIcon(page);

    await xIcon.goto();

    await xIcon.clickXIcon();

    await xIcon.gotoStartPage();
});
