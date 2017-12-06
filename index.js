const _ = require('lodash');
const fs = require('fs');

const {data} = require('./data.js');
const sortedItems = _.sortBy(data, "Id");

unflatten(sortedItems);

function unflatten(input) {
    const finalItems = [];
    const rootItems = input.filter(item => item.ParentId === 1);
    
    for (const item of rootItems) {
        finalItems.push(item);
    }

    for (const item of finalItems) {
        findAllChildren(item, input);
    }

    fs.writeFile("results.json", JSON.stringify(finalItems, null, 4), (error) => {
        console.log("wrote file!")
    });
}

function findAllChildren(item, flatArray) {
    item['children'] = []; // initialize
    const itemId = item.Id;
    const children = flatArray.filter(child => child.ParentId === itemId);
    item['children'] = children;

    for (const child of item['children']) {
        findAllChildren(child, flatArray);
    }
}