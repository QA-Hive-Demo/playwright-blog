import { expect, test } from '@playwright/test';

test.use({ storageState: 'storageState.json' });
test.only('Reuse Authentication state', async ({ page }) => {
  await page.goto('https://demoqa.com/profile');
  await expect(page.locator('id=userName-value')).toContainText('demoqahive01');
});
