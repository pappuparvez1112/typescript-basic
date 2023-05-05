const arrayOfNumbers=[1,2,3,4]

const arrayOfString=arrayOfNumbers.map((number)=>number.toString());
console.log(arrayOfString);

type AreaNumber={
    height:number;
    width:number;
}
type readOnly={
    readonly height:number;
    readonly width:number;
}

type AreaString={
    height:string;
    width:string;
}



// const object={
//     name:"parvez"
// }
// object['name']
// console.log(object);

const rectangularArea:AreaNumber={    //we can change atribute of height width
    height:10,
    width:14,
}

const rectangularArea1:readOnly={    //we can not change atribute of height width
    height:10,
    width:11,
}
// rectangularArea1.height=10     //Cannot assign to 'height' because it is a read-only property

type a=AreaNumber['height']       //look up types
type b=keyof AreaNumber;          // width | height



//********   map type  ********** */
type volume={
    height:number;
    width:string;

}

type Area<T>={
    // [key in 'height'|'width']:string
    // // [key in keyof volume]:boolean     
    // type Area = {
    // height: boolean;
    // width: boolean;
    // }
    // [key in keyof volume]:volume[key] 
    // type Area = {
    //     height: number;
    //     width: string;
    // }

    //*****  generic parameter **********

    readonly [key in keyof T]:T[key] 

};

const AreaTypeCheck:Area<{name:string,height:number}>={name:"parvez",height:6.5}

// AreaTypeCheck.height=1    //**** can not change the value for readonly */
