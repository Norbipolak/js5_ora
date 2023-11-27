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
console.log(user); // akinek peti98 a username-e annak az összes adatát vissza fogjuk kapni ilyen formában 
//{ id: 3, userName: 'peti98', email: 'peti98@gmail.com' }

const userIndex = users.findIndex(el=>el.userName === "kata96"); // ha csak azt szeretnénk visszakapni, hogy hányadik indexet található
console.log("Kata indexe: " + userIndex);

/*
    ha szeretnénk az összes páros-páratlan számot a numbers tömbünkből -> filter
*/

const evenNumbers = numbers.filter((num)=>num%2 === 0);
console.log(evenNumbers);
// lehet hagyomás functionnal is de akkor ott kell egy return


const evenNumbers2 = numbers.filter(function(num) {
    return num%2 === 0;
});
console.log(evenNumbers2);

const oddNumbers = numbers.filter(num=>num%2 === 1);
console.log(oddNumbers);

/*
    végeredmény -> [ 2, 4, 6, 8, 10 ] és [ 1, 3, 5, 7, 9 ]
*/

/*
    reduce -> ha szeretnénk ezeket a számokat összeszorozni, összeadni egymással
*/

let sum = 0;

for (const num of numbers) {
    sum +=num; 
}

console.log(sum); //55

const sum2 = numbers.reduce((subSum, value, index, array)=> {
    console.log("subSum: " + subSum);
    console.log("value: " + value);
    console.log("index: " + index);
    console.log(array);
    console.log("*****************");
    return subSum + value;
});

/* mindig eggyel le lesz maradva
subSum: 1
value: 2
index: 1
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*****************
subSum: 3
value: 3
index: 2
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*****************
subSum: 6
value: 4
index: 3
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*****************
subSum: 10
value: 5
index: 4
*/

const sum3 = numbers.reduce((subsum, num)=>subsum + num);
console.log("sum3: " + sum3);

const sum4 = numbers.reduce((subsum, num)=>subsum * num);
console.log("sum4: " + sum4);

/*
    Az every iterációs metódus visszatérési értéke 
    egy boolean. Ha az összes elem megfelel
    a megadott feltételnek akkor true, különben false. 
*/

const every = numbers.every(num=>num > 5); // false
console.log(every);

/*
    ha van olyan, ami megfelel a megadott feltételnek
*/

const some = numbers.some(num=>num > 5); // true
console.log(some);

//spread operator a három pont -> 
//nem tudjuk pontosan,hogy mennyi paramétere lehet egy függvénynek és ilyenkor szeretnénk beírni ...számú paramétert vesszővel elválasztva
function getNumbers(...numbers) {
    console.log(numbers);
}

getNumbers(1,2,3,4,5,6,7,8,9,10);

console.log(numbers); /* [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ] */

  /*
    Minden, ami nem primítiv érték, az objektum a JavaScriptben
  */

const keys = numbers.keys();
// console.log(keys);

for (const index of keys) {
    console.log(index); // indexek 0-tól 9-ig
}

const entries = numbers.entries() // visszaad egy tömböt tömbökkel, van egy szám ami mindig az index, a másik pedig az indexen lévő elem

for (const entry of entries) {
    console.log(entry);
}

/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 6 ]
[ 6, 7 ]
[ 7, 8 ]
[ 8, 9 ]
[ 9, 10 ]
*/
