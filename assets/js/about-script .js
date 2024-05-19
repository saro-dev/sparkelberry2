
    // ========testimonial slider/=====/
    $('.testimonial-slider-class').slick({
      dots: true,
      infinite: false,
      speed: 300,
      centerPadding:"30px",
      spaceBetween: 30,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows:false,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // ========blog slider/=====/
    $('.blog-slider-class').slick({
      dots: true,
      infinite: false,
      speed: 300,
      centerPadding:"50px",
      spaceBetween: 50,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
///---- counting animation---///
// const counterUp = window.counterUp.default

// const callback = entries => {
// 	entries.forEach( entry => {
// 		const el = entry.target
// 		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
// 			counterUp( el, {
// 				duration: 2000,
// 				delay: 16,
// 			} )
// 			el.classList.add( 'is-visible' )
// 		}
// 	} )
// }

// const IO = new IntersectionObserver( callback, { threshold: 1 } )

// const el = document.querySelector( '.counter' )
// IO.observe( el )

const counterUp = window.counterUp.default;

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
    });
};

// Select all elements with the class 'counter'
const elements = document.querySelectorAll('.counter');

// Create an IntersectionObserver for each element
const observers = [];
elements.forEach(el => {
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    observer.observe(el);
    observers.push(observer);
});



///---- counting animation end---///

///---- Scroll to Top start---///

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show or hide the button based on scroll position
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
///---- Scroll to Top end---///





