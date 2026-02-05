import { test, expect, chromium } from '@playwright/test';
import {LoginPage} from '../../Pages/loginPage';
import {ProductPage} from '../../Pages/productPage';

test.describe('Test product', () => {
    let browser, context, page;
    let loginPage, productPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        await page.goto('https://automationexercise.com/');
       //navigate to login page
        await page.locator('a[href="/login"]').click();
        await loginPage.enterEmail('sahdeepmala777@gmail.com');
        await loginPage.enterPassword('Deepa@1234');
        await loginPage.clickLogin();

        // User redirected to Home page
        await expect(page).toHaveURL('https://automationexercise.com/');

        // Login successful
        await expect(page.locator('text=Logged in as')).toBeVisible();


 });

    test(' Verify All Products and product detail page', async() => {

        await productPage.clickProduct();

        await expect(page).toHaveURL('https://automationexercise.com/products');
       
        await productPage.clickViewfirstProductone();

        // User redirected to first product details page
        await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

        });

    test('  Search Product', async() => {
         //click on product url
        await productPage.clickProduct();
        //navigate to product url
        await expect(page).toHaveURL('https://automationexercise.com/products');
        //enterproductname
        await productPage.enterSearchProduct('Top');
        await productPage.clickSearchProductIcon();
        //click on search button
        await expect(page).toHaveURL('https://automationexercise.com/products?search=Top');

        });

    test('Add Products in Cart', async() => {

        await productPage.clickProduct(); 
        await expect(page).toHaveURL('https://automationexercise.com/products');
        //For First Product
        await productPage.hoveronProductOne(); 
        await productPage.clickonAddtoCartFirsthover(); 
        //click on continue
        expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await productPage.clickContinueShoppingBtn();
        //For Second Product
        await productPage.hoveronProductTwo(); 
        await productPage.clickonAddtoCartSecondhover(); 
        //click on view
        await productPage.clickonViewCartBtnSecondprd(); 
        expect(page.locator('//a[text()="Proceed To Checkout"]')).toBeVisible();
        
    });
        

    test('Verify Product quantity in Cart', async() => {

        await productPage.clickProduct(); 
        await expect(page).toHaveURL('https://automationexercise.com/products');


        await productPage.clickViewThirdProductBtn(); 
        await expect(page).toHaveURL('https://automationexercise.com/product_details/3');

        await productPage.selectQuantity(4); 

        await productPage.clickAddtoCartBtn();

        await productPage.waitForCartModal();
        await expect(productPage.modalContent).toBeVisible();

        await productPage.clickViewCart();
        await expect(page).toHaveURL('https://automationexercise.com/view_cart');

        });  

});