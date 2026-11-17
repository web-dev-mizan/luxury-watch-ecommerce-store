// toggleMenu
if (document.getElementById("cartButton")) {
  document.getElementById("cartButton").addEventListener("click", function () {
    document.getElementById("cart").classList.toggle("open");
  });
}

// Add event listener to search icon
if (document.getElementById("searchIcon")) {
  document.getElementById("searchIcon").addEventListener("click", function () {
    document.getElementById("searchOverlay").classList.toggle("open");
  });
}

if (document.getElementById("asideToggle")) {
  document.getElementById("asideToggle").addEventListener("click", function () {
    document.getElementById("asideMenu").classList.toggle("open");
  });
}

if (document.getElementById("cartCloseButton")) {
  document.getElementById("cartCloseButton").addEventListener("click", function () {
    document.getElementById("cart").classList.toggle("open");
  });
}

if (document.getElementById("searchCloseButton")) {
  document.getElementById("searchCloseButton").addEventListener("click", function () {
    document.getElementById("searchOverlay").classList.toggle("open");
  });
}

if (document.getElementById("asideCloseButton")) {
  document.getElementById("asideCloseButton").addEventListener("click", function () {
    document.getElementById("asideMenu").classList.toggle("open");
  });
}

// toggleSearch
if (document.getElementById("searchOverlay")) {
  function toggleSearch() {
    const searchOverlay = document.getElementById("searchOverlay");
    searchOverlay.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");

    if (searchOverlay.classList.contains("open")) {
      searchOverlay.classList.add("animate-slideDown");
    } else {
      searchOverlay.classList.remove("animate-slideDown");
    }
  }
}

// dropdown
if (document.querySelector(".dropdown-menu")) {
  document.addEventListener("DOMContentLoaded", function () {
    const pagesLink = document.getElementById("pagesLink");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (pagesLink) {
      pagesLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("open");
      });
    }

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        dropdownMenu.classList.remove("open");
      }
    });

    const asideDropdownLink = document.querySelector(".aside-dropdown > a");
    const asideDropdownMenu = document.querySelector(
      ".aside-dropdown .dropdown-menu"
    );

    if (asideDropdownLink) {
      asideDropdownLink.addEventListener("click", function (event) {
        event.preventDefault();
        asideDropdownMenu.classList.toggle("open");
      });
    }

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".aside-dropdown")) {
        asideDropdownMenu.classList.remove("open");
      }
    });
  });
}

// accordian
if (document.querySelectorAll(".accordion-header")) {
  document.querySelectorAll(".accordion-header").forEach((button, index) => {
    const accordionContent = button.nextElementSibling;
    if (index === 0) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.classList.add("open");
      button.querySelector("i").classList.replace("fa-plus", "fa-minus");
      button.classList.add("border-b");
    }

    button.addEventListener("click", () => {
      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = null;
          otherButton.nextElementSibling.classList.remove("open");
          otherButton
            .querySelector("i")
            .classList.replace("fa-minus", "fa-plus");
          otherButton.classList.remove("border-b");
        }
      });

      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.classList.add("open");
        button.classList.add("border-b");
      } else {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove("open");
        button.classList.remove("border-b");
      }

      const icon = button.querySelector("i");
      if (button.classList.contains("active")) {
        icon.classList.replace("fa-plus", "fa-minus");
      } else {
        icon.classList.replace("fa-minus", "fa-plus");
      }
    });
  });
}

