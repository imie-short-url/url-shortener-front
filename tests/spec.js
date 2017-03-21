// spec.js
describe('Test URL shortener', function() {

    var title = 'Super Calculator';

    //login test
    it('should have a title', function() {
        browser.get('[URL]');
        expect(browser.getTitle()).toEqual(title);

        var username = element(by.model('user.name'));
        var password = element(by.model('user.pass'));
        var submitBut = element(by.model('submit'));

        username.sendKeys('testUser');
        password.sendKeys('password');

        submitBut.click();

    });

    //Register test
    it('should have a title', function(){

        browser.get('[URL]');
        expect(browser.getTitle()).toEqual(title);

        var username = element(by.model('user.name'));
        var password = element(by.model('user.pass'));
        var submitBut = element(by.model('submit'));

        username.sendKeys('testUser');
        password.sendKeys('password');

        submitBut.click();
    
    });
});
