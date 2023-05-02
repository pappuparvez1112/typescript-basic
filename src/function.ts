
//normal function*************
//default parameter should be set in last parameter
function add(num1:number,num2:number=5):number{
    return num1+num2;
}
const newAdd=add(5)
console.log(newAdd);


//ARROW FUNCTION**************
const addArrow=(num1:number,num2:number):number=>num1 + num2;
const newAddArrow=addArrow(2,5)
console.log(newAddArrow);


const arr=[2,3,5]
const newArray=arr.map((Element:number)=>Element*Element)
console.log(newArray);


//function into object***********
const person:{
    name: string;
    balance: number;
    addBalance(money: number): string;
}={
    name:"lemon",
    balance:5,
    addBalance(money:number){
        return `My new balance is ${this.balance+money}`;    
    } 
}
const check=person.addBalance(8);
console.log(check);


//spread operator

 const myFriends=['mukul','sohan','taj']
 const newFriends=['alif','mim','hamid']
 const allFriends=myFriends.push(...newFriends);
 console.log(myFriends);


 
 //array and object destructuring

 const [bestFriend1,bestFriend2]=myFriends;

 console.log(bestFriend2);

 //name alias

const myBestFriend={
    fullName:"Alison Bekar",
    age:25,
}

 const {fullName:setFullName}=myBestFriend;
 console.log({setFullName});


 //rest operator

//  const greetFriends=(friend1:string,friend2:string,friend3:string):void=>console.log(`hi ${friend1}\n hi ${friend2}\n hi ${friend3}`)

const greetFriends=(...friends:string[]):void=>friends.forEach(friend => {
    console.log(`hi ${friend}`)
    
}); 



 greetFriends('kasem','amla','mahi','parvez');




