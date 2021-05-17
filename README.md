#### 작업예정.
- 메인페이지 테블릿 메인 CSS 스타일처리, PC용 메인 CSS 스타일처리
- 모바일 서브페이지 CSS 스타일처리
- 테블릿 + PC용 CSS 스타일처리
- 모바일 게시판페이지 (CRUD) CSS처리
- 테블릿+PC용 CSS 스타일처리
- 모바일+테블릿+PC 댓글시스템 CSS+제이쿼리+부트스트랩 처리
- AdminLTE(부트스트랩기반템플릿+반응형)를 이용해서 관리자단 디자인 만들기
- UI디자인 끝 ------------------------------------------
- UI구현 시작 ----------- 스프링프로젝트 시작(이클립스+자바+오라클+스프링)
- UI구현 ....위에서 제작한 UI디자인 이용해서 프로그램을 입히게 됩니다.

#### 20210517 (월) 작업
- slide2.jpg 경로: https://pixabay.com/ko/photos/%EC%95%84%EC%9D%B4%EC%8A%AC%EB%9E%80%EB%93%9C-%EB%B6%81%EA%B7%B9-%EC%97%AC%EC%9A%B0-%EB%8F%99%EB%AC%BC-2126989/
- slide3.jpg경로: https://pixabay.com/ko/photos/%ED%8F%AD%EC%8A%A4-%EB%88%88-%EC%88%B2-%EA%B2%A8%EC%9A%B8-%EA%B0%90%EA%B8%B0-5844892/
- jQuery 제이쿼리 JSON 데이터 파싱
- 외부 data.js 파일에서 json데이를 저장한 후 html에서 불러와서 파싱
- 외부 사이트에서 제공하는(RestAPI서버) json데이터를 html에서 불러와 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는 작업)
- ReatAPI서버주소(빅데이터): https://coroname.me/getdata
- 수업시작전, jsonData 파싱부분에서 append 사용에 2번 반복되는 부분 확인예정

- 메인페이지에 자바스크립트(jQuery)적용.  (VS vode+HTML5+CSS+jQuery)
- 제이쿼리적용부분 : 메뉴, 슬라이드이미지3개 처리 : 모바일 메인페이지만 마무리
- 보통 이미지 슬라이드 처리는 외부 라이브러리(Lib) 사용(니보슬라이드, 캐러셀슬라이드)
- 외부Lib 사용 안 하고, 우리가 만들어 봅니다.

#### 20210514(금) 작업
- 구문오류: syntex 신텍스(사인텍스)오류(문법오류)
- CSS3, HTML5 : 유효성 검사기준입니다.
- 사용자간 모바일 메인페이지 footer영역 CSS 입히기.
- top상단이동 OK.
- 과제물 제출 준비 OK.
- jQuery Json 데이터 파싱 실습
- 8교시에 과제물 다음카페로 제출


#### 20210513(목) 작업내용
- 픽사베이 이미지 3개 로고1, 슬라이드 이미지1, NoImage 1 받고, 경로 적어놓기
로고: https://pixabay.com/ko/vectors/%EB%8F%99%EB%AC%BC-%EC%96%BC%EA%B5%B4-%EB%A1%9C%EA%B3%A0-%EB%84%88%EA%B5%AC%EB%A6%AC-2028258/
- 슬라이드이미지: https://pixabay.com/ko/photos/%EC%95%84%EC%9D%B4%EC%8A%AC%EB%9E%80%EB%93%9C-%EB%B6%81%EA%B7%B9-%EC%97%AC%EC%9A%B0-%ED%8F%AD%EC%8A%A4-1979445/
- no_img: https://pixabay.com/ko/vectors/%EC%98%88-%EC%97%86%EC%9D%8C-%ED%83%80%EC%9D%B4-%ED%8F%AC-%EA%B7%B8%EB%9E%98%ED%94%BC-2069850/ 
- 작업폴더를 나누는 이유: 시청(관공서), 대학, 기업의 웹프로그램(사이트) 제작 할때, 1년간 무상 유지보수 이후 보통 2천, 리뉴얼 4천 비용이 책정
- home폴더 기존작업물, 리뉴얼 home에 덮어쓰는 방식이 아니고,
- 리뉴얼 할때 home2022 폴더에 작업을 하시게 됩니다.
- 제이쿼리 코어 다운받기: min버전(압축-속도UP), 일반버전(개발-속도Normal)
- jQuery 미처리 작업은 다음주하고,
- 오늘부터는 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 스프링에서 프로그램 입히는 소스로 사용하게 됩니다.
- 애니데스크(독일산): 팀뷰어(독일산) 사용하는 대신에 애니데스크를 사용.
- html5, html, css.html, js.html 여기까지
- jQuery 기본구조만 실습했습니다.

#### 20210512(수) 작업내용
- git clone 으로 프로젝트를 가져온 경우 아래 내용을 추가해 주셔야합니다.
- git config --iist 확인에서 user.name, user.email 없으면 아래추가.
- 터미널에서 아래 2가지 실행 
- git config --local user.name 영문이름
- git config --local user.email 영문이메일
- 프로젝트를 1명 제작하는 경우 없기때문에, 2명일때 소스수정한 사람 확인할 정보 입니다.

#### 20210511(화) 작업내용
- 로렘 입숨 한글 URL: http://guny.kr/stuff/klorem/#/table-html
- 로렘 입숨 영어 URL: https://loremipsum.io/generator/
URL경로(path): /루트, /test/html5.html
- html5의 레이아웃 구조 제작합니다.
- 서버(응답하는프로그램-response)
- 클라이언트(요청하는프로그램=request) = 웹브라우저
- HTML은 마크업이 태그로 구성됩니다.<의미있는문자>...</의미있는문자>
- http://127.0.0.1:80[8080|9000|5500|6500]
-PC의 네트워크 내부주소(공통): 127.0.0.1 == localhost
-yahoo.com(도메인) == 74.6.143.25(IP주소) == 주민번호
-IP주소버전: IPv4, IPv6
- HTML도 버전: HTML5, HTML4.01(old)


####20210510(월) 작업내용
- 업로드절차 1. 커밋(commit) 2.푸쉬 (push)
- 다운로드절차 : 1. 풀(pull): 교실에서 작업한 결과를 집에서 이어서 작업할 상황
- 레포지토리(저장소) 초기화: git.init
- 개발pc(html) 와 깃 저장소와 연결시킵니다.
- 포트의 역할이 트렌드로 많이 사용됩니다.
- 포트(port) : 포트번호로 서비스를 만드는것이 트렌드
- 이전에는 80포트에 모든 서비스 묶어놓았습니다.
- 모든서비스를 개별로 분리하는 트렌드가 있습니다.: 마이크로서비스라고 합니다. == RestAPI로 구현이 됩니다.
- 도메인(예, https://naver.com:1451241/네이버 인증서비스 개발)
- 외부 인원(네이버직원이아닌) 위 포트기준으로 제작한 서비스를 갖다가 사용
- html : Hyter Text markUp Language 태그를 사용하는 언어
- md : MarkDown Language 태그를 사용하지 않는 언어