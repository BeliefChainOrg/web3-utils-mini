const Should = require("chai").should();
const mweb3 = require("../web3-utils.js");

describe('isAddress', function () {
  it ('Should be invalid address', function() {
    mweb3.isAddress("123").should.equal(false);
    mweb3.isAddress("0x123").should.equal(false);
    mweb3.isAddress("01938847574882954060605i4123qwurtiwi3274").should.equal(false);
    mweb3.isAddress("0x01938847574882954060605i4123qwurtiwi3274").should.equal(false);
    mweb3.isAddress("1234567890ABCDEF1234567890abcdef12345678").should.equal(false); 
    mweb3.isAddress("0x1234567890ABCDEF1234567890abcdef12345678").should.equal(false); 
  });
  it ('Should be valid address', function() {
    mweb3.isAddress("1234567890123456789012345678901234567890").should.equal(true); 
    mweb3.isAddress("1234567890abcdef1234567890abcdef12345678").should.equal(true); 
    mweb3.isAddress("1234567890ABCDEF1234567890ABCDEF12345678").should.equal(true); 
    mweb3.isAddress("D6aE8250b8348C94847280928c79fb3b63cA453e").should.equal(true); 
    mweb3.isAddress("0x1234567890123456789012345678901234567890").should.equal(true); 
    mweb3.isAddress("0x1234567890abcdef1234567890abcdef12345678").should.equal(true); 
    mweb3.isAddress("0x1234567890ABCDEF1234567890ABCDEF12345678").should.equal(true); 
    mweb3.isAddress("0xD6aE8250b8348C94847280928c79fb3b63cA453e").should.equal(true); 
  });
});

