document.addEventListener("DOMContentLoaded", function () {


  /* =========================================
     HERO VIDEO PLAY / PAUSE
  ========================================= */

  const heroVideo =
    document.getElementById("heroVideo");

  const videoToggle =
    document.getElementById("videoToggle");

  const videoToggleIcon =
    document.getElementById("videoToggleIcon");

  const videoToggleText =
    document.getElementById("videoToggleText");


  if (
    heroVideo &&
    videoToggle &&
    videoToggleIcon &&
    videoToggleText
  ) {

    videoToggle.addEventListener("click", function () {

      if (heroVideo.paused) {

        heroVideo.play();

        videoToggleIcon.textContent = "❚❚";

        videoToggleText.textContent =
          "PAUSE VIDEO";

        videoToggle.setAttribute(
          "aria-label",
          "Pause background video"
        );

      } else {

        heroVideo.pause();

        videoToggleIcon.textContent = "▶";

        videoToggleText.textContent =
          "PLAY VIDEO";

        videoToggle.setAttribute(
          "aria-label",
          "Play background video"
        );

      }

    });

  }



  /* =========================================
     MOBILE NAV
  ========================================= */

  const navLinks =
    document.querySelectorAll(
      "#mainNav .nav-link"
    );

  const navCollapse =
    document.getElementById(
      "mainNav"
    );


  navLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        if (
          window.innerWidth < 992 &&
          navCollapse &&
          navCollapse.classList.contains("show")
        ) {

          const bootstrapCollapse =
            bootstrap.Collapse.getOrCreateInstance(
              navCollapse
            );

          bootstrapCollapse.hide();

        }

      }
    );

  });



  /* =========================================
     PROGRAM FILTER
  ========================================= */

  const filterButtons =
    document.querySelectorAll(
      ".filter-button"
    );

  const programCards =
    document.querySelectorAll(
      ".program-card"
    );


  filterButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const selectedFilter =
          button.dataset.filter;


        /* REMOVE ACTIVE STATE */

        filterButtons.forEach(
          function (btn) {

            btn.classList.remove(
              "active"
            );

          }
        );


        /* ACTIVE BUTTON */

        button.classList.add(
          "active"
        );


        /* FILTER PROGRAMS */

        programCards.forEach(
          function (card) {

            const category =
              card.dataset.category;


            if (
              selectedFilter === "all" ||
              category === selectedFilter
            ) {

              card.classList.remove(
                "program-hidden"
              );

            } else {

              card.classList.add(
                "program-hidden"
              );

            }

          }
        );

      }
    );

  });



  /* =========================================
     SCROLL REVEAL
  ========================================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(

        function (
          entries,
          observer
        ) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "reveal-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold: 0.12
        }

      );


    revealElements.forEach(
      function (element) {

        observer.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      function (element) {

        element.classList.add(
          "reveal-visible"
        );

      }
    );

  }



  /* =========================================
     NAVBAR SHADOW
  ========================================= */

  const navbar =
    document.querySelector(
      ".ud-navbar"
    );


  function updateNavbar() {

    if (!navbar) {
      return;
    }


    if (
      window.scrollY > 20
    ) {

      navbar.style.boxShadow =
        "0 8px 30px rgba(0, 35, 70, 0.08)";

    } else {

      navbar.style.boxShadow =
        "none";

    }

  }


  window.addEventListener(
    "scroll",
    updateNavbar
  );


  updateNavbar();

});