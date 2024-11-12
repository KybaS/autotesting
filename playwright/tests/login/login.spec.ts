import {expect, test} from '@playwright/test';
import {LoginPage} from "../../pages/login/login-page";

test('Login test', async ({page}) => {
    const loginPage = new LoginPage({page});

    await loginPage.gotoBaseURL(loginPage.baseURL);
    await expect(page).toHaveTitle('Get leads on iSpeedToLead and buy and sell contracted deals on DealSpeed!');

    await loginPage.loginDealSpeed(process.env.USER_EMAIL as string, process.env.USER_PASSWORD as string);
    await expect(loginPage.menuDashboard).toBeVisible();

});