console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create a global variable named 'basket' and set it to an empty array

let basket = [];

console.log('items in the basket:', basket);

//create a function called 'addItem'

function addItem(item) {
    console.log('in addItem');
    item.push('mango');
    return true;
}

console.log(addItem(basket));

console.log(basket);

console.log('items in the basket:', basket);

//create a function called 'listItems'

basket.push('pineapple', 'guava', 'dragonfruit');

console.log('items in the basket:', basket);

function listItems(item) {
    console.log('in listItems');
    let x = 0;
    for (x in item) {
        console.log(item[x]);
    }
    return 'thats it';
}

console.log(listItems(basket));

//create a function called 'empty'

empty = function(item) {
    console.log('in empty');
    while (item.length > 0) {
        item.pop();
    }
    return 'array is empty';
}

console.log(empty(basket));

console.log('items in basket:', basket);