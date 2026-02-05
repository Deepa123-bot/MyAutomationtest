import { test, expect, chromium } from '@playwright/test';
import  {LoginPage} from '../../Pages/loginPage';
import  {ScrollPage} from '../../Pages/scrollPage';


test.describe('Test Scroll', () => {
    let browser, context, page;
    let loginPage,scrollPage;
    test.beforeEach('', async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        scrollPage = new ScrollPage(page);
        await page.goto('/');

        });

    test('Verify Scroll Up using Arrow button and Scroll Down functionality', async() => {
         // Scroll to the bottom of the page
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // Verify subscription is visible
        const subscriptionText = page.locator('text=SUBSCRIPTION');
        await expect(subscriptionText).toBeVisible();
       // Scroll to top by cliking an arrow to move upward
        await scrollPage.clickScrollupBtn();
        //Full-Fledged practice website for Automation Engineers' text is visible on screen
        await expect(page.getByRole('heading', {name: 'Full-Fledged practice website for Automation Engineers'})).toBeVisible();

      });

    test('Verify Scroll Up without Arrow button and Scroll Down functionality', async() => {
        // Scroll to the bottom of the page
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // Verify subscription is visible
        const subscriptionText = page.locator('text=SUBSCRIPTION');
        await expect(subscriptionText).toBeVisible();
       // Scroll to top
        await page.evaluate(() => {window.scrollTo(0, 0);});
        //Full-Fledged practice website for Automation Engineers' text is visible on screen
        await expect(page.getByRole('heading', {name: 'Full-Fledged practice website for Automation Engineers'})).toBeVisible();

      });
        });