//const { TestWatcher } = require("jest")

const tryit = require("./try")

test("is prime or not", ()=>{

    let num  = 7;
    
    expect(tryit.isPrimeorNot(num)).toBe(true);

});