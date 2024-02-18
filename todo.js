
const elements=[]
const formElement = document.querySelector("form");
formElement.onsubmit=function(e){
e.preventDefault();
 elements.push(e.target.elements[0].value);
const result =elements.map(function(e){
    return `<li><input type="checkbox" class="check" value="off"/><span>${e}</span></li>`
 }).join('')
document.querySelector("ul").innerHTML=result;
const check = document.querySelector(".check");
 check.addEventListener("change",function(){
    const span =document.querySelector('span');
    span.classList.add('done');
})
}

