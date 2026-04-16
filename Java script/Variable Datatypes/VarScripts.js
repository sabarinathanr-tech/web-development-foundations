console.log("\n=== VARIABLES ===");

let a=10;
let b=30;
const c=20;
console.log("a:",a);
console.log("b:",b);

a=40;
console.log("after changing a becomes:",a);

console.log("\n=== DATA TYPES ===");

let n=12;
let s="Hi,Nice to meet you!";
let name="Sabarinathan";
let msg = `${s} ${name}`;
let bool=true;
let empty=null;
let undef;
let big=1234567890098721n;
let id=Symbol("id");

console.log("n:",n);
console.log("s:",msg);
console.log("bool:",bool);
console.log("empty:",empty);
console.log("typeof undef:",typeof undef);
console.log("big:",big);
console.log("id:",id);

console.log("\n=== TYPE COERCION ===");

console.log('"5" + 2 =', "5" + 2);  // only + operator causes string concatenation
console.log('"5" - 2 =', "5" - 2);
console.log('true + 1 =', true + 1);


console.log("\n=== COMPARISON ===");

console.log("5 == '5' :", 5 == "5");
console.log("5 === '5':", 5 === "5");


console.log("\n=== TRUTHY / FALSY ===");

if ("") {
  console.log("Empty string is TRUE");
} else {
  console.log("Empty string is FALSE");
}

if ("hello") {
  console.log("Non-empty string is TRUE");
}


console.log("\n=== ARRAY REFERENCE ===");
 
let arr1=[1,2,3];
let arr2=arr1;

arr2.push(4);

console.log("arr1:",arr1);
console.log("arr2:",arr2);


console.log("\n=== CHALLENGE ===");

let x = [1, 2];
let y = x;

y = [3, 4];

console.log("x:", x); 