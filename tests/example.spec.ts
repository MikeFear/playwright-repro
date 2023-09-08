import {test, expect, BrowserContext, Page} from '@playwright/test';
import {ApiClient} from "./api.client";

test.describe('Example', () => {
  let apiClient: ApiClient;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    apiClient = new ApiClient();
    await apiClient.initializeContext();
  })

  test.describe('inner tests', () => {
    test.beforeAll(async ({browser}) => {
      context = await browser.newContext();
      page = await context.newPage();
    });

    test.afterAll(async ({browser}) => {
      await context.close();
    });

    test('get started link', async () => {
      await apiClient.createPost();
      await page.goto('https://playwright.dev/');

      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();

      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
  });
})


