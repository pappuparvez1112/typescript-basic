// >>>>>>>>***simple condition****>>>>>>>>>>>>>>>>>>>

// const age:number=15;

// if(age>=18){
//     console.log("yes")
// }else{
//     console.log("no")
// }



//***********Ternary operator ******* */


const age:number=15;

const isAdult=age>=18 ? "yes": "no"
console.log(isAdult);


//<<<<<<<< Nullish coalescing operator >>>>>>>>>>>>>>
//<<<<<<<  Null and Undifined  >>>>>>>>>>>>>>>>>>>>>>>


const isAthenticateUser='';
const userName=isAthenticateUser ?? 'guest'; // Nullish operator only for use null and undefined
const userName2=isAthenticateUser ?isAthenticateUser: 'guest'
console.log({userName},{userName2});

type manushType={
    name: string;
    age: number;
    adress: {
        city:'no-city';
        road:'coming';
        home?:"uk"
    }
};
const manush:manushType={
    name:'kabil',
    age:33,
    adress:{
        city:'no-city',
        road:'coming'
    }
}

const home=manush?.adress?.home ?? "no home"; // by defaul set "no home" [ if home is optional for manush then it send undefined as a default  so we know that nullish operator only use for undefined and null type ]
console.log(home);