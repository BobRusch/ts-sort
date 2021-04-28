"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollections_1 = require("./CharactersCollections");
var LinkedLists_1 = require("./LinkedLists");
var numbers = new NumbersCollection_1.NumbersCollection([
    11,
    -3,
    12,
    -7,
    13,
    14,
    50,
    22,
    2,
    10,
    0,
]);
numbers.sort();
console.log('Sorting an array of Numbers\n', numbers.data, '\n');
var charsColl = new CharactersCollections_1.CharactersCollection('Xb&@ksS45D#d$s:jf');
charsColl.sort();
console.log('Sorting a string\n', charsColl.data, '\n');
var linkedList = new LinkedLists_1.LinkedList();
linkedList.add(20);
linkedList.add(100);
linkedList.add(-25);
linkedList.add(0);
linkedList.add(-4);
linkedList.add(30);
linkedList.add(-2);
linkedList.add(8);
linkedList.sort();
console.log('Sorting a Linked List');
linkedList.print();
