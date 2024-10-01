
let showPopUp = document.querySelector(".category")
let popUp     = document.querySelector(".menu-container")
let outMenu   = document.querySelector(".all-brand")


showPopUp.addEventListener("mouseover",()=>
{
    showPopUp.style.transition=".5s"
    popUp.style.display="flex"
    popUp.style.transition=".5s"

})
popUp.addEventListener("mouseover",()=>
{
    showPopUp.style.transition=".5s"
    popUp.style.display="flex"
    popUp.style.transition=".5s"

})

showPopUp.addEventListener("mouseout",()=>
{
    popUp.style.display="none"
})
popUp.addEventListener("mouseout",()=>
{
    popUp.style.display="none"
})
outMenu.addEventListener("mouseout",()=>
{
    popUp.style.display="none"
})


