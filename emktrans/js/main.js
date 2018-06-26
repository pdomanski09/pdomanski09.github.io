'use strict'


//smooth scroll
$("a[href*='#']:not([href='#'])").click(function (e) {
    $("html, body").animate({
        scrollTop: $(this.hash).offset().top
    }, 500);
});


// scroll nav color change
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $("#main-nav").addClass("scroll");
    } else {
        $("#main-nav").removeClass("scroll");
    }
});


//show arrow
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $("#arrow").css("display", "block");;
    } else {
        $("#arrow").css("display", "none");
    }
});


//type text in header
$('#typewriter').typewriter({
	prefix : "<div id='typewriter-prefix'># Transport przestrzenny </div>",
	text : ["Megi zestawy", "Wyszków, Łochów i okolice...", "Bezpiecznie, profesjonalnie i terminowo!", "Sprawdź naszą ofertę !"],
	typeDelay : 50,
	waitingTime : 3500,
	blinkSpeed : 900
});