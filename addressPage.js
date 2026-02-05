class AddressPage{
    constructor(page){
        this.page = page;
        this.downloadbtn = page.locator('a[class="btn btn-default check_out"]');
        this.continuebtn = page.locator('a[data-qa="continue-button"]');
    }
    async clickDownloadBtn(){
       await this.downloadbtn.click();
    }
    async clickContinueBtn(){
       await this.continuebtn .click();
    }

}

module.exports = {AddressPage}