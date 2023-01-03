import { Given,When, Then } from "@wdio/cucumber-framework";
import chai from "chai";


/**
 * Web Interactions
 */
Given(/^a web page with dropdown is open$/, async function () {
    await browser.url("/dropdown")
    await browser.setTimeout({implicit:15000,pageLoad:10000})
    await browser.maximizeWindow()
})

When(/^perform dropdown interaction$/, async function() {
/**
 * Actions:
 * Assert default option is selected
 * Get a list of options
 * Select by attribute, text, index

 */
let element = await $('//select/option[@selected="selected"]')
let value = await element.getText()
chai.expect(value).to.equal('Please select an option')

let elements = await $$('select > option')
let names = []
for (let i = 0; i < elements.length; i++) {
   names.push(await elements[i].getText())
}
console.log(`>>> Options Array: ${names}`)
chai.expect(names.length).to.equal(3)



element = await $('#dropdown')
//await element.selectByVisibleText('Option 2')
//await element.selectByAttribute('value','2')
await element.selectByIndex(2)
element = await $('//select/option[@selected="selected"]')
let txtElement = await element.getText()
chai.expect(txtElement).to.equal('Option 2')



})