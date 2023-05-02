//array of string

const names:string[]= ["abul", "kabul", "babul"];
const rollNumber:number[]=[55,33,44]

rollNumber.map(roll=>roll.toFixed)
const newName =names.map(name=>name.length)
console.log(newName);

const student= ["abul", "kabul", "babul",77,true];
const newComer=student.push(false);
console.log(student);

//touple

const worker: [string,number] = ["abul",22];

const boyfriends: [string, boolean,number,null] = ["abul", true,22,null];
boyfriends[2]=33;
console.log(boyfriends);