**Javascript**


ES6
let and const
callback
destructuring of function
default
Arrow function 
bactic operator(``)

Javascript is  a dyanamic scripting language
Its both server and client side scripting language

Variables:
    Its is container to store value to perform operations for future use.
    Creating variable using 3 keywords
    - var(older approach ,global scope, redeclare the variable, can re-intialise multiple times)
    - let(block or functional level scope, cannot redeclare the variable)
    - const(cannot re-initialise)
    - let and const Introduced in ES6

Datatypes:
    It adds the label to the container.
    -> Primitive datatype -> number,string,boolean,undefined(variable is declared but not initialised),null(variable with no value),BigInt(to store beyond normal number),Symbol.
    ->Reference datatype -> Array, Object, Function

->Javascript is loosely typed(dont need to define the type of datatype)


Operator:
->Arithmetic Operator
->Assignment Operator
->Comparison Oprator
->Logical operator
->Unary Operator
->Ternary operator
->etc
   
Control Statements:
->if
->if... else
->if...else if ..else
->switch

Looping Statements:
->for loop(know the number of iterations)
->while loop
->do-while loop

Jump Statements:
->Break
->Continue(skip the particular iteration)

->Array
Array is the collection of data (need not be similar datatype in js)

*********************************************************************************************************************************************

->Function
A group of code grouped together to perform a specific task according to requirements is called function. Can achieve code reusability.

Default Parameter is used when no argument is used

Nested function - FUnction inside another function

Objects:
It is a data structure in javascript
It is collection of keyvalue pairs where is the information or data is stored in the form of Keys and Value


Destructuring of Object
Extracting a value from an object and storing in variable
It is defined in ES6

DOM:
programming interface provided by the browser that allow js to interact and manipulate the html and css element

->DOM selector:
method in javascript that help us to select a html element from webpage, so that we can modify,read or delete the element.
5 types of dom selector:
->getElementByID() //single element
->getElementByClassName() //html collection of elements
->getElementByTagName()   //html collection of elements
->querySelector() //select 1st matching element
->querySelectorAll() //return type is nodeList selects all the elements

Predefined functions in Javascript
->getAttribute() - able to get the value of attribute for  particular element
->setAttribute() - able to set the value of attribute for  particular element



Task
On webpage display a bulb is off with 2 button off and on 
when clicked on On button bulb on when clicked on off turn of bulb
toggle button- to on and off bulb

*******************************************************************************************************************************************************

Asynchronous Programming
    Synchronous programming:All task are executed in one after the other in a systematic order
    js is a single line execution from top to bottom

If more than one task has to be  achieved can be achieved with the help of Asynchronous programming.

Ways to fix the problem with the asynchronous :
Using callback function //It becomes callback hell when nested callback is used 
Using Promise - represent a value that may available now,later or never
              - has 3 states pending-later, resolved-now, rejected-never.
              - async-awake(async- make a function return a promise,awake- first promise is to be called and then whatever is there going to return)

ES6(ECMA Script 6 2015):
Javascript version it gives how to write code
->let and const
->arrow function
->Template Literals - embedded variables inside a string
->Array and object Destructuring
->Default Parameters
->Spread Operators-we can store the the new elements in the array
->Rest Operators- is used to collect multiple elements in js into a single array or object
->Class
->Map & Set-map collection of data elements are stored in the form of keys and values
->for in and for off loop
->promise 
->async awake
->import export
