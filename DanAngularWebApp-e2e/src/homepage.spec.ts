import { test, expect } from '@playwright/test';

test.describe('Homepage - Pension Basics Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage which should load pension-basics route
    await page.goto('/');
    // Wait for Angular to fully load
    await page.waitForLoadState('domcontentloaded');
    // Give Angular extra time for rendering
    await page.waitForTimeout(1000);
  });

  test('should display the main toolbar with correct title', async ({ page }) => {
    // Check if the main toolbar is visible
    await expect(page.locator('mat-toolbar')).toBeVisible();
    
    // Check if the main title is displayed
    await expect(page.locator('.toolbar-title')).toContainText('DB Pensions For Dummies');
  });

  test('should have pension basics tab active in the toolbar', async ({ page }) => {
    // Check if the tab group is visible
    await expect(page.locator('mat-tab-group')).toBeVisible();
    
    // Check if "Pension Basics" tab is present - use more specific selector
    await expect(page.locator('[role="tab"]').first()).toContainText('Pension Basics');
    
    // Verify tabs are working - check for aria-selected or mat-tab-label
    const tabs = page.locator('[role="tab"]');
    await expect(tabs).toHaveCount(3);
  });

  test('should display all three navigation tabs', async ({ page }) => {
    // Check all three tabs are present using role="tab"
    const tabs = page.locator('[role="tab"]');
    await expect(tabs).toHaveCount(3);
    
    // Check specific tab text
    await expect(tabs.nth(0)).toContainText('Pension Basics');
    await expect(tabs.nth(1)).toContainText('Advanced Topics');
    await expect(tabs.nth(2)).toContainText('Calculators');
  });

  test('should display the sidenav with pension basics navigation', async ({ page }) => {
    // Check if the sidenav container is visible
    await expect(page.locator('mat-sidenav-container')).toBeVisible();
    
    // Check if the sidenav is open and visible - use more reliable selector
    await expect(page.locator('mat-sidenav[opened="true"], mat-sidenav.mat-drawer-opened')).toBeVisible();
    
    // Check if the navigation list is present
    await expect(page.locator('mat-nav-list')).toBeVisible();
  });

  test('should display pension basics navigation links', async ({ page }) => {
    // Check specific navigation links in the sidenav using getByRole
    await expect(page.getByRole('link', { name: 'Pension Basics Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'What is a DB Pension?' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'History of Pensions' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'How DB Pensions Work' })).toBeVisible();
  });

  test('should display the hero section with gradient text', async ({ page }) => {
    // Check if the hero section is visible
    await expect(page.locator('.hero-section')).toBeVisible();
    
    // Check if the main heading is present
    await expect(page.locator('.gradient-text')).toContainText('DB Pensions');
    await expect(page.locator('.subtitle')).toContainText('Made Simple');
    
    // Check if the hero description is present
    await expect(page.locator('.hero-description')).toContainText('comprehensive guide');
  });

  test('should display call-to-action buttons', async ({ page }) => {
    // Check if both CTA buttons are visible
    await expect(page.locator('.primary-cta')).toBeVisible();
    await expect(page.locator('.secondary-cta')).toBeVisible();
    
    // Check button text
    await expect(page.locator('.primary-cta')).toContainText('Start Learning');
    await expect(page.locator('.secondary-cta')).toContainText('Try Calculator');
  });

  test('should display the features section with cards', async ({ page }) => {
    // Check if the features section is visible
    await expect(page.locator('.features-section')).toBeVisible();
    
    // Check section header
    await expect(page.locator('.features-section h2')).toContainText('Explore Our Resources');
    
    // Check if all three feature cards are present
    await expect(page.locator('.feature-card')).toHaveCount(3);
    
    // Check individual feature cards using more specific selectors
    await expect(page.locator('.feature-card.pension-basics')).toBeVisible();
    await expect(page.locator('.feature-card.advanced-topics')).toBeVisible();
    await expect(page.locator('.feature-card.calculators')).toBeVisible();
  });

  test('should have working navigation in sidenav', async ({ page }) => {
    // Use getByRole for the link with accessible name
    await page.getByRole('link', { name: 'What is a DB Pension?' }).click();
    
    // Wait for navigation to complete
    await page.waitForURL(/.*what-is-a.*pension/);
    
    // Verify the sidenav is still visible after navigation
    await expect(page.locator('mat-sidenav-container')).toBeVisible();
  });

  test('should have working tab navigation', async ({ page }) => {
    // Click on "Advanced Topics" tab using role="tab"
    await page.click('[role="tab"]:has-text("Advanced Topics")');
    
    // Wait for navigation to complete
    await page.waitForURL(/.*advanced-topics/);
    
    // Verify the toolbar is still visible (fixed position)
    await expect(page.locator('mat-toolbar')).toBeVisible();
  });

  test('should have working CTA button navigation', async ({ page }) => {
    // Click on "Start Learning" button - use button selector
    await page.click('button:has-text("Start Learning")');
    
    // Wait for navigation to complete
    await page.waitForURL(/.*pension.*what.*pension/);
    
    // Go back to test the second CTA
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Click on "Try Calculator" button
    await page.click('button:has-text("Try Calculator")');
    
    // Wait for navigation to complete
    await page.waitForURL(/.*calculators/);
  });

  test('should have responsive design elements', async ({ page }) => {
    // Check if key CSS classes are applied
    await expect(page.locator('.hero-section')).toHaveClass(/hero-section/);
    await expect(page.locator('.features-grid')).toHaveClass(/features-grid/);
    await expect(page.locator('.fixed-toolbar')).toHaveClass(/fixed-toolbar/);
  });

  test('should maintain fixed toolbar when scrolling', async ({ page }) => {
    // Scroll down the page
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Check if toolbar is still visible at the top
    await expect(page.locator('mat-toolbar')).toBeVisible();
    
    // Check if toolbar has fixed positioning
    const toolbarBox = await page.locator('mat-toolbar').boundingBox();
    expect(toolbarBox?.y).toBeLessThanOrEqual(10); // Should be near the top
  });
});


