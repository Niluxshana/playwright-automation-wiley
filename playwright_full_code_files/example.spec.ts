import { test, expect } from '@playwright/test';

// Test 1: Verify the page title on 'example.com'
test('Verify Page Title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// Test 2: Verify that the "More Information" link is visible
test('Verify Link Visibility', async ({ page }) => {
  await page.goto('https://example.com');
  const moreInfoLink = await page.locator('a[href="https://www.iana.org/domains/example"]');
  await expect(moreInfoLink).toBeVisible();
});

// Test 3: Verify the presence of a paragraph with specific text
test('Verify Paragraph Text', async ({ page }) => {
  await page.goto('https://example.com');
  const paragraph = await page.locator('p');
  const textContent = await paragraph.textContent();
  expect(textContent).toContain('This domain is established to be used for illustrative examples in documents.');
});
