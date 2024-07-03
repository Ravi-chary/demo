// const andResult4 = 'Hello' && 4 + 5
// const orResult4 = 'Hello' || 6 + 4

// const andResult5 = 'Hello' && console.log('Hello')
// const orResult5 = 'Hello' || console.log('Hello')

// const userName = prompt('Please enter your name.') || 'Ravi Kumar'
// const userAge = prompt('Please enter your age.') || 24
// const userGender = prompt('Please enter your gender.') || ''

// const userName = 'Ravi'
// const userAge = 24
// const userGender = 'M'

// console.log(`Name: ${userName}`)
// console.log(`Age: ${userAge}`)

// if (userAge >= 0 && userAge <= 4) {
//   console.log(`${userName} is a kid`)
//   console.log(`And ${userGender} is playing with kids`)
// } else if (userAge >= 5 && userAge <= 17) {
//   console.log(`${userName} is a student`)
//   console.log(`And ${userGender} is computer science`)
// } else if (userAge >= 18 && userAge <= 24) {
//   console.log(`${userName} is a student`)
//   console.log(`And ${userGender} is computer science`)
// } else if (userAge >= 25 && userAge <= 45) {
//   console.log(`${userName} is a student`)
//   console.log(`And ${userGender} is learning javascript`)
// } else if (userAge >= 46 && userAge <= 121) {
//   console.log(`${userName} is a retired`)
//   console.log(`And ${userGender} is watching movies with kids.`)
// } else if (userAge >= 121) {
//   console.log(`${userName} is a immortal`)
// } else {
//   console.log('Please enter valid age.')
// }

// While loop examples

// const friends = [
//   'Ravi',
//   'Arjun',
//   'Ravinder',
//   'Pradeep',
//   'Bannu',
//   'Shreyas',
//   'Praveen',
//   'Ravi',
//   'Arjun',
//   'Ravinder',
// ]

// let i = 0

// while (i < friends.length) {
//   console.log(`${i + 1}. ${friends[i]}`);
//   friends[i] = friends[i] + ' Procoderr'
//   i++
// }

// console.log('Program End')

// For Loop

console.log('Program Started')

// debugger

// for(i = 0; i < 4; i++){
//     console.log(i)
// }

// const friendsNames = [
//   'Ravi',
//   'Ravinder',
//   'Arjun',
//   'Pradeep',
//   'Bannu',
//   'Ajay',
//   'Pradeep',
//   'Bannu',
//   'Ajay',
// ]

// for (let i = 0; i < friendsNames.length; i++) {
//   console.log(`${i + 1} ${friendsNames[i]}`)
//   friendsNames[i] = friendsNames[i] + ' Procoderr'
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i)
// }

// Do While loop

// let i = 0

// debugger
// do {
//   console.log(i)
//   i++
// } while (i < 5)

//Functions

// function definition

// function introduceMe(username, designation, age) {
//   // console.log(typeof username)
//   // console.log(typeof designation)
//   // console.log(typeof age)
//   console.log('Hi')
//   console.log(`My name is ${username}.`)
//   console.log(`I am a ${designation}.`)
//   console.log(`I am ${age} years old.`)

//   return false
// }

// //                  function call
// const returnValue = introduceMe()

// introduceMe('Ravi Kumar', 'UI Developer', 39)
// introduceMe('Ravinder', 'Manger', 39)
// introduceMe('Arjun Raj', 'Technical Manger', 39)
// introduceMe('Pradeep', 'SEO', 29)

// function addTwoNumber(a, b) {
//   return a + b
// }
// debugger
// const result = addTwoNumber(55, 6)
// console.log(result)

// function subtractNumber(a, b) {
//   return a - b
// }

// const results = subtractNumber(55, 6)
// console.log(results)

// console.log('Program Ended')

// Hoisting Start

// debugger
// console.log(a)
// var a = 'Ravi Chary'

// hi()

//Function Definition
//Function Declaration
// function hi() {
//   console.log('Hello')
// }
//Function Definition
//Function Expression
// sayHi()
// var sayHi = function () {
//   console.log('Hello')
// }
// function () {                //Anonymous function
//   console.log('Hello')
// }

// Hoisting End

//IIFE (Immediately Invoking Function Expression )
//  (function a(){

// })()
//IIFE (Immediately Invoking Function Expression

//Scope Start
// debugger
const userName = 'Ravi Kumar'
// let userAge = 25
// var a = 50

// function add() {
//   const userName = 'Haritha'
//   const x = 5
//   const y = 10
//   console.log(x + y)
//   console.log(userName)
// }

