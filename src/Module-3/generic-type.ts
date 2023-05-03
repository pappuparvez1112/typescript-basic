const roll:Array<number>=[44,12,4];
const roll1:string[]=["parvez","anything"];
const roll2:Array<string>=["parvez","anything"];


const userRollName : Array<{ name:string; roll:number}>=[
    {
        name:"nothing",
        roll:22

    },{
        name:"nothing to say",
        roll:66
    }
]
console.log(userRollName);


//<<<<<,,, Generic type ,,,,,,,,,>>>>>>>>>>>>>

//<<<<<<<<< generic tuple >>>>>>>>>>>>>>>>

type genericTuple<x,y>=[x,y]

const relation: genericTuple<string,number>=['parvez',77];


type relationType={name:string;salary:number};

const relationCheck1:genericTuple<object,string>=[{
    age:33,
    salary:33000
},
    'parvez'
]

const relationCheck2:genericTuple<{name:string;salary:number},string>=[{
    name:'omuk',
    salary:33000
},
    'parvez'
]

const relationCheck3:genericTuple<relationType,string>=[{
    name:'omuk',
    salary:33000
},
    'parvez'
]



type genericArray<T>=Array<T>

const roll3:genericArray<number>=[44,12,4];
// const roll1:string[]=["parvez","anything"];
const roll4:genericArray<string>=["parvez","anything"];

type genericRollType={ name:string; roll:number}

const userRollNameGeneric : genericArray<genericRollType>=[
    {
        name:"nothing",
        roll:22

    },{
        name:"nothing to say",
        roll:66
    }
]
console.log(userRollNameGeneric);


