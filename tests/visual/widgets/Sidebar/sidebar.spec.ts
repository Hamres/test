import { test, expect } from '@playwright/test';

test('Sidebar visual: light expanded and collapsed', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?viewMode=story&id=widget-sidebar--light');

  const sidebar = page.locator('[data-testid="sidebar"]');
  const toggle = page.locator('[data-testid="sidebar-toggle"]');

  await sidebar.waitFor(); // ждем пока появится сайдбар
  await page.waitForTimeout(300); // время для корректного рендера

  // Скриншот в раскрытом виде
  await expect(sidebar).toHaveScreenshot('sidebar-light-expanded.png');

  await toggle.click();
  await page.waitForTimeout(300); // ждем закрытия

  // Скриншот в свернутом виде
  await expect(sidebar).toHaveScreenshot('sidebar-light-collapsed.png');
});

test('Sidebar visual: dark expanded and collapsed', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=widget-sidebar--dark');

  const sidebar = page.locator('[data-testid="sidebar"]');
  const toggle = page.locator('[data-testid="sidebar-toggle"]');

  await sidebar.waitFor();
  await page.waitForTimeout(300);

  await expect(sidebar).toHaveScreenshot('sidebar-dark-expanded.png');

  await toggle.click();
  await page.waitForTimeout(300);

  await expect(sidebar).toHaveScreenshot('sidebar-dark-collapsed.png');
});
