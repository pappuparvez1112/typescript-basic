//******  Union  *****/

// type nobeDeveloper={
//     name:string;
// };
// type juniorDeveloper={
//     name:string;
//     expertise:string;
//     experience:number;
// };
// const newDeveloper:nobeDeveloper | juniorDeveloper ={
//     name:"meharb",
//     expertise:"javascript",
//     experience:1,
// }

// *******intersection********

type nobeDeveloper={
    name:string;
};
type juniorDeveloper= nobeDeveloper &{
    expertise:string;
    experience:number;
};
const newDeveloper:nobeDeveloper | juniorDeveloper ={
    name:"meharb",
    expertise:"javascript",
    experience:1,
}
type nextLevelDeveloper=juniorDeveloper &{
    leadership:number;
    level:"junior" |"mid" | "senior"
}
const developer:nextLevelDeveloper={
    name:"opi",
    expertise:"typescript",
    experience:2,
    leadership:1,
    level:"senior"
}


