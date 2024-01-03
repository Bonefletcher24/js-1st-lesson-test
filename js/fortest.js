let btn = document.getElementById("btn");
btn.onclick = function () {
      alert("Hello World");
  }

//   var - can redeclare + can reassign
//   let - cannot redeclare, but can reassign
//   const - cannot redeclare and cannot reassign

// var x = 5;
// var x = 10;
// x = 10

//console.log(x);

// camelCase  - for js



const a = 10;
const b = 5;

console.log(a + b); /* 15 addition; */
console.log(a - b); /* 5 subsctraction; */
console.log(a * b); /* 50 multiplication */
console.log(a / b); /* 2 division */
console.log(a % b); /* 0 remainder */
// - когда при делении в остатке не остается ничего. А если остается, то это будет ответом. 
// Напр: 10%5 - 10/5=2(без остатка), если 11/5=2(с остатком 1, ответ 1).


console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 <= 5); //false (не меньше 5, и не равно 5)


//string - предназначенный для представления текста(прим: Hello World)
//number - предназначенный для представления чисел, как целых, так и с плавающей точкой.(1,2,3..)
//boolean - предназначенный для представления булевых (логических) значений: true (истина) или false (ложь).
//В Boolean 1 это true, 0 это false

//Double equal - двойное(нестрогое) равенство.

// Напр: хотим дать условия захода на свой аккаунт:
// loggedIn === true // с этими условиями: 
// - you can add to cart (если ты можешь войти)
// - log in first (если не можешь войти для различных задач в акк, то тебе надо сначала войти)


console.log(true == 1); //true
console.log(false == 0); //true

console.log(5 == "5"); //true , так как == нестрогое значение, console.log(5 == "4") также true.

//Tripple equal - тройное(строгое) равенство.
console.log(5 === "5"); //false , так как ===(строгое значение), должно быть без кавычек.
console.log(5 === 5); //true , так как они идентичны.

console.log(true === 1); //false (так как "true"-это из boolean, а 1 из number), надо чтобы оба были или из number или из boolean и слова или цифры были идентичны.
console.log(true === true); //true

 // INEQUALITY OPERATOR, знак !=   (not equal, не равные)
 console.log(5 != 5); //false , так как 5 равно 5, а тут указывается что 5 неравно 5-ти, это ошибка.
 console.log(5 != 10); //true
 console.log("Hello" == "HELLO"); //false

 // STRICT INEQUALITY OPERATOR, знак !==
 console.log(5 !== 10); //true так как они не равны в datatype
 console.log(5 !== 5); //false

 // != (Неравенство):
 // === (Строгое равенство)
 // !== (Строгое неравенство)

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

---------------

 let loggedIn = false;
 console.log(!loggedIn);
 const names = ['nicat','asim','javid']

 
console.log(=============Numbers=========);
consonle.log(Number("5")); //5

//PARCEINT - без остатка
console.log(parseInt("5qwe")); //5
console.log(parseInt(a5b)); //NaN
console.log(parseInt(15ab43c5)); //15
console.log(Number.parseInt("12.46qwe79")); // 12

//PARCEFLOAT - с остатком
console.log(parseFloat(12.5ab)); // 12.5
console.log(Number.parseFloat("12.46qwe79")); // 12.46

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41


console.log(isNan(50)); //false - так как 50 это номер;
console.log(isNan("50")); //true - так как это не номер, а string;

let y = "50";
y = Number(y);
console.log(isNan(y)); //false так как "50" это стринг, не номер 

console.log(=============MAth class=========);
//Math.floor()
//Math.ceil()
//Math.round()


//Math.floor()
console.log(Math.floor(1.7)); // 1 - округляя число выбирает нижнее

//Math.ceil()
console.log(Math.ceil(1.2)); // 2 - округляя число выбирает верхнее

//Math.round()
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2  - округляя число выбирает ближнее

//Math.max()
console.log(Math.max(20, 10, 50, 40)); // 50 - выбирает максимальное среди всех чисел
// Math.min()
console.log(Math.min(20, 10, 50, 40)); // 10 - выбирает минимальное среди всех чисел
// Math.pow()
console.log(Math.pow(2, 4)); // 16 - первое число в степени второго (два в четвертой степени)

// Math.random() returns a pseudo-random number in the range (0, 1)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // pseudo-random number from 1 to 10


console.log(Math.ceil(Math.random * 5)); // даёт рандомное число между 1 и 5(1,2,3,4 или 5)



//console.log(===============UPPER LOWER CASES===========)

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true


