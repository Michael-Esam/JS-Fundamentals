const x =parseInt(process.argv[2]);
if (isNaN(x)){
    console.log("Missing number of occurrences")
}else{
    let i = 0;
    while( x > i ){
        console.log("C is fun");
        i++;
    }
}