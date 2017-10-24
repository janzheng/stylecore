---
title: Smooth Scroll*
name: smoothScroll
type: styleguide
layout: layout-styleguide
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---

<main markdown="1">

## Smooth Scroll

<div class="_styleguide-todo _message --warning" markdown="1">
  add complex scrollng, vertical scrolling, convert into reusable component
</div>


Smooth scroll intercepts anchor links and tags, and URL anchors (e.g. `http://mysite.com#anchor`) and scrolls the page smoothly to target (otherwise browsers just jump).

- requires JQuery
- method intercepts `href="#"` so `on` events on anchor links don't trigger for jQuery! Don't use `<a>` tags for buttons and non-links!
- `smoothScroll.js` is basic, automagic vertical scrolling w/ no intercepting, and applies scrolling to the body
- `smoothScrollMore.js` does vertical and horizontal scrolling, as well a custom scrolling target

<div class="_styleguide-example">
  <div>
    <a class="" href="#smooth">Basic but Smooth</a>
    <script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
  </div>
  The basic scroller doesn't require any JQuery initialization, but lacks complexity. It also doesn't intercept anchor links
</div>
~~~html
<a class="" href="#smooth">Scroll soooo smooth</a>
<script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
~~~


<div class="_styleguide-example">
  <div>
    <a class="" href="#smooth">Smooth Vertical Scroll</a>
    <script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
  </div>
  The vertical scroll can be initialized and reset, and intercepts and automatically scrolls down anchor links
</div>
~~~html
<a class="" href="#smooth">Scroll soooo smooth</a>
<script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
~~~







<div class="" id="smooth">
  So smooth.
</div>

</main>

