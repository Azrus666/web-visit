let swiper1 = new Swiper('.swiper-container3', {
    // Optional parameters
    direction:"horizontal",
    role:"group",
    spaceBetween:'10',
    slidesPerView: "7",
    scrollbar: {
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


})


let swiperSlide = document.querySelectorAll(".swiper-slide")
swiperSlide.forEach(function (swiperItem) {
    swiperItem.style.display = "flex"
    swiperItem.style.flexDirection = "column"
    swiperItem.addEventListener('mouseover',function ()
    {
        swiperItem.style.transform = "rotate(15deg)"
        swiperItem.style.zIndex    = '50'
        swiperItem.style.scale    = '1.1'
        swiperItem.style.boxShadow    = '1px 0px 10px #19bfd3'

    })
    swiperItem.addEventListener('mouseout',function ()
    {
        swiperItem.style.transform = "rotate(0)"
        swiperItem.style.scale    = '1'
        swiperItem.style.zIndex    = '1'
        swiperItem.style.boxShadow    = 'none'


    })

})