//indexOf() method
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8  -показывает с какого ряда начинается слово to
console.log(message.indexOf("hello")); // -1 - если такого слова нет в тексте, то покажет -1


//includes() method
const productName = "Maintenance droid";

console.log(productName.includes("n")); // true
console.log(productName.includes("N")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Maintenance")); // true
console.log(productName.includes("maintenance")); // false

//endsWith() method
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false


//replace() and replaceAll() methods
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


//console.log(======ROCK PAPER SCISSOR=======)

if(comp == 0) compImg.setAttribute("src", "rock.webp");
if(comp == 1) compImg.setAttribute("src", "paper.jpeg");
if(comp == 2) compImg.setAttribute("src", "scissor.png");

//если обе будут одинаковыми:
if(you == comp) alert("Ничья");

//rock logic vs paper and scissor
if(you == 0 && comp == 1) alert("Выиграл Компьютер!");
if(you == 0 && comp == 2) alert("Выиграл ты!");

//paper logic vs rock and scissor


//scissor logic vs paper and rock




--------------
//Logical AND (&&)

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"


//Logical OR (||)
const age = 5;
console.log(age < 10 || age > 30); // true || false -> true

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true


//Logical NOT (!)
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false


//Branching IF, ELSE IF, ELSE
// 1) iF statement

let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}
console.log(cost); // 100

--------------------

let cost = 0;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}
console.log(cost); // 0

// 2) ELSE statement

//если условие преобразуется в FALSE, будет выполнен код в фигурных скобках после оператора else.

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 0

//Если условие преобразуется в true, тело блока else игнорируется.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

// 3) ELSE...IF statement

//Блок else... if позволяет вам добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который будет выполнен только в том случае, если ни одно из условий не будет преобразовано в true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500


let color ="green";
if (color === "green") {
  console.log("You may go");

}

let color ="red";
if (color === "green") {
  console.log("You may go");
  
} else {
  console.log("You should stop")  //так как IF это True, ELSE  это FALSE, цвет так как не одинаковый, выберет else в CONSOLE)
}


//НО, перед ELSE может употребиться ELSE..IF. В этом случае выбирается ответ ELSE..IF, а потом уде может перейти к ELSE.

let color ="red";

if (color === "green") {
  console.log("You may go");
  
}  else if (color === "orange") {
    console.log("You should slow down"); //выберет это
}

else {
  console.log("You should stop")  
}

---------------
//выберет 2ой else if(you should run) так как цвета совпадают, если не совпали бы выбралось первое else..if

let color ="red";

if (color === "green") {
  console.log("You may go");
}

else if (color === "orange") {
    console.log("You should slow down"); 
}

else if (color === "red") {
  console.log("You should run"); //выберет это
}

else {
  console.log("You should stop")  
}

----------------------
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500
---------------------------


//console.log(=======Ternary Operator========) //НЕ ВСЕГДА ПРАКТИЧЕН

//CONDITION ? true : false  -формула написания

// ? - true
// : - false

//If the condition is true, that is, converted to true, the expression after ? is evaluated.
//If the condition is false, that is, converted to false, the expression after : is evaluated.

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

//if ... else with a ternary operator:

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

//Let's see how to find a bigger number.

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

//Код работает правильно, мы получаем большее число; однако это решение кажется слишком длинным, учитывая, насколько проста проблема. Давайте воспользуемся тернарным оператором.

const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber); //10
---------------------------------------------

let age = 18;
age >= 21 ? console.log("YES") : console.log("NO"); //NO так как 18 меньше 21(было отказано);


//Надо это написать в Ternary operator виде:

let color = "red";

if (color === "green") {
  console.log("You may go");
}

else if (color === "orange") {
    console.log("You should slow down"); 
}

else if (color === "red") {
  console.log("You should run"); //выберет это
}

else {
  console.log("You should stop")  
}

//Ternary operator вид:
let color = "red";

color === "green" ? console.log("You may go") 
: color === "orange" ? console.log("You should slow down") 
: color === "red" ? console.log("You should run") 
: console.log("You should stop");

// color ? console.log()    - IF
// : color ? console.log()  - IF..ELSE
// : color ? console.log()  - IF..ELSE
// console.log()            - ELSE


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
message = ordered > available 
  ? "Not enough goods in stock!" 
  : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
---------------------

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD
  ? "Access is allowed"
  : "Access denied, wrong password!"
  // Change code above this line
  return message;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

// Switch Statement

let day = 1;

switch (day) {
  case 1: //day 1
    console.log("WHITE DRESS"); //выберет его, так как дни совпадают
    break;

  case 2: //day 2
    console.log("YELLOW DRESS");
    break;

  default: //если в let указанного дня не будет в кейсах, выберет default
    console.log("BLACK DRESS");
    break;
}

