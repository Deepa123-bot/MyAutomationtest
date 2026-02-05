class ScrollPage{
    constructor(page){
        this.page = page;
        this.clickscrollupbutton = page.locator('#scrollUp');

    }
    async clickScrollupBtn(){
       await this.clickscrollupbutton.click();
    }

}

module.exports = {ScrollPage}