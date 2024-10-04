import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "@playwright/test";

let browser: Browser, page: Page;

Given("User navigates to the application", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  console.log("User navigates to the application");
  await page.goto("https://bookcarts.azurewebsites.net/");
});

Given("User clicks on the login link", async function () {
  console.log("User clicks on the login link");
  await page.locator("span[text()='Login']").click();
});

Given(
  "User enters the username as {string}",
  async function (username: string) {
    await page.locator("input[formcontrolname='username']").fill(username);
  }
);

Given(
  "User enters the password as {string}",
  async function (password: string) {
    await page.locator("input[formcontrolname='password']").fill(password);
  }
);

When("User clicks on the login button", async function () {
  await page.locator("button[color='primary']").click();
});

Then("Login should be success", async function () {
  const text = page.locator(
    "button[contains(@class, 'mat-focus-indicator mat-menu-trigger')]"
  );
  await expect(text).toBeVisible();
  console.log(text);
});

Then("Login should fail", async function () {
  const failureMessage = page.locator("mat-error[role='alert']");
  expect(failureMessage).toBeVisible();
  await browser.close();
});
