# 프로젝트 소개

![luluisher](https://velog.velcdn.com/images/sorin44/post/223b6137-92f2-414f-bc37-b78b8b69381c/image.jpg)

## 클론코딩 사이트
룰루레몬(https://shop.lululemon.com)

## 작업 기간
2022.05.23 ~ 2022. 06. 03

## 팀명
신난아이셔(luluIsher)

## 팀원 소개

| 개발 분야  | 팀원 명                        |
| ---------- | ------------------------------ |
| 프론트엔드 | 이해용, 김형겸, 장수연, 안현정 |
| 백엔드     | 이예은, 최혜인                 |

## 기술 스택
FrontEnd - HTML/CSS, JavaScript, React.js , React-Router, React-Router-DOM, Sass

BackEnd - Django

## 프론트 엔드 업무 파트
이해용 - Navbar, Main

김형겸 - 물품 리스트, footer

안현정 - 물품 세부(+리뷰)

장수연 - 회원가입/로그인, 장바구니

## 협업 도구
trello
![trello](https://velog.velcdn.com/images/sorin44/post/6b6bd942-0996-4770-b568-997a0842afa3/image.png)

## Coding Convention

1. 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
2. 변수와 함수, className 명명 규칙은 `Camel Case`를 사용한다.
3. 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
4. 함수 선언시 arrow function`(() => {})` 위주로 사용한다.
5. 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
6. 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
7. component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
8. scss 파일명은 컴포넌트 이름과 동일하게 한다.
9. 인라인 스타일링은 지양한다.



## 신난아이셔 주요 기능 소개
**Navbar**
```
- 상수데이터를 만든 후 map method를 사용하여 Navigation bar 정리
- 조건부 렌더링을 사용하여 token을 받았을 때와 받지 못했을 때 나타나는 화면을 다르게 설정
- 각 항목에 맞는 quary parameter를 설정하여 클릭시 상품에 맞는 query parameter인 상품리스트 페이지 이동
```

**Main**
```
- carousel 구현으로 버튼 클릭 또는 원하는 위치 클릭하여 이동 가능하게 설정
- useEffect를 사용한 setInterval 설정으로 5초마다 carousel 화면 전환가능하게 구현
```

**footer**
```
Description
```

**물품 리스트**
```
Description
```

**회원가입/로그인**
```
Description
```

**물품 세부(+리뷰)**
```
Description
```

**장바구니**
```
Description
```

## 시연영상
[![시연영상](https://img.youtube.com/vi/W34uDKZyf1s/0.jpg)](https://www.youtube.com/embed/W34uDKZyf1s)

(클릭하시면 유튜브에서 시청 가능합니다.)

## 느낀점
