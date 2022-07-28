/*
* visual comparison update screenshots
* npx playwright test --update-snapshots
*
* Reference: https://playwright.dev/docs/test-snapshots
*
*/
import { test, expect } from '@playwright/test';

test('example page screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('landing.png');
});

test('example full page screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('landing-full-page.png', { fullPage: true });
});

test('example element screenshot', async({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(await page.locator('div.main-wrapper').screenshot()).toMatchSnapshot('main-wrapper.png');
});

test('example test text snaptshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});
