class TestcasePage{
    constructor(page){
        this.page = page;
        this.clicktestcasebtn = page.locator('(//a[@href="/test_cases"])[1]');

    }

    async clickTestCaseBtn(){
       await this.clicktestcasebtn.click();
    }

}

module.exports = {TestcasePage}