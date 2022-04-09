// 1. print output
function counter()
{
    var counter = 0;
    function IncreaseCounter() 
    {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// Ans: 1, 2, 3, 4



// 2. print output
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// Ans: 1, 0.



// 3. print output
for (var i = 0; i < 3; i++) 
{
    setTimeout(function log() 
    {
        console.log(i); // What is logged?
    }, 1000);
}
// 3.



// 4. Write a code to explain closure
function add(x)
{
    return function(y)
    {
        return x+y;
    };
}
var adder = add(5);
var adder1 = add(10);

console.log(adder(2));
console.log((adder1(2)))



function outer(){
    var num = 5;
    function inner(){
        console.log(num);
    }
    return inner;
}
var result = outer();
result();



// 5. Write a code to calculate area of a rectangle using inner function. 
// In this case outer function should accept parameter length and inner 
// function should accept parameter breadth.
function OuterFunction() 
{
    var  length= 10;
    function InnerFunction() 
    {
        var width=2;
        var area;
        console.log(area=length*width);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc(); 



// 6. Print Output
var a = 12;
(function () {
  alert(a);
})();
//12



//7. Print Output
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
//12



// 8. Print Output
var globalVar = "xyz";
(function outerFunc(outerArg) 
{
    var outerVar = 'a';    
    (function innerFunc(innerArg) 
    {
        var innerVar = 'b';
        console.log("outerArg = " + outerArg + "\n" +
                    "innerArg = " + innerArg + "\n" +
                    "outerVar = " + outerVar + "\n" +
                    "innerVar = " + innerVar + "\n" +
                    "globalVar = " + globalVar);
    })(456);
})(123);
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz