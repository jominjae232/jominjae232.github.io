//for문 사용(index 1씩 증가), 1~100까지의 합
let sum = 0;
for(let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);


// +=연산자 사용, 1~100까지의 합
let sum = 0;
for(let i = 1; i <= 100; i++) {
  sum += i;//sum += i;, sum=sum+i;
}

console.log(sum);