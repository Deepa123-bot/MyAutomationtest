import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';
import {RegisterCheckoutPage} from '../../Pages/registercheckoutPage';
import {TestsubscriptionPage} from '../../Pages/testsubscriptionPage';
import {AddressPage} from '../../Pages/addressPage';
import {RegisteruserPage} from '../../Pages/registeruserPage';


test.describe('Test 23 and 24', () => {
    let browser, context, page;
    let loginPage,registercheckoutPage;
    let testsubscriptionPage,addressPage,registeruserPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        testsubscriptionPage = new TestsubscriptionPage(page);
        registercheckoutPage = new RegisterCheckoutPage(page);
        registeruserPage = new RegisteruserPage(page);
        addressPage = new AddressPage(page);
        await page.goto('/');

       // await page.locator('a[href="/login"]').click();

        });

    test('Verify Address Details in Checkout Page', async() => {

        //Navigate to url homepage
        await page.locator('a[href="/login"]').click();
        await page.goto('https://automationexercise.com/login');
        //Signup Account
        await registeruserPage.enterSignupName("Deepa Shah");
        await registeruserPage.enterSignupEmail("Shaaag2@gmail.com");
        await registeruserPage.clickSignupBtn();
        await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible();
        //Register Account
        await registeruserPage.clickGenderBtn();
        await registeruserPage.enterPasswrd('Deepa@123456');
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
        //Redirect to another url
        await page.goto('https://automationexercise.com/account_created');
        await registercheckoutPage.clickContinueBtn();
        //redirected to homepage with login
        await expect(page.locator('text=Logged in as')).toBeVisible();
       //Add product to cart
        await registercheckoutPage.clickonAddtoCarthoverFirst(); 
        await expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await registercheckoutPage.clickContinueShoppingBtn();
       //click  to cart button
        await testsubscriptionPage.clickCartBtn();
        //Navigate url
        await page.goto('https://automationexercise.com/view_cart');  
        //click proceed to checkout
        await registercheckoutPage.clickProceedtoCheckout();
        await expect(page.locator('h2:has-text("Address Details")')).toBeVisible();
        //after this is remaining do it later

        /* await registercheckoutPage.clickDeleteBtn();
        //  await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
        //click continue after delete
       // await registercheckoutPage.clickContinueAfterDelete();
       //Navigate to homepage after delete
       // await page.goto('https://automationexercise.com/'); */

 });

 test(' Download Invoice after purchase order', async() => {
        //Adding First Product in cart
        await registercheckoutPage.hoveronProductfirst(); 
        await registercheckoutPage.clickonAddtoCarthoverFirst(); 
        await expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await registercheckoutPage.clickContinueShoppingBtn();
        //click on cart button
        await testsubscriptionPage.clickCartBtn();
        await page.goto('https://automationexercise.com/view_cart');
        //click proceed to checkout
        await registercheckoutPage.clickProceedtoCheckout();
        await expect(page.locator('div.modal-confirm a[href="/login"]')).toBeVisible();
        await page.goto('https://automationexercise.com/login');
        //signup 
        await registercheckoutPage.enterSignupName("Deepa Shah");
        await registercheckoutPage.enterSignupEmail("SamAsddf@gmail.com");
        //click sign up button
        await registercheckoutPage.clickSignupBtn();
        //get Account Information or redirected to create account page
        await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();
        //fill all information to create account
        await registercheckoutPage.clickGenderBtn();
        await registercheckoutPage.enterPasswrd('Deepa@123456');
        await registercheckoutPage.selectDay('1');
        await registercheckoutPage.selectMonth('June');
        await registercheckoutPage.selectYear('2002');
        await registercheckoutPage.clickBtn();
        await registercheckoutPage.enterFirstName('Deepa');
        await registercheckoutPage.enterLastName('Shah');
        await registercheckoutPage.enterCompany('Remoteaxle');
        await registercheckoutPage.enterAddressone('Kathmandu Nepal');
        await registercheckoutPage.enterAddresstwo('Kathmandu Nepal');
        await registercheckoutPage.selectCountry('India');
        await registercheckoutPage.enterState('Bagmati');
        await registercheckoutPage.enterCity('Kathmandu');
        await registercheckoutPage.enterZipcode('2345678');
        await registercheckoutPage.enterMobileNo('987654310');
        await registercheckoutPage.clickCreateBtn();
        //redirect to the given url after create account
        await page.goto('https://automationexercise.com/account_created');
        //click on continue button
        await registercheckoutPage.clickContinueBtn();
        //get loggedin as test visible at top
        await expect(page.locator('text=Logged in as')).toBeVisible();
        //click  to cart button
        await testsubscriptionPage.clickCartBtn();
        //Navigate url
        await page.goto('https://automationexercise.com/view_cart');  
        //click proceed to checkout
        await registercheckoutPage.clickProceedtoCheckout();
        await page.goto('https://automationexercise.com/checkout');
        //Verify address Detail and Review your Order
        await expect(page.locator('h2:has-text("Address Details")')).toBeVisible();
        await expect(page.locator('h2:has-text("Review Your Order")')).toBeVisible();
        //enter text in massage area and click place order
        await registercheckoutPage.enterMessagehere('Hlo Experience Ever');
        await registercheckoutPage.clickplaceOrder();
        //Navigate to payment page
        await page.goto('https://automationexercise.com/payment');
        //Enter all the details for payment to proceed
        await registercheckoutPage.enterNameonCard('hepa');
        await registercheckoutPage.enterCardNumber('4111111111111');
        await registercheckoutPage.enterCVC('811');
        await registercheckoutPage.enterExpirationMonth('10');
        await registercheckoutPage.enterYear('2090');
        //click on confirm
        await registercheckoutPage.clickPayandConfirmBtn();
        //get order placed message
        //Click 'Download Invoice' button and verify invoice is downloaded successfully.
        await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
        await page.goto('https://automationexercise.com/payment_done/0');
        await addressPage.clickDownloadBtn();          
        await addressPage.clickContinueBtn();  
});


  });