const now = new Date(); //현재 시간 확인을 위한 date 객체 선언
var login_state = 0;
var page_state = 0;
var slideIndex = 0; 
var slide_password=[];

// window.addEventListener("load",timeCheck);   <---- 기능 확인을 위해 잠시 주석처리 시간퍼즐 테스트 버튼으로 동작확인가능

var login_btn = document.getElementById("login");
login_btn.addEventListener("click", userCheck);

var time_btn = document.getElementById("timecheck");
time_btn.addEventListener("click", timeIs);


function userCheck() {
    var code = document.getElementById("code");

    if(code.value == "5926") {
        page_Mypage(5926);
    }
    else {
        alert("그런 회원은 존재하지 않습니다.")
    }
}

function timeIs() {
    var t= now.getHours();
    console.log(t);
    document.getElementById("current_time").innerHTML=t+"입니다";
}

function timeCheck() {
    var t= now.getHours();
    var items = document.getElementsByClassName("item");
    var divs = document.querySelectorAll("div");
    if(t>=23) {
        document.querySelector("body").style.backgroundColor="grey";
        
        for(i=0; i<items.length; i++) {
            items[i].style.display="none";
            }
        document.getElementById("hidden_tel").style.display="block";

        for(i=0; i<divs.length; i++) {
            divs[i].style.backgroundColor="red";
            divs[i].style.display="inline";
            }
    } 
}

function timeCheck2() {
    var items = document.getElementsByClassName("item");
    var divs = document.querySelectorAll("div");
    document.querySelector("body").style.backgroundColor="grey";
        
        for(i=0; i<items.length; i++) {
            items[i].style.display="none";
            }

        document.getElementById("hidden_tel").style.display="block";

        for(i=0; i<divs.length; i++) {
            divs[i].style.backgroundColor="red";
            }
    
}


function error_reload() {
    alert("예상치 못한 오류발생.페이지를 새로고침합니다.");
    location.reload();
}

function plusDivs(n) { // 왼쪽은 -1, 오른쪽은 1을 인덱스에 더하여 표시할 요소 변경 
    showDivs(slideIndex += n); //표시할 슬라이드 요소 순서->n, slideindex  전달
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide"); //mysildes class 요소들을 x[] 배열형태로 가져온다 
    if (n >= x.length) { slideIndex = 0 } // 만약 마지막 슬라이드를 넘어갈 경우, 인덱스를 초기화한다. 
    if (n < 0) { slideIndex = x.length - 1 } // 첫 슬라이드 이전으로 넘어갈 경우, 마지막 인덱스로 초기화한다. 
    for (i = 0; i < x.length; i++) {        // 모든 요소를 우선 "none"으로 설정하여 출력되지 않도록한다.
        x[i].style.display = "none";
    }
    x[slideIndex].style.display = "block"; // 현재 선택된 인덱스의 요소만 "block" 속성을 주어 출력한다.
}

function page_Clear() {

    var pages = document.getElementsByClassName("page");
    for(let i=0; i<pages.length; i++) {
        pages[i].style.display = "none";
    }

    var side = document.getElementsByClassName("side");
    for(let i=0; i<side.length; i++) {
        side[i].style.display = "none";
    }

    var menu = document.getElementsByClassName("menu");
    for(let i=0; i<menu.length; i++) {
        menu[i].style.display = "none";
    }

    document.querySelector("aside").style.display = "flex";
    document.querySelector("main").style.width = "75%";

}

function patient_clear() {
    var pat = document.getElementsByClassName("patient");
    for(let i=0; i<pat.length; i++) {
        pat[i].style.display = "none";
    }
}

function page_Mypage(i) {

    page_Clear();
    document.getElementById("login_bar").style.display="none";

    if(i="5926") {

        patient_clear();
        
        document.getElementById("login_5926").style.display="flex";
        document.getElementById("page_my").style.display="flex";
        document.getElementById("patient_5926").style.display="flex";
        document.getElementById("side_mypage").style.display = "flex";
        
    }
    
}

function information_clear() {
    var inf = document.getElementsByClassName("information");
    for(let i=0; i<inf.length; i++) {
        inf[i].style.display = "none";
    }
}

function information_Check(i) {
    information_clear();
    if(i="psy") {

    }
}

function page_Doctor() {

    page_Clear();
    information_clear();

    document.getElementById("psy").style.display="block";
    document.getElementById("page_menu").style.display="flex";
    document.getElementById("menu_doc").style.display = "flex"; 
    document.getElementById("side_doc").style.display = "flex";
    
}

function page_Reserve() {

    page_Clear();

    document.getElementById("page_menu").style.display="flex";
    document.getElementById("menu_reserve").style.display = "flex"; 
    document.getElementById("side_reserve").style.display = "flex";
}


function page_Info() {
    page_Clear();

    document.getElementById("page_menu").style.display="flex";
    document.getElementById("menu_info").style.display = "flex"; 
    document.getElementById("side_info").style.display = "flex";
}


function page_FAQ() {
    page_Clear();

    document.getElementById("page_menu").style.display="flex";
    document.getElementById("menu_faq").style.display = "flex"; 
    document.getElementById("side_faq").style.display = "flex";
}

function sns_Alert() {
    alert("접근 거부");
}

function slide_Check(i) {
    var answer=[1,0,1,1,0,0,1,0];              //실제 정답은 6자리
    slide_password.push(i);
    console.log(slide_password);

    check=true;

    if(answer.length-1===slide_password.length) {
        for(let j=0; j<answer.length; j++) {
            if(slide_password[j] !== answer[j]) {
                check=false;
                slide_password=[];
                break;
            }

            if(check) {
                alert("무슨 소리가 들리는것 같다.");
                slide_password=[];
            }
        }
    }

}

function open_Modal() {
    document.getElementById("modal_board").style.display="flex";
}
function close_Modal() {
    document.getElementById("modal_board").style.display="none";
}



function change_Profile() {
    document.getElementById("jean").style.display="none";
    document.getElementById("hidden_jean").style.display="block";
}

function mobile_Test() {
    document.querySelector("body").style.width="1000px";
}



