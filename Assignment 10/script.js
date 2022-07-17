// Q1

// function dateTime (){
//      var date = new Date();
//      document.write(date)
// }
// dateTime();

// Q2

// function greet(firstName, lastName) {
//        document.write(firstName + " " + lastName);
//      }
    
//      greet("Ibrahim","Ahmed");

// Q3

// var num1 = prompt("Enter your first number");
// var num2 = prompt("Enter your second number");
//  nummber = num1 + num2
// document.write("Sum of two numbers: " + parseInt(nummber))
    
// Q4

// function calculator(firstNum, secNum) {
//     var firstNum = +prompt("Enter you first Number: ")
//     var secNum = +prompt("Enter you Last Number: ");
//     var operator = prompt("Enter your operator : (+,-,*,/,%")
//     if (operator === "+") {

//         result = firstNum + secNum;
//         document.write("Sum of two number is : " + result)

//     }
//     else if (operator === "-") {

//         result = firstNum - secNum;
//         document.write("Subtraction of two number is : " + result)

//     }
//     else if (operator === "*") {

//         result = firstNum * secNum;
//         document.write("Multiplication of two number is : " + result)

//     }
//     else if (operator === "/") {

//         result = firstNum / secNum;
//         document.write("Divide of two number is : " + Math.round(result))

//     }
//     else if (operator === "%") {
//         result = firstNum % secNum;
//         document.write("Reminder of two number is : " + result)

//     }
//     else {
//         document.write("Invalid result")
//     }



// }
// calculator()

// Q5

// function squares(squareNum) {

//     var squareNum = +prompt("Enter a number to find the square of it  : ")

//     var findSquare = squareNum * squareNum;

//     document.write("Reminder of two number is : " + findSquare)

   



// }
// squares()

// // Q6
// function factorial() {
//     // Factorial of n = n! = n × (n – 1) × (n – 2) × … × 1
//     var fact = 1;
//     var factorialNumber = +prompt("Enter a number to find the factorical that number : ")
//     document.write("Factorial Of " + factorialNumber + " ! <br>")

//     // factorial of negative number is not possible 
//     if (factorialNumber < 0) {
//         document.write("The factorial of the negative number doesnot perform")
//     }

//     // factorial of 0! = 1
//     else if (factorialNumber === 0) {

//         document.write("The factorial of 0 is 1")
//     }
//     else if (factorialNumber >= 1) {
//         for (i = 1; i <= factorialNumber; i++) {

//             fact *= i;
//             document.write(i + " ")

//         }
//         document.write(" =  " + fact)

//     }
    

// }
// factorial();

// Q7

// function counting() {
//     document.write("<h1>Countring</h1> <br>")
//     var startNumber = +prompt("Enter a start Number : ");
//     var EndNumber = +prompt("Enter a End Number : ");


//     for (i = startNumber; i <= EndNumber; i++) {

//         document.write(i + "<br>")
//     }
    

// }
// counting()


// Q8

// function calculateHypotenuse(base, prep) {
        
//        var base = +prompt("Enter a base :")
//        var prep = +prompt("Enter a prependicular :")
//         var Findbase = base * base;
//         var FindPrep = prep * prep;
//         var hyp = Math.sqrt(FindPrep + Findbase);
//         document.write("Hypotenous of the triangle is : " + hyp)

//     }
//  calculateHypotenuse()

    



// // Q9

// function area(width, height) {

//     var width = +prompt("Enter a width :");
//     var height = +prompt("Enter a height :");

//     A = width * height;

//     document.write("(Argument as variable) Area of the Rectangle is " + A);

//     document.write("<br>")

//     var area = 45 * 54;
//     document.write("(Argument as value) Area of the Rectangle is : " + area)


// }
//  area()

// Q10

// function palindrome() {


//     var word = prompt("Enter your pallindrome word");
//     var check = word.split(" ").reverse().join(" ");
//     if(word === check){
//         alert("This is pallindrome word")
//     }
//     else{
//         alert("No it is not a pallindrome word")
//     }
// }
// palindrome()    

// Q11

// function titledcase() {

//     var userInput = prompt("Enter a word or Letter").toLowerCase();

//     document.write("User Input : " + userInput + "<br>")

//     document.write("Title case : ")

//     var userInput = userInput.split(' ');
//     for (i = 0; i < userInput.length; i++) {
//         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//         document.write(userInput[i])
//     }
// }
// titledcase()


// Q13

// function letterOccurence(strings, character) {

//     var strings = prompt("Enter a string :").toLowerCase();
//     var character = prompt("Enter a character: ")

//     var count = 0;
//     for (var i = 0; i < strings.length; i++) {
//         if (strings.charAt(i) == character)
//             count++;
//     }

//     document.write("Text : " + strings + "<br>")
//     document.write("There are " + count + " occurrence(s) of the word " + character);
    


// }
// letterOccurence()

// Q12

// function longestWord(str){

// var str = prompt("Enter your string : ")
// var splitArrayValue = str.split(' ');

// var storeWord = "";

// for (var i = 0; i < splitArrayValue.length; i++) {
//     if (splitArrayValue[i].length > storeWord.length) {
//         storeWord = splitArrayValue[i];
//     }
// }
//     // return storeWord;
//     document.write("Actual String is : " + str + "<br>")
//     document.write("Longest word in String is : " + storeWord)
    
// }
// longestWord()

// Q14

// function CircumferenceAndArea() {

//     function Circumference(r) {
//         var r = parseFloat(prompt("Enter a radius for Circumference of Cricle : "))
//         var coc = 2 * Math.PI * r;
//         document.write("Circumference of circle " + coc + "<br>");
//     }
//     function Area(r) {
//         var r = parseFloat(prompt("Enter a radius for Area of circle : "))
//         var area = Math.PI * r * r;
//         document.write("Area of the circle: " + area);
//     }

//     Circumference();
//     Area();


// }
// CircumferenceAndArea()
// Circumference()
