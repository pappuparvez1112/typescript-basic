type personType={
    name:string;
    age:number;
    adress:string
}
type newType="name" | "age" | "adress"  //manually create

type keyofPersonType=keyof personType

const a: newType="adress"
const b:keyofPersonType="name"   // both emlementaion is same 

function getProperty<x,y extends keyof x>(obj:x,key:y){
    obj[key]
}

const property=getProperty({name:"parvez",age:100},"age")

