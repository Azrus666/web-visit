
let sliderPics = ['url("pic/slider-pic.jpeg")',
                  'url("pic/slider-pic1.jpeg")',
                  'url("pic/slider-pic2.jpeg")'
                 ]
let slider = document.querySelector(".slider-container")
let btnNext = document.querySelector(".btn1")
let btnPrevious = document.querySelector(".btn2")
let index = 0



function loadingSlider()
{
    slider.style.backgroundImage ='url("pic/slider-pic.jpeg")'

}

function nextPic()
{
    index++
    if (index>sliderPics.length-1)
    {
      index = 0
    }
    slider.style.backgroundImage = ""
    slider.style.backgroundImage = sliderPics[index]
    clearInterval(interval)
    interval=setInterval(nextPic,4000)


}

function prevPic()
{
    index--
    if (index<0)
    {
        index =sliderPics.length-1
    }

    slider.style.backgroundImage = sliderPics[index]
    clearInterval(interval)

}




window.addEventListener('load',function ()
{
    loadingSlider()
})


let interval = setInterval(nextPic,4000)
btnPrevious.addEventListener("click",prevPic)
btnNext.addEventListener("click",nextPic)
