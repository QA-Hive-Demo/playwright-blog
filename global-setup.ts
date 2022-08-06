import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://demoqa.com/login');
  await page.fill('id=userName', 'demoqahive01');
  await page.fill('id=password', 'T@stpw120');
  await Promise.all([
    page.waitForNavigation(),
    page.click('id=login')
  ]);
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;