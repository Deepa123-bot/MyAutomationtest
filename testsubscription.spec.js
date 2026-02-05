import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';
import {TestsubscriptionPage} from '../../Pages/testsubscriptionPage';


test.describe('Verify Test Subscription', () => {
    let browser, context, page;
    let loginPage, testsubscriptionPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        testsubscriptionPage = new TestsubscriptionPage(page);
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
  
 test('Verify Test Subscription in homepage', async() => {

      const subscriptionText = page.locator('text=SUBSCRIPTION');
      // Verify it is visible
      await expect(subscriptionText).toBeVisible();

      await testsubscriptionPage.enterTestSubscriptionBtn('sahdeepmala777@gmail.com');
      await testsubscriptionPage.clickTestSubscriptionarrow();
      await expect(page.locator('text=successfully subscribed')).toBeVisible();
 });

 test('Verify Subscription in Cart Page', async() => {

     await testsubscriptionPage.clickCartBtn();
     await page.goto(' https://automationexercise.com/view_cart');
     const subscriptionText = page.locator('text=SUBSCRIPTION');
      // Verify it is visible
     await expect(subscriptionText).toBeVisible();
     await testsubscriptionPage.enterTestSubscriptionBtn('sahdeepmala777@gmail.com');
     await testsubscriptionPage.clickTestSubscriptionarrow();
     await expect(page.locator('text=successfully subscribed')).toBeVisible();
 });

 });
