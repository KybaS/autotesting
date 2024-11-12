import {Page} from '@playwright/test';
import {globalFrontRouteMapping} from './global-front-route-mapping';

export class BaseFrontPage {
    [x: string]: any;

    globalFrontRoute = globalFrontRouteMapping;

    $menuDashboard = "#dashboard-item";


    constructor(page: Page) {
        this.page = page;
        this.menuDashboard = page.locator(this.$menuDashboard);

    }

    async gotoBaseURL(url: string): Promise<void> {
        await this.page.goto(url);
    }

}