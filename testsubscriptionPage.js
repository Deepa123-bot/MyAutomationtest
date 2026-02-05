class TestsubscriptionPage{
    constructor(page){
        this.page = page;
        this.testsubscriptionbtn = page.locator('input[type="email"]');
        this.clicktestsubscriptionarrow = page.locator('button[type="submit"]');
        this.clickcartbtn = page.locator("//header//a[@href='/view_cart']");

    }

    async enterTestSubscriptionBtn(email){
       await this.testsubscriptionbtn.fill(email);
    }

    async clickTestSubscriptionarrow(){
       await this.clicktestsubscriptionarrow.click();
    }

    async clickCartBtn(){
       await this.clickcartbtn.click();
    }

}

module.exports = {TestsubscriptionPage}