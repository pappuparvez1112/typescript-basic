//*********genericInterface */

interface genericInterface<T,u=null,v=null>{
    name:string;
    husband:T;
    wife?:u;
    other?:v
}

const lover:genericInterface<boolean,string,number>={
    name:"kate",
    husband:true,
    wife:"kew ekjon",
    other:12
}

interface lover5Interface{
    name:string;
    age:number
}

const lover5:genericInterface<lover5Interface,lover5Interface>={
    name:"labonno",
    husband:{
        name:"ase kew",
        age:33
    },
    wife:{
        name:"ase kono mohila",
        age:33
    }
}

const lover4:genericInterface<{name:string;age:number},{name:string;age:number}>={
    name:"labonno",
    husband:{
        name:"ase kew",
        age:33
    },
    wife:{
        name:"ase kono mohila",
        age:33
    }
}


const lover1:genericInterface<string>={
    name:"kate",
    husband:'hobe kew ekjon'
}

const lover2:genericInterface<object>={
    name:"kathrin langford",
    husband:{
        name:"parvez",
        salary:33000,
        
    }
}

interface lover{
    name:string,salary:number

}

const lover3:genericInterface<lover>={
    name:"kathrin langford",
    husband:{
        name:"parvez",
        salary:33000,
        
    }
}