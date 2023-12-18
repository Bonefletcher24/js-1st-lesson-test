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

 let loggedIn = false;
 console.log(!loggedIn);
 const names = ['nicat','asim','javid']
 