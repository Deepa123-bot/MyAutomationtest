import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';


test.describe('Login and logout with valid and invalid credentials', () => {
    let browser, context, page;
    let loginPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        await page.goto('/');

        await page.locator('a[href="/login"]').click();

        });

    test('User can login with correct username and password', async() => {
    
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


});

test('User can logout and terminate the session', async() => {

        let email = process.env.EMAILID;
        console.log(email);
        let password = process.env.PASSWORD;
        console.log(password);
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.clickLogin();

        await expect(page.locator('text=Logged in as')).toBeVisible();

        await page.locator('a[href="/logout"]').click();

        await expect(page).toHaveURL('https://automationexercise.com/login');
        
        await expect(page.locator('text=Login to your account')).toBeVisible();

});

test('User cannot login with incorrect username and password', async() => {

        await loginPage.enterEmail('sahd@gmail.com');
        await loginPage.enterPassword('Dee1234');
        await loginPage.clickLogin();

        // Error message displayed
        await expect(
            page.locator('text=Your email or password is incorrect!')
            ).toBeVisible();

        // User stays on login page
        await expect(page).toHaveURL(/login/);

}); 
 
});
