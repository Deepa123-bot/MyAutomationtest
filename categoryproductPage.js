class CategoryproductPage{
    constructor(page){
        this.page = page;
        this.clickplusofwoman = page.locator('a[href="#Women"] span.badge');
        this.clickdressofwoman = page.locator('a[href="/category_products/1"]');
        this.clickplusofman = page.locator('a[href="#Men"] span.badge');
        this.clickjeansofman = page.locator('a[href="/category_products/6"]');
        this.clickonpolo = page.locator('a[href="/brand_products/Polo"]');
        this.clickonallensollyjunior = page.locator('a[href="/brand_products/Allen Solly Junior"]');
        this.hoveronproduct1tshirt = page.locator('(//div[@class="single-products"])[1]');
        this.clickonaddtocartfirsttshirt = page.locator('(//a[@data-product-id="2"])[2]');
        this.hoveronproduct2tshirt = page.locator('(//div[@class="single-products"])[2]');
        this.clickonaddtocartsecondtshirt = page.locator('(//a[@data-product-id="28"])[1]');
        this.hoveronproduct3tshirt = page.locator('(//div[@class="single-products"])[3]');
        this.clickonaddtocartthirdtshirt = page.locator('(//a[@data-product-id="29"])[1]');
        this.clickcontinueshoppingbtn = page.locator('//button[text()="Continue Shopping"]');
        this.enteryourname = page.locator('input[placeholder="Your Name"]');
        this.enteryouremail = page.locator('input[placeholder="Email Address"]');
        this.enteraddreview = page.locator('textarea[placeholder="Add Review Here!"]');
        this.clicksubmitreview = page.locator('button[id="button-review"]');
        this.clickrecommentitemaddtocart = page.locator('.recommended_items a.add-to-cart').first();
        
    }
    async clickPlusofWoman(){
       await this.clickplusofwoman.click();
    }
    async clickDressofWoman(){
       await this.clickdressofwoman.click();
    }
    async clickPlusofMan(){
       await this.clickplusofman.click();
    }
    async clickJeansofMan(){
       await this.clickjeansofman.click();
    }
    async clickonPolo(){
       await this.clickonpolo.click();
    }
    async clickonAllenSollyJunior(){
       await this.clickonallensollyjunior.click();
    }
    async hoveronProduct1Tshirt(){
       await this.hoveronproduct1tshirt.hover();
    }
    async clickAddtoCartFirstTshirt(){
       await this.clickonaddtocartfirsttshirt.click();
    }
    async hoveronProduct2Tshirt(){
       await this.hoveronproduct2tshirt.hover();
    }
    async clickAddtoCartSecondTshirt(){
       await this.clickonaddtocartsecondtshirt.click();
    }
    async hoveronProduct3Tshirt(){
       await this.hoveronproduct3tshirt.hover();
    }
    async clickAddtoCartThirdTshirt(){
       await this.clickonaddtocartthirdtshirt.click();
    }
    async clickContinueShoppingBtn(){
       await this.clickcontinueshoppingbtn.click();
    }
    async enterYourName(yourname){
       await this.enteryourname.fill(yourname);
    } 
    async enterYourEmail(youremail){
       await this.enteryouremail.fill(youremail);
    }
    async enterYourReview(yourreview){
       await this.enteraddreview.fill(yourreview);
    }
    async clickSubmitReview(){
       await this.clicksubmitreview.click();
    } 
    async clickRecommendedFirstItemAddtocart(){
       await this.clickrecommentitemaddtocart.click();
    }  

}

module.exports = {CategoryproductPage}