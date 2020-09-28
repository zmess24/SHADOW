const puppeteer = require('puppeteer');
const prompts = require('prompts');
const { blue, red } = require('chalk');

class CustomPage {
    static async build() {
        const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
        const customPage = new CustomPage(page);

        return new Proxy(customPage, {
            get: function(t, property) {
                return customPage[property] || browser[property] || page[property];
            }
        });
    };

    constructor(page) {
        this.page = page;
    };

    async login(username, password) {
        console.log(blue("Attempting login..."))
        await this.type('input[name="username"]', username, { delay: 20 });
        await this.type('#password', password, { delay: 20 })
        await this.click('#Login');
        let res = await prompts({ type: 'text', name: 'code', message: 'Code?'});
        await this.type('#smc', res.code, { delay: 20 });
        await this.click('#save');
        console.log(blue("Login success"))
    };

    async selectRecordType(type) {
        try {
            await this.waitFor('.slds-radio--faux');
            await this.waitFor('.forceChangeRecordTypeFooter button:nth-of-type(2)');
            let recordTypes = await this.$$('.slds-radio--faux');
            let input = (type === "External") ? recordTypes[1]: recordTypes[0];
            await input.click();
            await this.click('.forceChangeRecordTypeFooter button:nth-of-type(2)');
        } catch (err) { 
            throw new Error(err.message);
        }
    }

    async createEntry(a) {
        try {
            await this.waitFor('.uiInput.uiInputNumber input');
            await this.waitFor('textarea');
            // Accounts
            await this.type('input[title="Search Accounts"]', a.account, { delay: 75 });
            await this.click(`div[title*="${a.account}"]`);
            // Type
            let types = await this.$$('.modal-container .uiPopupTrigger .select');
            await types[0].click();
            await this.click(`a[title="${a.type}"]`);
            // Description
            await this.type('textarea', a.description, { delay: 15 });
            // Date
            await this.click('.uiInputDate input');
            await this.click(`td[data-datevalue="${a.activityDate}"]`);
            // Hours
            await this.click('.uiInput.uiInputNumber input', { delay: 15 });
            for (var i = 0; i < 4; i++ ) { await this.keyboard.press('Backspace'); };
            var hourString = a.hours.toString();
            await this.type('.uiInput.uiInputNumber input', hourString, { delay: 15 });
        } catch (err) { 
            let res = await prompts({ type: 'text', name: 'code', message: 'Continue?'});
            return;
        }
    }
};

module.exports = CustomPage;

