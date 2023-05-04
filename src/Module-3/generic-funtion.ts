//<<<<<< arrow function >>>

const createArray=(param:string):string[]=>{
    return [param];

}
const resultArray=createArray("arrayfunction")

//genericTuple function

const createArrayTupel=<x,y>(param1:x,param2:y):[x,y]=>{
    return [param1,param2];
}
const resultArrayTuple=createArrayTupel<string,number>("arrayfunction",2)
const resultArrayTuple1=createArrayTupel<string,Array<boolean>>("arrayfunction",[true])
const resultArrayTuple2=createArrayTupel<string,[boolean]>("arrayfunction",[true])
const resultArrayTuple3=createArrayTupel<Name,[boolean]>({name:"something name type object",age:22},[true])



//generic type arrow function

const createArray1=<T>(param:T):T[]=>{
    return [param];
}
const resultArray1=createArray1<string>("arrayfunction")
const resultArray2=createArray1<boolean>(false)
type Name={name:string;age:number}
const resultArray3=createArray1<Name>({name:"something",age:22})


//<<<<<<<< spread operator >>>>>

const crushSpreadOperator='ache kew ekjon'
const myInfo={
    name:'pulok',
    age:23,
    salary:1200000
};
const newData={...myInfo,crushSpreadOperator};

console.log(newData);


//<<<<< spread operator function >>>>>>>>>>

const myInfo2={
    name:'pulok',
    age:23,
    salary:1200000
};

const addMyInfo=<T>(myInfo2:T)=>{
    const crushSpreadOperator1='ache kew ekjon';
    const newData2={...myInfo2,crushSpreadOperator1};
    return newData2;
}
const resultSpread=addMyInfo(myInfo2);
console.log(resultSpread.name);