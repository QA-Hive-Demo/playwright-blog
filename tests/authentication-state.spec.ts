import fs from 'fs';
import { test, expect } from '@playwright/test';

test.use({ storageState: 'storageState.json' });
test.only('Reuse Authentication state', async ({ page }) => {
  
});
