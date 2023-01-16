import { Given,When, Then } from "@wdio/cucumber-framework";
import chai from "chai";


/**
 * Web Interactions
 */
Given(/^a web page with checkbox is open$/, async function () {
    await browser.url("/checkboxes")
    await browser.setTimeout({implicit:15000,pageLoad:10000})
    await browser.maximizeWindow()
})

When(/^perform checkbox interaction$/, async function() {
/**
 * Actions:
 * Select an options
 * Unselect an options (if selected)
 * Assert if option is selected
 * Select all options
 */
//*[@id="checkboxes"]/input[2]
let element_2 = await $('//form[@id="checkboxes"]/input[2]')
let isSelected = await element_2.isSelected()
chai.expect(isSelected).to.be.true

if (isSelected) {
    await element_2.click()
}

let elementsArray = await $$('//form[@id="checkboxes"]/input')
for (let i = 0; i < elementsArray.length; i++) {
    let element = await elementsArray[i];
    isSelected = await element.isSelected()
    if (!isSelected) {
        await element.click()
    }
}

element_2 = await $('//form[@id="checkboxes"]/input[2]')
isSelected = await element_2.isSelected()
chai.expect(isSelected).to.be.true

})