import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';
import  {CategoryproductPage} from '../../Pages/categoryproductPage';
import {ProductPage} from '../../Pages/productPage';
import {TestsubscriptionPage} from '../../Pages/testsubscriptionPage';


test.describe('Test Case 18-22', () => {
    let browser, context, page;
    let loginPage,categoryproductPage, productPage,testsubscriptionPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        categoryproductPage = new CategoryproductPage(page);
        testsubscriptionPage = new TestsubscriptionPage(page);
        await page.goto('/');

        });

        test('View Category Product', async() => {
            //View Category
            await expect(page.locator('h2:has-text("Category")')).toBeVisible();
            //Click on + of Woman
            await categoryproductPage.clickPlusofWoman();
            //Assert Inside of Woman
            await expect(page.locator('#Women')).toHaveClass(/in/);
            //Click on dress
            await categoryproductPage.clickDressofWoman();
            await page.goto('https://automationexercise.com/category_products/1');
            await expect(page.locator('h2:has-text("Women - Dress Products")')).toBeVisible();
            //Click on man
            await categoryproductPage.clickPlusofMan();
            //Assert Inside of Man
            await expect(page.locator('#Men')).toHaveClass(/in/);
            //click on jeans of man
            await categoryproductPage.clickJeansofMan();
            await expect(page.locator('h2:has-text("Men - Jeans Products")')).toBeVisible();


});

       test('View & Cart Brand Product', async() => {
        //Click on products
        await productPage.clickProduct(); 
        await expect(page).toHaveURL('https://automationexercise.com/products');
        //Get to see brands 
        await expect(page.locator('h2:has-text("Brands")')).toBeVisible();
        //click on polo brand
        await categoryproductPage.clickonPolo();
        //Navigate to polo and get name of polo to see
        await page.goto('https://automationexercise.com/brand_products/Polo');
        await expect(page.locator('h2:has-text("Brand - Polo Products")')).toBeVisible();
        //click on allen solly junior brand
        await categoryproductPage.clickonAllenSollyJunior();
        //Navigate to polo and get name of polo to see
        await page.goto('https://automationexercise.com/brand_products/Allen%20Solly%20Junior');
        await expect(page.locator('h2:has-text("Brand - Allen Solly Junior Products")')).toBeVisible();
       
     });

     test('Search Product and Verify Cart After Login', async() => {
        //Click on products and navigate to url with all product message to see
        await productPage.clickProduct(); 
        await expect(page).toHaveURL('https://automationexercise.com/products');
        await expect(page.locator('h2:has-text("All Products")')).toBeVisible();
        //Verify Searched Product is Visibile
        await productPage.enterSearchProduct('tshirt');
        await productPage.clickSearchProductIcon();
        await expect(page).toHaveURL('https://automationexercise.com/products?search=tshirt');
        await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

        //For First Product
        await categoryproductPage.hoveronProduct1Tshirt(); 
        await categoryproductPage.clickAddtoCartFirstTshirt(); 
        expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await categoryproductPage.clickContinueShoppingBtn();

        //For second Product
        await categoryproductPage.hoveronProduct2Tshirt(); 
        await categoryproductPage.clickAddtoCartSecondTshirt(); 
        expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await categoryproductPage.clickContinueShoppingBtn();

        //For Third Product
        await categoryproductPage.hoveronProduct3Tshirt(); 
        await categoryproductPage.clickAddtoCartThirdTshirt(); 
        expect(page.locator('//button[text()="Continue Shopping"]')).toBeVisible();
        await categoryproductPage.clickContinueShoppingBtn();

        //click to cart button
        await testsubscriptionPage.clickCartBtn();
        //Navigate url
        await page.goto('https://automationexercise.com/view_cart');

        //await page.locator('a[href="/login"]').click();
        await page.locator('a[href="/login"]').filter({ hasText: 'Signup / Login' }).click();
        await page.goto('https://automationexercise.com/login');
        //Enter Credential and login
        let email = process.env.EMAILID;
        console.log(email);
        let password = process.env.PASSWORD;
        console.log(password);
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.clickLogin();
        //redirect to page after login
        await page.goto('https://automationexercise.com/');

        //click to cart button
        await testsubscriptionPage.clickCartBtn();
        //Navigate url
        await page.goto('https://automationexercise.com/view_cart');
        });

        test('Add Review on Product', async() => {
         //Click on products and navigate to url with all product message to see
        await productPage.clickProduct(); 
        await expect(page).toHaveURL('https://automationexercise.com/products');
        await expect(page.locator('h2:has-text("All Products")')).toBeVisible();
       //click on viewthirdproduct and navigate
        await productPage.clickViewThirdProductBtn(); 
        await expect(page).toHaveURL('https://automationexercise.com/product_details/3');
        await expect(page.locator('a:has-text("Write Your Review")')).toBeVisible();
        //Add review for third product and submit
        await categoryproductPage.enterYourName('Deepa Shah');
        await categoryproductPage.enterYourEmail('Sahdeepmala777@gmail.com');
        await categoryproductPage.enterYourReview('I am satisfied with this product');
        await categoryproductPage.clickSubmitReview()
        await expect(page.locator('text=Thank you for your review')).toBeVisible();
  
    });   

    test('Add to Cart From Recommeneded Item', async() => {
        //Get Recommended Item
       await expect(page.locator('h2:has-text("RECOMMENDED ITEMS")')).toBeVisible();
       //Add to cart of recommended first item
       await categoryproductPage.clickRecommendedFirstItemAddtocart();
      // Click View Cart button (appears in modal)
       await page.getByRole('link', { name: 'View Cart' }).click();
       // Verify user is navigated to Cart page
       await expect(page).toHaveURL(/cart/);

});

 });

