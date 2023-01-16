import { Given,When, Then } from "@wdio/cucumber-framework";
import chai from "chai";


/**
 * Web Interactions
 */
Given(/^a web page with textbox is open$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({implicit:15000,pageLoad:10000})
    await browser.maximizeWindow()
})

When(/^perform textbox interaction$/, async function() {
/**
 * 1. Input Box
 * Actions:
 * 1. Type into the box
 * 2. clear the field and type or just add value
 * await element.setValue("123456")
 * await element.addValue("123456")
 * 3. click and type.como 
 * await element.click()
 * 4. slowly type
 * 5. move to element o view the element
 * element.scrollIntoView()
 * element.moveTo()
 */
    let element = $(`[type=number]`)
    //await element.setValue("123456")
    let txt = "123456"
    element.click()
    for (let i = 0; i < txt.length; i++) {
        const charS = txt.charAt(i);
        await browser.pause(1000)
        await browser.keys(charS)
    }
})