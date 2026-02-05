class RegisteruserPage{
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
      // await this.enterpass.waitFor({ state: 'editable' });
       await this.enterpass.fill(password);
     //  await this.enterpass.click();
     //  await this.enterpass.type(password);
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

}

module.exports = {RegisteruserPage}