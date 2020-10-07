"use strict";new Swiper(".clients__slider",{slidesPerView:"auto",spaceBetween:24,breakpoints:{992:{spaceBetween:120}},pagination:{el:".swiper-pagination",type:"fraction",formatFractionCurrent:function(e){return"0"+e},formatFractionTotal:function(e){return"0"+e}},scrollbar:{el:".swiper-scrollbar"}}),function(){var e=document.querySelector(".cources__video");if(e){videojs(e);var t=document.querySelector(".cources__container"),s=document.querySelector(".cources__target"),o=t.offsetWidth/2-(s.offsetWidth/2-s.offsetWidth/2),r=t.offsetHeight/2-(s.offsetHeight/2-s.offsetHeight/2);gsap.set(s,{x:o,y:r}),t.addEventListener("mousemove",(function(e){var o=e.target.getBoundingClientRect(),r=e.clientX-o.left,c=e.clientY-o.top,n=t.offsetWidth-(s.offsetWidth/2-s.offsetWidth/2),i=t.offsetHeight-(s.offsetHeight/2-s.offsetHeight/2);r<0&&(r=0),r>n&&(r=n),c<0&&(c=0),c>i&&(c=i),gsap.to(s,{x:r,y:c,duration:.35})})),t.addEventListener("mouseleave",(function(e){var o=t.offsetWidth/2-(s.offsetWidth/2-s.offsetWidth/2),r=t.offsetHeight/2-(s.offsetHeight/2-s.offsetHeight/2);gsap.to(s,{x:o,y:r,duration:.7})})),t.addEventListener("click",(function(){t.classList.toggle("cources__container--active")}))}}(),Draggable.create(".drag-text__text",{type:"x",bounds:document.querySelector(".drag-text__wrap"),onPress:function(){gsap.to(".drag-text__wrap",{scale:.7,duration:.35})},onRelease:function(){gsap.to(".drag-text__wrap",{scale:1,duration:1})},onDrag:function(){gsap.to(".drag-text__wrap",{scale:.7})}}),document.querySelector(".favorite-clients")&&(setInterval((function(){document.querySelector(".js-oneFirst").classList.contains("in")?(document.querySelector(".js-oneFirst").classList.remove("in"),document.querySelector(".js-oneFirst").classList.add("out")):(document.querySelector(".js-oneFirst").classList.remove("out"),document.querySelector(".js-oneFirst").classList.add("in")),document.querySelector(".js-oneLast").classList.contains("out")?(document.querySelector(".js-oneLast").classList.remove("out"),document.querySelector(".js-oneLast").classList.add("in")):(document.querySelector(".js-oneLast").classList.remove("in"),document.querySelector(".js-oneLast").classList.add("out"))}),7e3),setTimeout((function(){setInterval((function(){document.querySelector(".js-twoFirst").classList.contains("in")?(document.querySelector(".js-twoFirst").classList.remove("in"),document.querySelector(".js-twoFirst").classList.add("out")):(document.querySelector(".js-twoFirst").classList.remove("out"),document.querySelector(".js-twoFirst").classList.add("in")),document.querySelector(".js-twoLast").classList.contains("out")?(document.querySelector(".js-twoLast").classList.remove("out"),document.querySelector(".js-twoLast").classList.add("in")):(document.querySelector(".js-twoLast").classList.remove("in"),document.querySelector(".js-twoLast").classList.add("out"))}),7e3)}),700),setTimeout((function(){setInterval((function(){document.querySelector(".js-threeFirst").classList.contains("in")?(document.querySelector(".js-threeFirst").classList.remove("in"),document.querySelector(".js-threeFirst").classList.add("out")):(document.querySelector(".js-threeFirst").classList.remove("out"),document.querySelector(".js-threeFirst").classList.add("in")),document.querySelector(".js-threeLast").classList.contains("out")?(document.querySelector(".js-threeLast").classList.remove("out"),document.querySelector(".js-threeLast").classList.add("in")):(document.querySelector(".js-threeLast").classList.remove("in"),document.querySelector(".js-threeLast").classList.add("out"))}),7e3)}),1400),setTimeout((function(){setInterval((function(){document.querySelector(".js-fourFirst").classList.contains("in")?(document.querySelector(".js-fourFirst").classList.remove("in"),document.querySelector(".js-fourFirst").classList.add("out")):(document.querySelector(".js-fourFirst").classList.remove("out"),document.querySelector(".js-fourFirst").classList.add("in")),document.querySelector(".js-fourLast").classList.contains("out")?(document.querySelector(".js-fourLast").classList.remove("out"),document.querySelector(".js-fourLast").classList.add("in")):(document.querySelector(".js-fourLast").classList.remove("in"),document.querySelector(".js-fourLast").classList.add("out"))}),7e3)}),2100),setTimeout((function(){setInterval((function(){document.querySelector(".js-fiveFirst").classList.contains("in")?(document.querySelector(".js-fiveFirst").classList.remove("in"),document.querySelector(".js-fiveFirst").classList.add("out")):(document.querySelector(".js-fiveFirst").classList.remove("out"),document.querySelector(".js-fiveFirst").classList.add("in")),document.querySelector(".js-fiveLast").classList.contains("out")?(document.querySelector(".js-fiveLast").classList.remove("out"),document.querySelector(".js-fiveLast").classList.add("in")):(document.querySelector(".js-fiveLast").classList.remove("in"),document.querySelector(".js-fiveLast").classList.add("out"))}),7e3)}),2800),setTimeout((function(){setInterval((function(){document.querySelector(".js-sixFirst").classList.contains("in")?(document.querySelector(".js-sixFirst").classList.remove("in"),document.querySelector(".js-sixFirst").classList.add("out")):(document.querySelector(".js-sixFirst").classList.remove("out"),document.querySelector(".js-sixFirst").classList.add("in")),document.querySelector(".js-sixLast").classList.contains("out")?(document.querySelector(".js-sixLast").classList.remove("out"),document.querySelector(".js-sixLast").classList.add("in")):(document.querySelector(".js-sixLast").classList.remove("in"),document.querySelector(".js-sixLast").classList.add("out"))}),7e3)}),3500),setTimeout((function(){setInterval((function(){document.querySelector(".js-sevenFirst").classList.contains("in")?(document.querySelector(".js-sevenFirst").classList.remove("in"),document.querySelector(".js-sevenFirst").classList.add("out")):(document.querySelector(".js-sevenFirst").classList.remove("out"),document.querySelector(".js-sevenFirst").classList.add("in")),document.querySelector(".js-sevenLast").classList.contains("out")?(document.querySelector(".js-sevenLast").classList.remove("out"),document.querySelector(".js-sevenLast").classList.add("in")):(document.querySelector(".js-sevenLast").classList.remove("in"),document.querySelector(".js-sevenLast").classList.add("out"))}),7e3)}),4200),setTimeout((function(){setInterval((function(){document.querySelector(".js-eightFirst").classList.contains("in")?(document.querySelector(".js-eightFirst").classList.remove("in"),document.querySelector(".js-eightFirst").classList.add("out")):(document.querySelector(".js-eightFirst").classList.remove("out"),document.querySelector(".js-eightFirst").classList.add("in")),document.querySelector(".js-eightLast").classList.contains("out")?(document.querySelector(".js-eightLast").classList.remove("out"),document.querySelector(".js-eightLast").classList.add("in")):(document.querySelector(".js-eightLast").classList.remove("in"),document.querySelector(".js-eightLast").classList.add("out"))}),7e3)}),4900),setTimeout((function(){setInterval((function(){document.querySelector(".js-nineFirst").classList.contains("in")?(document.querySelector(".js-nineFirst").classList.remove("in"),document.querySelector(".js-nineFirst").classList.add("out")):(document.querySelector(".js-nineFirst").classList.remove("out"),document.querySelector(".js-nineFirst").classList.add("in")),document.querySelector(".js-nineLast").classList.contains("out")?(document.querySelector(".js-nineLast").classList.remove("out"),document.querySelector(".js-nineLast").classList.add("in")):(document.querySelector(".js-nineLast").classList.remove("in"),document.querySelector(".js-nineLast").classList.add("out"))}),7e3)}),5600),setTimeout((function(){setInterval((function(){document.querySelector(".js-tenFirst").classList.contains("in")?(document.querySelector(".js-tenFirst").classList.remove("in"),document.querySelector(".js-tenFirst").classList.add("out")):(document.querySelector(".js-tenFirst").classList.remove("out"),document.querySelector(".js-tenFirst").classList.add("in")),document.querySelector(".js-tenLast").classList.contains("out")?(document.querySelector(".js-tenLast").classList.remove("out"),document.querySelector(".js-tenLast").classList.add("in")):(document.querySelector(".js-tenLast").classList.remove("in"),document.querySelector(".js-tenLast").classList.add("out"))}),7e3)}),6300));var headerOpen=document.querySelector(".js-header-open"),headerClose=document.querySelector(".js-header-close"),headerList=document.querySelector(".header__collapse");function showCollapse(){headerList.classList.add("header__collapse--open"),scrollLock.disablePageScroll()}headerOpen.addEventListener("click",(function(){gsap.timeline({onComplete:showCollapse}).to("#square-header",{scale:400,x:-2400,y:-500,duration:.6,ease:"expo.in"})})),headerClose.addEventListener("click",(function(){headerList.classList.remove("header__collapse--open"),gsap.to("#square-header",{scale:1,x:0,y:0,duration:.6,ease:"expo.out"}),scrollLock.enablePageScroll()}));var marginHeader=(document.documentElement.clientWidth-1680-160)/2;document.documentElement.style.setProperty("--header-margin","".concat(marginHeader,"px")),window.addEventListener("resize",(function(){marginHeader=(document.documentElement.clientWidth-1680-160)/2,document.documentElement.style.setProperty("--header-margin","".concat(marginHeader,"px"))})),Pace.on("hide",(function(){setTimeout((function(){gsap.set(".pace",{display:"none"})}),1e3)})),function(){var e=document.querySelector(".header"),t=e.offsetHeight;document.documentElement.style.setProperty("--header-height","".concat(t,"px")),window.addEventListener("resize",(function(){t=e.offsetHeight,document.documentElement.style.setProperty("--header-height","".concat(t,"px"))}))}(),document.querySelector(".js-services-target")&&document.querySelectorAll(".js-services-target").forEach((function(e){e.addEventListener("mouseenter",(function(){var t=e.getAttribute("data-target");document.querySelector(t).classList.add("services__image--active")})),e.addEventListener("mouseleave",(function(){var t=e.getAttribute("data-target");document.querySelector(t).classList.remove("services__image--active")}))})),function(){var e=document.querySelector(".showreel__video");if(e){videojs(e);var t=document.querySelector(".showreel__container"),s=document.querySelector(".showreel__target"),o=t.offsetWidth/2-(s.offsetWidth/2-s.offsetWidth/2),r=t.offsetHeight/2-(s.offsetHeight/2-s.offsetHeight/2);gsap.set(s,{x:o,y:r}),t.addEventListener("mousemove",(function(e){var o=e.target.getBoundingClientRect(),r=e.clientX-o.left,c=e.clientY-o.top,n=t.offsetWidth-(s.offsetWidth/2-s.offsetWidth/2),i=t.offsetHeight-(s.offsetHeight/2-s.offsetHeight/2);r<0&&(r=0),r>n&&(r=n),c<0&&(c=0),c>i&&(c=i),gsap.to(s,{x:r,y:c,duration:.3})})),t.addEventListener("mouseleave",(function(e){var o=t.offsetWidth/2-(s.offsetWidth/2-s.offsetWidth/2),r=t.offsetHeight/2-(s.offsetHeight/2-s.offsetHeight/2);gsap.to(s,{x:o,y:r,duration:.7})})),t.addEventListener("click",(function(){t.classList.toggle("showreel__container--active")}))}}(),document.querySelectorAll(".video-box--vimeo")&&document.querySelectorAll(".video-box--vimeo").forEach((function(e){e.addEventListener("click",(function(t){var s=e.children[1].children[0],o=new Vimeo.Player(s);t.preventDefault(),e.children[0].style.display="none",o.play(),console.log(e.children[1].children[0])}))}));