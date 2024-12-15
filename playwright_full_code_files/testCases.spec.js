    const { test, expect } = require('@playwright/test');

test('Verify user login functionality', async ({ page }) => {
  const newLocal = await page.goto('https://onlinelibrary.wiley.com/');
  await page.click('text=Sign In'); // Adjust selector
  await page.fill('#username', 'test_user'); // Replace with a valid test username
  await page.fill('#password', 'test_password'); // Replace with a valid test password
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/home'); // Adjust expected URL
});

test('Verify search functionality', async function ({ page }) {
        await page.goto('https://onlinelibrary.wiley.com/');
        await page.fill('input[aria-label="Search"]', 'Quantum Physics');
        await page.press('input[aria-label="Search"]', 'Enter');
        const searchResults = await page.locator('.search-result-item');
        expect(await searchResults.count()).toBeGreaterThan(0); // Ensure results are displayed
    });

test('Verify logout functionality', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.click('text=Sign In'); // Adjust selector
  await page.fill('#username', 'test_user'); // Replace with a valid test username
  await page.fill('#password', 'test_password'); // Replace with a valid test password
  await page.click('button[type="submit"]');
  await page.click('text=Logout'); // Adjust selector
  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/'); // Adjust expected URL
});

