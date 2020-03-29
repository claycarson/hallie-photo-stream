(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="hallie-7" style="background-image: url('/photos/tint/hallie-7-65ba1d.jpg')" title="hallie-7">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-7-3c1786.jpg" src="/photos/tint/hallie-7-65ba1d.jpg" height="2585" width="3877" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-7-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-7" data-target="hallie-7">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-6" data-target="hallie-6" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 29, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-6" style="background-image: url('/photos/tint/hallie-6-65ba1d.jpg')" title="hallie-6">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-6-3c1786.jpg" src="/photos/tint/hallie-6-65ba1d.jpg" height="3383" width="4661" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-6-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-6" data-target="hallie-6">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-7" data-target="hallie-7" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hallie-5" data-target="hallie-5" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 29, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-5" style="background-image: url('/photos/tint/hallie-5-65ba1d.jpg')" title="hallie-5">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-5-3c1786.jpg" src="/photos/tint/hallie-5-65ba1d.jpg" height="5201" width="3467" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-5-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-5" data-target="hallie-5">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-6" data-target="hallie-6" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hallie-4" data-target="hallie-4" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 28, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-4" style="background-image: url('/photos/tint/hallie-4-65ba1d.jpg')" title="hallie-4">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-4-3c1786.jpg" src="/photos/tint/hallie-4-65ba1d.jpg" height="2782" width="3833" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-4-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-4" data-target="hallie-4">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-5" data-target="hallie-5" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hallie-3" data-target="hallie-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 28, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-3" style="background-image: url('/photos/tint/hallie-3-65ba1d.jpg')" title="hallie-3">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-3-3c1786.jpg" src="/photos/tint/hallie-3-65ba1d.jpg" height="2844" width="3919" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-3-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-3" data-target="hallie-3">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-4" data-target="hallie-4" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hallie-2" data-target="hallie-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 27, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-2" style="background-image: url('/photos/tint/hallie-2-65ba1d.jpg')" title="hallie-2">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-2-3c1786.jpg" src="/photos/tint/hallie-2-65ba1d.jpg" height="3035" width="4182" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-2-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-2" data-target="hallie-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-3" data-target="hallie-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hallie-1" data-target="hallie-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="meta">
    <li>March 27, 2020</li>
  </ul>
</li>
<li class="item " id="hallie-1" style="background-image: url('/photos/tint/hallie-1-65ba1d.jpg')" title="hallie-1">
  <img class="lazyload" data-src="/photos/thumbnail/hallie-1-3c1786.jpg" src="/photos/tint/hallie-1-65ba1d.jpg" height="3013" width="3345" />
  <span class="full">
    <span style="background-image: url('/photos/large/hallie-1-686656.jpg')"></span>
  </span>
  <a class="open" href="/hallie-1" data-target="hallie-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hallie-2" data-target="hallie-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="meta">
    <li>March 27, 2020</li>
  </ul>
</li>
`);