const aboutMeeBtn = document.querySelector("#about_me_btn")
const aboutMee = document.querySelector("#about_me")
const closeBtn = document.querySelector("#closeBtn")

// about mee sowing functionality
function showHide(){
  if(aboutMee.style.left === "50%"){
    aboutMee.style.left = "-100%"
  }else{
    aboutMee.style.left = "50%"
  }
}

aboutMeeBtn.addEventListener("click",showHide)
closeBtn.addEventListener("click",showHide)

const body = document.querySelector("body")
const modeBtn = document.querySelector("#mode")
const txt = document.querySelectorAll(".t")
const btn = document.querySelectorAll(".b")
const inputFields = document.querySelectorAll(".i")

//dark mode color
const defaultTxtColor = txt[0].style.color
const defaultBtnColor = btn[0].style.color
const defaultInputBorderColor = inputFields[0].style.borderColor;
// light mode color
const lightTxtColor = "#273437"
const lightBtnColor = "#1a2527"
const lightBorderColor = "#1f2526"

function modeChanger(){
  if(body.style.backgroundColor === "white"){
    body.style.backgroundColor = "black"
    txt.forEach((t)=> t.style.color = defaultTxtColor)
    btn.forEach((b)=> b.style.color = defaultBtnColor)
    inputFields.forEach((i)=> i.style.borderColor = defaultInputBorderColor)
    modeBtn.src = "https://img.icons8.com/?size=100&id=6BUmPDkQO1MK&format=png&color=000000"
  }else{
    body.style.backgroundColor = "white"
    txt.forEach((t)=> t.style.color = lightTxtColor)
    btn.forEach((b)=> b.style.color = lightBtnColor)
    inputFields.forEach((i)=> i.style.borderColor = lightBorderColor)
    modeBtn.src = "https://img.icons8.com/?size=100&id=zPlb1U0jTRvw&format=png&color=000000"
  }
}
modeBtn.addEventListener("click",modeChanger)