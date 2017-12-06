const _ = require('lodash');

const {data} = require('./data.js');
const sortedItems = _.sortBy(data, "Id");

console.log(sortedItems);