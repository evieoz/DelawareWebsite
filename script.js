document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE NAV
    // =========================

    const navLinks =
        document.querySelectorAll("#mainNav .nav-link");

    const navCollapse =
        document.getElementById("mainNav");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

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

        });

    });


    // =========================
    // HERO VIDEO CONTROL
    // =========================

    const heroVideo =
        document.getElementById("heroVideo");

    const videoControl =
        document.getElementById("videoControl");


    if (heroVideo && videoControl) {

        videoControl.addEventListener("click", function () {

            if (heroVideo.paused) {

                heroVideo.play();

                videoControl.textContent =
                    "❚❚ Pause";

                videoControl.setAttribute(
                    "aria-label",
                    "Pause background video"
                );

            } else {

                heroVideo.pause();

                videoControl.textContent =
                    "▶ Play";

                videoControl.setAttribute(
                    "aria-label",
                    "Play background video"
                );

            }

        });

    }


    // =========================
    // PROGRAM FILTER
    // =========================

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const programCards =
        document.querySelectorAll(".program-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.dataset.filter;


            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            programCards.forEach(function (card) {

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

            });

        });

    });


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add(
                "reveal-visible"
            );

        });

    }

});