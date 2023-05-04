export {};


// mocking

//string type
const makePromise=():Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
        const data="data is a string";
        if(data){
            resolve(data);
        }else{
            reject("failed to connect data");
        }
    })
};
// const resultPromise=makePromise()

const getPromiseData=async ():Promise<string>=>{
    const data=await makePromise();
    return data;
}


//*****boolean type */
const makePromise1=():Promise<boolean>=>{
    return new Promise<boolean>((resolve,reject)=>{
        const data=true;
        if(data){
            resolve(data);
        }else{
            reject("failed to connect data");
        }
    })
};


const getPromiseData1=async ():Promise<boolean>=>{
    const data=await makePromise1();
    return data;
}


//*** object type */

type dataType={
    data:string;
}

const makePromise2=():Promise<dataType>=>{
    return new Promise<dataType>((resolve,reject)=>{
        const data:dataType={data:"data is loading"};
        if(data){
            resolve(data);
        }else{
            reject("failed to connect data");
        }
    })
};


const getPromiseData2=async ():Promise<dataType>=>{
    const data=await makePromise2();
    console.log(data);
    return data;
    
}
getPromiseData2()
// const justCheck=async ()=>{
//     const nothing=await getPromiseData2();
//     console.log(nothing);
// }
// console.log(justCheck);

// async function myFunction() {
//     const result = await myPromise;
//     console.log(result);
//   }




//****** */ json placeholder data fetching >>>>>>>>>>>>

interface ITodo{
    userId: number;
    id: number;
    title:string;
    completed: boolean;
}
const getTodo=async () :Promise<ITodo> =>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const data= await response.json()
    // return await response.json();
    const data = await response.json();
    return data;
}

// const getTodoData=async()=>{
//     const resultTodo=await getTodo();
//     console.log(resultTodo)
//     return resultTodo
   
// };

(async()=>{
    const resultTodo=await getTodo();
    console.log(resultTodo);
    return resultTodo
   
})();




// const getTodoData=(async()=>{
//     const resultTodo=await getTodo();
//     console.log(resultTodo)
//     return resultTodo
   
// })();




// it will be call into as a parameter of resultVariable  like<<<<<<<<< const resultvariable=(async()=>{})(); **//


// const resultVariable = (async () => {                  
//     const result = await getTodoData();
//     return result;
//   })();
  
//   console.log(resultVariable);
// const checkTodo= async()=>{
//     const checkResult=await getTodoData();
//     console.log(checkResult)
//     return checkResult;
    
    
// };
// checkTodo()





