const arg = process.argv[2];
let num = parseInt(arg)
if(Number(num)){
    console.log(`My number is ${num}`);
}else{
    console.log('Not a number');
};