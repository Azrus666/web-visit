let swiperSlide = document.querySelectorAll(".swiper-slide")
let swiperSlideContainer = document.querySelector("#swiper-title-container")
let btnLeft  = document.querySelector(".swiper-button-prev")
let btnRight = document.querySelector('.swiper-button-next')
let root     = document.documentElement;
let itemPrice= document.querySelector(".item-price")
root.style.setProperty('--swiper-navigation-size','10px')

const numFa = new Intl.NumberFormat('fa-IR', {style : "decimal" }).format(987654321).replace(/٬/g , "")
console.log(numFa)
swiperSlideContainer.style.backgroundColor= "#ef4056"

itemPrice=numFa
btnLeft.style.color = ' #b0b0b0'
btnLeft.style.width = '40px'
btnLeft.style.height= '40px'
btnLeft.style.top   =  '46%'
btnRight.style.color= ' #b0b0b0'
btnRight.style.width= '40px'
btnRight.style.height = '40px'
btnRight.style.top  =  '46%'



swiperSlide.forEach(function (swiperItem) {
swiperItem.style.display = "flex"
swiperItem.style.flexDirection = "column"



})



 let swiper1 = new Swiper('.swiper-container1', {
    // Optional parameters
    direction:"horizontal",
     role:"group",
     spaceBetween:'2',
     slidesPerView: "6",


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


         breakpoints: {
             0:
                 {
                     slidesPerView: 2,
                     spaceBetween: 2,
                 },



             375:
                 {
                     slidesPerView: 2.5,
                     spaceBetween: 2,
                 },


             472:
                 {
                     slidesPerView: 3,
                     spaceBetween: 2,
                 },

             550:
                {
                    slidesPerView: 3.5,
                    spaceBetween: 2,
                },

             640: {
                 slidesPerView: 4,
                 spaceBetween: 2,
             },
             768: {
                 slidesPerView: 5,
                 spaceBetween: 3,
             },
             1024: {
                 slidesPerView: 6,
                 spaceBetween: 4,
             },
             1150:
                 {
                     slidesPerView: 7,
                     spaceBetween: 2,
                 }


         },



});
 let swiper2 = new Swiper('.swiper-container2',
     {
         breakpoints: {
             0:
                 {
                     slidesPerView: 2,
                 },



             375:
                 {
                     slidesPerView: 2.5,
                 },


             472:
                 {
                     slidesPerView: 3,
                 },

             550:
                 {
                     slidesPerView: 3.5,
                 },

             640: {
                 slidesPerView: 4,
             },
             768: {
                 slidesPerView: 5,
             },
             1024: {
                 slidesPerView: 6,
             },
             1150:
                 {
                     slidesPerView: 7,
                 }


         },



     })




















// window.addEventListener("resize",function ()
// {
//     console.log(swiper.offsetLeft)
// })
//
//
//
// showBtn.addEventListener('mouseover',function ()
// {
//     btnRight.style.display = "flex"
//     btnLeft.style.display =  "flex"
//
// })
// showBtn.addEventListener('mouseout',function ()
// {
//     btnRight.style.display = "none"
//     btnLeft.style.display =  "none"
// })
//
//
// window.addEventListener('load',function ()
// {
// })
//
// btnRight.addEventListener('mousedown',function (e)
// {
//
// swiper.style.left = '0'+"px"
//
//
//
//
// })
//
// btnLeft.addEventListener('mousedown',function ()
// {
//     let i=0 ;
//     if (i===Math.abs(swiper.offsetLeft))
//     {
//         return
//     }
// else {
//     for ( i ; i <= Math.abs(swiper.offsetLeft);i++)
//     {
//         swiper.style.left = i+"px"
//         console.log(i)
//     }
//     swiper.offsetLeft=0
//     }
//
// })






