import { test, expect } from '@playwright/test';

test('Button visual: primary', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?id=shared-button--primary',
  );
  const button = page.locator('[data-testid="storybook-button"]');
  await expect(button).toHaveScreenshot('button-primary.png');
});

test('Button visual: clear', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=shared-button--clear');
  const button = page.locator('[data-testid="storybook-button"]');
  await expect(button).toHaveScreenshot('button-clear.png');
});

test('Button visual: outlined', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?id=shared-button--outlined',
  );
  const button = page.locator('[data-testid="storybook-button"]');
  await expect(button).toHaveScreenshot('button-outlined.png');
});

test('Button visual: outlined-dark', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?id=shared-button--outlined-dark',
  );
  const button = page.locator('[data-testid="storybook-button"]');
  await expect(button).toHaveScreenshot('button-outlined-dark.png');
});
