let mobilePopup = document.querySelector('.menu-container-mobile')
let closerPopup      = document.querySelector('.menu-container-mobile1')
let menuMobileItem = document.querySelector(".head-menu-logo")







menuMobileItem.addEventListener('click',function()
{
    console.log('lol')
    mobilePopup.style.display = "block"
    mobilePopup.style.animation = "mobile-menu-open .4s"
    closerPopup.style.display="block"


})

closerPopup.addEventListener('click',() =>
{
    mobilePopup.style.animation = "mobile-menu-closer .4s"
    closerPopup.style.display   = "none"
    setTimeout(function ()
    {
        mobilePopup.style.display   = "none"

    },350)

})