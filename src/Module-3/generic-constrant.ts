type myInfoType={
    name:string;
    age:number;
    salary:number;
    other:boolean;
    other1:null
   
}

const myInfo3:myInfoType={
    name:'pulok',
    age:23,
    salary:1200000,
    other:false,
    other1:null,
};


//*********  {name:string,age:number,salary:number}  should be fixed or unchangeable */

type aliasGenericConstraintsType={name:string,age:number,salary:number} // << or  
interface interfaceGenericContraintsType{name:string,age:number,salary:number}

const addMyInfo3=<T extends aliasGenericConstraintsType   | interfaceGenericContraintsType >(myInfo3:T)=>{
    const crushSpreadOperator2='ache kew ekjon';
    const newData3={...myInfo3,crushSpreadOperator2};
    return newData3;
}
const resultSpread1=addMyInfo3<myInfoType>(myInfo3);
console.log(resultSpread1.name);

const resultSpread2=addMyInfo3(myInfo3); 
// console.log(resultSpread1.name);