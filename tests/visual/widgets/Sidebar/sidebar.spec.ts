import { test, expect } from '@playwright/test';

test('Sidebar visual: light expanded and collapsed', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?viewMode=story&id=widget-sidebar--light');
  await page.waitForTimeout(300);

  const sidebar = page.locator('[data-testid="sidebar"]');
  const toggle = page.locator('[data-testid="sidebar-toggle"]');

  await sidebar.waitFor();

  await expect(await sidebar.screenshot()).toMatchSnapshot('sidebar-light-expanded.png');

  await toggle.click();
  await page.waitForTimeout(300);

  await expect(await sidebar.screenshot()).toMatchSnapshot('sidebar-light-collapsed.png');
});

test('Sidebar visual: dark', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=widget-sidebar--dark');
  await page.waitForTimeout(300);

  const sidebar = page.locator('[data-testid="sidebar"]');
  const toggle = page.locator('[data-testid="sidebar-toggle"]');

  await sidebar.waitFor();

  await expect(await sidebar.screenshot()).toMatchSnapshot('sidebar-dark-expanded.png');

  await toggle.click();
  await page.waitForTimeout(300);

  await expect(await sidebar.screenshot()).toMatchSnapshot('sidebar-dark-collapsed.png');
});
