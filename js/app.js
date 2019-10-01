var dropdown = $(".dropdown");

$(document).click(function (e)
{
    // Nếu không phải dropdown thì chạy lệnh này
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0)
    {
        dropdown.removeClass('show').find("ul").hide();
    }
});

dropdown.click(function ()
{
    $(this).toggleClass('show').find("ul").toggle();
});