(function(){function e(e){let t=e.files.length>0,l=t?e.files[0].name:"Выберите файл",n=e.nextElementSibling
n.innerText=l,t?function(e,t){let l;(l=e.className.split(" ")).indexOf(t)>-1&&l.splice(l.indexOf(t)),e.className=l.join(" ")}(n,"placeholder-color"):function(e,t){let l;-1==(l=e.className.split(" ")).indexOf(t)&&(e.className+=" "+t)}(n,"placeholder-color")
let c=n.parentNode.nextElementSibling.querySelector(".custom-file-clear")
c&&(c.disabled=!t)}$(function(){document.querySelector(".custom-file-input")&&document.querySelector(".custom-file-input").addEventListener("change",function(t){e(t.target)}),document.querySelector(".custom-file-clear")&&document.querySelector(".custom-file-clear").addEventListener("click",function(t){if(t.target.parentNode){let l=t.target.parentNode.previousElementSibling.querySelector(".custom-file-input")
l&&(l.value=null,e(l))}})})})()
