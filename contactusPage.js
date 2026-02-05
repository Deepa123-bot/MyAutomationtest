class ContactusPage{
    constructor(page){
        this.page = page;
        this.contactusbtn = page.locator('a[href="/contact_us"]');
        this.contactname = page.locator('input[data-qa="name"]');
        this.contactemail = page.locator('input[data-qa="email"]');
        this.contactsubject = page.locator('input[data-qa="subject"]');
        this.contactmessage = page.locator('textarea[data-qa="message"]'); 
        this.contactsubmit = page.locator('input[data-qa="submit-button"]');  
        this.clickhomebtn = page.locator('a[class="btn btn-success"]');  

    }
    async clickContactusBtn(){
       await this.contactusbtn.click();
    }

    async enterContactname(name){
       await this.contactname.fill(name);
    }

    async enterContactemail(email){
       await this.contactemail.fill(email);
    }
    
    async enterContactsubject(subject){
       await this.contactsubject.fill(subject);
    }

    async enterContactmessage(message){
       await this.contactmessage.fill(message);
    }
    async clickContactsubmit(){
       await this.contactsubmit.click();
    }
    async clickHomeBtn(){
       await this.clickhomebtn.click();
    }
    
}

module.exports = {ContactusPage}