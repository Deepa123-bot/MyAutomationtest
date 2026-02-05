class LoginPage{
    constructor(page){
        this.page = page;
        this.emailadr = page.locator('input[data-qa="login-email"]');
        this.password = page.locator('input[data-qa="login-password"]');
        this.loginbtn = page.locator('button[data-qa="login-button"]');

    }
    async enterEmail(email){
       await this.emailadr.fill(email);
    }
    async enterPassword(password){
      await this.password.fill(password);
    }
    async clickLogin(){
       await this.loginbtn.click();
    }

}

module.exports = {LoginPage}