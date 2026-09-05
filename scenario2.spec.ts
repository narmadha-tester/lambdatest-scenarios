//scenario 2
import { test, expect } from '@playwright/test';
test('Scenario 2 - Drag & Drop Sliders', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByText('Drag & Drop Sliders').click();
    await page.waitForLoadState('networkidle');
    const slider = page.locator('input[type="range"][value="15"]');
    await slider.focus();
    await slider.press('End');
    for (let i = 0; i < 5; i++) {
    await slider.press('ArrowLeft');
    }
    await expect(slider).toHaveValue('95');
});