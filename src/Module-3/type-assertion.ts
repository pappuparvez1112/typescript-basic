



let emni:any;

emni="next level course";

(emni as string).length;

(<string>emni).length;
  //different syntax it doesnot work on tsx so its better to use previous as syntax


function kgToGram(param:string | number):string| number | undefined{
    if(typeof param ==='string'){
        const value=parseFloat(param)*1000;
        return `the result is ${value} gram`;
    }
    if(typeof param ==='number'){
        const value=param*1000;
        return value;
    }

}

const resultone=<number>kgToGram(1);
console.log(resultone);
const resultwo=kgToGram("1") as string;
console.log(resultwo);


type errorType={
    message:string;
}


try {

}catch(err){
    console.log((err as errorType).message);
}