// footer_Modal
if (document.querySelector("footer form")) {
  document
    .querySelector("footer form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("footerModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeFooterModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("footerModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

// cart code
if (
  document.querySelectorAll(".cart-item").length > 0 ||
  document.querySelector(".counter")
) {
  document.querySelectorAll(".cart-item").forEach((cartItem) => {
    const counter = cartItem.querySelector(".counter");
    const increaseButton = cartItem.querySelector(".increase");
    const decreaseButton = cartItem.querySelector(".decrease");
    const deleteButton = cartItem.querySelector(".fa-trash-can");

    increaseButton.addEventListener("click", () => {
      let value = parseInt(counter.textContent);
      value++;
      counter.textContent = value;
      if (value > 0) {
        decreaseButton.disabled = false;
      }
    });

    decreaseButton.addEventListener("click", () => {
      let value = parseInt(counter.textContent);
      if (value > 0) {
        value--;
        counter.textContent = value;
      }
      if (value === 0) {
        decreaseButton.disabled = true;
      }
    });

    deleteButton.addEventListener("click", () => {
      cartItem.remove();
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    function updateCartCount() {
      const cartItems = document.querySelectorAll(".cart-item").length;
      const cartCountElement = document.getElementById("cart-count");
      if (cartCountElement) {
        cartCountElement.textContent = cartItems;
      }
    }

    // Initial count update
    updateCartCount();

    // Update count when items are added or removed
    document
      .querySelectorAll(".increase, .decrease, .fa-trash-can")
      .forEach((button) => {
        button.addEventListener("click", updateCartCount);
      });
  });
}

// Collection Paginator
if (document.querySelectorAll(".paginator-tab").length > 0) {
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      const slides = document.querySelectorAll(
        ".collection_slider .swiper-slide"
      );
      const loopMode = slides.length > 1;

      new Swiper(".collection_slider", {
        effect: "cards",
        grabCursor: true,
        loop: loopMode,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        speed: 600,
        slidesPerView: 1,
        slidesPerGroup: 1,
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        },
      });
    }
    document.querySelectorAll(".paginator-tab").forEach((tab, index) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".paginator-tab").forEach((otherTab) => {
          otherTab.classList.remove("active");
        });
        tab.classList.add("active");

        document.querySelectorAll(".paginate-div").forEach((div, divIndex) => {
          if (divIndex === index) {
            div.classList.add("active");
          } else {
            div.classList.remove("active");
          }
        });
      });
    });
    document.querySelector(".paginator-tab").classList.add("active");
  });
}

// best_selling
if (document.querySelectorAll(".best_selling")) {
  document.addEventListener("DOMContentLoaded", function () {
    const bestSellingElements = document.querySelectorAll(".best_selling");
    if (bestSellingElements.length > 0) {
      bestSellingElements.forEach((element) => {
        new Swiper(element, {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
        });
      });
    }
  });
}

