// functions imported from file app.js
const { convertToEuro, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//1 euro is 0.8 dollars, therefore 10 euros should be = (10 / 0.8) 
test("10 GBP should be 12.5 EUR", () => {  
    let result = convertToEuro(10, "GBP");
    expect(result).toBe(12.5);
});

//1 euro is 1.2 dollars, therefore 3.5 euros should be = (3.5 * 1.2)   
test("3.5 EUR should be 4.2 USD", () => { 
    let result = fromEuroToDollar(3.5);
    expect(result).toBe(4.2);
});

// 1 dollar is 1.2 euros & 1 euro is 127.9 yens, 
// therefore 1 dollar should be 106.5833... yens    
test('1 USD should be 106.58333333333334 JPY', () => {
    let result = fromDollarToYen(1);
    expect(result).toBe(106.58333333333334);
});

// 1 euro is 127.9 yens & 1 pound is 1.25 euros 
// therefore 10 yens should be 0.006254886630179828 pounds
test('10 JPY should be 0.06254886630179828 GBP', () => {
    let result = fromYenToPound(10);
    expect(result).toBe(0.06254886630179828);
});