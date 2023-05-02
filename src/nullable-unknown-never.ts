
// **********Nullable type *********//

const searchName=(value:string | null)=>{
    if (value === null) {
        console.log("There is nothing to search")
    }else{
        console.log("searching");
    }
}
searchName(null);


// *****Unknown type******//

// >>>>>>>km^-1 to ms^-1

const getMyCarSpeed=(speed:unknown)=>{
    if(typeof speed ==="number"){
        const convertedSpeed=(speed*1000)/3600;
        console.log(convertedSpeed);
    }
    if(typeof speed==='string'){
        const [value,unit]=speed.split(" "); //>> ['10','km^-1']
        const convertedSpeed=(parseFloat(value)*1000)/3600;
        console.log(convertedSpeed);   
    }else{
        console.log("there was a wrong");
    }

}

getMyCarSpeed(10);
getMyCarSpeed('10 km^-1');
getMyCarSpeed(true); // >> 10 km^-1 split


//*********never type *************/

function throwError(message:string):never{
    throw new Error(message)
}
throwError("you have an error");
