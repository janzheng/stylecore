

// 
// Smooth Scrolling 
// [0.0.2] - added verticalScrollTo - separate target-based scrolling fn
// [0.0.3] - added verticalScrollIntercept - experimental
// [0.0.4] - changed href starts with # to contains #; added currenturl v. futureurl check; for sidebar that always contains url#location, now will correctly scrollTo or go to  new location
// [0.0.5] - fixed target forwarding bug not including the hash


// this one only intercepts anchor link hashes as they're being pressed
function verticalScroll(offsetY = 0) {
  var scrollElement = 'html, body';
  
  // Smooth scrolling for internal links
  // $("a[href^='#']").click(function(event) { // starts with hash
  $("a[href*='#']").click(function(event) { // contains hash

    // var $this = $(this),
    var target = this.hash,
        $target = $(this.hash),
        offset = $('a[href='+target+']').data('offset-scroll') || 0; // <... data-offset-scroll="400"> 
        offset += offsetY;


    // need to check if the link and the page is the same
    // if it IS the same, we prevent default and scroll
    // otherwise we go to the linked page
    // edit: there's a ugly flash if we do a check and then prevent
    // so we flip it: if the Urls are NOT the same, we go to the future Url

    var currentUrl = $(target).context.location.pathname,
        futureUrl = $(this).context.pathname;

    event.preventDefault();
    console.log ('auto verticallScroll to ', $target, ' current location: ', $(target).context.location.pathname, ' future location',  $(this).context.pathname);

    if (currentUrl != futureUrl) {
      // event.preventDefault();
      console.log('go to ', currentUrl, futureUrl, target);
      window.location = futureUrl + target;
    }

    if( typeof $target.offset() !== "undefined") {
      $(scrollElement).stop().animate({
        'scrollTop': $target.offset().top + offset
      }, 500, 'swing', function() {

        // changes target id so we don't scroll twice w/ setting location
        var id = target.replace(/^.*#/, ''),
            elem = document.getElementById(id)
        elem.id = id+'-tmp'
        window.location.hash = target
        elem.id = id

        event.preventDefault();
      });
    }
  });
}

// scrolls to a set target; does NOT intercept hashes
// does NOT set the hash
function verticalScrollTo(offsetY = 0, _target=undefined, _scrollElem='html, body') {
  console.log('verticalScrollTo: scrolling to ', _target)
  var scrollElement = _scrollElem;

  var target = _target,
      $target = $(target),
      offset = offsetY;

  if( typeof $target.offset() !== "undefined") {
    var scrollDistance = $target.offset().top + offset;
    // console.log('wheee', scrollElement, scrollDistance, $(scrollElement).height())
    $(scrollElement).animate({
      'scrollTop': scrollDistance
    }, 500, 'swing', function() {
      // console.log('finished vScroll: ', target)
    });
  } else {
    console.log('Target not found: ', $target)
  }
}


// this one only intercepts 
// should be paired with window on hashchange
function verticalScrollIntercept(event=undefined, offsetY = 0) {
  var scrollElement = 'html, body';
  // event.preventDefault();
  
  // Smooth scrolling for internal links
  var target = location.hash;
  var $target = $(location.hash);

  if( typeof $target.offset() !== "undefined") {
    window.scrollTo(0, 0);
    $(scrollElement).stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {

      console.log ('intercept verticallScroll to ', target, $target.offset().top, $(scrollElement));

      // changes target id so we don't scroll twice w/ setting location
      var id = target.replace(/^.*#/, ''),
          elem = document.getElementById(id);
      elem.id = id+'-tmp';
      window.location.hash = target;
      elem.id = id;

      // event.preventDefault();
    });
  } else {
    console.log(' no target ', $target);
  }
}

$(document).ready(function() { 
  // intercept hash on load
  var hash = location.hash,
      navOffset = -60;

  // console.log('location hash: ', hash)
  // if(hash) {
  //   console.log('location hash: ', hash)
  // }
  verticalScroll(navOffset);
});




/*

// 
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #
// - mooified to scroll left/right based on responsive size
// 

function hScroll(target) {
  var scrollElement = '.section-container';

  $target = $(target);
  // offset = $this.data('offset-scroll') || 0; // <... data-offset-scroll="400"> 
  targetOffset = $target.offset().left;
  offset = -300;

  // console.log('start hScroll to ' , target)

  if( typeof $target.offset() !== "undefined") {
    // window.location.hash = target;
    $(scrollElement).stop().animate({
      'scrollLeft': $target.offset().left + $(scrollElement).scrollLeft() + offset
    }, 600, 'swing', function() {
      window.location.hash = target;

      // console.log('finished hScroll')
    });
  }
}
function horizontalScroll() {
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();
    hScroll(this.hash);
  });
}

function verticalScroll(_target) {
  var scrollElement = 'html, body';
  event.preventDefault();
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();

    // var $this = $(this),
    var target = this.hash || _target,
        $target = $(target),
        offset = $('a[href='+target+']').data('offset-scroll') || 0; // <... data-offset-scroll="400"> 

    // console.log('scroll: ' , target, $('a[href='+target+']'), $('a[href='+target+']').data('offset-scroll'))
    // if(_target) {
    //   offset = $('a[href=#'+'target]').data('offset-scroll') || 0;
    //   console.log('new target offset: ', offset, _target)
    // }
    // console.log('start vScroll')

    if( typeof $target.offset() !== "undefined") {
      // window.location.hash = target;
      $(scrollElement).stop().animate({
        'scrollTop': $target.offset().top + offset
      }, 500, 'swing', function() {

        // changes target id so we don't scroll twice w/ setting location
        var id = target.replace(/^.*#/, ''),
            elem = document.getElementById(id)
        elem.id = id+'-tmp'
        window.location.hash = target
        elem.id = id

        // window.location.hash = target;
        event.preventDefault();
        // console.log('finished vScroll: ', target)
      });
    }
  });
}


*/
