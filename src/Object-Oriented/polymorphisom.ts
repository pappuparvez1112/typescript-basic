class Person{
    takeNap():void{
        console.log('i am sleeping 8 hr per day')       
    }
}
class Student extends Person{
    takeNap(): void {
        console.log('i am sleeping 10 hr per day')
    }
}
class Developer extends Person{
    takeNap(): void {
        console.log('i am sleeping 5 hr per day')
    }
}

function getNap(param:Person){
    param.takeNap()
}

const person1=new Person()
const person2=new Student()
const person3=new Developer()

getNap(person1);
getNap(person2);
getNap(person3);


class shape{
    getArea():number{
        return 0;

    }
}

// area=> pi*r*r
class circle extends shape{
    redius:number;
    constructor(redius:number){
        super()
        this.redius=redius;
    }
    getArea(): number {
        return Math.PI*this.redius*this.redius
    }
}

class rectangle extends shape{
    height:number;
    width:number;
    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }
    getArea(): number {
        return this.width*this.height;
    }
}

function getArea(param:shape){
    return param.getArea()
}

const shapeCheckResult=new shape();
const circleCheckResult=new circle(22);
const rectangleCheckResult=new rectangle(10,11);
console.log(getArea(shapeCheckResult));
console.log(getArea(circleCheckResult));
console.log(getArea(rectangleCheckResult));

