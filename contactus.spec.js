import { test, expect, chromium } from '@playwright/test';
import {LoginPage} from '../../Pages/loginPage';
import {ContactusPage} from '../../Pages/contactusPage';
import path from 'path';

test.describe('Test Contact Us', () => {
    let browser, context, page;
    let loginPage, contactusPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        contactusPage = new ContactusPage(page);
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

  test(' Contact Us', async() => {

        await contactusPage.clickContactusBtn();
        await expect(page).toHaveURL('https://automationexercise.com/contact_us');

        await contactusPage.enterContactname('Deepa');
        await contactusPage.enterContactemail('sahdeepmala777@gmail.com');
        await contactusPage.enterContactsubject('Computer');
        await contactusPage.enterContactmessage('here you go');

        const filePath = path.resolve(__dirname, '../../Image/me.jpg');
        await page.setInputFiles('input[type="file"]', filePath);

        await contactusPage.clickContactsubmit();
       //Alert message to be shown before get sucessfullymessage but didnt get locator for the alert message

       // await contactusPage.clickHomeBtn();
      //await expect(page).toHaveURL('https://automationexercise.com/');

      //didn't get the dialogue box after submitting

        });

  });
