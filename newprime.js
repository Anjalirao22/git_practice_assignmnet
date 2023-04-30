
function prime(x){
let factor=0;
for(let i=1;i<=x;i++){
if(x%i==0){
factor++;
}
}
if (factor==2){
console.log(x,"is prime");
} else {
console.log(x,"is not prime");
}
prime(2);