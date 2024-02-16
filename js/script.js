// const value = prompt("Enter name of tovar");
// let cost;

// switch(value){
//     case  "Apple":
//         cost = 10
//         alert(`${value} price ${cost}$`);
//         break;
//     case  "Watermelon":
//         cost = 10
//         alert(`${value} price ${cost}$`);
//         break;
//     case  "Pie":
//         cost = 10
//         alert(`${value} price ${cost}$`);
//         break;
//     default :
//         alert(`No ${value}` in storage);
// }

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// (1 > 0) ? console.log(true) : console.log(false); //true
// (0 > 0) ? console.log(true) : console.log(false); //false
// (-3 > 0) ? console.log(true) : console.log(false); //false

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
// let arr = ['test', "qwerty", true];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "test") {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } 
// true, false, false

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
// let arr = [1, 10, 13];

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] > 10) {
//         console.log(arr[i] - 5);
//     } else {
//         console.log(arr[i] + 5);
//     }
// }
// 6, 15, 8

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const input = prompt("Enter number:")
// const number = parseInt(input);

// let month;

// switch (number) {
//     case 1:
//         month = "January"
//         alert(`Number ${number} = ${month}`);
//         break;
//     case 2:
//         month = "February"
//         alert(`Number ${number} = ${month}`);
//         break;
//     case 3:
//         month = "March"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 4:
//         month = "April" 
//         alert(`Number ${number} = ${month}`);
//         break;
//     case 5:
//         month = "May" 
//         alert(`Number ${number} = ${month}`);
//         break;
//     case 6:
//         month = "June"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 7:
//         month = "July"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 8:
//         month = "August"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 9:
//         month = "September"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 10:
//         month = "October"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 11:
//         month = "November"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     case 12:
//         month = "December"
//         alert(`Number ${number} = ${month}`); 
//         break;
//     default :
//         alert("Enter value between 1 and 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// let input = prompt("Enter three digit number:");
// let number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     let sum = 0;
//     sum += Math.floor(number / 100);
//     number %= 100; 
//     sum += Math.floor(number / 10); 
//     number %= 10; 
//     sum += number; 
//     console.log(`Sum of numbers ${input} = ${sum}`);
// } else {
//     console.log("Enter three digit number!");
// }

//Sum of numbers 136 = 10