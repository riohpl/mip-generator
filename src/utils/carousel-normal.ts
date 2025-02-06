type content = {
  id: number;
  type: string;
  content: string;
};

export type htmlParams = {
  slide: content[];
  header: content[];
  content: content[];
  cta: string;
};

export const carouselNormal = (params: htmlParams) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Statiks 360</title>
  <link rel="stylesheet" href="./output.css">
  <style>
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}


html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

body {
  margin: 0;
  line-height: inherit;
}


hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}


abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}



h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}


a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}


small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}


::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}


dialog {
  padding: 0;
}


textarea {
  resize: vertical;
}


input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}


:disabled {
  cursor: default;
}



img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}


img,
video {
  max-width: 100%;
  height: auto;
}

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

.container {
  width: 100%;
}

/* @media (min-width: 640px) {
//   .container {
//     max-width: 640px;
//   }
// }

// @media (min-width: 768px) {
//   .container {
//     max-width: 768px;
//   }
// }

// @media (min-width: 1024px) {
//   .container {
//     max-width: 1024px;
//   }
// }

// @media (min-width: 1280px) {
//   .container {
//     max-width: 1280px;
//   }
// }

// @media (min-width: 1536px) {
//   .container {
//     max-width: 1536px;
//   }
// }
*/

.visible {
  visibility: visible;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.bottom-0 {
  bottom: 0px;
}

.left-4 {
  left: 1rem;
}

.right-4 {
  right: 1rem;
}

.top-1\/2 {
  top: 50%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-\[5px\] {
  margin-top: 5px;
  margin-bottom: 5px;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.h-\[10px\] {
  height: 10px;
}

.h-auto {
  height: auto;
}

.h-screen {
  height: 100vh;
}

.w-full {
  width: 100%;
}

.w-auto {
  width: auto;
}

.max-w-\[100\%\] {
  max-width: 100%;
}

.max-w-\[300px\] {
  max-width: 300px;
}

.max-w-\[40px\] {
  max-width: 40px;
}

.max-w-\[90\%\] {
  max-width: 90%;
}

.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.rounded-none {
  border-radius: 0px;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.bg-opacity-70 {
  --tw-bg-opacity: 0.7;
}

.p-5 {
  padding: 1.25rem;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

@media (min-width: 640px) {
  .sm\:w-full {
    width: 100%;
  }

  .sm\:w-1\/2 {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .md\:w-full {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .lg\:w-full {
    width: 100%;
  }

  .lg\:w-auto {
    width: auto;
  }
}
      
     ${params.header
       .map((header) => {
         return `.header${header.id}{ content:url('${header.content}')}`;
       })
       .join("")}
    ${params.content
      .map((content) => {
        return `.content${content.id}{ content:url('${content.content}')}`;
      })
      .join("")}
     ${params.slide
       .map((slide) => {
         return `.slide${slide.id}{ content:url('${slide.content}')}`;
       })
       .join("")}
       
      .btn-carousel {
          content: url('data:image/png;base64,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');
      }

    .btn-shopnow{
       content: url("${params.cta}")
    }
      body::-webkit-scrollbar,
      html::-webkit-scrollbar{
            display: none;
        }
      #content::-webkit-scrollbar{
          height: 0;
          width: 0;
      }
      .pulse-button{
          cursor: pointer;
          animation: pulse 1s infinite;
      }

      @keyframes pulse{
          0%{
              transform: scale(1);
          }
          50%{
              transform: scale(1.1);
          }
          100%{
              transform: scale(1);
          }
      }
      .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: #d8d8d8;
        border-radius: 50%;
        cursor: pointer;
      }

      .dot.active {
        background-color: #9d9d9d;
      }

  </style>
</head>
<body>
    <main class="bg-white container flex flex-col w-full max-w-[100%] h-screen overflow-hidden">
      ${params.header
        .map((header) => {
          return ` <div class="w-full max-w-[100%] mx-auto flex justify-center items-center">
         <img class="header${header.id} w-full" alt="header">
        </div>`;
        })
        .join("")}
      <section id="content" class="overflow-y-scroll">
        <div class="relative w-full max-w-[90%] overflow-hidden mx-auto">
          <div id="slider" class="flex w-full transition-transform duration-500 ease-out mx-auto ">
            ${params.slide
              .map((slide) => {
                return `<img class="slide${slide.id} card" alt="Slider"/>`;
              })
              .join("")}
          </div>                
          <!-- Navigation -->
          <button id="prev" class="absolute top-1/2 left-4 -translate-y-1/2">
              <img class="btn-carousel max-w-[40px]" alt="Previous">
          </button>
          <button id="next" class="absolute top-1/2 right-4 -translate-y-1/2">
              <img class="btn-carousel rotate-180 max-w-[40px]" alt="Next">
          </button>
        </div>
          <!-- Navigation dots -->
        <div class="dots-container w-full h-[10px] flex justify-center my-[5px] rounded-none"></div>
           ${params.content
             .map((content) => {
               return ` <div class="w-full max-w-[100%] mx-auto flex justify-center items-center">
         <img class="content${content.id} w-full" alt="content">
        </div>`;
             })
             .join("")}
        <div class="p-5 w-full fixed bottom-0 mx-auto">
          <button id="yellowBtn" class="cta w-full flex justify-center mx-auto pulse-button " onclick="mraid.open()">
            <img class="w-full max-w-[300px] btn-shopnow " alt="Shop Now">
          </button>
        </div>
      </section>
    </main>
    <!-- CTA -->
    <script>
      (function () {
          const mraid = window.mraid || {};
          let isViewable = false;
          let scrollInterval;
          let isAutoScrolling = true;

          // Configuration Constants
          const SCROLL_SPEED = 1; // Pixels per tick
          const SCROLL_INTERVAL = 50; // Milliseconds
          const FALLBACK_DELAY = 1000; // Delay for non-MRAID environments
          const content = document.getElementById("content");

          // Utility: Starts auto-scrolling
          const startAutoScroll = () => {
              if (!isAutoScrolling) return;
              scrollInterval = setInterval(() => {
                  content.scrollTop += SCROLL_SPEED;
                  if (content.scrollHeight - content.scrollTop <= content.clientHeight) {
                      content.scrollTop = 0; // Reset scroll to top
                  }
              }, SCROLL_INTERVAL);
          };

          // Utility: Stops auto-scrolling
          const stopAutoScroll = () => {
              isAutoScrolling = false;
              clearInterval(scrollInterval);
          };

          // Utility: Handles click actions
          const handleClickAction = () => {
          if (mraid.open && typeof mraid.open === "function") {
              mraid.open();
          } else {
              window.open();
          }
          };

          // Add click event listeners to specified selectors
          const addClickHandlers = (selectors) => {
              selectors.forEach(selector => {
                  document.querySelectorAll(selector).forEach(element => {
                      element.addEventListener("click", (e) => {
                          e.preventDefault();
                          handleClickAction();
                      });
                  });
              });
          };

          // Initialize scrolling and content visibility
          const initializeScrolling = () => {
              content.style.display = "block"; // Ensure content is visible
              if (isViewable && mraid.isViewable && typeof mraid.isViewable === "function" && mraid.isViewable()) {
                  startAutoScroll();
              }
          };

          // Initialize MRAID functionality
          const initializeMraid = () => {
              if (mraid && typeof mraid.getState === "function") {
                  const state = mraid.getState();
                  if (state === "loading") {
                      mraid.addEventListener("ready", () => {
                          isViewable = true;
                          initializeScrolling();
                      });
                  } else {
                      isViewable = true;
                      initializeScrolling();
                  }
              } else {
                  // Fallback for non-MRAID environments
                  setTimeout(initializeScrolling, FALLBACK_DELAY);
              }
          };

          // Add user interaction event listeners to stop auto-scrolling
          const addUserInteractionListeners = () => {
              ["touchstart", "mousedown", "wheel"].forEach(eventType => {
                  content.addEventListener(eventType, stopAutoScroll, { passive: true });
              });
          };

          // Initialization logic
          const initialize = () => {
              addClickHandlers([".cta"]);
              addUserInteractionListeners();
              initializeMraid();
          };

          // Start initialization when the DOM is ready
          if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", initialize);
          } else {
              initialize();
          }
      })();
  </script>
   <script>
    const slider = document.getElementById('slider');
    const dotsContainer = document.querySelector('.dots-container')
    const slides = slider.children;
    const cards = document.querySelectorAll('.card')
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let index = 0;    

    // navigation dots 
    cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index == i) dot.classList.add('active'); // Set the first dot as active
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(i) {
    const slideWidth = slides[0].clientWidth;
    index = i
    updateSlider()
    restartAutoRotate()
  }
  function updateActiveDot() {
    document.querySelectorAll('.dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

    function updateSlider() {
      slider.style.transform = ${"(`translateX(" + "-${index * 100}" + "%)`)"};
      updateActiveDot()
    }

    function showNextSlide() {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateSlider();
    }

    function showPrevSlide() {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateSlider();
    }

    // Button Event Listeners
    prev.addEventListener('click', () => {
        showPrevSlide();
        restartAutoRotate(); // Restart rotation after manual navigation
    });

    next.addEventListener('click', () => {
        showNextSlide();
        restartAutoRotate(); // Restart rotation after manual navigation
    });

    // Auto-Rotate
    let autoRotate = setInterval(showNextSlide, 2000);

    function restartAutoRotate() {
        clearInterval(autoRotate);
        autoRotate = setInterval(showNextSlide, 2000);
    }
</script>
</body>
</html>
`;
};
