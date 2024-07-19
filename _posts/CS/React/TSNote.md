---
title: 'TS Note'
date: 2024-07-19 17:37:12
tags: [TS]
cover: https://ooo.0x0.ooo/2024/05/25/OJg0Dc.jpg
categories: 
- [CS,TS]
---



# ts note

```typescript
// explicit type
let charactoer:string;
let age:number;
let isLoggedIn: boolean;

age = 2;

// arrays
let ninjas:string[];
// let ninjas:string []=[];
// thus we can do ninjas.push('hello');
// if we didn't initialize arrays, we can't do push operation

ninjas = ['hello','world'];

// better wtriting style
let arrs:number[] = [];
arrs.push(233);
arrs = [233,123];

// union types
let mixed: (string | number)[] = [];
// union types arrays syntax (type1 | type2 | ...)[]
// in js, it writes let miexd = [23,'hello'];
mixed.push(123);
mixed.push('hello');
mixed.push('world');
//console.log(mixed);

let uid: string | number ;
uid = 123890123890123;
uid = 'ashjdklhln12';

// explicit declare object
let obj :object;
obj = {
  name: 'cypress',
  age: 19
}

let obj2 :{
  name:string,
  age:number,
  color:string
};

obj2 = {
  name: 'string',
  age : 2,
  color: 'string',
};

// any type
let anytype: any = 25;
anytype = 'any type';
// console.log(anytype);

anytype = {
  name: 'any type (object)'
};

// let anyMixed: any[] = [];
anytype = [2,31,2];
// console.log(anytype);

let anyObj :{
  name:any,
  age:any,
}
anyObj = {
  name: 'string name',
  age :'oops I am a string',
};

// console.log(anyObj);

// Function 
//arrow function 
// parama 'c' is optional or has a default vaule 10
// optional : const add = (a:number ,b:number,c?: number|string)=> {}
const add = (a:number,b:number,c:number | string = 10):void => {

  console.log(c);
  
  console.log(a+b);
} 

//add(2,1);

const addtion = (a:number,b:number):number => {

  return a+b;
}

let number0 = addtion(10,10);
//console.log(number0);

// type aliases
type StringOrNum = string | number;
type objWithName = {
  name: string,
  uid: StringOrNum
}

let val1: StringOrNum = 2;
val1 ='hello';

let obj1:objWithName ={
  name: 'hello',
  uid: val1
}
//console.log(val1);
//console.log(obj1);


// function signature

let func1 : (a:string,b:string) => void;
func1 = (name:string, color:string):void => {
  console.log(` ${name} \'s color is ${color} `);
}
// func1('xiaowang','black');

let calculate: (a:number,b:number,c:string)=>number;
calculate = (numOne:number,numTwo:number,action:string):number =>{
  if(action === 'add'){
    return numOne + numTwo;
  }
  else {
    return numOne - numTwo;
  }
}
// console.log(calculate(2,3,'add'));

// DOM operation
//const anchor = document.querySelector('a')!;
// sign '!'is to say to the complier the 'a'tag node must be exist in the DOM.
// const form = document.querySelector('.class-name') as HTMLFormElement;

// class
class MyClass {
  name:string;
  age:number;
  constructor(c:string,num:number) {
    this.name = c;
    this.age =num;
  }
}
const myObj: MyClass = new MyClass('cypress',19);
// console.log(myObj);

class MyClass2 {
  constructor(
    public name: string,
    readonly age: number,
    private hobby:string
  ){}
  format():string{
    return `name is ${this.name}, age is ${this.age} and hobby is ${this.hobby}`;
  }
}
const myObj2 : MyClass2 = new MyClass2(`cypress`,20,`music`);
//console.log(myObj2.format());

// interface

interface MyInterface {
  name:string;
  age:number;
}
const MyInterfaceValue : MyInterface = {
  name:'cypress',
  age:20,
}

interface MyInterfaceObj {
  value: string;
  print(): void;
  get():string;
}

class MyClassImplementInterface implements MyInterfaceObj {
  constructor(
    public value:string
  ){}
  print() {
    console.log(this.value);
  }
  get():string {
    return this.value;
  }
}

const myclass2 :MyClassImplementInterface  = new MyClassImplementInterface('cypress');
//myclass2.print();
//console.log(myclass2.get());


// enum 
enum MyEnum {APPLE,BOOK,PENCIEL}
//console.log(MyEnum);


// genercis
interface genericsInterface<T> {
  data:T
}
const instanceOfGenerics: genericsInterface<string> = {
  data:'genercis'
}
//console.log(instanceOfGenerics)
const appendUid = <T extends object>(obj:T) => {
  const uid = Math.floor(Math.random()* 100);
  return {...obj,uid};
}
// const appendUid = <T extends {}>(obj:T) => {}
// const appendUid = < T extends {name:string}>(obj:T) => {}
console.log(appendUid({name:`cypress`}));



// tuples
let myTuples: [string,number] = [`this must be a string`,10];

//different from arrays union, like: let myUnionArray : (string | number) []

```