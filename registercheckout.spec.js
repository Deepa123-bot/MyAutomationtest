import { test, expect, chromium } from '@playwright/test';
import {RegisterCheckoutPage} from '../../Pages/registercheckoutPage';
import {TestsubscriptionPage} from '../../Pages/testsubscriptionPage';
import {ProductPage} from '../../Pages/productPage';
import  {LoginPage} from '../../Pages/loginPage';

test.describe('Register-Checkout and Remove-Product', () => {
    let browser, context, page;
    let registercheckoutPage,testsubscriptionPage,productPage,loginPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        productPage = new ProductPage(page);
        loginPage = new LoginPage(page);
        registercheckoutPage = new RegisterCheckoutPage(page);
        testsubscriptionPage = new TestsubscriptionPage(page);
        await page.goto('/');

        });
    test('Register while checkout', async() => {
        //Adding First Product in cart
        await registercheckoutPage.hoveronProductfirst(); 
        await registercheckoutPage.clickonAddtoCarthoverFirst(); 
        await expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await registercheckoutPage.clickContinueShoppingBtn();
        //click cart button
        await testsubscriptionPage.clickCartBtn();
        await page.goto('https://automationexercise.com/view_cart');
        //click proceed to checkout
        await registercheckoutPage.clickProceedtoCheckout();
        await expect(page.locator('div.modal-confirm a[href="/login"]')).toBeVisible();
        await page.goto('https://automationexercise.com/login');
        //sign up
        await registercheckoutPage.enterSignupName("Deepa Shah");
        await registercheckoutPage.enterSignupEmail("saadfteul2@gmail.com");
        await registercheckoutPage.clickSignupBtn();
       //redirected to enter information for register
        await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();
       //enter data for register
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
        await registercheckoutPage.enterMobileNo('98765432110');
        await registercheckoutPage.clickCreateBtn();
        //Navigate to url
        await page.goto('https://automationexercise.com/account_created');
       //click on continue button
        await registercheckoutPage.clickContinueBtn();
        await expect(page.locator('text=Logged in as')).toBeVisible();
        //click cart button
        await testsubscriptionPage.clickCartBtn();
        await page.goto('https://automationexercise.com/view_cart');
       //click on proceed to checkout button
        await registercheckoutPage.clickProceedtoCheckout();
        //navigate to url
        await page.goto('https://automationexercise.com/checkout');
        await expect(page.locator('h2:has-text("Review Your Order")')).toBeVisible();
        await registercheckoutPage.enterMessagehere('kk Experience Ever');
        await registercheckoutPage.clickplaceOrder();
        await page.goto('https://automationexercise.com/payment');
        //Enter all the details for payment to proceed
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterNameonCard('Deepa');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCardNumber('4111111111111111');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCVC('311');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterExpirationMonth('12');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterYear('2028');
        //click on confirm
        await registercheckoutPage.clickPayandConfirmBtn();
        //get order placed message
        await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();
        //Click on delete account btn
    /*  await registercheckoutPage.clickDeleteBtn();
        await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
       //click continue button after delete
        await registercheckoutPage.clickContinueAfterDelete();
       //Navigate to homepage
        await page.goto('https://automationexercise.com/'); */
});

     test('Register before checkout', async() => {
      //Navigate to url homepage
       await page.locator('a[href="/login"]').click();
       await page.goto('https://automationexercise.com/login');
      //Signup Account
       await registercheckoutPage.enterSignupName("Deepa Shah");
       await registercheckoutPage.enterSignupEmail("suoydala2@gmail.com");
       await registercheckoutPage.clickSignupBtn();
       await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();
      //Register Account
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
        await registercheckoutPage.enterMobileNo('98765432110');
        await registercheckoutPage.clickCreateBtn();
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
        await page.goto('https://automationexercise.com/checkout');
        //Verify address Detail and Review your Order
        await expect(page.locator('h2:has-text("Address Details")')).toBeVisible();
        await expect(page.locator('h2:has-text("Review Your Order")')).toBeVisible();
        //enter text in massage area and click place order
        await registercheckoutPage.enterMessagehere('best Experience Ever');
        await registercheckoutPage.clickplaceOrder();
        //Navigate to payment page
        await page.goto('https://automationexercise.com/payment');
        //Enter all the details for payment to proceed
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterNameonCard('Deepa');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCardNumber('4111111111111111');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCVC('311');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterExpirationMonth('12');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterYear('2028');
        //click on confirm
        await registercheckoutPage.clickPayandConfirmBtn();
        //get order placed message
        await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();
       //click delete account button
      /* await registercheckoutPage.clickDeleteBtn();
       await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
       //click continue after delete
        await registercheckoutPage.clickContinueAfterDelete();
       //Navigate to homepage after delete
        await page.goto('https://automationexercise.com/');  */


     });   

     test('Login before checkout', async() => {
       //Navigate to url homepage
       await page.locator('a[href="/login"]').click();
       await page.goto('https://automationexercise.com/login');
       //Login Registered user
        let email = process.env.EMAILID;
        console.log(email);
        let password = process.env.PASSWORD;
        console.log(password);
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.clickLogin();
        // User redirected to Home page
        await expect(page).toHaveURL('https://automationexercise.com/');
        // Login successful
         await expect(page.locator('text=Logged in as')).toBeVisible();
         //Add product to cart
        await registercheckoutPage.clickonAddtoCarthoverFirst(); 
        await expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await registercheckoutPage.clickContinueShoppingBtn();
        //click add to cart button
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
        await registercheckoutPage.enterMessagehere('best Experience Ever');
        await registercheckoutPage.clickplaceOrder();
        //Navigate to payment page
        await page.goto('https://automationexercise.com/payment');
        //Enter all the details for payment to proceed
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterNameonCard('Deepa');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCardNumber('4111111111111111');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterCVC('311');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterExpirationMonth('12');
        await registercheckoutPage.clickPayandConfirmBtn();
        await registercheckoutPage.enterYear('2028');
        //await page.waitForSelector('input[name="cardname"]', { state: 'visible' });
        //click on confirm
        await registercheckoutPage.clickPayandConfirmBtn();
       
        //get order placed message
        await expect(page.locator('p:has-text("Your order has been placed successfully!")')).toBeVisible();

     /* await registercheckoutPage.clickDeleteBtn();
     //  await expect(page.locator('h2:has-text("ACCOUNT DELETED!")')).toBeVisible();
       //click continue after delete
     //   await registercheckoutPage.clickContinueAfterDelete();
       //Navigate to homepage after delete
    //    await page.goto('https://automationexercise.com/'); */
      
    });
    test('Remove Product from Cart', async() => {
       //add to cart second product
       await registercheckoutPage.hoveronProductsecond();
       await registercheckoutPage.clickonAddtoCarthoverSecond(); 
       await expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
       await registercheckoutPage.clickContinueShoppingBtn();
       //click to cart button
       await testsubscriptionPage.clickCartBtn();
       //Navigate url
       await page.goto('https://automationexercise.com/view_cart'); 
       await registercheckoutPage.clickRemoveProductBtn();
       await expect(
       page.locator('p:has-text("Cart is empty! Click here to buy products.")')).toBeVisible();
       
    });
});
