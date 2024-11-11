import {Page} from "@playwright/test";
import {BaseFrontPage} from "../base-front-page";


export class LoginPage extends BaseFrontPage {

    baseURL = this.globalFrontRoute.get("login") as string;

    $emailLoginField = "input[type='email']";
    $passwordLoginField = "input[type='password']";
    $submitButton = "//*[@type='submit']";

    constructor({page}: { page: Page; }) {
        super(page);

        this.emailLoginField = page.locator(this.$emailLoginField);
        this.passworLogindField = page.locator(this.$passwordLoginField);
        this.submitButton = page.locator(this.$submitButton);
    }

    async loginDealSpeed($emailLoginField: string, $passwordLoginField: string) {
        await this.page.fill(this.$emailLoginField, $emailLoginField);
        await this.page.fill(this.$passwordLoginField, $passwordLoginField);
        await this.page.click(this.$submitButton);

    }
}