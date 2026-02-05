import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';
import {TestcasePage} from '../../Pages/testcasePage';


test.describe('Verify Test Case', () => {
    let browser, context, page;
    let loginPage, testcasePage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        testcasePage = new TestcasePage(page);
        await page.goto('https://automationexercise.com/');

        await page.locator('a[href="/login"]').click();
        await loginPage.enterEmail('sahdeepmala777@gmail.com');
        await loginPage.enterPassword('Deepa@1234');
        await loginPage.clickLogin();

        // User redirected to Home page
        await expect(page).toHaveURL('https://automationexercise.com/');

        // Login successful
        await expect(page.locator('text=Logged in as')).toBeVisible();

});

        test('Verify Test Cases Page', async() => {

      await testcasePage.clickTestCaseBtn();
   //await page.getByRole('link', { name: ' Test Cases' }).click();

      await expect(page).toHaveURL('https://automationexercise.com/test_cases');
      
 });


 });
