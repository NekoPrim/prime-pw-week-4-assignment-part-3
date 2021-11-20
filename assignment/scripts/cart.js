console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create a global variable named 'basket' and set it to an empty array

let basket = [];
const maxItems = 5;

console.log('items in the basket:', basket);
console.log('maximum items:', maxItems);

//create a function called 'addItem'

function addItem(item) {
    console.log('in addItem');
    function isFull() {
        console.log('in isFull');
        if (basket.length < maxItems) {
            basket.push(item);
            return true;
        }
        else if (basket.length >= maxItems) {
            return false;
        }
    }
    console.log(isFull());
}

console.log('adding an item to the basket');

addItem('mango');

console.log(basket);

console.log('items in the basket:', basket);

//create a function called 'listItems'

console.log('adding more fruit to basket');
addItem('pineapple');
addItem('guava');
addItem('dragonfruit');

console.log('items in the basket:', basket);

function listItems() {
    console.log('in listItems');
    for (let x of basket) {
        console.log(x);
    }
}

listItems();

//create a function called 'empty'

console.log('empty the basket');

function empty() {
    console.log('in empty');
    basket = [];
}

empty();

console.log('items in basket:', basket);

//****stretch****//

function isFull() {
    console.log('in isfull');
    if (basket.length < maxItems) {
        return false;
    }
    else if (basket.length >= maxItems) {
        return true;
    }
}

console.log('basket is full:', isFull());

basket = ['apples', 'pears', 'bananas', 'apples', 'grapes', 'bananas'];

console.log('items in basket:', basket);

console.log('basket is full:', isFull());

//question 3

console.log('can more items be added to the basket?');
addItem('napkins');

console.log(isFull());

console.log('items in basket:', basket);

//question 4

function removeItem(item) {
    console.log('in removeItem');
    for (let x of basket) {
        if (x === item) {
            y = basket.indexOf(item);
            basket.splice(y, 1);
            return 'removed item: ' + item;
        }
        if (x != item && x === basket[basket.length - 1]) {
            console.log(`${item} is not in this array`);
            return 'null';
        }
    }
}

console.log(removeItem('apples'));

console.log(basket);

console.log(removeItem('bananas'));

console.log(basket);

console.log(removeItem('mangos'));