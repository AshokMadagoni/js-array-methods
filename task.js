// 1.Answer

var a=[1,2,3,4,5];
a.push(6,7,8,9,10)
console.log(a);

// 2.Answer

var a=[1,2,3,4,5];
a.pop();
console.log(a);
a.pop();
console.log(a);

// 3.Answer

var a=[1,2,3,4,5];
a.unshift(10,20,30);
console.log(a);

// 4.Answer

var a=[1,2,3,4,5];
a.shift();
console.log(a);
a.shift();
console.log(a);

// 5.Answer

var a=[1,2,3,4,5];
var result=a.reverse();
console.log(result);
var a=["hlo","hiii"];
var result=a.reverse();
console.log(result);

// 6.Answer

var a=[10,20,"ashok","goud","hlo",23];
var result=a.indexOf("ashok");
console.log(result);
console.log(a.indexOf("hii"));

// 7.Answer

var a=[10,20,"ashok","goud","hiii",300];
console.log(a.includes("ashok"));
console.log(a.includes("hlooooo"));

// 8.Answer

var num=[20,5,40,80,1,1000,8];
var result=num.sort((a,b) => a - b);
console.log(result);

// 9.Answer

var a=[12,20,"ashok","hiii","goud"];
var result=a.toString();
console.log(result);
console.log(a.join());

// 10.Answer

var a=[1,2,3,4,5];
a.push(6,7,8,9,10);
console.log(a);
a.shift();
console.log(a);


// 11.Answer

var a=["hii","hlo","ashok","goud","how","are","you"];
var reverse=a.reverse();
console.log(reverse);
var join=reverse.join();
console.log(join);

// 12.Answer

var num=[20,5,40,80,1,1000,8];
var result=num.sort((a,b) => a - b);
console.log(result);
var reverse=result.reverse();
console.log(reverse);

// 13.Answer

var a=[1,2,3,4,5];
a.unshift(10,20);
console.log(a);
a.shift();
console.log(a);

// 14.Answer

var a=[1,2,3,4,5];
var b=[2,10,30,40];
var concat=a.concat(b);
console.log(concat);
var sort=concat.sort((a,b) => a - b);
console.log(sort);
sort.pop();
console.log(sort);



















