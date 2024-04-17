/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/




(function() {
  "use strict";

















  










  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });







  const numStars = 1000; // Anzahl der Sterne
  const starField = document.querySelector(".star-field");
  const totalAnimationDuration = 10; // Gesamtanimationdauer in Sekunden
  
  // Erstellen der Sterne
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
  
    // Zufällige Opazität zwischen 0 und 1 für jeden Stern
    star.style.opacity = Math.random();
  
    // Zufällige Auswahl der Farbe für 20% der Sterne
    if (Math.random() < 0.1) {
      star.classList.add("colored-star");
      const colors = ["yellow", "blue", "green", "purple", "pink"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      star.style.backgroundColor = randomColor;
    }
  
    // Zufällige Animationdauer zwischen 1 und 4 Sekunden für jeden Stern
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
  
    // Zufällige Verzögerung zwischen 0 und 10 Sekunden für jeden Stern
    star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;
  
    starField.appendChild(star);
  }
  





  function initOwlCarousel ( carousel ) {
    var
      aliaces = [ '-', '-sm-', '-md-', '-lg-', '-xl-', '-xxl-' ],
      values = [ 0, 576, 768, 992, 1200, 1600 ],
      responsive = {};

    for ( var j = 0; j < values.length; j++ ) {
      responsive[ values[ j ] ] = {};
      for ( var k = j; k >= -1; k-- ) {
        if ( !responsive[ values[ j ] ][ 'items' ] && carousel.attr( 'data' + aliaces[ k ] + 'items' ) ) {
          responsive[ values[ j ] ][ 'items' ] = k < 0 ? 1 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'items' ), 10 );
        }
        if ( !responsive[ values[ j ] ][ 'stagePadding' ] && responsive[ values[ j ] ][ 'stagePadding' ] !== 0 && carousel.attr( 'data' + aliaces[ k ] + 'stage-padding' ) ) {
          responsive[ values[ j ] ][ 'stagePadding' ] = k < 0 ? 0 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'stage-padding' ), 10 );
        }
        if ( !responsive[ values[ j ] ][ 'margin' ] && responsive[ values[ j ] ][ 'margin' ] !== 0 && carousel.attr( 'data' + aliaces[ k ] + 'margin' ) ) {
          responsive[ values[ j ] ][ 'margin' ] = k < 0 ? 30 : parseInt( carousel.attr( 'data' + aliaces[ k ] + 'margin' ), 10 );
        }
      }
    }

    // Enable custom pagination
    if ( carousel.attr( 'data-dots-custom' ) ) {
      carousel.on( 'initialized.owl.carousel', function ( event ) {
        var
          carousel = $( event.currentTarget ),
          customPag = $( carousel.attr( 'data-dots-custom' ) ),
          active = 0;

        if ( carousel.attr( 'data-active' ) ) {
          active = parseInt( carousel.attr( 'data-active' ), 10 );
        }

        carousel.trigger( 'to.owl.carousel', [ active, 300, true ] );
        customPag.find( '[data-owl-item="' + active + '"]' ).addClass( 'active' );

        customPag.find( '[data-owl-item]' ).on( 'click', function ( event ) {
          event.preventDefault();
          carousel.trigger( 'to.owl.carousel', [ parseInt( this.getAttribute( 'data-owl-item' ), 10 ), 300, true ] );
        } );

        carousel.on( 'translate.owl.carousel', function ( event ) {
          customPag.find( '.active' ).removeClass( 'active' );
          customPag.find( '[data-owl-item="' + event.item.index + '"]' ).addClass( 'active' )
        } );
      } );
    }

    carousel.owlCarousel( {
      autoplay:           isNoviBuilder ? false : carousel.attr( 'data-autoplay' ) !== 'false',
      autoplayTimeout:    carousel.attr( "data-autoplay" ) ? Number( carousel.attr( "data-autoplay" ) ) : 3000,
      autoplayHoverPause: true,
      loop:               isNoviBuilder ? false : carousel.attr( 'data-loop' ) !== 'false',
      items:              1,
      center:             carousel.attr( 'data-center' ) === 'true',
      dotsContainer:      carousel.attr( 'data-pagination-class' ) || false,
      navContainer:       carousel.attr( 'data-navigation-class' ) || false,
      mouseDrag:          isNoviBuilder ? false : carousel.attr( 'data-mouse-drag' ) !== 'false',
      nav:                carousel.attr( 'data-nav' ) === 'true',
      dots:               carousel.attr( 'data-dots' ) === 'true',
      dotsEach:           carousel.attr( 'data-dots-each' ) ? parseInt( carousel.attr( 'data-dots-each' ), 10 ) : false,
      animateIn:          carousel.attr( 'data-animation-in' ) ? carousel.attr( 'data-animation-in' ) : false,
      animateOut:         carousel.attr( 'data-animation-out' ) ? carousel.attr( 'data-animation-out' ) : false,
      responsive:         responsive,
      navText:            carousel.attr( 'data-nav-text' ) ? $.parseJSON( carousel.attr( 'data-nav-text' ) ) : [],
      navClass:           carousel.attr( 'data-nav-class' ) ? $.parseJSON( carousel.attr( 'data-nav-class' ) ) : [ 'owl-prev', 'owl-next' ]
    } );
  }















})()