'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// let obj = {
//     a: 10,
//     b: 12,
// }

// let copy = obj;
// console.log('copy', copy);

// obj.a = 5;
// console.log('copy', copy.a);

// -- new way of coping objects

// const copy = (mainObj) => {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         console.log(key);
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const mainObj = {
//     a: 2,
//     b: 5,
// }

// const copyObj = copy(mainObj);
// console.log(copyObj);

// mainObj.a = 10;
// console.log(copyObj.a, mainObj.a);

//-- using object.assign() method

// let obj = {
//     a: 1,
//     b: 2,
// };
// let objCopy = Object.assign({}, obj);
// console.log(objCopy);
// obj.a = 10;
// console.log(objCopy.a, obj.a);

//-- problem for object.assign() method

// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 4
//     }
// };

// let objCopy = Object.assign({}, obj);
// console.log('old', obj, 'new', objCopy);
// obj.a = 10;
// obj.c.d = 50;
// console.log('old', obj, 'new', objCopy)

//-- deep copy object
// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3
//     }
// };

// let objCopy = JSON.parse(JSON.stringify(obj));

// console.log('old', obj, 'new', objCopy);
// obj.a = 10;
// obj.c.d = 20;
// console.log('old', obj, 'new', objCopy);

//-- copy object method
// let obj = {
//     a: 1,
//     b: 2,
//     c: function() {
//         return true;
//     }
// }

// let copy1 = Object.assign({}, obj);
// let copy2 = JSON.parse(JSON.stringify(obj));
// console.log(copy1, copy1.c);
// console.log(copy2, copy2.c);

//-- using spread element (...)
var obj = {
    a: 1,
    b: 2,
    c: {
        d: 4
    }
};

var newObj = _extends({}, obj);
obj.a = 44;
console.log('old', obj, 'new', newObj);
