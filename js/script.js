// script for hero section (hero change every 5 seconds)

    const slides = document.querySelectorAll(".hero-slide");
    const messages = document.querySelectorAll(".hero-message");
    const indicators = document.querySelectorAll(".indicator");

    if (
        slides.length &&
        messages.length &&
        indicators.length
    )
    {
        let current = 0;
        let timer = null;

        function goToSlide(index)
        {
            slides[current].classList.remove("active");
            messages[current].classList.remove("active");
            indicators[current].classList.remove("active");

            current = index;

            slides[current].classList.add("active");
            messages[current].classList.add("active");
            indicators[current].classList.add("active");
        }

        function nextSlide()
        {
            const next =
                (current + 1) % slides.length;

            goToSlide(next);
        }

        function startTimer()
        {
            timer = setInterval(nextSlide, 5000);
        }

        function resetTimer()
        {
            clearInterval(timer);
            startTimer();
        }

        indicators.forEach(function(btn)
        {
            btn.addEventListener("click", function()
            {
                const index =
                    parseInt(btn.dataset.index, 10);

                if(index !== current)
                {
                    goToSlide(index);
                    resetTimer();
                }
            });
        });

        startTimer();
    }

// script for mobile menu

    if (menuToggle && navbar)
    {
        menuToggle.addEventListener("click", function ()
        {
            menuToggle.classList.toggle("open");
            navbar.classList.toggle("open");
        });

        navbar.querySelectorAll("a").forEach(function(link)
        {
            link.addEventListener("click", function()
            {
                menuToggle.classList.remove("open");
                navbar.classList.remove("open");
            });
        });
    }

// script for go up button

    const goUp = document.getElementById("goUp");

    if (goUp)
    {
        window.addEventListener("scroll", function ()
        {
            goUp.classList.toggle(
                "visible",
                window.scrollY > 400
            );
        });

        goUp.addEventListener("click", function ()
        {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

// script for copyright year

    const yearEl = document.getElementById("year");
    if (yearEl)
    {
        yearEl.textContent = new Date().getFullYear();
    }

// script for header on scroll

    const siteHeader = document.getElementById("site-header");

    function onScroll ()
    {
        const stripe = document.querySelector(".header-stripe");

        if (window.scrollY > 80)
        {
            siteHeader.classList.add("scrolled");
            stripe.classList.add("stripe-hidden");
            siteHeader.style.top = "0";
        }
        else
        {
            siteHeader.classList.remove("scrolled");
            stripe.classList.remove("stripe-hidden");
            siteHeader.style.top = "";
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load

// script for testimonials

    const quotes = document.querySelectorAll(".quote-box");

    if (quotes.length)
    {
        const tPrevBtns =
            document.querySelectorAll(".t-prev");

        const tNextBtns =
            document.querySelectorAll(".t-next");

        let currentQuote = 0;
        let autoSlide;

        function showQuote(nextIndex)
        {
            if(nextIndex === currentQuote) return;

            const current = quotes[currentQuote];
            const next = quotes[nextIndex];

            current.classList.remove("active");
            current.classList.add("exit");

            next.classList.add("active");

            setTimeout(() =>
            {
                current.classList.remove("exit");
            }, 900);

            currentQuote = nextIndex;
        }

        function nextQuote()
        {
            showQuote(
                (currentQuote + 1) % quotes.length
            );
        }

        function prevQuote()
        {
            showQuote(
                (currentQuote - 1 + quotes.length)
                % quotes.length
            );
        }

        function startAutoSlide()
        {
            autoSlide = setInterval(nextQuote, 8000);
        }

        function restartAutoSlide()
        {
            clearInterval(autoSlide);
            startAutoSlide();
        }

        tNextBtns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                nextQuote();
                restartAutoSlide();
            });
        });

        tPrevBtns.forEach(btn =>
        {
            btn.addEventListener("click", () =>
            {
                prevQuote();
                restartAutoSlide();
            });
        });

        startAutoSlide();
    }