import { browser, by, element,protractor } from 'protractor';

export class HwVodPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getPageTitle() {
    return browser.getTitle();
  }

  login() {
	browser.driver.sleep(2500);
    var email = browser.driver.findElement(by.name('email'));
    email.sendKeys('angular-ui-test@heavywater.com');
    var pass = browser.driver.findElement(by.css('.password-input'));
    pass.sendKeys('testuser');
    var signin = browser.driver.findElement(by.css('.login-button'));
    signin.click();
    var conditions = protractor.ExpectedConditions;
    var elemen = element(by.css('.user-name'));
    return this.navigateTo().then(()=>{
        browser.wait(conditions.presenceOf(elemen), 2000);
          return element(by.css('.user-name')).isPresent();
        });
    }

    search()
  {
    browser.driver.sleep(10000);
    var term = element(by.css('.searchbar-input'));
    term.sendKeys('sagar');
    // this.search();
    var conditions=protractor.ExpectedConditions;
    var elemen = element(by.tagName('h3'));
    return this.navigateTo().then(()=>{
      browser.wait(conditions.presenceOf(elemen), 2000);
        return element(by.tagName('h3')).getText();
      });
  }  

  add()
  {
    var add = browser.driver.findElement(by.name('addorder'));
    add.click();
    var loannumber = browser.driver.findElement(by.name('loan_number'));
    loannumber.sendKeys('1234');
    var firstname = browser.driver.findElement(by.name('consumer_firstName'));
    firstname.sendKeys('Xavier');
    var lastname = browser.driver.findElement(by.name('consumer_lastName'));
    lastname.sendKeys('woods');
    var bday = browser.driver.findElement(by.name('consumer_birthday'));
    bday.sendKeys('12/01/2101');
    var ssn = browser.driver.findElement(by.name('consumer_ssn'));
    ssn.sendKeys('1234');
    var address = browser.driver.findElement(by.name('consumer_address'));
    address.sendKeys('an.com');
    var city = browser.driver.findElement(by.name('consumer_city'));
    city.sendKeys('angular');
    var state = browser.driver.findElement(by.name('consumer_state'));
    state.sendKeys('angular');
    var zip = browser.driver.findElement(by.name('consumer_zip'));
    zip.sendKeys('angular');
    var email = browser.driver.findElement(by.name('consumer_email'));
    email.sendKeys('angular-ui-test@heavywater.com');
    var phone = browser.driver.findElement(by.name('consumer_phone'));
    phone.sendKeys('123456');
    var addbutton = browser.driver.findElement(by.name('addbutton'));
    addbutton.click();
    var conditions=protractor.ExpectedConditions;
    var elemen= element(by.tagName('h3'))
    return this.navigateTo().then(()=>{
      browser.wait(conditions.presenceOf(elemen), 2000);
        return element(by.tagName('h3')).getText();
      });
  }
}
