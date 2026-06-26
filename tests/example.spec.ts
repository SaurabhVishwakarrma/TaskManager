import { test, expect } from "@playwright/test";
import { dragPage } from "../pages/dragPage";
let dragpage: dragPage;

 
test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:5500");
   dragpage = new dragPage(page);

});
test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page.getByText("TASK MANAGER")).toBeVisible();
});

test("add multiple tasks", async ({ page }) => {
  await page.locator("#taskInput").fill("Saurabh");
  await page.locator(".add-btn").click();

  await page.locator("#taskInput").fill("Dnyanesh");
  await page.locator(".add-btn").click();

  await page.locator("#taskInput").fill("Jayesh");
  await page.locator(".add-btn").click();

  await expect(page.locator('[data-index="0"]')).toContainText("Saurabh");
  await expect(page.locator('[data-index="1"]')).toContainText("Dnyanesh");
  await expect(page.locator('[data-index="2"]')).toContainText("Jayesh");
});

test("Drag-tasks", async ({ page }) => {
  await page.locator("#taskInput").fill("Saurabh");
  await page.locator(".add-btn").click();

  await page.locator("#taskInput").fill("Dnyanesh");
  await page.locator(".add-btn").click();

  await page.locator("#taskInput").fill("Jayesh");
  await page.locator(".add-btn").click();

  await expect(page.locator('[data-index="0"]')).toContainText("Saurabh");
  await expect(page.locator('[data-index="1"]')).toContainText("Dnyanesh");
  await expect(page.locator('[data-index="2"]')).toContainText("Jayesh");

    let source = page.locator('[data-index="0"]');
    let target = page.locator('[data-index="2"]');
    await source.dragTo(target);

      await expect(page.locator('[data-index="0"]')).toContainText("Dnyanesh");
      await expect(page.locator('[data-index="1"]')).toContainText("Jayesh");
      await expect(page.locator('[data-index="2"]')).toContainText("Saurabh");

});
test("adding via function", async ({ page }) => {
 await dragpage.corelogic()
});