let showModal = document.querySelector('.item8')
let modal     = document.querySelector('.digit-popup')
let modalBack = document.querySelector('.digit-popup-container')
let closer    = document.querySelector('.popup-closer')

showModal.addEventListener('click',function ()
{
    showModalHandler()
})
modal.addEventListener('click',function (){})
closer.addEventListener('click',function ()
{
    modalCloserHandler()
})
modalBack.addEventListener('click',function ()
{
    modalCloserHandler()
})




function showModalHandler()
{
    modalBack.style.display ="block"
    modal.style.display = "block"
    modal.style.cursor  = "pointer"
    modalBack.style.backgroundColor = "rgba(0,0,0,.50)"
    document.documentElement.style.overflow = "hidden"
    closer.style.cursor ="pointer"
}

function modalCloserHandler ()
{
    modal.style.display = "none"
    modalBack.style.display ="none"
    document.documentElement.style.overflow = "visible"
}

// function modalOtherCloserHandler ()
// {
//     modal.style.display = "none"
//     modalBack.style.display ="none"
//     modalBack.style.backgroundColor = "rgba(0,0,0,.50)"
//     document.documentElement.style.overflow = "visible"
// }

