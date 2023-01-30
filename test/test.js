// Requiring module
const fs = require("fs");
const path = require("path");
const request = require('request');
const assert = require('assert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Unit tests

describe("login.html unit tests", () => {
    const filePath = path.join(__dirname, "../resources/html/login.html");
    const html = fs.readFileSync(filePath, "utf-8");
    const dom = new JSDOM(html);
    const input_user = dom.window.document.querySelector("#username");
    const input_pass = dom.window.document.querySelector("#password");

    before(() => {
        //This part executes once before all tests
    });

    after(() => {
        //This part executes once after all tests
    });

    // We can add nested blocks for different tests
    describe("Username field", () => {
        beforeEach(() => {
            //executes before every test
        });

        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_user.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_user.setAttribute("value", "Mark");
            assert.strictEqual(input_user.value, "Mark");
        });
    });

    describe("Password field", () => {
        beforeEach(() => {
            //executes before every test
        });

        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_pass.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_pass.setAttribute("value", "123456");
            assert.strictEqual(input_pass.value, "123456");
        });
    });

    /* it("Is returning 6 when multiplying 2 * 3", () => {
        assert.equal(2*3, 6);
    });

	it("Is returning 4 when adding 2 + 2", () => {
	expect(2 + 2).to.equal(4);
	});

	it("Is returning boolean value as true", () => {
	expect(5 == 5).to.be.true;
	});
	
	it("Are both the sentences matching", () => {
	expect("This is working").to.equal('This is working');
	}); */
});


describe("signup.html unit tests", () => {
    const filePath = path.join(__dirname, "../resources/html/signup.html");
    const html = fs.readFileSync(filePath, "utf-8");
    const dom = new JSDOM(html);
    const input_user = dom.window.document.querySelector("#username");
    const input_email = dom.window.document.querySelector("#email");
    const input_pass = dom.window.document.querySelector("#password");
    const input_cpass = dom.window.document.querySelector("#c_password");

    describe("Username field", () => {
        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_user.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_user.setAttribute("value", "Mark");
            assert.strictEqual(input_user.value, "Mark");
        });
    });

    describe("Email field", () => {
        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_email.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_email.setAttribute("value", "mark@gmail.com");
            assert.strictEqual(input_email.value, "mark@gmail.com");
        });
    });

    describe("Password field", () => {
        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_pass.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_pass.setAttribute("value", "123456");
            assert.strictEqual(input_pass.value, "123456");
        });
    });

    describe("Confirm password field", () => {
        it("should have an empty field when the page loads", () => {
            assert.strictEqual(input_cpass.value, "");
        });
        
        it("should update the value when the value attribute is changed", () => {
            input_cpass.setAttribute("value", "123456");
            assert.strictEqual(input_cpass.value, "123456");
        });
    });
});

// Integration Tests

describe("login.html integration tests", () => {
    describe('POST /api/auth/signin', function() {
        it('responds with status OK', (done) => {
            const options = {
                url: 'http://localhost:3000/api/auth/signin',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: {
                    username: 'Mark',
                    password: '123456'
                }
            };

            request(options, (err, res, body) => {
                assert.equal(res.statusCode, 200);
                done();
            });
        });
    });
});