const N = 180;

let i = 1;
let j = 0;
while(i <= N){
  if(N % i == 0){
    j++;
    console.log(i)
  }
  i++;
  
}
console.log(`The divisor of ${N} has ${j}.`)