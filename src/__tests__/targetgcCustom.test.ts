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

test('To test the custom value for the card which should be between 5 and 500', async() =>  {

    //await driver.sleep(1000)  
    for(let i=0;i<valuedata.length;i++)                  //starting a loop which will run according to the length of test data file
     
    {
    
    let gc=await myPage.driver.findElement(myPage.giftcards)
    await gc.click();
    await driver.sleep(1000)
    let forschoolgoers=await myPage.driver.findElement(myPage.forschoolgoers)
    await forschoolgoers.click();
    await driver.sleep(1000)
    let chooseoptions1=await myPage.driver.findElement(myPage.chooseoption)
    await chooseoptions1.click();
    await driver.sleep(1000)
    let supval=await myPage.driver.findElement(myPage.supervalue)
    await supval.click();
    let customval= await myPage.driver.findElement(myPage.customvalue)
    await customval.click();
    await driver.sleep(1000)
    let ownamt=await myPage.driver.findElement(myPage.ownamount)
    await ownamt.sendKeys(valuedata[i].value1)
    
    let a= (valuedata[i].value1)                                       // Storing the test data in a variable
    //console.log("value of a is", `${a}`)
    await driver.sleep(1000)
    
    /* // If the input value is less than or equal to $500 and greater than or equal to $5, it will go inside the loop
    * UL = upper limit && LL = lower limit
    */
    var UL=500                                                         
    var LL=5
    
    if((`${a}` <=`${UL}`) && (`${a}` >=`${LL}`))                      
    {
    var result="true"
    console.log("value of custom amount is", `${a}`, "which is valid")
    expect("true").toBe(`${result}`)
    
    }
    
    else
    {
    var result="false"
    console.log("value of custom amount is", `${a}`, "which is invalid and add to cart button is disabled")
    await mPage1.takeScreenshot("src/MyScreenshots/Screenshot1")   
    //await mPage1.takeScreenshot("src/MyScreenshots/Screenshot2") 
    expect("false").toBe(`${result}`)
    await driver.sleep(1000)
    
    }
      
    }
    
    })
    
    afterAll(() => {
    myPage.driver.quit();                     // this will close the browser after all test cases
    })
    