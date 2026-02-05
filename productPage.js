import { test, expect, chromium } from '@playwright/test';

class ProductPage{
      constructor(page){
        this.page = page;
        this.product = page.locator('a[href="/products"]');
        this.viewfirstproduct = page.locator('a[href="/product_details/1"]');
        this.searchproduct = page.locator('[placeholder="Search Product"]');
        this.clicksearchproductIcon = page.locator('button[type="button"]');
        this.hoveronproductone = page.locator('(//div[@class="single-products"])[1]');
        this.clickonaddtocartfirsthover = page.locator('(//a[@data-product-id="1"])[1]');
        this.clickcontinueshoppingbtn = page.locator('//button[text()="Continue Shopping"]');
        this.hoveronproducttwo = page.locator('(//div[@class="single-products"])[2]');
        this.clickonaddtocartsecondhover = page.locator('(//a[@data-product-id="2"])[2]');
        this.clickonviewcart = page.locator('(//a[@href="/view_cart"])[2]');
        this.clickviewthirdproductbtn = page.locator('a[href="/product_details/3"]');
        this.clickaddtocartbtn = page.locator('button[type="button"]');
        this.modalContent = page.locator('#cartModal .modal-content');
        this.clickviewcart = page.locator('#cartModal a[href="/view_cart"]');
        this.clickupdownbtn = page.locator('input[name="quantity"]');
  

      } 

    async clickProduct(){
       await this.product.click();
    }

    async clickViewfirstProductone(){
       await this.viewfirstproduct.click();
    }
   
    async enterSearchProduct(product){
       await this.searchproduct.fill(product);
    }

    async clickSearchProductIcon(){
       await this.clicksearchproductIcon.click();
    }

    async hoveronProductOne(){
       await this.hoveronproductone.hover();
    }

    async clickonAddtoCartFirsthover(){
       await this.clickonaddtocartfirsthover.click();
    }

    async clickContinueShoppingBtn(){
       await this.clickcontinueshoppingbtn.click();
    }
    
    async hoveronProductTwo(){
       await this.hoveronproducttwo.hover();
    }

    async clickonAddtoCartSecondhover(){
       await this.clickonaddtocartsecondhover.click();
    }

    async clickonViewCartBtnSecondprd(){
       await this.clickonviewcart.click();
    }

    async clickViewThirdProductBtn(){
       await this.clickviewthirdproductbtn.click();
    }   
 
    async clickAddtoCartBtn(){
       await this.clickaddtocartbtn.click();
    }
   
    async waitForCartModal() {
    await this.page.waitForSelector('text=Added!', { timeout: 5000 });
    }
   
    async clickViewCart() {
    await this.clickviewcart.click();
   } 

   async selectQuantity(quantity) {
     await this.clickupdownbtn.fill(''); 
        await this.clickupdownbtn.fill(String(quantity));
   } 


 
}
module.exports = {ProductPage}