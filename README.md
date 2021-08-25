Target.com

## Summary
This project tested the end to end flow of "Gift Card" functionality of Target including inbuilt values and custom values for the amount of card. It uses Jest as a test
runner, and Selenium WebDriver to hook into the browser.

## Setup
How to set Up the tests: 
1. clone it!
2. `npm i` to install all the dependencies 
3. `npm i -d selenium-webdriver` to install selenium webdriver 
4. `npm install chromedriver --chromedriver_version=LATEST` to install latest chrome driver as older version would fail the tests

## Running Tests
To conduct the test, use `npm jest [test name]` to initialize and run the selected test.  

## What Do We Test
For the purpose of this project, I tested: 
- the gift card functionality leads to "school goers" and "college goers" with displaying of 10 different options for the card.
- I tested the end to end flow (happy path) from selecting "back to school" card to "add to cart" with Quantity 2 and value $10
- I tested the end to end flow with valid and invalid values using Json file for custom values for selecting the amount/cards. Add to cart will be disabled for invalid values

## How Do We Test
We broke down the tests in different tabs as it would cause timeout errors if it is put together. 
All test are in different tabs but utilizes one base page to run the tests. 
Comments and JSDoc are provided for better clarification on which test it belongs to.
Screenshot is provided for invalid value
Run the postman "Get" request to find the location_id = 911 (screenshot attached)

## Data Files
Files used for the project: 
Target Website : https://www.target.com
API URL: https://target1.p.rapidapi.com/stores/get-details
<<<<<<< HEAD
=======

>>>>>>> 17ca03b031cae7c344094bb3c5e4f5f75ce3daa6
