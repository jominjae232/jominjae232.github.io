function getFibonacci(num) { //피보나치 수열(1,2,3,5,8....)
    let i = 0;
    let value1 = 0;
    let value2 = 1;
    let result = [];
    while (i < num) {
        let newValue = value1 + value2;

        result.push(newValue);

        value1 = value2;
        value2 = newValue;
        i++;
    }
    return result.toString();
}

console.log(getFibonacci(21));

// 소수 판별기(소수면 true 소수가 아니면 false)
function isPrime(n) {
   // 1이하일 경우엔 소수가 아님
   if (n <= 1) return false;

   // 2와 3일 경우엔 소수.
   if (n === 2 || n === 3) return true;

   // 2로 나눴을 때 나머지가 0일 경우엔 소수가 아닙니다.
   // 즉, 짝수는 소수가 될 수 없음.
   if (n % 2 === 0) return false;

   // 최대 n - 1까지 확인.
   let divisor = 3;
   while (n > divisor) {
      // 무엇이라도 0으로 떨어진다면 소수가 아님.
      if (n % divisor === 0) return false;

      // 짝수일 경우를 제외한 홀수일 경우를 판단.
      divisor += 2;
   }

   // 모든 조건을 통과했을 경우 소수(true).
   return true;
}
console.log(isPrime(51));