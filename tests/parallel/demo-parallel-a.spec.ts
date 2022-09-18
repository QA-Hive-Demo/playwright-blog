import { test, expect } from '@playwright/test';

// Before run test please update worker to 2
test.only('test A', async ({ page }, testInfo) => {
  console.log(`test A parallelIndex - ${testInfo.parallelIndex}`);
  await page.goto('https://demoqa.com/login');

  await page.fill('id=userName', 'demoqahive123');
  await page.fill('id=password', 'T@stpw120');
  await Promise.all([
    page.waitForNavigation(),
    page.click('id=login')
  ]);

  // Verify profile show username
  await expect(page.locator('id=userName-value')).toContainText('demoqahive123');
});
