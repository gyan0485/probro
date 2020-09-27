$('#banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
    }
})

$('.app-slider').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    // autoplay: true
})