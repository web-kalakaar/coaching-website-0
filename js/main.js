/* Shikhar Classes  - site behaviour (vanilla JS, no dependencies) */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Mobile navigation ---------- */
  var toggle = $("#navToggle");
  var menu = $("#navMenu");
  function setNav(open) {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) setNav(false);
    });
  }

  /* ---------- Navbar shadow + back-to-top ---------- */
  var navbar = $("#navbar");
  var toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

  /* ---------- Active nav link ---------- */
  if ("IntersectionObserver" in window) {
    var links = $$(".nav-menu a[href^='#']");
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Hero stat counters ---------- */
  function format(n) { return n.toLocaleString("en-IN"); }
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = format(target) + suffix; return; }
    var dur = 1800, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = $$("[data-count]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---------- Notice ticker: duplicate list for a seamless loop ---------- */
  var track = $("#tickerTrack");
  if (track && track.firstElementChild) {
    var clone = track.firstElementChild.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  }

  /* ---------- Course accordion ---------- */
  var courses = $$(".course");
  function setCourse(card, open) {
    var btn = $(".course-toggle", card);
    card.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  }
  courses.forEach(function (card) {
    var btn = $(".course-toggle", card);
    btn.addEventListener("click", function () {
      var willOpen = btn.getAttribute("aria-expanded") !== "true";
      courses.forEach(function (c) { if (c !== card) setCourse(c, false); });
      setCourse(card, willOpen);
      if (willOpen) {
        setTimeout(function () {
          var top = card.getBoundingClientRect().top;
          if (top < 70 || top > window.innerHeight * 0.5) {
            window.scrollTo({ top: window.scrollY + top - 84, behavior: reduceMotion ? "auto" : "smooth" });
          }
        }, 120);
      }
    });
  });

  /* open a course from a deep link such as /#course-ssc */
  function openFromHash() {
    var id = location.hash.replace("#", "");
    var card = id && document.getElementById(id);
    if (card && card.classList.contains("course")) { courses.forEach(function (c) { setCourse(c, c === card); }); }
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  /* "Book demo" buttons pre-select the course in the form */
  var courseSelect = $("#f-course");
  $$("[data-course]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (courseSelect) courseSelect.value = b.getAttribute("data-course");
    });
  });

  /* ---------- Enquiry form -> WhatsApp ---------- */
  var form = $("#enquiryForm");
  var msg = $("#formMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var course = form.course.value;
      var note = form.note.value.trim();
      if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s+-]|^91/g, ""))) {
        msg.style.color = "#b3261e";
        msg.textContent = "Please enter a valid 10-digit mobile number.";
        form.phone.focus();
        return;
      }
      var text = "Hello Shikhar Classes , I would like to book a free demo class.\n" +
        "Name: " + name + "\nPhone: " + phone + "\nCourse: " + course +
        (note ? "\nMessage: " + note : "");
      var url = "https://wa.me/919876543210?text=" + encodeURIComponent(text);
      msg.style.color = "";
      msg.textContent = "Opening WhatsApp with your details. Our team will confirm your demo slot shortly.";
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var lb = $("#lightbox");
  if (lb && typeof lb.showModal === "function") {
    var lbImg = $("img", lb), lbCap = $("p", lb);
    $$(".g-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var img = $("img", item);
        lbImg.src = img.getAttribute("data-full") || img.currentSrc || img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = $("span", item).textContent;
        lb.showModal();
      });
    });
    $(".lb-close", lb).addEventListener("click", function () { lb.close(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  }
})();
