const makeLotto = () => {// const는 블록범위의 상수를 설정. 상수의 값은 중복되지 않음.
    // => 화살표 기호를 사용하면 클래스를 생성하고 객체 없이 함수 사용가능.
    const lottoArr = new Set(); //new는 사용자 정의 객체 혹은 내장 객체를 생성. 객체(object)
    //const lottoArr를 set()으로 규정
    while (lottoArr.size != 7) {//while은 조건이 참일 때 실행되는 반복문. 실행 되기전 조건을 확인함.
        //lottoArr.size != 7(당첨번호 6개 + 보너스 번호)
        const lottoNum = parseInt((Math.random() * 45 + 1));
        //parseInt 문자열을 정수로 반환, Math.random 설정 범위 내에서 난수(랜덤 숫자)를 출력.
        //Math.random() * 45 + 1-> 1~45의 랜덤 숫자를 출력.
        lottoArr.add(lottoNum);//lottoArr.add(lottoNum)는 앞서 new Set(); 에서 선언 된 set에 lottoNum를 출력.

    }
    return [...lottoArr];//return을 활용헌 로또 수열 반환
};

let html = '<table>';//let html = '<table>'; 표 형식으로 스크립트 내용을 html에 출력
// => 화살표 기호를 사용하면 클래스를 생성하고 객체 없이 함수 사용가능.
[0, 1, 2, 3, 4].forEach((element, index) => { //forEach 주어진 함수를 각각의 배열에 대해 실행.
    html += `<tr><td>${index + 1} 회</td>`;//다음 시행 회차 +1, ex(1회 차 실행후 2회차로 출력)
    //+= n => values의 값에 n을 추가
    const rowLottoValues = makeLotto();//const rowLottoValues = makeLotto(); => 로또 수열 = 로또 생성 함수
    rowLottoValues.forEach(lotto => html += `<td>${lotto}</td>`);
    html += '</tr>';
});

html += '</table>';

document.write(html); //내용을 html 문서에 출력
