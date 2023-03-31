# 📌Refactoring - Bootstrap  
부트스트랩 템플릿을 리팩토링해서 고객사에 제품이 출시될 때마다 템플릿화하여 원하는 방식으로 사용할 수 있도록 반응형으로 제작  
<a href="https://bootstrap-refactoring.netlify.app/pages/index.html" title="사이트로 이동"
target="_blank">bootstrap-refactoring 사이트 이동</a>    
</br>
</br>

## 목차
1. [제작 기간 & 참여 인원](#1-제작-기간--참여-인원)
2. [사용 기술](#2-사용-기술)
3. [핵심 기능 / 설명](#3-핵심-기능--설명)  
3.1 [리팩토링이란?](#31-리팩토링이란)  
3.2 [디렉터리 구조](#32-디렉터리-구조)  
3.3 [공통영역 분리](#33-공통영역-분리)  
3.4 [메뉴 선택 시 메뉴 강조](#34-메뉴-선택-시-메뉴-강조)  
3.5 [다크모드 구현](#35-다크모드-구현)   
4. [회고 / 느낀점](#4-회고--느낀점)    
</br>

## 1. 제작 기간 & 참여 인원
- 2022년 10월 3일 ~ 10월 30일
- 회사 프로젝트 - 프론트엔드 1명(나)
</br>

## 2. 사용 기술

<code>**Front-end**</code>

- HTML5
- CSS3
- jQuery
- JavaScript
- PHP
- Ajax
</br>
<code>현재 포트폴리오에서는 php에서 jquery로 바꾼점 참고부탁드립니다.</code>
</br>

## 3. 핵심 기능 / 설명
### 3.1 리팩토링이란?
<blockquote>
리팩토링(refactoring)은 소프트웨어 공학에서 '결과의 변경 없이 코드의 구조를 재조정함'을 뜻한다. 주로 가독성을 높이고 유지보수를 편하게 한다. 버그를 없애거나 새로운 기능을 추가하는 행위는 아니다. 사용자가 보는 외부 화면은 그대로 두면서 내부 논리나 구조를 바꾸고 개선하는 유지보수 행위이다.
</br>
</br>
출처 위키피디아
- https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81
</blockquote>  

<code>**즉 리팩토링은 기존 코드를 개선하여 코드의 가독성, 유지보수성, 성능, 확장성 등을 향상시키는 작업입니다.**</code>

</br>

### 3.2 디렉터리 구조
아래 리팩토링 전 부분은 디렉터리 구조와 상세 내용 중 필요한 부분만 보여드렸습니다.

- **디렉터리 리팩토링 전**

```
webtemplate_sneat
├─ sneat-bootstrap-html-admin-template-v1.1.1
│  └─ sneat-bootstrap-html-admin-template-v1.1.1
│     ├─ CHANGELOG.md
│     ├─ documentation.html
│     ├─ README.md
│     └─ sneat-bootstrap-html-admin-template
│        ├─ .browserslistrc
│        ├─ assets
│        ├─ build-config.js
│        ├─ dist
│        ├─ fonts
│        ├─ gulpfile.js
│        ├─ html
│        ├─ html-starter
│        ├─ index.html
│        ├─ js
│        ├─ libs
│        ├─ package.json
│        ├─ scss
│        ├─ tasks
│        │  ├─ build.js
│        │  └─ prod.js
│        └─ webpack.config.js
└─ sneat-sketch-admin-dashboard-ui-kit-template
   ├─ README.pdf
   ├─ sneat-sketch-admin-dashboard-ui-kit-template-dark.sketch
   └─ sneat-sketch-admin-dashboard-ui-kit-template-light.sketch

```
</br>

- **디렉터리 리팩토링 후**

```
bootstrap-refactoring
├─ admin_cdn
│  ├─ css
│  ├─ img
│  ├─ js
│  └─ json
├─ index.html
└─ pages

```

---

- **상세 구조 css 리팩토링 전**

```

│        │  └─ vendor
│        │     ├─ css
│        │     │  ├─ core-dark.css
│        │     │  ├─ core.css
│        │     │  ├─ pages
│        │     │  │  ├─ advanced-wizard.css
│        │     │  │  ├─ app-calendar.css
│        │     │  │  ├─ app-invoice-print.css
│        │     │  │  ├─ app-invoice.css
│        │     │  │  ├─ card-analytics.css
│        │     │  │  ├─ page-account-settings.css
│        │     │  │  ├─ page-auth.css
│        │     │  │  ├─ page-faq.css
│        │     │  │  ├─ page-help-center.css
│        │     │  │  ├─ page-icons.css
│        │     │  │  ├─ page-misc.css
│        │     │  │  ├─ page-pricing.css
│        │     │  │  ├─ page-profile.css
│        │     │  │  ├─ page-user-view.css
│        │     │  │  ├─ ui-carousel.css
│        │     │  │  └─ wizard-ex-checkout.css
│        │     │  ├─ rtl
│        │     │  │  ├─ core-dark.css
│        │     │  │  ├─ core.css
│        │     │  │  ├─ theme-bordered-dark.css
│        │     │  │  ├─ theme-bordered.css
│        │     │  │  ├─ theme-default-dark.css
│        │     │  │  ├─ theme-default.css
│        │     │  │  ├─ theme-raspberry-dark.css
│        │     │  │  ├─ theme-raspberry.css
│        │     │  │  ├─ theme-semi-dark-dark.css
│        │     │  │  └─ theme-semi-dark.css
│        │     │  ├─ theme-bordered-dark.css
│        │     │  ├─ theme-bordered.css
│        │     │  ├─ theme-default-dark.css
│        │     │  ├─ theme-default.css
│        │     │  ├─ theme-raspberry-dark.css
│        │     │  ├─ theme-raspberry.css
│        │     │  ├─ theme-semi-dark-dark.css
│        │     │  └─ theme-semi-dark.css

```
</br>

- **상세 구조 css 리팩토링 후**

```

│  ├─ css
│  │  ├─ common
│  │  │  ├─ core.css
│  │  │  ├─ layout.css
│  │  │  └─ reset.css
│  │  └─ component
│  │     └─ style.css

```

**리팩토링 전에는 디렉터리 내용이 많았으나, 리팩토링을 통해 불필요한 파일들을 제거하고 코드의 가독성, 유지보수성, 성능, 확장성 등을 개선하여 코드의 품질을 향상시켰습니다.**
</br>
</br>

### 3.3 공통영역 분리

- **PHP 작성**
```php
//php
<?php include './common/header.php';?>
<?php include './common/nav.php';?>
<?php include './common/aside.php';?>
```

- **jQuery 작성**
```html
/*html*/
<script type="text/javascript">
 $(document).ready(function () {
    $("#nav").load("/pages/common/nav.html");  //#nav 인클루드
    $("#aside").load("/pages/common/aside.html");  // #aside 인클루드
    $("#footer_nav").load("/pages/common/footer_nav.html");  //#footer_nav 푸터부분 인클루드
  }
);
</script>
</head>
<body>

  <header id="nav"></header><!-- /#header -->
  <aside id="aside" class='aside'></aside><!-- /#aside -->
	
  <div id="footer_nav"></div><!-- /#footer_nav -->

</body>
```

- **공통영역과 내용영역으로 분리하는 것은 여러 가지 이점**  

	- header와 footer를 공통영역으로 분리하면 웹 사이트 전체에서 일관된 레이아웃과 디자인을 유지할 수 있고, 유지보수 작업이 효율적으로 이루어질 수 있습니다. 
	- 공통영역은 한 번 로딩하면 다른 페이지에서 재사용되므로 페이지 로딩 속도를 향상시키며, 검색 엔진 최적화에도 도움이 됩니다.  

- **php include와 jquery에 load의 공통점**  
	- 두 기술 모두 다른 파일의 내용을 현재 페이지에 삽입하는 데 사용됩니다. 또한, 두 기술 모두 코드 재사용성을 높이는 데 도움이 됩니다.  

- **php include와 jquery에 load의 차이점**  
	- PHP include는 서버 측에서 작동하며 PHP 파일에서 다른 PHP 파일의 내용을 가져옵니다. 
	-  jQuery의 load() 함수는 클라이언트 측에서 작동하며, AJAX를 사용하여 다른 파일의 내용을 가져옵니다. 
**따라서 두 기술은 서로 다른 분야에서 사용됩니다.**
</br>

**따라서, header와 footer를 공통영역과 내용영역으로 나누는 것은 웹 사이트의 일관성과 유지보수 용이성을 높일 뿐 아니라, 페이지 로딩 속도와 SEO에도 긍정적인 영향을 미칠 수 있습니다.**

</br>

### 3.4 메뉴 선택 시 메뉴 강조

- **PHP 작성**
```PHP
//php
<?php

switch ($urlfile) {
  case "index.php":
     $urlnm = "";
     break;

  case "ui_table.php":
     $urlnm = "";
     break;
  default:
}

?>
```
```php
//php
<div class='aside_menu'>
  <div class='aside_accordion'>
    <a href='index.php' <?php if( $urlfile == 'index.php'){ echo 'active'; }else{ } ?>메인</a>
  </div>
      …
      …
  <div class='aside_accordion'>
    <a href='ui_table.php' <?php if( $urlfile == 'ui_table.php'){ echo 'active'; }else{ } ?>UI 테이블</a>
  </div>
</div>
```
```css
/* css */
.aside_accordion a.active{
  color: #ffffff;
  background-color: var(--primary) !important;
}
```

- **jQuery 작성**
```html
/*html*/
<div class='aside_menu'>
  <div class='aside_accordion'>
    <a href='index.html'>메인</a>
  </div>
      …
      …
  <div class='aside_accordion'>
    <a href='ui_table.html'>UI 테이블</a>
  </div>
</div>
```
```js
//js
<script>
  // aside 바에서 링크를 클릭하면 해당 링크에 대한 active 클래스를 추가하여 선택된 링크를 강조
  // 현재 페이지의 URL을 가져옵니다.
  var currentUrl = window.location.href;

  // aside 바의 모든 링크 요소를 가져옵니다.
  var links = document.querySelectorAll('.aside_accordion a');

  // 링크 요소를 순회하면서 현재 페이지와 일치하는 요소를 찾습니다.
  for (var i = 0; i < links.length; i++) {
    // 링크 요소의 href 속성값과 현재 페이지 URL을 비교합니다.
    if (links[i].href === currentUrl) {
      // 링크 요소의 부모 요소인 li 요소에 active 클래스를 추가합니다.
      links[i].classList.add('active');
    }
  }
</script>
```
```css
/* css */
.aside_accordion a.active{
  color: #ffffff;
  background-color: var(--primary) !important;
}
```

- **PHP url파일을 이용한 방식과 Jquery를 이용한 방식의 공통점**  
	- 클릭한 메뉴에 대한 클래스를 추가하여 현재 메뉴를 구분합니다.  
	- 현재 페이지와 일치하는 메뉴에 대해서만 active 클래스를 추가합니다.


- **PHP url파일을 이용한 방식과 Jquery를 이용한 방식의 차이점**  
	- PHP URL 파일 방식은 서버 측에서 처리하므로 자바스크립트 코드를 작성할 필요가 없지만, jQuery 방식은 클라이언트 측에서 처리하기 때문에 자바스크립트 코드를 작성해야 합니다.  
	- PHP URL 방식은 브라우저 새로고침으로 서버 부하가 생길 수 있지만 자바스크립트를 사용하지 않아도 작동하고, jQuery 방식은 브라우저 새로고침이 없어서 서버 부하가 발생하지 않지만 자바스크립트를 사용해야 작동합니다.  

</br>

**따라서, 서버의 부하가 민감한 경우에는 Jquery를 이용하는 방식을 고려해볼 수 있고, 자바스크립트가 사용 불가능한 환경에서도 작동해야 할 경우에는 PHP url파일을 이용하는 방식을 선택할 수 있으며 어떤 방식을 사용할지는 상황과 목적에 따라 사용하면 될거 같습니다.**  

</br>

### 3.5 다크모드 구현

- **PHP 작성**
```php
//php
<?php
 if($darkmode == 'light'){
?>
  <div id='dark_dark' onclick="lightdark('dark')">
     <i class='bx bx-sm bx-moon dark_light_mode' data-toggle="tooltip" data-placement="bottom" title="Dark mode"></i>
  </div>
<?php
   }if($darkmode == 'dark'){
?>
<div id='dark_light' onclick="lightdark('light')">
  <i class='bx bx-sm bx-sun dark_light_mode' data-toggle="tooltip" data-placement="bottom" title="Light mode"></i>
</div>
<?php
 }
?>
```

```js 
//js
//다크모드(동작) 클릭했을때
function lightdark(darkmode){
  $.ajax({
    url : '/site/php/setDarkmode.php',
    data : {
      darkmode : darkmode
    },
    type : "POST",
    success : function(data) {
      console.log(darkmode);
      location.reload();
    },beforeSend:function(){
    },complete:function(){
    }
  });	
}
```
```php
//php
<?php

session_start();

$_SESSION['darkmode'] = $_POST['darkmode'];

// echo json_encode($darkmode);
?>
```
</br>

- **jQuery 작성**
``` html
/*html*/
<div class='dark_dark' onclick="lightdark('dark_mode')">
 <i class='bx bx-sm bx-moon' data-toggle="tooltip" data-placement="bottom" title="Dark mode"></i>
</div>
<div class='dark_light d_none' onclick="lightdark('light_mode')">
 <i class='bx bx-sm bx-sun' data-toggle="tooltip" data-placement="bottom" title="Light mode"></i>
</div>
```
``` js
//js
<script>
//다크모드 구현하기
$(document).ready(function() {
  var mode = localStorage.getItem("mode");
  if (mode === "dark_mode") {
    lightdark("dark_mode");
  } else if (mode === "light_mode") {
    lightdark("light_mode");
  }
});
function lightdark(mode) {
  if(mode === "dark_mode") {
    $("body").addClass("dark_mode");
    $("body").removeClass("light_mode");
    $(".dark_dark").addClass("d_none");
    $(".dark_light").removeClass("d_none");
    localStorage.setItem("mode", "dark_mode");
  } else if(mode === "light_mode") {
    $("body").addClass("light_mode");
    $("body").removeClass("dark_mode");
    $(".dark_light").addClass("d_none");
    $(".dark_dark").removeClass("d_none");
    localStorage.setItem("mode", "light_mode");
  }
}
$(".dark_dark").click(function() {
  lightdark("dark_mode");
});
$(".dark_light").click(function() {
  lightdark("light_mode");
});
</script>
```
- **sessionStorage와 localStorage 공통점**  
	- 다크 모드 구현 시에 세션과 로컬 스토리지는 둘 다 클라이언트 측 웹 스토리지 기능으로 사용자 정보를 저장하고 관리할 수 있습니다.  

- **sessionStorage와 localStorage 차이점**  
	- 세션은 브라우저가 열려있는 동안 데이터를 메모리에 저장하고, 브라우저가 종료되면 데이터가 삭제됩니다. 
	- 로컬 스토리지는 브라우저나 컴퓨터를 종료해도 데이터가 계속 유지되며, 로컬 컴퓨터에 저장됩니다. 

</br>

**따라서, sessionStorage는 임시적인 데이터를 저장하거나 다른 탭/창으로 이동할 때 데이터가 필요하지 않은 경우 사용하고, localStorage는 데이터를 영구적으로 보존해야 할 때 사용합니다. 즉 데이터의 지속성에 따라 사용 용도를 결정하면 됩니다.**

</br>

## 4. 회고 / 느낀점
##### 이 포트폴리오는 임팩트소프트 회사에서 수행한 작업을 바탕으로 작성되었으며 부트스트랩을 리팩토링하여 제작한 템플릿입니다.

- **회사 정보**  
	- 임팩트소프트 회사에서는 고객사에 직원들이 사용하는 정산프로그램을 주로 판매하는 회사입니다.  
	- 회사 인원은 3명으로 2023년 01월에 경영악화로인해 현재는 사업이 중단된 상태입니다.

- **회고 / 느낀점**  
	- 처음에는 부트스트랩 템플릿을 이용할 때 원하는 디자인을 구현하는데 어려움이 있었고, 커스터마이징이 불가능한 부분이 있어서 부트스트랩을 리팩토링하기로 결정하였습니다. 그 결과, 회사에서 고객사에게 제품이 출시할때 마다 프론트부분을 크게 수정할 필요없이 레이아웃, 색깔 부분 등 조금씩 수정하여 제품을 빠르게 출시 할 수 있었습니다. 이러한 결과는 임팩트소프트 회사의 업무효율성을 높이는 데 큰 도움이 되었습니다.
