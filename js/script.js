



document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const dots = document.querySelectorAll('.slider .dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const slideTitle = document.getElementById('slideTitle');
    const slideDescription = document.getElementById('slideDescription');
    const nav = document.getElementById('nav');
    const menuBtn = document.getElementById('navBtn');

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

    menuBtn.addEventListener('click', (event) => {
        nav.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });

  const cards = [
    {
        title: "Media",
        subtitle: "Relations",
        description:
            "Orange PR takes charge of all media relations on behalf of our clients, enabling them to concentrate on their brand's daily requirements.",
        image: "./images/journalist-taking-interview-from-woman 1.png"
    },
    {
        title: "Influencer",
        subtitle: "Management",
        description:
            "We connect brands with influencers that fit their audience and campaign goals.",
        image: "./images/young-woman-blogger-recording-video-camera 1.png"
    },
    {
        title: "Events",
        subtitle: "",
        description:
            "We organize memorable events that strengthen your brand presence.",
        image: "./images/studio-camera-concert 1.png"
    }
];

const servicesSlider = document.querySelector(".services-slider");

function renderCards(activeIndex){

    servicesSlider.innerHTML = "";

    cards.forEach((card,index)=>{

    servicesSlider.innerHTML += `
<div class="service-card ${index === activeIndex ? "active" : ""}"
     data-index="${index}">

    <img src="${card.image}" alt="${card.title}">

    <div class="overlay">

        <div class="blur"></div>

        <h3>${card.title}</h3>

        <h4>${card.subtitle}</h4>

        ${
            index === activeIndex
            ? `
                <p>${card.description}</p>
                <button class="arrow-btn">→</button>
              `
            : ""
        }

    </div>

</div>
`;

    });
}

let activeCard = 0;

servicesSlider.addEventListener("click",(e)=>{

    const card=e.target.closest(".service-card");

    if(!card) return;

    activeCard=Number(card.dataset.index);

    renderCards(activeCard);

});

renderCards(0);

});