//alias custom type for object

type crushType={
    name:string;
    age?:number;
    profession:string;
    address:string;

}


const crush1:crushType={
    name:"lovebird",
    age:22,
    profession:"developer",
    address:"uk"
};

const crush2:crushType={
    name:"lovebird2",
    profession:"designer",
    address:"usa"
}

// const crush2:{
//     name:string;
//     age?:number; //optional
//     profession:string;
//     address:string;
// }={
//     name:"lovebird2",
//     profession:"designer",
//     address:"usa"
// }

//***********single primitive alias type like string,number,boolean */

type isCrushType=boolean
const isCrushSingle:isCrushType=false;
type courseName=string
const welcome:courseName="wellcome to next level course"
console.log(welcome);



//***************functional alias type **** */




type operationType=(x:number,y:number)=>number;

const calculate =(
    num1:number,
    num2:number,
    operation:operationType
    )=>{

    return operation(num1,num2)

};
const result =calculate(15,20,(x,y)=>x*y);
console.log(result);