// testimonial_slider
if (document.querySelectorAll("#testimonialSlider").length > 0) {
  document.addEventListener("DOMContentLoaded", function () {
    const sliderData = Array.from(
      document.querySelectorAll("#testimonialSlider .slide")
    ).map((el, index) => ({
      id: index,
      img: el.querySelector("img").getAttribute("src"),
      name: el.querySelector("h4").textContent,
      role: el.querySelector("p").textContent,
      para: el.querySelector("h5").textContent,
      stars: el.querySelectorAll(".stars i").length,
      active: index === 0,
    }));
    const MAX_VISIBLE_SLIDES = 5;
    const imagesContainer = document.getElementById("imagesContainer");
    const sliderContainer = document.getElementById("testimonialSlider");
    const dotsContainer = document.getElementById("dotsContainer");

    if (!imagesContainer || !sliderContainer || !dotsContainer) {
      console.error(
        "Required elements for the testimonial slider are missing."
      );
      return;
    }

    sliderContainer.innerHTML = "";

    function reorderSliderData(activeId) {
      const activeIndex = sliderData.findIndex((item) => item.id === activeId);
      const beforeActive = sliderData.slice(0, activeIndex);
      const afterActive = sliderData.slice(activeIndex + 1);
      const reordered = [
        ...beforeActive,
        sliderData[activeIndex],
        ...afterActive,
      ];
      while (reordered.findIndex((item) => item.id === activeId) !== 2) {
        reordered.unshift(reordered.pop());
      }
      return reordered;
    }

    let previousActiveId = null;

    function generateSlider() {
      const activeItem = sliderData.find((item) => item.active);
      if (previousActiveId === null) previousActiveId = activeItem.id;
      const orderedSliderData = reorderSliderData(activeItem.id);
      imagesContainer.innerHTML = "";
      sliderContainer.innerHTML = "";

      orderedSliderData.forEach((item, index) => {
        if (index < MAX_VISIBLE_SLIDES) {
          const imageElement = document.createElement("img");
          imageElement.style.borderRadius = "100%";
          imageElement.src = item.img;
          imageElement.alt = `image${item.id}`;
          imageElement.className = item.active ? "active" : "";
          imagesContainer.appendChild(imageElement);
          if (item.id === activeItem.id || item.id === previousActiveId) {
            imageElement.style.opacity = "0";
            setTimeout(() => {
              imageElement.style.transition = "opacity 0.3s ease-out";
              imageElement.style.opacity = "1";
            }, 300);
          }
          imagesContainer.appendChild(imageElement);

          if (item.active) {
            const contentElement = document.createElement("div");
            contentElement.className =
              "flex justify-center items-center flex-col text-center gap-5 py-5 xl:px-64 lg:px-40 md:px-10 px-7";
            let starsHtml = "";
            for (let i = 1; i <= 5; i++) {
              starsHtml +=
                i <= item.stars
                  ? '<i class="fa fa-star px-1"></i>'
                  : '<i class="fa fa-star px-1" style="color: grey;"></i>';
            }
            contentElement.innerHTML = `
                          <h5 class="text-primary">${item.para}</h5> 
                          <div class="stars text-yellow lg:text-lg text-sm"> ${starsHtml}</div>
                          <div class="flex flex-col gap-1 text-center items-center justify-center">
                              <h4 class="text-primary">${item.name}</h4>
                              <p class="text-primary">${item.role}</p>
                          </div>
`;
            sliderContainer.appendChild(contentElement);

            contentElement.style.transform = "scale(0)";
            setTimeout(() => {
              contentElement.style.opacity = "1";
              contentElement.style.transform = "scale(1)";
            }, 300);
          }
          imageElement.addEventListener("click", () =>
            setActiveSlider(item.id)
          );
        }
      });

      previousActiveId = activeItem.id;

      sliderContainer.style.opacity = "0";
      sliderContainer.style.transform = "scale(0)";
      setTimeout(() => {
        sliderContainer.style.transition =
          "opacity 0.3s ease-out, transform 0.3s ease-out";
        sliderContainer.style.opacity = "1";
        sliderContainer.style.transform = "scale(1)";
      }, 300);
    }

    function generateDots() {
      dotsContainer.innerHTML = "";

      sliderData.forEach((item) => {
        const dotElement = document.createElement("span");
        dotElement.classList.add(
          "lg:w-3",
          "w-2",
          "lg:h-3",
          "h-2",
          "rounded-full",
          "bg-white",
          "cursor-pointer"
        );
        if (item.active) {
          dotElement.classList.add(
            "lg:border-[4px]",
            "border-[3px]",
            "border-solid",
            "border-background-cardBg",
            "lg:p-2",
            "p-1",
            "outline",
            "outline-1",
            "outline-white"
          );
        }
        dotElement.addEventListener("click", () => setActiveSlider(item.id));
        dotsContainer.appendChild(dotElement);
      });

      const activeDotIndex = sliderData.findIndex((item) => item.active);
      const dots = document.querySelectorAll(".dot");
      if (dots.length > 0 && activeDotIndex >= 0) {
        const dotWidth = dots[0].offsetWidth;
        const containerWidth = dotsContainer.offsetWidth;
        const scrollToPosition =
          activeDotIndex * dotWidth - containerWidth / 2 + dotWidth / 2;
        dotsContainer.scrollLeft = scrollToPosition;
      }
    }

    function setActiveSlider(id) {
      sliderData.forEach((item) => {
        item.active = item.id === id;
      });
      generateSlider();
      generateDots();
      document.querySelectorAll(".sliderbtn").forEach((btn) => {
        btn.classList.remove("activecolor");
        if (btn.getAttribute("data-name") === `myBtn${id}`) {
          btn.classList.add("activecolor");
        }
      });
    }

    let autoSlideInterval;

    function moveToNextSlide() {
      const currentIndex = sliderData.findIndex((item) => item.active);
      const nextIndex = (currentIndex + 1) % MAX_VISIBLE_SLIDES;
      setActiveSlider(sliderData[nextIndex].id);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(moveToNextSlide, 3000);

      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }

      const sliderElements = [imagesContainer, sliderContainer, dotsContainer];
      sliderElements.forEach((element) => {
        element.addEventListener("mouseenter", stopAutoSlide);
        element.addEventListener("mouseleave", startAutoSlide);
      });
    }

    generateDots();
    generateSlider();
    startAutoSlide();
  });
}

