function popUp(profile) {
  var x = confirm('예비군 다녀올게요~');
  if (x) {
    window.open("source\\profile_" + profile + ".html", profile, 'width=300, height=400, toolbars=no, menubars=no, scrollbars=no');
  } else {
    alert('너무하네요...');
  }
}

function popRadder() {
  window.open("source\\section_radder_pop.html", "사다리 게임", 'width=500, height=400, toolbars=no, menubars=no, scrollbars=no');
}

function popDetail(sikdang) {
  window.open("detail\\" + sikdang + ".html", sikdang, 'width=500, height=400, toolbars=no, menubars=no');
}

//사실 이 변수를 왜 정의한건지 잘 기억이 나지 않는다.
var point;

function sectionClick(food) {
  var x = document.getElementById('section');
  point = "source\\section_" + food + ".html"
  x.setAttribute("src","source\\section_" + food + ".html");
}

function sectionChange(food) {
  var x = document.getElementById('section');
  if (point == "source\\section_" + food + ".html") return;
  x.setAttribute("src","source\\thum_" + food + ".html");
}

function sectionNormal (food) {
  var x = document.getElementById('section');
  if (point == "source\\section_" + food + ".html") return;
  x.setAttribute("src","source\\section_mid.html");
}
