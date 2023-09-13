import {test, expect, BrowserContext, Page} from '@playwright/test';
import {FirstApiClient} from "./first-api.client";
import {SecondApiClient} from "./second-api.client";

test.describe('Example', () => {
  let firstApiClient: FirstApiClient;
  let secondApiClient: SecondApiClient;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({browser}) => {
    firstApiClient = new FirstApiClient();
    await firstApiClient.initializeContext();
    secondApiClient = new SecondApiClient();
    await secondApiClient.initializeContext();
  });

  test.afterAll(async () => {
    await firstApiClient.dispose();
    await secondApiClient.dispose();
  });

  test.describe('inner tests', () => {
    test.beforeAll(async ({ browser }) => {
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto('https://playwright.dev/');
    });

    test.afterAll(async () => {
      await page.close();
      await context.close();
    });

    test('test', async () => {});
  });
})


