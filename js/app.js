var dropdown = $(".dropdown");

// Sự kiện click ra ngoài
$(document).click(function (e)
{
    // Nếu không phải dropdown thì chạy lệnh này
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0)
    {
        dropdown.removeClass('show').find("ul").hide();
    }
});

// Sự kiện dropdown click
dropdown.click(function ()
{
    $(this).toggleClass('show').find("ul").toggle();
});

var menu = $(".bar-menu");

// Sự kiện menu click
menu.click(function ()
{
    $(".mobile-menu").find("ul").toggle();
});