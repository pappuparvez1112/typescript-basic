// key of guard


function add(param1:string| number,param2:string| number){
    if(typeof param1=='number' && typeof param2=='number'){
        return param1+ param2;
    }
    
}

type TypeguardType=string| number;

function add1(param3:string| number,param4:string| number){
    if(typeof param3=='number' && typeof param4=='number'){
        return param3+ param4;
    }else{
        return param3.toString()+param4.toString()
    }
    
}
console.log(add1('1','2'));
console.log(add1(1,2)); 


// in guard

type normalUserType={
    name:string;
}
type adminUserType={
    name:string;
    role:'admin'
}

function getUser(user:normalUserType|adminUserType):string{
    if('role' in user){
        return `i am an ${user.role}`
    }else{
        return `i am amm-jonota`
    }

}

const normalUser:normalUserType={name:'amm jonota'}
const adminUser:adminUserType={name:'main person',role:'admin'};
console.log(getUser(normalUser));
console.log(getUser(adminUser));


//instance of guard

class Animal{
    name:string;
    species:string;
    constructor(name:string,species:string){
        this.name=name;
        this.species=species
    }
    makeSound(){
        console.log('i am making sound')
    }
}



class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log('i am barking')
    }
}
class cat1 extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeMeaw(){
        console.log('i am Meowing')
    }
}


// function getInstanceAnimal(objectAnimal:Animal){
//     if(objectAnimal instanceof Dog){
//         objectAnimal.makeBark();
//     }else if(objectAnimal instanceof cat1){
//         objectAnimal.makeMeaw();
//     }else{
//         objectAnimal.makeSound()
//     }
    
// }


function isDog(objectAnimal:Animal):objectAnimal is Dog{
    return objectAnimal instanceof Dog;
}


function isCat(objectAnimal:Animal):objectAnimal is cat1{
    return objectAnimal instanceof cat1;
}

function getInstanceAnimal(objectAnimal:Animal){
    if(isDog(objectAnimal)){
        objectAnimal.makeBark();
    }else if(isCat(objectAnimal)){
        objectAnimal.makeMeaw();
    }else{
        objectAnimal.makeSound()
    }
    
}


const animal1=new Dog('German shephard','Dog')     //instance of Dog
const animal2=new cat1('pershian','cat')           //instance of cat

  

getInstanceAnimal(animal2);