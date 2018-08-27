

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
 let i=1;
 let j=1;
 if(n===1 ||n===2){
    return i;
 }
 let k;
 for(k=2;k<n;k++){
     if(k%2===1){
         i=i+j;
     }
     else{
         j=i+j;
     }
 }
 if(n%2===1){
     return j;
 }
 else{
     return i;
 }

}
console.log(fib(8));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(numArray)
{
   for (let j=0;j<numArray.length;j++){
        for (let i=0; i < numArray.length-1; i++) {
            if (numArray[i] > numArray[i+1]) {
                let hold = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = hold;
            }
        }
    }
}
 
bubbleSort(a);
console.log(a);
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    let str='';
    for(let i=0;i<someStr.length;i++){
        str+=someStr.slice(someStr.length-i-1,someStr.length-i);
    }
    console.log(str);
    return str;
}
reverseStr('12345');

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    let fac=1;
    for(let i=1;i<=someNum;i++){
        fac=fac*i;
    }
    console.log(fac);
    return fac;
}
factorial(5);

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr  , length, offset){
    if(offset>someStr.length-1){
        alert("offset must be in the word")
        return;
    }
    else if (length>someStr.length-1){
        alert('length cannot be longer than the word is')
        return;
    }
    else if(offset<0){
        alert("offset must be positive")
        return;
    }
    else if (length<0){
        alert('length cannot be negative')
        return;
    }
    else if (length<offset){
        alert('length cannot be less than offset')
        return;
    }
    else{
        return someStr.slice(offset-1,length);
    }
}
// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    let i;
    i=Math.floor(someNum/2);
    if(someNum/i===2){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(1123))
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let each;
    let i=someStr.length;
    let j=0
    for(j=0;j<Math.floor(i/2); j++){
        if (someStr.split('')[j]===someStr.split('')[i-j-1]){

        }
        else{
            return false
        }
    }
    return true;
}
console.log(isPalindrome('ractecar'));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    switch (shape){

        case 'square':
            let str='';
            for(let i =0 ; i<height;i++){
                str+=character;
            }
            for(let i =0 ; i<height;i++){
                console.log(str)
            }
        break;
        
        case 'triangle':
            str='';
            for(let i =0 ; i<height;i++){
                str+=character;
                console.log(str)
            }
        break;
    
        case 'diamond':
            str=character;
            let sp='';
            for(let i =0 ; i<Math.floor(height/2);i++){
                sp+=" ";
            }
            for(let i =0 ; i<Math.floor(height/2);i++){
                console.log(sp+str)
                str+=character+character;
                sp=sp.slice(1);
            }
            for( let i=Math.floor(height/2)  ; i<height;i++){
                console.log(sp+str)
                sp+=' ';
                str=str.slice(2);
            }
        break;
        default:
            console.log(shape+' is not a shape')
        break;
    }
   


}
let t='s'
printShape('square',7,t);

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    Object.getOwnPropertyNames(someObj).forEach(name=>{
        console.log(name+':'+someObj[name]);
    })
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
var s=[2,3,4,5,6,7,8,9];
function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);

}
deleteElement(s);

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
console.log(someArr.length);
someArr.splice(2,1);
console.log(someArr.length);
}

spliceElement(s);

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age){
    this.name=name;
    this.age=age;
    return this;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age){
    let  john={'name':name,'age':age}
    return john;
}
 
 
 
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

//* / 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents. */
function getUSA(){
    console.log( document.getElementsByTagName('h1')[0].childNodes[3].innerHTML)
  }
/* // 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department. */
function getPeopleInSales(){
    let a =document.getElementsByClassName('empName')
    for(let i=0;i<a.length;i++){
      if(a[i].nextElementSibling.innerHTML==='Sales'){
        console.log(a[i].innerHTML)
      }
    }
  
  }
  getPeopleInSales()
  
