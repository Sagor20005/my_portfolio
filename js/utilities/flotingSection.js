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
const allP = document.querySelectorAll("p")
const allA = document.querySelectorAll("a")
const allLvl = document.querySelectorAll("label")
// marge all a & p 
const textElements = Array.from(allP).concat(Array.from(allA))
textElements.concat(Array.from(allLvl))
console.log(textElements)

const darkModeTxt = allP[0].style.color
const lightModeTxt = "#313f42"

function modeChanger(){
  if(body.style.backgroundColor === "white"){
    body.style.backgroundColor = "black"
    textElements.forEach((p)=> p.style.color = darkModeTxt)
    modeBtn.src = "https://img.icons8.com/?size=100&id=6BUmPDkQO1MK&format=png&color=000000"
  }else{
    body.style.backgroundColor = "white"
    textElements.forEach((p)=> p.style.color = lightModeTxt)
    modeBtn.src = "https://img.icons8.com/?size=100&id=zPlb1U0jTRvw&format=png&color=000000"
  }
}
modeBtn.addEventListener("click",modeChanger)