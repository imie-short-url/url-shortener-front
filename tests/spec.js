// spec.js
describe('Test URL shortener', function() {

    var title = 'Super Calculator';

    //login test success
    it('should have a title', function() {
        
        var url = 'file:///home/vulture/Documents/gitProject/url-shortener-front/this.html';
        browser.get(url);
        expect(browser.getTitle()).toEqual(title);

        var username = element(by.model('user.email'));
        var password = element(by.model('user.password'));
        var submitBut = element(by.css('mdbutton[type=submit]'));

        username.sendKeys('testUser@gmail.com');
        password.sendKeys('password');

        submitBut.click();

    });
    
    //login test fail mail
    it('should have a title', function() {
        
        var url = 'file:///home/vulture/Documents/gitProject/url-shortener-front/this.html';
        browser.get(url);
        expect(browser.getTitle()).toEqual(title);

        var username = element(by.model('user.email'));
        var password = element(by.model('user.password'));
        var submitBut = element(by.css('mdbutton[type=submit]'));

        username.sendKeys('testUser@gmam');
        password.sendKeys('password');

        submitBut.click();

    });

     //login test fail mdp
    it('should have a title', function() {
        
        var url = 'file:///home/vulture/Documents/gitProject/url-shortener-front/this.html';
        browser.get(url);
        expect(browser.getTitle()).toEqual(title);

        var username = element(by.model('user.email'));
        var password = element(by.model('user.password'));
        var submitBut = element(by.css('mdbutton[type=submit]'));

        username.sendKeys('testUser@gmail');
        password.sendKeys('');

        submitBut.click();

    });

    //login test
    it('should have a title', function() {
        
        var url = 'file:///home/vulture/Documents/gitProject/url-shortener-front/this.html';
        browser.get(url);
        expect(browser.getTitle()).toEqual(title);
        
        var submitBut = element(by.css('mdbutton[type=submit]'));

        submitBut.click();

    });

});
