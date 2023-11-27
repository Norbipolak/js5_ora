const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numbers2 = [];

// for (const num of numbers) {
//     numbers2.push(num*2);
// }

const numbers2 = numbers.map(function(el, index, array) {
// console.log(el);
// console.log(index);
// console.log(array);
return el * 2;
});

console.log(numbers2);

/*
    map function vár egy callback functions és vissza tudjuk kapni az elemeit, hogy az adott elem hányadik indexen található és az egész arrayt.
    1
0
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
2
1.....
*/

function duplicate(el) {
    return el;
}

const duplicateArrow = (el) =>el*2;

// const numbers3 = numbers.map(duplicate);
// const numbers4 = numbers.map(duplicateArrow);

const numbers3 = numbers.map((el)=>el + "ez egy szám");
console.log(numbers3);

const users = [
{
    id:1,
    userName: "pista88",
    email: "pista88@gmail.com"
},
{
    id:2,
    userName: "kata96",
    email:"kata96@gmail.com"
},
{
    id:3,
    userName:"peti98",
    email:"peti98@gmail.com"
}
];

const user = users.find((el)=>el.userName === "peti98"); // az element az adott esetben a user.
console.log(user); // akinek peti98 a username-e annak az összes adatát vissza fogjuk kapni ilyen formában { id: 3, userName: 'peti98', email: 'peti98@gmail.com' }