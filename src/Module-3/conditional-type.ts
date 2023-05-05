// a type is depending on another type

type a1=null;
// type a2= a1 extends string ? string : null;
type a2=number;
type a3=undefined;
type a4=string;


// nested conditional type

type d=a1 extends number? number : a2 extends string ? string: a4 extends number ? number : never;


type sheikh={
    wife1:string;
    wife2:string;
}
// type checkProperty<T>=T extends {wife1:string} ? true: false;
// type checkwife1=checkProperty<sheikh>


type keyTypeSheikh=keyof sheikh; // wife1 | wife 2
type checkProperty<T,k>=k extends keyTypeSheikh ? true: false;
type checkwife1=checkProperty<sheikh,'wife2'>


/// type literal condition 

type bandhubi="monica"| "jebu" |"kate"

type removeBandhubi<T,k>=T extends k ? never :T;
type currentBandhubi=removeBandhubi<bandhubi,"kate">