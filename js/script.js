document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const dots = document.querySelectorAll('.slider .dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const slideTitle = document.getElementById('slideTitle');
    const slideDescription = document.getElementById('slideDescription');

    const slides = [
        {
            backgroundImage: "url('../images/main.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            titleHTML: `<span class="text-fresh">FRESH</span>
                        <span class="text-juicy">JUICY</span>
                        <span class="text-bright">BRIGHT</span>`,
            descHTML: `Streamlining Media Relations for Brands. Orange PR manages media relations, 
                       freeing clients to focus on daily operations, while ensuring campaign 
                       initiatives are constantly monitored and updated for success.`
        },
        {
            backgroundImage: "url('../images/trendy-young-woman-screaming-loudspeaker\ 2.png'), url('../images/bg.png')",
            backgroundSize: "contain, cover",
            backgroundPosition: "right bottom, center center",
            titleHTML: `<span class="text-fresh">SUPER FAST</span>
                         <span class="text-juicy">JUICY</span>
                        <span class="text-bright">BRIGHT</span>`,
            descHTML: `Streamlining Media Relations for Brands. Orange PR manages media relations, 
                       freeing clients to focus on daily operations, while ensuring campaign 
                       initiatives are constantly monitored and updated for success.`
        },
        {
            backgroundImage: "url('../images/main.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            titleHTML: `<span class="text-fresh">HIGH SECURITY</span>
                        <span class="text-juicy">30 YEARS OF TRUST</span>
                        <span class="text-juicy">100 + DEALERS</span>`,
                        
            descHTML: `Streamlining Media Relations for Brands. Orange PR manages media relations, 
                       freeing clients to focus on daily operations, while ensuring campaign 
                       initiatives are constantly monitored and updated for success.`
        },
        {
            backgroundImage: "url('../images/trendy-young-woman-screaming-loudspeaker\ 2.png'), url('../images/bg.png')",
            backgroundSize: "contain, cover",
            backgroundPosition: "right bottom, center center",
            titleHTML: `<span class="text-fresh">1000 OF CLIENTS</span>
                        <span class="text-juicy">100 + DEALERS</span>
                        <span class="text-bright">ALL OVER INDIA</span>`,
                        
            descHTML: `Streamlining Media Relations for Brands. Orange PR manages media relations, 
                       freeing clients to focus on daily operations, while ensuring campaign 
                       initiatives are constantly monitored and updated for success.`
        }
    ];

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function updateSlider(index) {
        if (index >= totalSlides) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = totalSlides - 1;
        } else {
            currentSlideIndex = index;
        }

        const currentSlide = slides[currentSlideIndex];
        heroSection.style.backgroundImage = currentSlide.backgroundImage;
        heroSection.style.backgroundSize = currentSlide.backgroundSize;
        heroSection.style.backgroundPosition = currentSlide.backgroundPosition;
        slideTitle.innerHTML = currentSlide.titleHTML;
        slideDescription.innerHTML = currentSlide.descHTML;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlideIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        updateSlider(currentSlideIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        updateSlider(currentSlideIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentSlideIndex !== index) {
                updateSlider(index);
            }
        });
    });
    updateSlider(0);
});