//Если case "1" напишется как стринг, то он не примет и перейдет на case 2.

let day = 4;

switch (day) {
  case 1: //day 1
    console.log("WHITE DRESS"); 
    break;

  case 2: //day 2
    console.log("YELLOW DRESS");
    break;

  case 3:
    console.log("BROWN DRESS");
    break;

  case 4: 
  case 5:
  case 6:
    console.log("RED DRESS"); //выберет его, 
    break;

  default: 
    console.log("BLACK DRESS");
    break;
}


//SCOPE 

//outside:
const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

//inside:

if (true) {
  const value = 5;
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // ReferenceError: value is not defined




//LOOPS (ЦИКЛЫ)

//1) for loop:
for (let i = 0; i < 5; i++) {
  // код, который выполняется в каждой итерации
}

//               0        1           2         3        4
let fruits = ['apple', 'banana', 'coconut', 'grapes', 'mango']
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
----------------------
let money = 150;
while (money < 200) {
  console.log("hahaha");
  money += 10;
}
// начиная со 150(включая) тут +=10 увеличивает значение money на 10. Когда money достигнет значения 200 или более, цикл завершится.
//Таким образом, строка "hahaha" будет выведена 5 раз.

------------------------
//2) while loop:
let i = 0;
while (i < 5) {
  // код, который выполняется в каждой итерации
  i++;
}
------------
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

//3) do...while loop:   В do...while цикле блок кода выполнится хотя бы один раз, даже если условие не выполняется с самого начала. Это может быть полезно, если вам нужно выполнить какой-то код хотя бы один раз, независимо от условия.
let i = 0;
do {
  // код, который выполняется в каждой итерации
  i++;
} while (i < 5);
------------
let password = "";

do {
  password = prompt("Enter a password longer than 4 characters", "");
} while (password.length < 5);

console.log("Entered password: ", password);



// Применение цикла к массиву:
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Выводит каждый элемент массива
}

//Применение цикла к объекту:
const person = { name: "John", age: 30, job: "developer" };

for (const key in person) {
  console.log(key, person[key]); // Выводит ключи и значения объекта
}


//continue operator

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Odd i: ", i); // 1, 3, 5, 7, 9
}

--------------
//exersice 1
const answer = prompt("What is the official name of JS?")
const rightAnswer = "ECMAScript";

if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
  alert("Correct!");
} else {
  alert("Don't know? ECMAScript!")
}

//exercise 2
const hours = 14;
const minutes = 26;
let timestring;

if(minutes > 0) {
  timestring = `${hours} hours ${minutes} minutes`;
} else {
  timestring = `${hours} oclock`;
}

console.log(timestring);

//exercise 3
const userInput = prompt('Enter the number');

if(Number(userInput) === 0) {
 console.log("This is zero");
}
else if(Number(userInput) > 0) {
  console.log("This is positive number");
}
else if(Number(userInput) < 0){
  console.log("This is negative number");
}
else {
  console.log("Please input a number");
}

//exercise 4
/* Write a script that compares the numbers in variables a and b. 

If both values greater than 100,then print the maximum of them to the console.

Otherwise, the console should show the sum of the value b and the number 512.

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
    //print to the console the maximum value between a and b here
} else {
    //print to the console the sum of b and number 512 here
}
*/

const a = 20;
const b = 180;

if (a > 100 && b > 100) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
} else {
    console.log(b + 512);
}

//exercise 5

let link = "https://google.com";
if(!link.endsWith("/")) {
  link += "/";
}
// знак ! - указывает обратное, знак += добавляет еще одно значение
// Если линк гугл не имеет слэш в конце, по данному коду добавляется в конце /




//exercise 8
 const hours = 24;
 if (hours < 17) console.log("Pending");
 else if(hours >=17 && hours <=24) console.log("Expires");
 else console.log("Overdue")

 //exercise 9
 Write a script to display the project deadline time. 

/*Use if...else construction.
- If there are 0 days before the deadline - output the string "Today"
- If it's 1 day before the deadline - output the string "Tomorrow"
- If it's 2 days before the deadline - output the string "The day after tomorrow"
- If it's 3+ days before the deadline - print the string "Date in the future"

const daysUntilDeadline = 5;
// Write code below this line
*/

const daysUntilDeadline = 5;
if (daysUntilDeadline === 0) console.log("Today");
else if (daysUntilDeadline === 1) console.log("Tomorrow");
else if (daysUntilDeadline === 2) console.log("The day after tomorrow");
else console.log("Date in the future");