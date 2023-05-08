class Counter{
    //** step1 */

    // counter:number;
    // constructor(counter:number){
    //     this.counter=counter;
    // }
    // increment():number{
    //     return this.counter=this.counter+1
    // }
    // decrement():number{
    //     return this.counter=this.counter-1
    // }

    // *****step2***////

    // static counter:number=0;
    
    // increment():number{
    //     return (Counter.counter=Counter.counter+1)
    // }
    // decrement():number{
    //     return (Counter.counter=Counter.counter-1)
    // }

    static counter:number=0;
    
    static increment():number{
        return (Counter.counter=Counter.counter+1)
    }
    static decrement():number{
        return (Counter.counter=Counter.counter-1)
    }
}
  //** step1 */
// const instance1=new Counter(0)
// const instance2=new Counter(1)

//***step2 */
// const instance1=new Counter()
// const instance2=new Counter()

console.log(Counter.increment());
console.log(Counter.decrement());