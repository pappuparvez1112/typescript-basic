
//*******type alias*********  only for use primitive type brcause we can not customize primitive type by the Interface      */
 
type roll=number;  // <<< single type handle but we canot use Interface as for it ,cz interface only use for object type >>>>

type user={
    name:string;
    age:number
};
type AextendUser=user | {
    role:string;
}


const userTypeAlas:AextendUser={
    name:"labu",
    age:22,
}


//********interface  ( interface only use for object type , such as : object,function,array*/

interface IUser{
    name:string;
    age:number;
};
// const userInterface:IUser={
//     name:'kamal',
//     age:44,
// }

interface IextendedUser extends IUser{
    role:string;
}
// const userInterface:AextendUser={     //<<<<<<<< we can use both alias and interface type >>>>>>>
//     name:'kamal',
//     age:44,
//     role:'worker'
// }
const userInterface:IextendedUser={
    name:'kamal',
    age:44,
    role:'worker'
}


// function as a interface 

interface IAddNum{
    (num1:number,num2:number):number;
}
const adding:IAddNum=(num1,num2)=>num1+num2;

//function as alias type

type AliasAdd=(num1:number,num2:number)=>number;
const adding2:AliasAdd=(num1,num2)=>num1+num2;


///***** Recomanded fuction should be use as a type alias for clean and readable code */


// *** array interface

type typeAlias=number[]; //for alias type

interface InterfaceType{
    [index:number]:string | number;
}

const setType:InterfaceType=[1,2,5,6,'ok its runnig'];


