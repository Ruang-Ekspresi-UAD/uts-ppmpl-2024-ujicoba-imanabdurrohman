// Import required modules
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Webpage Tests', function () {
    let driver;

    // Set up Selenium WebDriver before tests
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('D:/Iman/Kuliah/Semester 5/Matkul/PPMPL/uts-ppmpl-2024-ujicoba-imanabdurrohman/index.html');
    });

    // Close the WebDriver after tests
    after(async function () {
        await driver.quit();
    });

    it('should have the correct page title', async function () {
        const title = await driver.getTitle();
        expect(title).to.equal('Document');
    });

    it('should navigate to "Sobre mim" section', async function () {
        const sobreLink = await driver.findElement(By.css('a[href="#sobre mim"]'));
        await sobreLink.click();

        const section = await driver.wait(until.elementLocated(By.id('sobre mim')), 2000);
        const isDisplayed = await section.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should navigate to "My Hobbies" section', async function () {
        const hobbiesLink = await driver.findElement(By.css('a[href="#hobbies"]'));
        await hobbiesLink.click();

        const section = await driver.wait(until.elementLocated(By.id('hobbies')), 2000);
        const isDisplayed = await section.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should display "Contact Me" section', async function () {
        const contactLink = await driver.findElement(By.css('a[href="#contact"]'));
        await contactLink.click();

        const section = await driver.wait(until.elementLocated(By.id('contact')), 2000);
        const isDisplayed = await section.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should check if footer has correct text', async function () {
        const footer = await driver.findElement(By.tagName('footer'));
        const footerText = await footer.getText();
        expect(footerText).to.include('© 2024 [Jorge Conde]. All rights reserved.');
    });
});