//products
if (document.querySelectorAll(".product-item").length > 0) {
  document.addEventListener("DOMContentLoaded", function () {
    const seeMoreBtn = document.getElementById("see-more-btn");
    const productItems = document.querySelectorAll(".product-item");
    let initialVisibleItems = 9;

    // Function to update the initial visible items based on the layout
    function updateInitialVisibleItems() {
      const twoXMenu = document.getElementById("twoXMenu");
      if (twoXMenu && twoXMenu.classList.contains("active")) {
        initialVisibleItems = 8;
      } else {
        initialVisibleItems = 9;
      }
    }

    // Hide items beyond the initial visible items
    function hideExtraItems() {
      productItems.forEach((item, index) => {
        if (index >= initialVisibleItems) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
    }

    // Initial setup
    updateInitialVisibleItems();
    hideExtraItems();
    if (productItems.length > initialVisibleItems) {
      seeMoreBtn.classList.remove("hidden");
    }

    seeMoreBtn.addEventListener("click", function () {
      const isExpanded = seeMoreBtn.textContent === "Show Less";
      productItems.forEach((item, index) => {
        if (index >= initialVisibleItems) {
          item.classList.toggle("hidden", isExpanded);
        }
      });
      seeMoreBtn.textContent = isExpanded ? "See More" : "Show Less";
    });

    document.getElementById("fourXMenu").addEventListener("click", function () {
      document.querySelectorAll(".product-item").forEach(function (item) {
        item.classList.remove("md:w-1/2");
        item.classList.add("md:w-1/3");
        item.querySelector("div").classList.add("flex-col");
        item.querySelector(".product-info").classList.remove("justify-center");
      });
      document.getElementById("twoXMenu").classList.remove("active");
      this.classList.add("active");
      updateInitialVisibleItems();
      hideExtraItems();
    });

    document.getElementById("twoXMenu").addEventListener("click", function () {
      document.querySelectorAll(".product-item").forEach(function (item) {
        item.classList.remove("md:w-1/3");
        item.classList.add("md:w-1/2");
        item.querySelector("div").classList.remove("flex-col");
        item.querySelector(".product-info").classList.add("justify-center");
      });
      document.getElementById("fourXMenu").classList.remove("active");
      this.classList.add("active");
      updateInitialVisibleItems();
      hideExtraItems();
    });
  });

  document
    .getElementById("filterOptions")
    .addEventListener("change", function () {
      const option = this.value;
      const productContainer = document.getElementById("productContainer");
      const products = Array.from(
        productContainer.getElementsByClassName("product-item")
      );

      if (option === "name") {
        products.sort((a, b) => {
          const nameA = a
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          const nameB = b
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          return nameA.localeCompare(nameB);
        });
      } else if (option === "price") {
        products.sort((a, b) => {
          const priceA = parseFloat(
            a
              .querySelector(".product-info .p-s")
              .innerText.replace(/[^0-9.-]+/g, "")
          );
          const priceB = parseFloat(
            b
              .querySelector(".product-info .p-s")
              .innerText.replace(/[^0-9.-]+/g, "")
          );
          return priceA - priceB;
        });
      } else if (option === "asc") {
        products.sort((a, b) => {
          const nameA = a
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          const nameB = b
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          return nameA.localeCompare(nameB);
        });
      } else if (option === "desc") {
        products.sort((a, b) => {
          const nameA = a
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          const nameB = b
            .querySelector(".product-info h4")
            .innerText.toUpperCase();
          return nameB.localeCompare(nameA);
        });
      }

      productContainer.innerHTML = "";
      products.forEach((product) => productContainer.appendChild(product));
    });
}

//product_description&review
if (
  document.getElementById("description-btn") ||
  document.getElementById("reviews-btn")
) {
  document.addEventListener("DOMContentLoaded", function () {
    const descriptionBtn = document.getElementById("description-btn");
    const reviewsBtn = document.getElementById("reviews-btn");
    const descriptionTab = document.getElementById("description-tab");
    const reviewsTab = document.getElementById("reviews-tab");

    descriptionBtn.addEventListener("click", function () {
      descriptionTab.classList.remove("hidden");
      reviewsTab.classList.add("hidden");
      descriptionBtn.classList.add("underline");
      reviewsBtn.classList.remove("underline");
      descriptionBtn.classList.add("border-secondary");
      reviewsBtn.classList.remove("border-secondary");
    });

    reviewsBtn.addEventListener("click", function () {
      reviewsTab.classList.remove("hidden");
      descriptionTab.classList.add("hidden");
      reviewsBtn.classList.add("underline");
      descriptionBtn.classList.remove("underline");
      reviewsBtn.classList.add("border-secondary");
      descriptionBtn.classList.remove("border-secondary");
    });
  });
}

//related_paginator
if (document.querySelectorAll(".related_paginator")) {
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
      new Swiper(".related_paginator", {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        speed: 600,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    }
  });
}

//feedback_form
if (document.querySelector("#Feedback")) {
  document
    .querySelector("#Feedback")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("feedbackModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeFeedbackModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("feedbackModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

// contact_form_Modal
if (document.querySelector("#contact_form")) {
  document
    .querySelector("#contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("contactModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeContactModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("contactModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

// coming_soon_modal
if (document.querySelector("#coming_soon_form")) {
  document
    .querySelector("#coming_soon_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("coming_soon_modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeComingSoonModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("coming_soon_modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

//countdown_Timer
if (document.getElementById("countdown")) {
  document.addEventListener("DOMContentLoaded", function () {
    const countDownDate = new Date("May 31, 2025 23:59:59").getTime();
    const countdownFunction = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("days-tens").textContent = Math.floor(days / 10);
      document.getElementById("days-ones").textContent = days % 10;
      document.getElementById("hours-tens").textContent = Math.floor(
        hours / 10
      );
      document.getElementById("hours-ones").textContent = hours % 10;
      document.getElementById("minutes-tens").textContent = Math.floor(
        minutes / 10
      );
      document.getElementById("minutes-ones").textContent = minutes % 10;
      document.getElementById("seconds-tens").textContent = Math.floor(
        seconds / 10
      );
      document.getElementById("seconds-ones").textContent = seconds % 10;
      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML =
          "<h4 class='text-primary text-red-500'>EXPIRED</h4>";
      }
    }, 1000);
  });
}

//product_details_counter
if (document.getElementById("product_counter")) {
  document.addEventListener("DOMContentLoaded", function () {
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const counter = document.getElementById("counter");

    increaseButton.addEventListener("click", () => {
      let value = parseInt(counter.textContent);
      value++;
      counter.textContent = value;
      if (value > 0) {
        decreaseButton.disabled = false;
      }
    });

    decreaseButton.addEventListener("click", () => {
      let value = parseInt(counter.textContent);
      if (value > 0) {
        value--;
        counter.textContent = value;
      }
      if (value === 0) {
        decreaseButton.disabled = true;
      }
    });
  });
}
//Shop slider
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 3000,
    breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 6 },
    },
  });
});
