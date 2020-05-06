//remainder
const remainder = (a,b) => a%b;

//add
const add = (a,b) => a+b;

//multiply
const multiply = (a,b) => a*b;

//square
const squared = (a) => a*a;


//one that is greater than the other
const isGreater = (a,b) => a > b ? a : b;

//even or add
const evenOrOdd = (a) => a%2===0 ? "even" : "odd";

//reverses a string
function reverseString(myString){
let stringArray = myString.split('');
let i = 0, j = stringArray.length-1;
let temp;
  while(i < j){
    temp = stringArray[i];
    stringArray[i++] = stringArray[j];
    stringArray[j--] = temp;
  }
  console.log(stringArray.join(''));
}
//invoke the functions
reverseString("hello there Sarah");
console.log(remainder(5,2));
console.log(squared(5));
console.log(isGreater(2,1));