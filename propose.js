let yesBtnFlag = false;
const noBtn = document.getElementById("no_btn");
const yesBtn = document.getElementById("yes_btn");
const screen_width = window.innerWidth - 50;
const screen_height = window.innerHeight - 50;
const screen_widthDigit = Math.ceil(Math.log10(screen_width));
const screen_HeightDigit = Math.ceil(Math.log10(screen_height));
const params = new URLSearchParams(window.location.search);
let imgChooseFlag = Math.ceil(Math.random() * 100) % 2 === 0 ? true : false;
console.log(imgChooseFlag);
const me = params.get("me") ? params.get("me") : imgChooseFlag ? "boy" : "girl";
const myName = params.get("myName");
const lovedName = params.get("lovedName");

document.getElementById("img").setAttribute("src", `./img/${me}/start.gif`);
if (myName) document.title = `Love from ${myName}`;
if (lovedName)
  document.getElementById("head_txt").innerText = `Will you go out with me${
    ", " + lovedName
  }?`;
let tenMulti = (num, digit) => {
  let tmp = 1;
  for (i = 1; i < digit; i++) {
    tmp *= 10;
  }
  return parseInt(num * tmp);
};

noBtn.addEventListener("mousedown", () => {
  noBtn.style.position = "absolute";
  let randomPositionX = tenMulti(Math.random(), screen_widthDigit);
  let randomPositionY = tenMulti(Math.random(), screen_HeightDigit);

  let f = Math.ceil(Math.random() * 10);

  if (f % 2 == 0) {
    noBtn.style.top = randomPositionY + "px";
    noBtn.style.left = randomPositionX + "px";
    noBtn.style.bottom = "unset";
    noBtn.style.right = "unset";
  } else {
    noBtn.style.top = "unset";
    noBtn.style.left = "unset";
    noBtn.style.bottom = randomPositionY + "px";
    noBtn.style.right = randomPositionX + "px";
  }
});

let img = document.getElementById("img");
noBtn.addEventListener("mouseover", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", `./img/${me}/cry.gif`);
  }
});
noBtn.addEventListener("mouseleave", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", `./img/${me}/start.gif`);
  }
});
yesBtn.addEventListener("mouseover", () => {
  imgChooseFlag = Math.ceil(Math.random() * 100) % 2 === 0 ? true : false;
  if (yesBtnFlag === false) {
    img.setAttribute(
      "src",
      `./img/${me}/dance${imgChooseFlag ? "-2" : ""}.gif`
    );
  }
});

yesBtn.addEventListener("mouseleave", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", `./img/${me}/start.gif`);
  }
});

yesBtn.addEventListener("click", () => {
  yesBtnFlag = true;
  document.getElementById("head_txt").innerText = "Hasta la vista, baby !!!";
  yesBtn.hidden = true;
  noBtn.hidden = true;
  img.setAttribute("src", `./img/${me}/end.gif`);
  // img.setAttribute("src", `./img/${me}/end-2.gif`);
  document
    .getElementsByClassName("bg-img")[0]
    .setAttribute("src", `./img/${me}/end-2.gif`);
});
