$('.slider-1').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000
});


$('.slider-2').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slider-3').slick({
    dots: true,
    arrows: false,
    fade: true
});
    
document.getElementById('myBtn').addEventListener('click', function(e) {
    var myBtn = e.target;
    var current = parseInt(myBtn.getAttribute('angle'));
    current = (current + 180) % 360;
    myBtn.style.transform = `rotate(${current}deg)`;
    myBtn.setAttribute('angle', current);
    document.getElementById('myDropdown').classList.toggle("show");
})