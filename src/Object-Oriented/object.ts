class animal{
    //  name:string;
    //  species:string;
    //  sound:string
    // public name:string;
    // public species:string;
    // public sound:string

   //parameter properties
    constructor(
        public name:string,
        public species:string,
        public sound:string
        )
        {
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }
        public makeSound(){
            console.log(`the ${this.name} says ${this.sound}`)   //german shephard says ghew ghew
        }

}

//// instance
const dog=new animal("german shephard","dog","ghew ghew")
const cat=new animal("pershian","cat","meo meo")

dog.makeSound();
cat.makeSound();

cat.name="deshi cat"
cat.makeSound();