class RegisterCheckoutPage{
    constructor(page){
        this.page = page;
        this.hoveronproductfirst = page.locator('(//div[@class="single-products"])[1]');
        this.clickonaddtocartfirsthover = page.locator('(//a[@data-product-id="1"])[1]');
        this.hoveronproductsecond = page.locator('(//div[@class="single-products"])[2]');
        this.clickonaddtocartsecondhover = page.locator('(//a[@data-product-id="2"])[2]');
        this.clickcontinueshoppingbtn = page.locator('//button[text()="Continue Shopping"]');
        this.clickproceedtocheckout = page.locator('//a[text()="Proceed To Checkout"]');
        this.entersignupname = page.locator('input[data-qa="signup-name"]');
        this.entersignupemail = page.locator('input[data-qa="signup-email"]');
        this.clicksignupbtnb = page.locator('button[data-qa="signup-button"]');
        this.clickgenterbtn = page.locator('label[for="id_gender2"]');
        this.entername = page.locator('input[data-qa="name"]');
        this.enteremail = page.locator('input[data-qa="email"]');
        this.enterpass = page.locator('input[data-qa="password"]');
        this.selectday = page.locator('select[id="days"]');
        this.selectmonth = page.locator('select[id="months"]');
        this.selectyear = page.locator('select[id="years"]');
        this.selectbtn = page.locator('input[name="newsletter"]');
        this.firstname = page.locator('input[data-qa="first_name"]');
        this.lastname = page.locator('input[data-qa="last_name"]');
        this.company = page.locator('input[data-qa="company"]');
        this.addressone = page.locator('input[data-qa="address"]');
        this.addresstwo = page.locator('input[data-qa="address2"]');
        this.selectcountry = page.locator('select[data-qa="country"]');
        this.enterstate = page.locator('input[data-qa="state"]');
        this.entercity = page.locator('input[data-qa="city"]');
        this.enterzipcode = page.locator('input[data-qa="zipcode"]');
        this.entermobno = page.locator('input[data-qa="mobile_number"]');
        this.clickcreatebtn = page.locator('button[data-qa="create-account"]');
        this.clickcontinuebtn = page.locator('a[data-qa="continue-button"]');
        this.entermessagehere = page.locator('textarea[name="message"]');
        this.clickplaceorder = page.locator('a[href="/payment"]');
        this.enternameoncard = page.locator('input[data-qa="name-on-card"]');
        this.entercardno = page.locator('input[data-qa="card-number"]');
        this.entercvc = page.locator('input[data-qa="cvc"]');
        this.enterexpirationmonth = page.locator('input[data-qa="expiry-month"]');
        this.enteryear = page.locator('input[data-qa="expiry-year"]');
        this.clickpayandconfirmbtn = page.locator('button[data-qa="pay-button"]');
        this.clickdeletebtn = page.locator('a[href="/delete_account"]');
        this.clickcontinueafterdelete = page.locator('a[data-qa="continue-button"]');
        this.clickremoveproductbtn = page.locator('a.cart_quantity_delete');



    }
    async hoveronProductfirst(){
       await this.hoveronproductfirst.hover();
    }
     async clickonAddtoCarthoverFirst(){
       await this.clickonaddtocartfirsthover.click();
    }

    async hoveronProductsecond(){
       await this.hoveronproductsecond.hover();
    }
     async clickonAddtoCarthoverSecond(){
       await this.clickonaddtocartsecondhover.click();
    }

    async clickContinueShoppingBtn(){
       await this.clickcontinueshoppingbtn.click();
    }

    async clickProceedtoCheckout(){
       await this.clickproceedtocheckout.click();
    }

    async enterSignupName(signupname){
       await this.entersignupname.fill(signupname);
    }

    async enterSignupEmail(signupemail){
       await this.entersignupemail.fill(signupemail);
    }

    async clickSignupBtn(){
       await this.clicksignupbtnb.click();
    }

     async clickGenderBtn(){
       await this.clickgenterbtn.click();
    }

    async enterName(name){
       await this.entername.fill(name);
    }

    async enterEmail(email){
       await this.enteremail.fill(email);
    }

    async enterPasswrd(password){
       await this.enterpass.fill(password);
    }

    async selectDay(day){
       await this.selectday.selectOption(day);
    }
    async selectMonth(month){
       await this.selectmonth.selectOption(month);
    }
    async selectYear(year){
       await this.selectyear.selectOption(year);
    }
    async clickBtn(){
       await this.selectbtn.click();
    }

    async enterFirstName(firstname){
       await this.firstname.fill(firstname);
    }

    async enterLastName(lastname){
       await this.lastname.fill(lastname);
    }
    async enterCompany(company){
       await this.company.fill(company);
    }
    async enterAddressone(address){
       await this.addressone.fill(address);
    }
    async enterAddresstwo(address2){
       await this.addresstwo.fill(address2);
    }
    async selectCountry(country){
       await this.selectcountry.selectOption(country);
    }
    async enterState(state){
       await this.enterstate.fill(state);
    }
    async enterCity(city){
       await this.entercity.fill(city);
    }
    async enterZipcode(zipcode){
       await this.enterzipcode.fill(zipcode);
    }
    async enterMobileNo(mobilenumber){
       await this.entermobno.fill(mobilenumber);
    }
    async clickCreateBtn(){
       await this.clickcreatebtn.click();
    }
    async clickContinueBtn(){
       await this.clickcontinuebtn.click();
    }
    async enterMessagehere(message){
       await this.entermessagehere.fill(message);
    }
    async clickplaceOrder(){
       await this.clickplaceorder.click();
    }
    async enterNameonCard(nameoncard){
       await this.enternameoncard.fill(nameoncard);
    }
    async enterCardNumber(cardnumber){
       await this.entercardno.fill(cardnumber);
    }
    async enterCVC(cvc){
       await this.entercvc.fill(cvc);
    }
    async enterExpirationMonth(month){
       await this.enterexpirationmonth.fill(month);
    }
    async enterYear(year){
       await this.enteryear.fill(year);
    }
    async clickPayandConfirmBtn(){
       await this.clickpayandconfirmbtn.click();
    }
    async clickDeleteBtn(){
       await this.clickdeletebtn.click();
    }
    async clickContinueAfterDelete(){
       await this.clickcontinueafterdelete.click();
    }
    async clickRemoveProductBtn(){
       await this.clickremoveproductbtn.click();
    }


}

module.exports = {RegisterCheckoutPage}