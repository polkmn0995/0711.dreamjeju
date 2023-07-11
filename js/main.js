var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;
prev.onclick = prevSlide;
next.onclick = nextSlide;
showSlides(current);
var slideInterval = setInterval(nextSlide, 2000);

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
function prevSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlides(current);
}
function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlides(current);
}
// 탭메뉴
// html 요소 선택
var topMenu = document.getElementById("topMenu");
var menuItems = document.getElementsByTagName("li");
// 이벤트 핸들러 함수 정의
function toggleSubMenu() {
  var subMenu = this.getElementsByTagName("ul")[0];
  if (subMenu.style.display === "block") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }
}
// 메뉴 아이템에 이벤트 핸들러 추가
for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].getElementsByTagName("ul").length > 0) {
    menuItems[i].addEventListener("click", toggleSubMenu);
  }
}

//마우스가 슬라이드 영역에 들어왔을때 타이머 일시 정지
document.querySelector("#slideShow").onmouseenter = function () {
  clearInterval(slideInterval);
};

// 마우스가 슬라이드 영역을 벗어났을때 타이머 작동 재개
document.querySelector("#slideShow").onmouseleave = function () {
  slideInterval = setInterval(nextSlide, 2000);
};
