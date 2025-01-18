// other js file joind import
import "./utilities/flotingSection.js" // all floting menu functionality
import { projacts } from "./data.js"

// rendar projects

function tagCreator(arr){
  let tagHtlm = ``
  arr.forEach((tg)=>{
    tagHtlm += `<li class="t">#${tg}</li>`
  })
  return tagHtlm
}

function rendarProject (projectArr){
  const projectContainar = document.querySelector("#projact_containar")
  projectArr.forEach((project)=>{
    const html = `
    <div class="projact">
	        <div class="avatar_sec">
	          <img src="${project.image}" alt="${project.name}">
	          <a title="Go to${project.name}" href="${project.url}">${project.name} <i class="fa fa-external-link"></i></a>
	        </div>
	        <div class="projact_detels">
	          <h2>${project.name}</h2>
	          <h3>[ ${project.type} ]</h3>
	          <p class="t">${project.discription}</p>
	          <ul>
	            ${tagCreator(project.tags)}
	          </ul>
	        </div>
	      </div>
    `
    projectContainar.innerHTML += html
  })
  
}
rendarProject(projacts)
//import "./utilities/addingAnimation.js"