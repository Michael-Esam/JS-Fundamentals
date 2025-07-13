const arg = process.argv[2];
let num = parseInt(arg)
if(Number(num)){
    console.log(`My number: ${num}`);
}else{
    console.log('Not a number');
};