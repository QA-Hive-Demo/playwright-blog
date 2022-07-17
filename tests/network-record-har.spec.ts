import { test, expect } from '@playwright/test';

// Record HAR by running
// npx playwright open --save-har=hars/valid-login-har.har --save-har-glob="**/v1/**" https://demoqa.com/login
test('mock network using HAR file', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  // Replay record HAR files
  await page.routeFromHAR('hars/valid-login-har.har');

  await page.fill('id=userName', 'demoqahive0123');
  await page.fill('id=password', 'T@stpw120');
  await Promise.all([
    page.waitForNavigation(),
    page.click('id=login')
  ]);

  // Verify profile show username
  await expect(page.locator('id=userName-value')).toContainText('demoqahive0123');
});
