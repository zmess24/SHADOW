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

    async findInput(name) {
        const inputHandle = await this.evaluateHandle(name => { 
                let map = { Account: 0, Date: 2, Hours: 4, Type: 6, Desc: 8 };
                let item = document.querySelector('.oneRecordActionWrapper records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('[class*="forcegenerated-record-layout"]').shadowRoot.querySelector('force-record-layout-block').querySelectorAll('.slds-form__item')[map[name]].querySelector('[data-input-element-id="input-field"]');
                switch (name) {
                    case "Account":
                        return item.shadowRoot.querySelector('.slds-form-element').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input');
                    case "Date":
                        return item.shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input');
                    case "Hours": 
                        return item.shadowRoot.querySelector('input');
                    case "Type":
                        return item.shadowRoot.querySelector('force-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input');
                    case "Desc":
                        return item.shadowRoot.querySelector('.slds-form-element').shadowRoot.querySelector('textarea');
                }
            }, name);
        return inputHandle;
    };

    async findSelection(name, selection) {
        const inputHandle = await this.evaluateHandle((name, selection) => {
            let map = { Account: 0, Activity: 6 };
            let domLocation = document.querySelector('.oneRecordActionWrapper records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('[class*="forcegenerated-record-layout"]').shadowRoot.querySelector('force-record-layout-block').querySelectorAll('.slds-form__item')[map[name]].querySelector('[data-input-element-id="input-field"]');
            if (name === "Activity") {
                let lis = domLocation.shadowRoot.querySelector('force-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelectorAll("lightning-base-combobox-item");
                let position;
                lis.forEach((e, i) => {
                    let value = e.attributes['data-value'].value.toLowerCase();
                    let santizedSelection = selection.toLowerCase();
                    if (value === santizedSelection) position = i;
                });
                return lis[position]
            } else {
                return domLocation.shadowRoot.querySelector('.slds-form-element').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('ul li').querySelector('lightning-base-combobox-item').shadowRoot.querySelector('lightning-base-combobox-formatted-text')
            }
        }, name, selection);
        return inputHandle;
    }

    async createEntry(a) {
        try {
            // Find Account
            const searchHandle = await this.findInput("Account");
            let accountField = await searchHandle.asElement();
            await accountField.type(a.account, { delay: 300 });

            // Click Account
            const itemHandle = await this.findSelection("Account");
            let itemField = await itemHandle.asElement();
            await itemField.click({ delay: 50 })

            // Date
            const dateHandle = await this.findInput("Date");
            let dateField = await dateHandle.asElement();
            await dateField.click();

            // Add Date
            for (var i = 0; i < 10; i++ ) { await this.keyboard.press('Backspace'); };
            let dateString = a.activityDate.toString();
            await dateField.type(dateString, { delay: 15 });

            // Locate Hours Field
            const hoursHandle = await this.findInput("Hours");
            let hoursField = await hoursHandle.asElement();
            await hoursField.click();
            
            // Add Time
            for (var i = 0; i < 4; i++ ) { await this.keyboard.press('Backspace'); };
            var hourString = a.hours.toString();
            await hoursField.type(hourString, { delay: 15 });

            // Locate Type Field
            const typeHandle = await this.findInput("Type");
            let typeField = await typeHandle.asElement();
            await typeField.click({ delay: 500 })

            // Click Type 
            const activityHandle = await this.findSelection("Activity", a.type);
            let activityField = await activityHandle.asElement();    
            await activityField.click({ delay: 1000 });

            // Description
            const textAreaHandle = await this.findInput("Desc");
            let textAreaField = await textAreaHandle.asElement();
            await textAreaField.type(a.description, { delay: 15 });

        } catch (err) { 
            console.log(err);
            let res = await prompts({ type: 'text', name: 'code', message: 'Continue?'});
            return;
        }
    }
};

module.exports = CustomPage;

