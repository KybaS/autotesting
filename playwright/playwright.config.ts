// @ts-check
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config: import('@playwright/test').PlaywrightTestConfig = {
    testDir: './tests',
    snapshotDir: 'expected_snapshots_650-980px',
    retries: 0,  // Retries failed tests twice

    /* Maximum time one test can run for. */
    timeout: 10 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 20000,
        toHaveScreenshot: {
            animations: "disabled",
            maxDiffPixelRatio: 0.001,
            maxDiffPixels: 1000,
            threshold:0.01
        }
    },

    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    //  reporter: 'html', line, list, dot
    reporter: [['html', { open: 'never' }]], //http://127.0.0.1:9323/

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {

        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 20000,
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: process.env.URL,

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1720, height: 980 },
                headless: false,
                screenshot: 'only-on-failure',
                timezoneId: 'Europe/Kiev',
                launchOptions: {
                    args: ['--disable-dev-shm-usage'],
                    devtools: false
                },
            },
        },
    ],

    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: 'playwright-artifacts/',

};

module.exports = config;
