// (function ($) {
//     var image1 = new Image();
//     image.src = "./res/images/animation.gif";
// })(jQuery);

function init() {
    $("#camera-gif-figure").animate({
        // width and max-width have to be changed accordingly in index.css > #camera-gif
        top: String(0.5 * $(window).height() - (Math.min(0.15 * $(window).width(), 150))) + "px",
        opacity: "1",
    });

    // setTimeout(() => {
    //     $("#camera-gif").attr('src', "./res/images/animation.gif");
    // }, 500);
    
    setTimeout(() => {
        document.getElementById("camera-gif").style.opacity = '0';
    }, 1800);

    setTimeout(() => {
        const formLink = "https://forms.gle/QhyrjeC3Girhar5Y6";
        window.location.href = formLink; 
    }, 2500);
}