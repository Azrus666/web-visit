let filterCatItems    = document.querySelector('.filter-cat-items')
let filterCat         = document.querySelector('.filter-cat')
let filterDigitalItem = document.querySelector(".digital-products")
let products          = document.querySelectorAll(".filter-cat-option")
let filterBrandTitle  = document.querySelector(".filter-brand-title")
let filterBrand       = document.querySelector(".filter-brand")
let picDiv            = document.querySelectorAll('.pic-div')
let filterColorTitle  = document.querySelector('.filter-color-title')
let filterColorItems  = document.querySelector('.filter-color')
let filterPlusTitle   = document.querySelector('.filter-plus-title')
let filterPlus        = document.querySelector('.filter-plus')
let customSwitch      = document.querySelector('.custom-switch')
let filterHead        = document.querySelectorAll('.filter-head')
let filterRangeTitle  = document.querySelector('.filter-range-title')
let filterRange       = document.querySelector('.filter-range')
let range             = document.querySelector('.range')
let To                = document.querySelector('.To-num')
let filterNetworkTitle= document.querySelector('.filter-network-title')
let filterNetwork     = document.querySelector('.filter-network')
let filterPart        = document.querySelector('.filter-part')
let resultPart        = document.querySelector('.result-part')
let digitalClickFlag  = false
let filterCatFlag     = false
let brandFlag         = false
let colorFlag         = false
let plusFlag          = false
let rangeFlag         = false
let networkFlag       = false
let borderFlag        = true



filterCat.addEventListener('click',function ()
{
    if (filterCatFlag===false)
    {
      filterCatItems.style.display = "block"
        filterCatFlag = true
    }
    else
    {
        filterCatItems.style.display = "none"
        filterCatFlag = false
    }
})

filterDigitalItem.addEventListener('click' , function ()
{
    if (digitalClickFlag===false)
    products.forEach(function (item)
    {
        item.style.display = 'block'
        digitalClickFlag = true
    })
    else
    {
        products.forEach(function (item)
        {
            item.style.display = 'none'
            digitalClickFlag = false
        })
    }

} )

filterBrandTitle.addEventListener('click',function ()
{
    if (brandFlag===false)
    {
        filterBrand.style.display = 'flex'
        brandFlag = true
    }

    else
    {
        filterBrand.style.display = 'none'
        brandFlag = false
    }

})

filterColorTitle.addEventListener('click',function ()
{

        if (colorFlag === false)
        {
           filterColorItems.style.display = 'block'
            colorFlag = true
        }
        else
        {
            filterColorItems.style.display = 'none'
            colorFlag = false
        }

})

picDiv.forEach(function (Item)
{

    Item.addEventListener('click',function()
    {
        Item.classList.toggle('select-border')
    })



})

filterPlusTitle.addEventListener('click',function()
{
        if (plusFlag===false)
        {
            filterPlus.style.display = 'flex'
            plusFlag = true
        }
        else
        {
            filterPlus.style.display = 'none'
            plusFlag = false
        }
    })

customSwitch.addEventListener('click',function ()
{
    customSwitch.classList.toggle('custom-switch-active')
})

filterHead.forEach(function (borderItem)
{
    borderItem.addEventListener('click',function()
{
    if (borderFlag === true)
    {
        borderItem.classList.remove('filter-border')
        borderItem.classList.add('filter-border-none')
        borderFlag = false
    }
    else
    {
        borderItem.classList.remove('filter-border-none')
        borderItem.classList.add('filter-border')
        borderFlag = true
    }
})
})
filterRangeTitle.addEventListener('click',function()
{
    if (rangeFlag===false)
    {
     filterRange.style.display = "flex"
     rangeFlag =true
    }

    else
    {
        filterRange.style.display = "none"
        rangeFlag =false
    }
})

range.addEventListener('input',function ()
{
    let val = range.value.toString().split('')

    if (  val.length === 8)
    {
        val.splice(2,0,',')
        val.splice(6,0,',')
    }

    if (  val.length === 7)
    {
        val.splice(1,0,',')
        val.splice(5,0,',')
    }


    if (val.length === 6)
    {
        val.splice(3,0,',')
    }
    if (val.length === 5)
    {
        val.splice(2,0,',')

    }



   To.innerHTML =  val.join('')
})
filterNetworkTitle.addEventListener('click',function ()
 {

    if (networkFlag === false )
    {
        filterNetwork.style.display = 'flex'
        networkFlag = true
    }
    else
    {
        filterNetwork.style.display = 'none'
        networkFlag = false
    }
})

