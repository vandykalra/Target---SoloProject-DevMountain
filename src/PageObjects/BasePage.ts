import {Builder,Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";
import { targetgiftcards } from "./targetgiftcards";
const fs=require("fs")
const chromedriver = require("chromedriver");

/** Optional parameters for the page object */
interface Options
{
    /** if no driver is supplied, we make one */
    driver?:WebDriver;
    browser?:"chrome";
    url?:string;
}

export class BasePage {
driver: WebDriver;
url?:string;

    
/**
* This is the constructor for the BasePage. All other pages will extend the BasePage.
* @param driver - the WebDriver object
*/
constructor(driver:WebDriver)
   {
    this.driver = driver;
   }

/**
* This method navigates to the URL given
* @param url - the website URL
*/
async navigate(url: string)
  {
    await this.driver.get(url);
  }

/**
* This method will fill in input elements with text
* @param locator - the position of the web element
* @param keys - the string for input
* @returns 
*/
async sendKeys(locator: By, keys: string)
    {
   await this.driver.wait(until.elementLocated(locator));
   return this.driver.findElement(locator).sendKeys(keys);
    }

/**
* This method performs the click action
* @param locator - the position of the web element
* @returns 
*/
async click(locator: By) 
    {
    await this.driver.wait(until.elementLocated(locator));
    return (await this.driver.findElement(locator)).click();
    }

/**
* This method returns the text in an element
* @param locator - the position of the web element
* @returns 
*/
async getText(locator: By)
   {
    await this.driver.wait(until.elementLocated(locator));
    return (await this.driver.findElement(locator)).getText();
    }

/**
* Returns the specified web element
* @param locator - the postion of a web element
* @returns 
*/
async getPageElement(locator: By)
   {
    await this.driver.wait(until.elementLocated(locator));
    let element = this.driver.findElement(locator);
    return element;
    }

/**
* This method checks if a web element is visible on the page
* @param locator - the position of the web element
*/
async checkIfVisible(locator: By) 
    {
    await this.driver.wait(until.elementLocated(locator));
    await this.driver.wait(
    until.elementIsVisible(await this.driver.findElement(locator))
    );
    }

/**
* This method returns the specified attribute of the web element
* @param locator - the position of the web element
* @param attr - the attribute of the element
* @returns 
*/
async getAttribute(locator: By, attr: string) 
   {
    await this.checkIfVisible(locator);
    let element = await this.getPageElement(locator);
    return element.getAttribute(attr);
    }

/**
* This method terminates the driver
*/
    async quit()
     {
        await this.driver.quit();
     }


/**
* Will take a screenshot and save it to the filepath/filename provided.
* Automatically saves as a .png file.
* @param {string} filepath - the filepath relative to the project's base folder where you want the screenshot saved
* @example
* page.takeScreenshot("myFolder_screenshot/screenshot1")
* //picture saves in "myFolder" as "screenshot1.png"
*/
async takeScreenshot(filepath: string)
     {
    fs.writeFile(
    `${filepath}.png`,
        await this.driver.takeScreenshot(),
        "base64",
        (e) => {
        if (e) console.log(e);
        else console.log("screenshot saved successfully");
        }
    
        )}
}
