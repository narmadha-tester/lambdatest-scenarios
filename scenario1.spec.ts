//scenario 1
import { test, expect } from '@playwright/test';
test('Scenario 1 - Simple Form Demo', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByText('Simple Form Demo').click();
    await expect(page).toHaveURL(/simple-form-demo/);
    await page.waitForLoadState('networkidle');
    const message = 'Welcome to TestMu AI';
    await page.locator('input#user-message').fill(message);
    await page.locator('#showInput').click();
    await expect(page.locator('#message')).toHaveText(message);
});