/* // 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span> */
function getAnchorChildren(){
    let a =document.getElementsByTagName('a');
    for(let i=0;i<a.length;i++){
  
      // console.log(a[i].childNodes.length)
      for(let j=0;j<a[i].childNodes.length;j++){
        // console.log(a[i].childNodes[j].innerHTML)
        if(a[i].childNodes[j].tagName==='SPAN'){
          console.log(a[i].childNodes[j].innerHTML)
        }
      }
    }
  }
getAnchorChildren(); 
/* // 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents. */
function getHobbies(){
    for(let i=0;i<document.getElementsByTagName('select')[1].querySelectorAll('[selected]').length;i++){
      console.log( document.getElementsByTagName('select')[1].querySelectorAll('[selected]')[i].innerHTML)
    }
  }
  getHobbies();
/* // 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. */
function getCustomAttribute(){
    for(let i=0;i<document.querySelectorAll('[data-customAttr]').length;i++)
  console.log(document.querySelectorAll('[data-customAttr]')[i].getAttribute('data-customAttr'));
  }
getCustomAttribute()
/* // 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element. */
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById('num1').onchange=function () {sum()}
document.getElementById('num2').onchange=function () {sum()}
function sum(){
    let num1 =+document.getElementById('num1').value;
    let num2 =+document.getElementById('num2').value;
    document.getElementById('sum').innerHTML =num1+num2;
  }
  function getUSA(){
    console.log(document.getElementById('USA'));
  }
  getUSA();
  
/* // 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill. */
document.querySelectorAll('select[name="skills"]')[0].onchange=function (){skill()};
function skill(){
  alert('Are you sure '+ document.querySelectorAll('select[name="skills"]')[0].value+" is your skill?");
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
document.getElementById('firstForm').onchange=function(){fav()}
let color1='undecided';
function fav(){
  
  favorite=document.getElementsByName('favoriteColor');
  for(let i=0;i<favorite.length;i++){
    if(favorite[i].checked){
      let color2=color1;
      if(color1===favorite[i].value){
        break;
      }
      color1=favorite[i].value;
      alert(`Are you sure you like ${color1} better than ${color2}`);


    }
  }
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
document.getElementsByTagName('tr')[0].onpointerover= function () {if(document.getElementsByClassName('empName')[0].style.visibility === 'collapse'){document.getElementsByClassName('empName')[0].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[0].style.visibility = 'collapse'}};
document.getElementsByTagName('tr')[1].onpointerover= function () {if(document.getElementsByClassName('empName')[1].style.visibility === 'collapse'){document.getElementsByClassName('empName')[1].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[1].style.visibility = 'collapse'}};
document.getElementsByTagName('tr')[2].onpointerover= function () {if(document.getElementsByClassName('empName')[2].style.visibility === 'collapse'){document.getElementsByClassName('empName')[2].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[2].style.visibility = 'collapse'}};
document.getElementsByTagName('tr')[3].onpointerover= function () {if(document.getElementsByClassName('empName')[3].style.visibility === 'collapse'){document.getElementsByClassName('empName')[3].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[3].style.visibility = 'collapse'}};
document.getElementsByTagName('tr')[4].onpointerover= function () {if(document.getElementsByClassName('empName')[4].style.visibility === 'collapse'){document.getElementsByClassName('empName')[4].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[4].style.visibility = 'collapse'}};
document.getElementsByTagName('tr')[5].onpointerover= function () {if(document.getElementsByClassName('empName')[5].style.visibility === 'collapse'){document.getElementsByClassName('empName')[5].style.visibility = 'visible'}else{document.getElementsByClassName('empName')[5].style.visibility = 'collapse'}};



//* / 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the seco */nd without having to reload the page.
function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
// /* 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change  */the text to a random color.
document.getElementById('helloWorld').onclick=function (){changeColor()};
function changeColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  setTimeout(function(){document.getElementById('helloWorld').style.color=color}, 3000);

}
// /* 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).  */

var walkDOM = function (node,func) {
    func(node);  
    node = node.firstChild;
    while(node) {
        walkDOM(node,func);
        node = node.nextSibling;
    }
  };    
  
  var functionToInvoke = function(node) {
  console.log( node.tagName);
  };
