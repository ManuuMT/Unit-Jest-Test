let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Divides the currency in the right value given by the object
// to obtain the currency converted to euros
function convertToEuro (currency,name){
    return currency / oneEuroIs[name];
}

// First converts the dollars into euros and then 
// multiplies the euros with the value of the yens 
function fromDollarToYen(currency){
    let inEuro = convertToEuro(currency,"USD");
    return inEuro * oneEuroIs["JPY"];
}

// Multiplies euros with the value of the dollar
// that is given in the object oneEuroIs
function fromEuroToDollar(currency){
    return currency * oneEuroIs["USD"];
}

// First converts the yens into euros and then 
// multiplies the euros with the value of the pounds 
function fromYenToPound(currency){
    let inEuro = convertToEuro(currency,"JPY");
    return inEuro * oneEuroIs["GBP"];
}

module.exports = { convertToEuro, fromEuroToDollar, fromDollarToYen, fromYenToPound };