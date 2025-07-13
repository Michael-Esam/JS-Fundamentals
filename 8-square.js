const square = parseInt(process.argv[2]);
if (isNaN(square)){
    console.log('Missing size')
}else{
    let i =0;
    while(i < square){
        console.log('x'.repeat(square))
    }
}