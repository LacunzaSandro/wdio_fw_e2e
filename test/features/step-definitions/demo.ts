import { Given,When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page opens$/, async function() {
    console.log("abriendo navegador")
    await browser.url("https://www.google.com.ar")
    console.log("cerrando navegador")
})

When(/^search with (.*)$/, async function(searchText){
    console.log(`>> searchItem: ${searchText}`);
    let element = await $(`[name=q]`);
    await element.setValue(searchText)
    await element.keys("Enter")
})

Then(/^click on the first link result$/, async function(){
    let element = await $(`<h3>`)
    element.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>>> expectedURL: ${expectedURL}`)
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)

})