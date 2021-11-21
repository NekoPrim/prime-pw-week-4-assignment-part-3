console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create a global variable named 'basket' and set it to an empty array

const basket = [];
console.log(basket);

//stretch variable maxItems

const maxItems = 5;

console.log('items in the basket:', basket);
console.log('maximum items:', maxItems);

//create a function called 'addItem'
//stretch isFull in addItem

const addItem = (item, array) => {
    console.log('in addItem');
    const isFull = () => {
        console.log('in isFull');
        if (array.length < maxItems) {
            array.push(item);
            console.log(`added ${item}`);
            return true;
        }
        else if (array.length >= maxItems) {
            console.log(`${item} can not be added`)
            return false;
        }
    }
    console.log(isFull());
};

console.log('adding an item to the basket');

addItem('mango', basket);

console.log(basket);

console.log('items in the basket:', basket);

//create a function called 'listItems'

console.log('adding more fruit to basket');
addItem('pineapple', basket);
addItem('guava', basket);
addItem('dragonfruit', basket);
addItem('pomegranate', basket)

console.log('items in the basket:', basket);

const listItems = () => {
    console.log('in listItems');
    for (let x of basket) {
        console.log(x);
    }
};

listItems();

//stretch isFull function

const isFull = (array) => {
    console.log('in isfull');
    if (array.length < maxItems) {
        return false;
    }
    else if (array.length >= maxItems) {
        return true;
    }
};

console.log('basket is full:', isFull(basket));

//stretch RemoveItem function

const removeItem = (item, array) => {
    console.log('in removeItem');
    if (array.indexOf(item) >= 0) { 
        y = array.indexOf(item);
        array.splice(y, 1);
        return 'removed item: ' + item;
    }
    if (array.indexOf(item) < 0) {
        return 'null';
    }
};

console.log(removeItem('pomegranate', basket));

console.log(basket);

console.log(removeItem('watermelon', basket));

console.log('basket is full:', isFull(basket));

//create a function called 'empty'

console.log('empty the basket');

const empty = (array) => {
    console.log('in empty');
    while (array.length > 0) {
        array.pop();
    }
    return array;
}

empty(basket);

console.log('items in basket:', basket);


