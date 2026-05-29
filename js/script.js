// script for hero section in homepage
	document.addEventListener("DOMContentLoaded", function ()
	{
	    // scroll darkens header
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


	    // mobile menu toggle
	    const menuToggle = document.getElementById("menuToggle");
	    const navbar     = document.getElementById("navbar");

	    menuToggle.addEventListener("click", function ()
	    {
	        menuToggle.classList.toggle("open");
	        navbar.classList.toggle("open");
	    });

	    /* close menu when a nav link is tapped */
	    const navLinks = navbar.querySelectorAll("a");
	    navLinks.forEach(function (link)
	    {
	        link.addEventListener("click", function ()
	        {
	            menuToggle.classList.remove("open");
	            navbar.classList.remove("open");
	        });
	    });


	    // hero slider - auto-advance every 5 seconds
	    const slides      = document.querySelectorAll(".hero-slide");
	    const messages    = document.querySelectorAll(".hero-message");
	    const indicators  = document.querySelectorAll(".indicator");
	    let   current     = 0;
	    let   timer       = null;

	    function goToSlide (index)
	    {
	        /* remove active from all */
	        slides     [current].classList.remove("active");
	        messages   [current].classList.remove("active");
	        indicators [current].classList.remove("active");

	        /* set new active */
	        current = index;
	        slides     [current].classList.add("active");
	        messages   [current].classList.add("active");
	        indicators [current].classList.add("active");
	    }

	    function nextSlide ()
	    {
	        const next = (current + 1) % slides.length;
	        goToSlide(next);
	    }

	    function startTimer ()
	    {
	        timer = setInterval(nextSlide, 5000);
	    }

	    function resetTimer ()
	    {
	        clearInterval(timer);
	        startTimer();
	    }

	    /* indicator click */
	    indicators.forEach(function (btn)
	    {
	        btn.addEventListener("click", function ()
	        {
	            const index = parseInt(btn.dataset.index, 10);
	            if (index !== current)
	            {
	                goToSlide(index);
	                resetTimer();
	            }
	        });
	    });

	    /* Start auto-advance */
	    startTimer();
	});

// copyright year
	const yearEl = document.getElementById("year");
	if (yearEl)
	{
	    yearEl.textContent = new Date().getFullYear();
	}