// add()

// function subtract() {
//   const x = 15
//   const y = 25
//   console.log(x - y)
//   console.log(userName)
// }
// subtract()

//Scope End//

//Higher Order Function Start

// setTimeout(`
// console.log("Hello")
// console.log("I am Ravi Kumar")`, 500)

// const timer1 = setTimeout(`console.log("hi-1")`, 1000)
// const timer2 = setTimeout(`console.log("hi-2")`, 2000)
// const timer3 = setTimeout(a(), 3000) // named and Higher order Function

// function a(){
//   console.log('Hello World!')
// }

// setTimeout(function () {
//   //Anonymous Function
//   console.log('Hi-1')
// }, 0)
// console.log('Hi-2')

// function outer() {
//   const a = 5
//   function parent() {
//     const b = 10
//     return function () {
//       console.log(a + b)
//     }
//   }
//   return parent()
// }

// const add1 = outer()

// console.dir(add1)

//Higher Order Function End

// const maths = {
//   E: 2.718281828459045,
//   add: function (a, b) {
//     return a + b
//   },
//   square(num) {
//     return num * num
//   },
//   subtract(a, b) {
//     return a - b
//   },
// }

// const addingNumbers = (a, b) => a + b
// const add = num => num + num
// const subtract = (a, b) => a - b

// const random = () => (
//   Math.floor(Math.random() * 10) + 1
// )

// setTimeout(() => {
//   console.log('Hiiiiiii')
// }, 1000)

// const fruits = ['banana', 'apple', 'orange', 'grapes', 'mango']

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i])
// // }

// // console.log('*******************************')

// // for(const fruit of fruits){
// //   console.log(fruit)
// // }

// // fruits.forEach(function(s){
// //   console.log(s)
// // })

// fruits.forEach((fruit) => {
//   console.log(fruit)
// })

// const months = ['January', 'February', 'March', 'April', 'May', 'December']

// const capitalMonths = months.forEach((months, index) => {
//   console.log(index +1, months)
//   return month.toUpperCase()
// })

// const capitalMonths = months.map((month, index, array) => {
// console.log(index +1, months)
// console.log(array)
//   return month.toUpperCase()
// })

// const filteredMonths = months.filter((month, index, array) => {
//   // console.log(month.length < 5)
//   return month.length <= 5

// })

// const filteredMonths1 = months.filter((month, index, array) => {
//   // console.log(month.length < 5)
//   return month.length >= 5

// })

// const filteredMonths = months.filter((month, index, array) => {
//   // console.log(month.length < 5)
//   return month.toUpperCase().includes('M')

// })

// const filteredMonths = months.filter((month, index, array) => {
//   // console.log(month.length < 5)
//   return false

// })

// const students = [
//   {
//     userName: 'Ravi Kumar',
//     age: 23,
//   },
//   {
//     userName: 'Ravinder',
//     age: 21,
//   },
//   {
//     userName: 'Pradeep',
//     age: 16,
//   },
//   {
//     userName: 'Arjun',
//     age: 18,
//   },
//   {
//     userName: 'Hanshith',
//     age: 6,
//   },
// ]

// const filteredStudent = students
//   .filter((student) => {
//     // console.log(student.age > 18);
//     return student.age >= 18
//   })
//   .map((student) => {
//     return student.userName
//   })
//   .filter((student) => {
//     return student.toUpperCase().includes('A')
//   })

// const nums = [1, 2, 3, 4, 5]

// const sum = nums.reduce((accumulator, current, index) => {
//   // console.log(index, current)
//   // console.log(accumulator)
//   debugger
//   return accumulator + current
// }, 0)

// const numbers = [1, 2, 3, 4, 5]
// const doubledOddNumbers = numbers
//   .filter((num) => { return num % 2 === 1})
//   .map((num) => {return num * 2})
// console.log(doubledOddNumbers)

// const num1 = [1, 2, 3, 4, 5]
// const num2 = [6, 7, 8, 9, 10, 11, 12]

// const myName = 'Ravi Kumar'

// const joinedArray = [...num1, ...num2]

// const user = {
//   name: 'Ravi',
//   age: 25
// }

// function add() {
//   console.log(arguments)
//   let sum = 0
//   for (i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   return sum
// }

element.style.color = 'blue'

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('div').style.borderTop = '1px solid blue'
})

const allLinks = document.querySelectorAll('a');

for (const link of allLinks) {
  link.style.color = 'red';
}