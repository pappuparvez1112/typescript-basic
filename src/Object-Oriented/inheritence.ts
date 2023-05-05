
class commonClass{

    name:string;
    age:number;
    address:string;

    constructor(
        name:string,
        age:number,
        address:string,
        ){
            this.name=name;
            this.age=age;
            this.address=address;
        }

        makeSleep(hours:number):string{
            return `this ${this.name} will sleep ${hours}`
        }

}


class studentClass extends commonClass{
    constructor(
        name:string,
        age:number,
        address:string,
        ){
            super(name,age,address)
           
        }

        makeSleep(hours:number):string{
            console.log(`${this.name} will sleep ${hours}`);
            return ` ${this.name} will sleep ${hours}`;
        }
}

const student1=new studentClass("mokbul",22,'dhaka')

student1.makeSleep(2)

// class studentClass{
//     name:string;
//     age:number;
//     address:string;

//     constructor(
//         name:string,
//         age:number,
//         address:string,
//         ){
//             this.name=name;
//             this.age=age;
//             this.address=address;
//         }

//         makeSleep(hours:number):string{
//             return `this ${this.name} will sleep ${hours}`
//         }
// }



class teacherClass extends commonClass{
    designation:string;

    constructor(
        name:string,
        age:number,
        address:string,
        designation:string,           // different
        ){
            super(name,age,address)
            this.designation=designation;
        }

        takeClass(sub:string):string{                        // different
            console.log(`${this.name} sir will take ${sub} class`) 
            return ` ${this.name} sir will take ${sub} class`
        }
}

const techer1=new teacherClass('plabon',44,'usa','professor')

techer1.takeClass("history");


// class teacherClass{
//     name:string;
//     age:number;
//     address:string;
//     designation:string;

//     constructor(
//         name:string,
//         age:number,
//         address:string,
//         designation:string,           // different
//         ){
//             this.name=name;
//             this.age=age;
//             this.address=address;
//             this.designation=designation;
//         }

//         makeSleep(hours:number):string{
//             return `this ${this.name} will sleep ${hours}`
//         }
//         takeClass(hours:number):string{                        // different
//             return `this ${this.name} will sleep ${hours}`
//         }
// }