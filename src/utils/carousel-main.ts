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

export const carouselMain = (params: htmlParams) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hypnozio</title>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
    />
    <style>
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
     .btn-shopnow{
       content: url("${params.cta}")
        }
       .custom-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-top: 15px;
      }
      .custom-dot {
        width: 12px;
        height: 12px;
        position: relative;
        cursor: pointer;
      }
      .custom-dot::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ddd;
        border-radius: 50%;
        transition: all 0.3s ease;
      }
      .custom-dot::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #333;
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.3s ease;
      }
      .custom-dot.active::before {
        transform: scale(1.5);
        opacity: 0.3;
      }
      .custom-dot.active::after {
        transform: scale(1);
      }
      .custom-dot:hover::before {
        opacity: 0.5;
      }
      .scroll-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scroll-hidden::-webkit-scrollbar {
        display: none;
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
        <div class="relative w-full overflow-hidden mx-auto">
          <div id="slider" class="flex w-full transition-transform duration-500 ease-out mx-auto owl-carousel">
            ${params.slide
              .map((slide) => {
                return `<img class="slide${slide.id} card" alt="Slider"/>`;
              })
              .join("")}
          </div> 
          <div class="custom-dots"></div>               
        </div>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
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
            if (
              content.scrollHeight - content.scrollTop <=
              content.clientHeight
            ) {
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
          selectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((element) => {
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
          if (
            isViewable &&
            mraid.isViewable &&
            typeof mraid.isViewable === "function" &&
            mraid.isViewable()
          ) {
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
          ["touchstart", "mousedown", "wheel"].forEach((eventType) => {
            content.addEventListener(eventType, stopAutoScroll, {
              passive: true,
            });
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
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
     <script>
       $(document).ready(function () {
        const $carousel = $(".owl-carousel");
        const $customDots = $(".custom-dots");
        $carousel.slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          adaptiveHeight: true,
          arrows: true,
        });
        function createCustomDots() {
          const slideCount = $carousel.slick("getSlick").slideCount;
          console.log(slideCount);
          for (let i = 0; i < slideCount; i++) {
            const dot = $(` + "<div class='custom-dot' data-slide='${i}'></div>" + "`);"+
            "$"+"customDots.append(dot);"+
          "}"+
          "$"+"$('.custom-dot').first().addClass('active');"+
        "}"+
        "$"+"carousel.on(" +
          'beforeChange'+","+
          "function (event, slick, currentSlide, nextSlide)" + "{" +
            "$"+"('.custom-dot').removeClass('active');"+
            "$(`.custom-dot[data-slide='${nextSlide}']`).addClass('active');" +
          "}"+
        ");"+
        "$(document).on('click', '.custom-dot', function ()" +"{" +
          "const slideIndex = $(this).data('slide');"+
          "$(this).addClass('clicked');"+
          "setTimeout(() =>" + "{"+
           "$(this).removeClass('clicked');"+
          "}, 200);"+
          "$"+"carousel.slick('slickGoTo', slideIndex);"+
        "}"+
        ");"+
        "createCustomDots();"+
      "});"+
  "  </script>"+
"</body>"+
"</html>"`
}; 
