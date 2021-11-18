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

console.log('adding an item to the basket');

console.log(addItem(basket));

console.log(basket);

console.log('items in the basket:', basket);

//create a function called 'listItems'

console.log('adding more fruit to basket');
basket.push('pineapple', 'guava', 'dragonfruit');

console.log('items in the basket:', basket);

function listItems(item) {
    console.log('in listItems');
    for (let x of item) {
        console.log(x);
    }
    return 'thats it';
}

console.log(listItems(basket));

//create a function called 'empty'

console.log('empty the basket');

//i made the function an expression instead of a declaration because
//the declaration emptied out all my previous 'basket' arrays

empty = function (item) {
    console.log('in empty');
    while (item.length > 0) {
        item.pop();
    }
    return 'array is empty';
};

console.log(empty(basket));

console.log('items in basket:', basket);

//****stretch****//

//using functions in other functions
//question 1

const maxItems = 5;

console.log('maximum items:', maxItems);

//question 2

function full(item) {
    console.log('in full');
    if (item < maxItems) {
        console.log('value is more than', maxItems);
        return false;
    }
    else if (item => maxItems) {
        console.log('value is equal to or greater than', maxItems);
        return true;
    }
}

console.log(full(basket));

basket = ['wine', 'glasses', 'plates', 'cheese', 'grapes', 'blanket'];

console.log('items in basket:', basket);

console.log(full(basket));

//question 3

console.log('can more items be added to the basket?');

let isFull = function (item) {
    console.log('in isFull');
    if (item.length >= maxItems) {
        console.log('no more room!');
        return false;
    }
    else if (item.length < maxItems) {
        addItem(item);
        item.push('napkins');
        return true;
    }
};

console.log(isFull(basket));

console.log('items in basket:', basket);

console.log('empty basket');
console.log(empty(basket));

console.log('items in basket:', basket);

console.log('add some items to basket');

console.log(isFull(basket));

console.log('items in basket:', basket);

//question 4

console.log('add some more stuff to the basket');
console.log(isFull(basket));

console.log('items in basket:', basket);

console.log('basket is too heavy, dont need double!');

function removeItem(item) {
    console.log('in removeItem');
    return;
}

console.log(removeItem(basket));
