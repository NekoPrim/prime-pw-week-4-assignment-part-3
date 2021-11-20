console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create a global variable named 'basket' and set it to an empty array

let basket = [];
console.log(basket);

//stretch variable maxItems

const maxItems = 5;

console.log('items in the basket:', basket);
console.log('maximum items:', maxItems);

//create a function called 'addItem'
//stretch isFull in addItem

const addItem = (item) => {
    console.log('in addItem');
    const isFull = () => {
        console.log('in isFull');
        if (basket.length < maxItems) {
            basket.push(item);
            console.log(`added ${item}`);
            return true;
        }
        else if (basket.length >= maxItems) {
            console.log(`${item} can not be added`)
            return false;
        }
    }
    console.log(isFull());
};

console.log('adding an item to the basket');

addItem('mango');

console.log(basket);

console.log('items in the basket:', basket);

//create a function called 'listItems'

console.log('adding more fruit to basket');
addItem('pineapple');
addItem('guava');
addItem('dragonfruit');
addItem('pomegranate');
addItem('napkins');

console.log('items in the basket:', basket);

const listItems = () => {
    console.log('in listItems');
    for (let x of basket) {
        console.log(x);
    }
};

listItems();

//stretch isFull function

const isFull = () => {
    console.log('in isfull');
    if (basket.length < maxItems) {
        return false;
    }
    else if (basket.length >= maxItems) {
        return true;
    }
};

console.log('basket is full:', isFull());

//stretch RemoveItem function

const removeItem = (item) => {
    console.log('in removeItem');
    if (basket.indexOf(item) >= 0) { 
        y = basket.indexOf(item);
        basket.splice(y, 1);
        return 'removed item: ' + item;
    }
    if (basket.indexOf(item) < 0) {
        return 'null';
    }
};

console.log(removeItem('pomegranate'));

console.log(basket);

console.log(removeItem('watermelon'));

console.log('basket is full:', isFull());

//create a function called 'empty'

console.log('empty the basket');

function empty() {
    console.log('in empty');
    basket = [];
}

empty();

console.log('items in basket:', basket);


