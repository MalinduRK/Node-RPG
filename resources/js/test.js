// Requiring module
const assert = require('assert');
const expect = require('chai').expect;

describe("Login tests", () => {
    before(() => {
        console.log( "This part executes once before all tests" );
        let user = "Mark";
        document.getElementById("username").val() = user;
    });
    after(() => {
        console.log( "This part executes once after all tests" );
    });
    // We can add nested blocks for different tests
    describe( "Username entered", () => {
        beforeEach(() => {
            console.log( "executes before every test" );
        });
        
        it("Is the name in the input field", () => {
            let expected = "Mark";
            let actual = document.getElementById("username").val();
            assert.equal(actual, expected);
        });
    
        it("Is returning 6 when multiplying 2 * 3", () => {
        assert.equal(2*3, 6);
        });
    });

	it("Is returning 4 when adding 2 + 2", () => {
	expect(2 + 2).to.equal(4);
	});

	it("Is returning boolean value as true", () => {
	expect(5 == 5).to.be.true;
	});
	
	it("Are both the sentences matching", () => {
	expect("This is working").to.equal('This is working');
	});
});