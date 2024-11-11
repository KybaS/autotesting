import {Page} from '@playwright/test';
import {globalFrontRouteMapping} from './global-front-route-mapping';

export class BaseFrontPage {
    [x: string]: any;

    globalFrontRoute = globalFrontRouteMapping;

    $safeMarkup = "//*[@data-testid='safe-markup']";


    constructor(page: Page) {
        this.page = page;
        this.safeMarkup = page.locator(this.$safeMarkup);


    }

    async gotoBaseURL(url: string): Promise<void> {
        await this.page.goto(url);
    }

}