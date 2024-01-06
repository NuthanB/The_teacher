var homeHeroSplide = new Splide('#homeHeroCarousel',{
    arrows  : false,
    type  : 'fade',
    rewind: true,
    autoplay:true,
    interval:5000,
    speed:1500,
    pauseOnHover:false
});
homeHeroSplide.mount();

var homeLogoSplide = new Splide('#homeLogoSlider',{
    arrows  : false,
    type   : 'loop',
    perPage: 6,
    perMove: 2,
    interval:5000,
    speed:1000,
    autoplay:true,
    pauseOnHover:false,
    breakpoints : {
        1200 : {
            perPage: 5,
        },
        991 : {
            perPage: 4,
        },
        768 : {
            perPage: 3,
        },
        576 : {
            perPage: 2,
        }
    }
});
homeLogoSplide.mount();

var homeMarketSplide = new Splide('#homeMarketSlider',{
    arrows  : false,
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    interval:3000,
    speed:1000,
    autoplay:true,
    gap:20,
    pauseOnHover:false,
    breakpoints : {
        1200 : {
            perPage: 3,
        },
        768 : {
            perPage: 2,
        },
        576 : {
            perPage: 1,
        }
    }
});
homeMarketSplide.mount();