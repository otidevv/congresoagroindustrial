//Start Swiper
var swiper = new Swiper(".start-slider", {
    speed: 600,
    navigation: {
        nextEl: ".start-swiper-button-next",
        prevEl: ".start-swiper-button-prev",
    },
    loop: true,
});

//Recommended Swiper
var swiper = new Swiper(".recommended-swiper", {
    slidesPerView: 1.8,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 2.6,
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 4.2,
            spaceBetween: 20
        }
    },
});

//Activity Swiper
var swiper = new Swiper(".activity-swiper", {
    slidesPerView: 2.8,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 2.6,
            spaceBetween: 40
        },

        1500: {
            slidesPerView: 3.8,
            spaceBetween: 40
        },

        1920: {
            slidesPerView: 4.8,
            spaceBetween: 40
        }
    },
});

// Swiper Thumb Slider 1
var mainSwiper = new Swiper(".swiper-buttons-1", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});
var thumbsSwiper = new Swiper(".swiper-images-1", {
    speed: 500,
    effect: 'fade',
    spaceBetween: 0,
    thumbs: {
        swiper: mainSwiper,
    },
});

// Swiper Thumb Slider 2
var mainSwiper = new Swiper(".swiper-buttons-2", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});
var thumbsSwiper = new Swiper(".swiper-images-2", {
    speed: 500,
    effect: 'fade',
    spaceBetween: 0,
    thumbs: {
        swiper: mainSwiper,
    },
});


// Swiper History Slider
var mainSwiper = new Swiper(".history-buttons", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 6,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        1920: {
            slidesPerView: 'auto',
            spaceBetween: 20
        }
    },
});


var thumbsSwiper = new Swiper(".history-content", {
    speed: 500,
    effect: 'fade',
    spaceBetween: 0,
    thumbs: {
        swiper: mainSwiper,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Swiper Content Slider
var swiper = new Swiper(".swiper-content", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Contact Slider
var swiper = new Swiper(".contact-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        },

        1920: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
});

//Gallery Slider
var swiper = new Swiper(".gallery-swiper-thumbnails", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 2.8,
        },

        768: {
            slidesPerView: 3.8,
        },

        1024: {
            slidesPerView: 5,
        },

        1280: {
            slidesPerView: 5,
        },

        1920: {
            slidesPerView: 5,
        }
    },
});
var swiper2 = new Swiper(".gallery-swiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});