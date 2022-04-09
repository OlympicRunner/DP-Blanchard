//menu

$(document).ready(function(){
      $("#header-top__ul").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1000);
      });
  });
  


// burger //

document.querySelector(".header-top__btn-open").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.add("active-header-burger"),
  document.querySelector("body").classList.add("lock");
})
document.querySelector(".header-burger__close").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".header-burger__close").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".about-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".about-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".gallery-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".gallery-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".catalog-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".catalog-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".events-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".events-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".project-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".project-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

document.querySelector(".contact-link").addEventListener("click", function() {
  document.querySelector(".header-burger").classList.remove("active-header-burger");
}),
document.querySelector(".contact-link").addEventListener("click", function() {
  document.querySelector("body").classList.remove("lock");
})

$(document).ready(function(){
  $("#header-burger__ul").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});

// search //

document.querySelector(".header-top__search").addEventListener("click", function() {
  document.querySelector(".form-search-open").classList.add("form-search__active");
  this.classList.add("active");
})


document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form-search-open");

  if (!target.closest(".header-top-container")) {
  form.classList.remove("form-search__active");
    form.querySelector("input").value = "";
    document.querySelector(".header-top__search").classList.remove("active")
  }
})

//////

/////



document.querySelector(".header-search-off").addEventListener("click", function() {
  document.querySelector(".form-search-open").classList.toggle("form-search__active");
  document.querySelector(".header-top__search").classList.toggle("active");
})


// under menu //


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-bottom__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container-dropdown");
      
      document.querySelectorAll(".header-bottom__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("rotate-svg");
        }
      });
      
      document.querySelectorAll(".container-dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-ul-item");
        }
      })
      dropdown.classList.toggle("active-ul-item");
      btn.classList.toggle("rotate-svg")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom__ul")) {
      document.querySelectorAll(".container-dropdown").forEach(el => {
          el.classList.remove("active-ul-item");
      })
       document.querySelectorAll(".header-bottom__btn").forEach(el => {
          el.classList.remove("rotate-svg");
      });
    }
  })
  })

  // simplebar //

  document.querySelectorAll(".simplebar").forEach( el => {
    new SimpleBar(el, {
      scrollbarMaxSize: 25,
    })
  });

// swiepr for hero //

const container = document.querySelector(".hero-container")
const swiperHero = new Swiper('.hero-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  a11y:false,
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }
  
})

// select 

const element =document.querySelector('#galery__select');
const choises =new Choices(element,{
    searchEnabled:false,
    
    itemSelectText: ''
});


// swiper galery //

let gallerySlider = new Swiper(".galery-right", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // navigation: true,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".galery-right__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".galery-right__next",
    prevEl: ".galery-right__prev"
  },


  breakpoints: {
    120: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    600: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    firstSlideMessage: 'Предыдущие слайды',
    lastSlideMessage: 'Следующие слайды',
  }
});

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
} ); 

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accardion-btns').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.catalog-slide-content').forEach(function(tabContent) {
              tabContent.classList.remove('catalog-slide-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog-slide-content-active')
      })
  })

})

// events 

let eventsSlider = new Swiper(".events-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 3,
  // navigation: true,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: ".events__next",
    prevEl: ".events__prev"
  },
  pagination: {
    el: '.events-swiper__pagination',
    type: 'bullets',
    clickable: true,
    // dynamicBullets: 3
    dynamicMainBullets: 1
  },

  breakpoints: {
    120: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
      slidesPerGroup: 1

    },
    600: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30,
      slidesPerGroup: 2
    },

    800: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 30,
      // slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    firstSlideMessage: 'Предыдущие слайды',
    lastSlideMessage: 'Следующие слайды',
  }
});

$(document).ready(function(){
  $("#catalog-data__right").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 150);
  });
});


// partners

let partnersSlider = new Swiper(".partners__swiepr", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // navigation: true,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  // pagination: {
  //   el: ".galery-right__pagination",
  //   type: "fraction"
  // },
  navigation: {
    nextEl: ".partners__btn-next",
    prevEl: ".partners__btn-prev"
  },


  breakpoints: {
    120: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    600: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 33
    },
    800: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    firstSlideMessage: 'Предыдущие слайды',
    lastSlideMessage: 'Следующие слайды',
  }
});

// form

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.showroom__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        }
    }

})

// tooltip tippy.js 

// import 'tippy.js/dist/svg-arrow.css';
tippy('.project__tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  // allowHTML: true,
  placement: 'top',
  arrow: true,
});

tippy('.project__tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  allowHTML: true,
  placement: 'top',
  arrow: true
});

tippy('.project__tooltip-3', {
  content: 'В стремлении повысить качество',
  allowHTML: true,
  placement: 'top',
  arrow: true
});

// map  

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("firstMap", {
            center: [55.760236, 37.614877],
            zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([55.760236, 37.614877], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/svg/map-marker.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    }