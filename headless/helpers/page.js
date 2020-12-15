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

    async findInput(index, selector) {
        const inputHandle = await this.evaluateHandle(() => { 
                var items = document.querySelector('.oneRecordActionWrapper records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('[class*="forcegenerated-record-layout"]').shadowRoot.querySelector('force-record-layout-block').querySelectorAll('.slds-form__item')[index];
                return items.querySelector('force-record-layout-lookup').shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector(selector);
            }
        );
        return inputHandle;
    }

    async createEntry(a) {
        try {
            // Find Account
            const searchHandle = await this.findInput(0, 'input');
            let accountField = await searchHandle.asElement();
            await accountField.type(a.account, { delay: 75 });

            // Click Account
            const itemHandle = await this.findInput(0, 'ul li');
            let itemField = await itemHandle.asElement();
            await itemField.click();
            // await this.click(`div[title*="${a.account}"]`);
            // debugger
            // Type
            debugger;
            let types = await this.$$('force-form-picklist[force-recordpicklist_recordpicklist]');
            await types[0].click();
            await this.click(`span[title="${a.type}"]`);
            // Description
            await this.type('textarea[required]', a.description, { delay: 15 });
            // Date
            await this.click('input[name*=Activity_Date"]');
            await this.click(`td[data-datevalue="${a.activityDate}"]`);
            // Hours
            await this.click('input[name*="Hours"]', { delay: 15 });
            for (var i = 0; i < 4; i++ ) { await this.keyboard.press('Backspace'); };
            var hourString = a.hours.toString();
            await this.type('input[name*="Hours"]', hourString, { delay: 15 });
        } catch (err) { 
            console.log(err);
            let res = await prompts({ type: 'text', name: 'code', message: 'Continue?'});
            return;
        }
    }
};

module.exports = CustomPage;

