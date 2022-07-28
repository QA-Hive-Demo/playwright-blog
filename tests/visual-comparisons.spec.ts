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

test.only('example full page screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('landing-full-page.png', { fullPage: true });
});

test('example test text snaptshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});
