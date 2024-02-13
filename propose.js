let yesBtnFlag = false;
const noBtn = document.getElementById("no_btn");
const yesBtn = document.getElementById("yes_btn");
const screen_width = window.innerWidth - 50;
const screen_height = window.innerHeight - 50;
const screen_widthDigit = Math.ceil(Math.log10(screen_width));
const screen_HeightDigit = Math.ceil(Math.log10(screen_height));

console.log(screen_height);
console.log(screen_width);
console.log(screen_HeightDigit);
console.log(screen_widthDigit);

let tenMulti = (num, digit) => {
  let tmp = 1;
  for (i = 1; i < digit; i++) {
    tmp *= 10;
  }
  return parseInt(num * tmp);
};
let noBtnLeftDistance = noBtn.offsetLeft;
let noBtnTopDistance = noBtn.offsetTop;
noBtn.addEventListener("mousedown", () => {
  noBtn.style.position = "absolute";
  let randomPositionX = tenMulti(Math.random(), screen_widthDigit);
  let randomPositionY = tenMulti(Math.random(), screen_HeightDigit);

  console.log(randomPositionX);
  console.log(randomPositionY);
  let f = Math.ceil(Math.random() * 10);
  console.log("object", f);
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
    img.setAttribute("src", "./img/boy/cry.gif");
  }
});
noBtn.addEventListener("mouseleave", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", "./img/boy/start.gif");
  }
});
yesBtn.addEventListener("mouseover", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", "./img/boy/dance.gif");
    img.setAttribute("src", "./img/boy/dance-2.gif");
  }
});

yesBtn.addEventListener("mouseleave", () => {
  if (yesBtnFlag === false) {
    img.setAttribute("src", "./img/boy/start.gif");
  }
});

yesBtn.addEventListener("click", () => {
  yesBtnFlag = true;
  document.getElementById("head_txt").innerText = "Hasta la vista, baby !!!";
  yesBtn.hidden = true;
  noBtn.hidden = true;
  img.setAttribute("src", "./img/boy/end.gif");
  img.setAttribute("src", "./img/boy/end-2.gif");
});
