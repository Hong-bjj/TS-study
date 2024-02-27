"use strict";
//Boolean
let boolean;
let falseBoolean = false;
//Number
let number;
let integer = 6;
let float = 1.23456;
//string
let string;
let firstName = "Doe";
//Array
//한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
//여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
//여러 타입을 단언 x any
let someArray = ["John", 1, [], {}, false];
//Interface, Type
//읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// stringArray.push("c");
// numberArray[0] = 3;
//Tuple
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 3];
// tuple1 = [1, "a"];
let users;
users = [
    [1, "John"],
    [2, "Hong"],
];
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);
//any
let any = "abc";
any = 1;
any = "2";
any = false;
//unknown
let unknown = false;
// let string: boolean = unknown;
let string2 = unknown;
//object
let obj = {};
let arr = [];
// let null : object = null
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1",
    description: "description1",
};
