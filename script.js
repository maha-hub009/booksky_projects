// seleting popup & popup_overlay
var box=document.querySelector(".popup")
var overlay=document.querySelector(".popup_overlay")
var add_btn=document.querySelector(".add")
add_btn.addEventListener("click",function(){
    box.style.display="block"
    overlay.style.display="block"
})
var close_btn=document.querySelector(".pop_cancel")
close_btn.addEventListener("click",function(event){
    event.preventDefault()
    box.style.display="none"
    overlay.style.display="none"
    })
// select book container, title,author,summary,button
var container=document.querySelector(".container")
var book_title=document.querySelector(".book-title")
var author=document.querySelector(".Author")
var summary=document.querySelector(".summary")
var add_btn=document.querySelector(".pop_add")

add_btn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title.value}</h2>
        <h4>${author.value}</h4><br>
        <p>${summary.value}</p><br>
        <button class="delete" onclick="remove(event)">DELETE</button>`
    container.append(div)
    box.style.display="none"
    overlay.style.display="none"
});
function remove(event){
    event.target.parentElement.remove()
}

