import { Builder, By, Capabilities, ISize, WebDriver, } from "selenium-webdriver"     //downloading the dependencies/libraries for Selenium Web driver
import { BasePage } from "./BasePage"

export interface valuedata
{
value1: number;
    
}


export class targetgiftcards extends BasePage
{
[x: string]: any;
driver: WebDriver;
url: string = "https://www.target.com/";

    // Locators to check the flow

giftcards: By=By.xpath('(//a[@class="Link-sc-1khjl8b-0 iwassO"])[4]')
forschoolgoers: By=By.xpath('(//div[@class="StorycardText-sc-1v22x87-0 gLnkbR storycard--text"])[1]')
forcollegegoers: By=By.xpath('(//h3[@class="Heading__StyledHeading-sc-1mp23s9-0 fSrhRC h-margin-b-none"])[2]')
chooseoption: By=By.xpath('(//div[@class="Truncate-c0av52-0 cLcqOS"])[1]')
value: By=By.xpath('//button[@class="Button-bwu3xu-0 SelectBox__SelectButtonWithValidation-sc-6gt3w9-1 hUOeWC kCheAN"]')
enterownamt: By=By.xpath ('//input[@id="enterYourOwnAmount"]')
email: By=By.xpath ('//button[@aria-label="E-MAIL - checked"]')
mobile: By=By.xpath('(//button[@styleprops="[object Object]"])[2]')
quantity1: By=By.xpath('(//button[@class="Button-bwu3xu-0 SelectBox__SelectButtonWithValidation-sc-6gt3w9-1 hUOeWC kCheAN"])[1]')
quantity2:By=By.xpath('(//div[@class="OptionLabel-u6t284-0 cIvTbA h-text-md"])[2]')
addtocart: By=By.xpath ('//div[@class="h-margin-b-tight "]')
continueshopping: By=By.xpath ('//button[@class="Button-bwu3xu-0 gGcheU"]')
checkcart:By=By.xpath('(//div[@class="sc-hKgILt gTLZXx"])[5]')
viewcart:By=By.xpath('//button[@class="Button-bwu3xu-0 bWbIIU"]')
checkout: By=By.xpath ('//button[@data-test="checkout-button"]')
finalprice:By=By.xpath('//p[@class="h-text-bs"]')
close:By=By.xpath('//button[@aria-label="close"]')
cart:By=By.xpath('//a[@id="cart"]')
amount:By=By.xpath('//div[@aria-label="Total 20"]')



// Locators to check the custom value for the card

//customvalue: By=By.xpath('//button[@aria-label="Value Custom Value - selected"]')
customvalue: By=By.xpath('//a[@aria-label="Custom Value"]')
ownamount: By=By.xpath('//input[@id="enterYourOwnAmount"]')
//supervalue: By=By.xpath('//button[@data-test="SelectVariationSelector-Value"]')
supervalue: By=By.xpath('//div[@class="h-position-relative SelectVariationSelector__StyledSelect-sc-8g2zei-0 cAfpcA h-margin-b-tight h-margin-t-default"]')

constructor(options)
{
super(options);
}

async valuedata(searchText: string) {
await this.customval(`${this.valuedata}`,searchText);
 
}


}