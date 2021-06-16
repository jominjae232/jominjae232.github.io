export function getFibonacci(num){//피보나치 수열
    let i=0;
    let value1 = 0;
    let value2 = 0;
    let result = [];
    while (i<num) {
        let newValue=value1 + value2;

        result.push(newValue);

        value1=value2;
        value2=newValue;
        i++
    }
    return result.toString();
}

function getPrimeNumber(){
    let result=[];
    //1과 1000사이의 숫자 중에 소수를 구하기 위한 반복문
    for(let i=1;i<=1000;i++){
        let isPrimeNumber=true;
        //1과 자기 자신을 제외한 정수 중에 나눠지는 정수가 있는지 체크
        for(let j=2;j<i;j++){
            if(i%j===0){
                isPrimeNumber=false;
            }
        }

        //소수이면 결과값에 할당
        if(isPrimeNumber){
            result.push(i);
        }
    }

    return;
}
