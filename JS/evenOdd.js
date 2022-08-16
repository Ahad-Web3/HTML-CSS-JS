
var odd_dividend = 15;
var even_dividend = 12;
var odd_divisor = 5;
var even_divisor = 2;
var quotient;
var remainder;

oddByOddQuotient = odd_dividend/odd_divisor;
oddByOddRemainder = odd_dividend%odd_divisor;
evenByevenQuotient = even_dividend/even_divisor;
evenByevenRemainder = even_dividend%even_divisor;
evenByOddQuotient = even_dividend/odd_divisor;
evenByOddRemainder = even_dividend%odd_divisor;
oddByevenQuotient = even_dividend/even_divisor;
oddByevenRemainder = even_dividend%even_divisor;




console.log("quotient = " + oddByOddQuotient + ", remainder = " + oddByOddRemainder);
console.log("quotient = " + evenByevenQuotient + ", remainder = " + evenByevenRemainder);
console.log("quotient = " + evenByOddQuotient + ", remainder = " + evenByevenQuotient);
console.log("quotient = " + oddByevenQuotient + ", remainder = " + oddByevenQuotient);



