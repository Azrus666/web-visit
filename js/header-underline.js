let $ = document;

let item   = $.querySelectorAll('.head-items')


item.forEach(function(obj)
{
    obj.addEventListener("mouseover",()=>
    {
        mouseoverHandler(obj)
    })
    obj.addEventListener("mouseout", ()=>
    {
        mouseoutHandler(obj)
    })

})



function mouseoverHandler(object)
{

object.classList.add("underline")

}
function mouseoutHandler(object)
{
    object.classList.remove("underline")


}