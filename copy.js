//Copy Array
// let originalPrices = [299, 599, 1299];

// let salePrices = [...originalPrices];
// salePrices[2] = 999;

// console.log('Original Prices: ', originalPrices);
// console.log('Sale Prices: ', salePrices);

//Copy Object
let sheep1 = {
    name: 'Dolly',
    age: 3
};

let sheep2 = { ...sheep1 };
sheep2.name = 'Sheeply';

console.log('Sheep 1: ', sheep1.name);
console.log('Sheep 2: ', sheep2.name);