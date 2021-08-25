import { Builder, By, Capabilities, ISize, until, WebDriver, WebElement } from "selenium-webdriver"     //downloading the dependencies/libraries for Selenium Web driver
//import { getTextOfJSDocComment, isAssertionExpression, isStringLiteral, isStringTextContainingNode } from "typescript"
import { targetgiftcards } from "../PageObjects/targetgiftcards"   // importing "CFAfindrestaurant" function from the file CFAfindrestaurant in the same folder
import { BasePage } from "../pageObjects/BasePage" //importing base page from Basepage.ts
import * as valuedata from "../Data/valuedata.json"  //importing data from json file for Postman(API testing)


//const chromedriver = require('chromedriver')                                // initializing the chrome browser
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()  //creating a driver to interact with chrome browser
const myPage = new targetgiftcards(driver)
const mPage1 = new BasePage(driver)

test('To check if the URL is working', async () => {
 // Opening the website defined in targetgiftcards.ts
await myPage.navigate(myPage.url)
expect(await myPage.driver.getCurrentUrl()).toBe("https://www.target.com/")
await driver.sleep(1000)
})

test('To test if gift card link is working and marking towards for school goers and for college  goers', async ()=> {

await driver.sleep(1000)
let gc=await myPage.driver.findElement(myPage.giftcards)
await gc.click()                                                 //It will click on the Gift Cards link on home page
await driver.sleep(1000)
expect(await myPage.driver.getTitle()).toContain("Gift Cards")   // It will verify that user landed on the correct page by comparing the title
})


/* This test case will test the end to end flow for gift card with quantity 2 and each costing $10
* 'a' (final amount) will be equal to 2*10 = $20
*/

test('To test the happy path(end to end) for add to cart with Quantity 2 and value $10', async() => {

await driver.sleep(1000)
await (await driver).manage().window().maximize()                              //It will maximize the window
let forschoolgoers=await myPage.driver.findElement(myPage.forschoolgoers)      //It will find the element, locators are in Page Objects file
await forschoolgoers.click();                                                  // It will click the element  
await driver.sleep(1000)
let chooseoptions1=await myPage.driver.findElement(myPage.chooseoption)
await chooseoptions1.click();
let quant1=await myPage.driver.findElement(myPage.quantity1)
await quant1.click();
let quant2=await myPage.driver.findElement(myPage.quantity2)
await quant2.click();
await driver.sleep(1000)
let value10=await myPage.driver.findElement(myPage.value)
await value10.click();
await driver.sleep(1000)
let addcart=await myPage.driver.findElement(myPage.addtocart)
await addcart.click();
await driver.sleep(1000)
let viewcartfinal=await driver.findElement(myPage.viewcart)
viewcartfinal.click();
await driver.sleep(1000)

let a= (await myPage.getText(myPage.amount))                              
console.log(a)
expect(a).toContain( "$20")                                  //comparing the total amount after adding it to the cart
})


/* This test case will test the custom value for the gift card field which only accepts $5-$500
*  Valid values are receiving from .json file which are $5, $3, $50 and $500 and $550
*  Test case will go to else statemnt if user inputs invalid value and "add to card" button will be disable automatically
*  Adding a screenshot here when invalid values are entered
*/

afterAll(() => {
myPage.driver.quit();                     // this will close the browser after all test cases
})


 
