import { test, expect, chromium } from '@playwright/test';
import {RegisteruserPage} from '../../Pages/registeruserPage';
//import {TestsubscriptionPage} from '../../Pages/testsubscriptionPage';
import {ProductPage} from '../../Pages/productPage';
import  {LoginPage} from '../../Pages/loginPage';

test.describe('Register User', () => {
    let browser, context, page;
    let registeruserPage,productPage,loginPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        productPage = new ProductPage(page);
        loginPage = new LoginPage(page);
        registeruserPage = new RegisteruserPage(page);
       // testsubscriptionPage = new TestsubscriptionPage(page);
        await page.goto('/');

        await page.locator('a[href="/login"]').click();

        });
    test('Register User', async() => {
        //Hiding the password
        let signuppassword = process.env.SIGNUPPASSWORD;
        console.log(signuppassword);
       //Siggnup Account
       await registeruserPage.enterSignupName("Deepa Shah");
       await registeruserPage.enterSignupEmail("suy2@gmail.com");
       await registeruserPage.clickSignupBtn();
       //Navigate to url
       await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();
      //Register Account
       await registeruserPage.clickGenderBtn();
        await registeruserPage.enterPasswrd(signuppassword);
        await registeruserPage.selectDay('1');
        await registeruserPage.selectMonth('June');
        await registeruserPage.selectYear('2002');
        await registeruserPage.clickBtn();
        await registeruserPage.enterFirstName('Deepa');
        await registeruserPage.enterLastName('Shah');
        await registeruserPage.enterCompany('Remoteaxle');
        await registeruserPage.enterAddressone('Kathmandu Nepal');
        await registeruserPage.enterAddresstwo('Kathmandu Nepal');
        await registeruserPage.selectCountry('India');
        await registeruserPage.enterState('Bagmati');
        await registeruserPage.enterCity('Kathmandu');
        await registeruserPage.enterZipcode('2345678');
        await registeruserPage.enterMobileNo('98765432110');
        await registeruserPage.clickCreateBtn();
        //Redirect to another url
        await page.goto('https://automationexercise.com/account_created');
        await registeruserPage.clickContinueBtn();
      //redirected to homepage with login
        await expect(page.locator('text=Logged in as')).toBeVisible();
});


});