// creating arrays 

let arr1 = [];
let arr2 = [1, 2, 3, 4];
let arr3 = new Array(5);

//accessing array elements
console.log(arr2[0]);


//common array methods 
arr2.push(5)// add element at the end 
console.log('new array ', arr2);

arr2.pop()// removes element form the end 
console.log('new array after pop ', arr2);

arr2.shift()// removes element from beginning 
console.log('new array after SHIFT ', arr2);

arr2.unshift(10)// add element at the beginning 
console.log('new array after UNSHIFT ', arr2);

delete arr2[1] // removes the specific element but leaves undefined at its position
console.log('new array after DELETE ', arr2);

const combinedArray = arr2.concat(arr3); // combines two array end to end
console.log('new array after CONCAT ', combinedArray);

result = arr2.splice(2, 1, "Lemon", "Kiwi");// adds items to an array 
console.log('new array after SPLICE ', result, arr2);

result = arr2.toSpliced(2, 1, "Lemon", "Kiwi");// adds items without changing the original array
console.log('new array after SPLICE ', result, arr2);

var result = arr2.slice(0, 2); // adds items without changing the original array and returns the removed items
console.log('new array after SLICE ', result, arr2);


/* iteration over an array */

for (let i = 0; i < arr2.length; i++) {
    console.log('item at index = ', i, ' = ', arr2[i]);
}


arr2.forEach((item, index) => {
    console.log('item at index = ', index, ' = ', item);
})

arr2.map((item, index) => {
    console.log('item at index = ', index, ' = ', item);
})

result = arr2.filter((item) => typeof item === "number");
console.log(result);


result = arr2.reduce((acc, value) => {
    if (typeof value === 'number') {
        acc = acc + value;
    }
    return acc;
})

console.log(`result = ${result}`)


result = arr2.every((item, index) => typeof item === "number")//checks if every item passes the given condition 

result = arr2.some((item, index) => typeof item === "number") // checks if any item passes the given condition




