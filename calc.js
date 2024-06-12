var inp = "";
var top = "";
var flag = 0;
function disp() {
  document.querySelector("#btm").addEventListener("click", function (dets) {
    if (flag <= 7) {
      if (dets.target.textContent == "=") {
        inp = eval(inp);
        document.querySelector(".ip").textContent = inp;
      } else if (flag < 7) {
        inp += dets.target.textContent;
        document.querySelector(".ip").textContent = inp;
        flag++;
      }
    }
  });
}

function cleard() {
  document.querySelector("#topnav").addEventListener("click", function (val) {
    if (val.target.textContent === "AC") {
      inp = "";
      document.querySelector(".ip").textContent = "";
      flag = 0;
    }
  });
}

disp();
cleard();
