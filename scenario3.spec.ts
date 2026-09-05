//scenario 3
import { test, expect } from '@playwright/test';
test('Scenario 3 - Input Form Submit', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByText('Input Form Submit').click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Submit' }).click();
    const nameField = page.locator('#name');
    console.log(await nameField.evaluate((el: HTMLInputElement) => el.validationMessage)
);
    await nameField.fill('Narmadha');
    await page.locator('#inputEmail4').fill('narmadha@test.com');
    await page.locator('#inputPassword4').fill('Test@123');
    await page.locator('#company').fill('Test Company');
    await page.locator('#websitename').fill('https://test.com');
    await page.locator('select[name="country"]').selectOption({
    label: 'United States'
});
    await page.locator('#inputCity').fill('New York');
    await page.locator('#inputAddress1').fill('123 Test Street');
    await page.locator('#inputAddress2').fill('Test Apartment');
    await page.locator('#inputState').fill('New York');
    await page.locator('#inputZip').fill('10001');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
});