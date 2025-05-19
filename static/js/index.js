(function removeQueryParams() {
    let urlObj = new URL(window.location.href);
    urlObj.search = '';
    window.history.replaceState({}, document.title, urlObj.toString());  
})();


const lang = document.documentElement.lang;
let docContent = {
    en: {
        subSlogans: [
            "Build trust with your customer", "Introduce yourself to the world", "Globalize your business",
            "Leave a lasting impression", "Impreent your image in people’s minds"
        ]
    }
};
docContent = docContent[lang];


document.querySelector('nav a[href="#faq"]').onclick = () => {
    setTimeout(() => { openFAQ(1) }, 900);
    setTimeout(animateServicesQA, 1300);
    function animateServicesQA() {
        document.querySelector('.s-faq .faq.services').animate(
            [
                { backgroundColor: '#00ca6590' },
                { backgroundColor: '#0000' },
            ],
            {
                duration: 1000, 
                easing: 'ease-in-out', 
                fill: 'both'
            }
        )
    }
}


function appendTextUntilFull() {
    const marquee = docContent.subSlogans;
    ['ms1', 'ms2', 'ms3'].forEach(id => {
        const container = document.querySelector(`.s-reasons .marquee-string.${id}`);
    
        let i = id === 'ms1' ? 0 : id === 'ms2' ? 2 : id === 'ms3' ? 4 : 0;
        do {
            const div = document.createElement('div');
            div.innerHTML = marquee[i];
            container.appendChild(div);
            container.innerHTML += '·';
            i = (i + 1) % marquee.length;  
        } while (container.offsetWidth < window.innerWidth + 500);
    });
}
appendTextUntilFull();
window.addEventListener('resize', appendTextUntilFull);


document.addEventListener('scrollend', () => {
    document.querySelectorAll('.s-reasons .marquee-string').forEach(string => {
        let offset = window.getComputedStyle(string).translate;
        offset = offset === 'none' ? '0px' : offset;
        parsedOffset = parseFloat(offset.slice(0, offset.length - 2));

        let direction;
        if (parsedOffset === 0) {
            direction = Math.random() > .5 ? '-3em' : '3em';
        } else {
            direction = '0';
        }
        string.animate(
            [
                { translate: `${offset} 0` },
                { translate: `${direction} 0` }
            ],
            {
                duration: 300, 
                easing: 'ease-out', 
                fill: 'both'
            }
        );
    });
});


const sSteps = document.querySelector('.s-steps');
const stepsCard = sSteps.querySelector('.step');
const stepsCardsObserver = new IntersectionObserver(entries => {
    const cards = sSteps.querySelectorAll('.step');
    entries.forEach(entry => {
        if (entry.isIntersecting && !sSteps.dataset.animation) {
            setTimeout(() => {
                animateCard(0);
            }, 200);
            sSteps.dataset.animation = '0';
        }
    });
    function animateCard(i) {
        if (!cards[i]) return;
        cards[i].animate(
            [
                { opacity: .2, translate: '-20% 0' },
                { opacity: 1, translate: 0 }                               
            ],
            { duration: 500, easing: 'ease-in-out', fill: 'both' }
        );
        setTimeout(() => { animateCard(i + 1) }, 50);
    }
});
stepsCardsObserver.observe(stepsCard);

sSteps.querySelectorAll('.step').forEach(box => {
    box.onclick = e => {
        const targetFlameId = Math.random() > .5 ? 'left' : 'right';
        const targetFlame = sSteps.querySelector(`.bg-img.${targetFlameId}`);
        const rect = targetFlame.getBoundingClientRect();
        const posX = targetFlameId === 'left' ? 0 : window.innerWidth;
        const posY = rect.top + (rect.height / 2);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const middleX = (posX + mouseX) / 2;
        const middleY =  (posY + mouseY) / 2;

        sendParticle(20);

        function sendParticle(i) {
            const offsetAmt = Math.random() * 200;
            const yOffset = Math.random() * (offsetAmt - offsetAmt * -1) + offsetAmt * -1;
            const particle = document.createElement('div');
            const particleWidth = Math.random() * (10 - 5) + 5 + 'px';
            const particleOpacity = Math.random() * 5 + 5;
    
            particle.style.width = particleWidth;
            particle.style.opacity = particleOpacity;
            particle.style.top = posY + 'px';
            particle.style.left = posX + 'px';
            particle.classList.add('particle');

            sSteps.appendChild(particle);

            particle.animate(
                [
                    { opacity: 1, top: posY + 'px', left: posX + 'px' },
                    { opacity: 1, top: middleY + yOffset + 'px', left: middleX + 'px' },
                    { opacity: 0, display: 'none', top: mouseY + 'px', left: mouseX + 'px' }
                ],
                {
                    duration: 300, 
                    easing: 'ease-out', 
                    fill: 'both'
                }
            );
            targetFlame.animate(
                [
                    { opacity: 1 },
                    { opacity: .7 },
                    { opacity: 1 } 
                ],
                {
                    duration: 500, 
                    easing: 'ease-out', 
                    fill: 'both'
                }
            )
            
            if (i < 0) return;
            setTimeout(() => {
                sendParticle(i - 1);
            }, Math.random() * (50 - 10) + 10);
        }
        
        // setTimeout(() => {
        //     sSteps.querySelectorAll('.particle').forEach(particle => {
        //         sSteps.removeChild(particle);
        //     });
        // }, 300);
    }
});




const casesImgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animationstarted) {
            entry.target.dataset.animationstarted = 1;
            setTimeout(() => {
                casesImgScrollToBottom(entry.target);
            }, 1000);
        }
    });
});
document.querySelectorAll('.s-work .case .img-wrapper').forEach(wrapper => {
    casesImgObserver.observe(wrapper);
});

function casesImgScrollToBottom(wrapper) {
    if (wrapper.scrollTop + wrapper.offsetHeight >= wrapper.scrollHeight) return;
    if (wrapper.dataset.totop) return;
    wrapper.scrollTop += wrapper.scrollHeight / 1500;
    requestAnimationFrame(() => { casesImgScrollToBottom(wrapper) });
}
function casesImgScrollToTop(btn) {
    const wrappers = btn.parentElement.querySelectorAll('.img-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.dataset.totop = 1;
        wrapper.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            wrapper.removeAttribute('data-totop');
            casesImgScrollToBottom(wrapper) 
        }, 1000);
    });
}



function typeInSwapSpans(i=0, j=0) {
    const span = document.querySelector('.s-contact .section-subheading span');

    if (i >= docContent.subSlogans.length) i = 0;

    if (j >= docContent.subSlogans[i].length) {
        setTimeout(() => {
            span.textContent = '';
            typeInSwapSpans(i + 1, 0);
        }, 3000);
        return;
    }
    span.textContent += docContent.subSlogans[i][j];

    setTimeout(() => { typeInSwapSpans(i, j + 1) }, 100);
}
typeInSwapSpans();


const sTrust = document.querySelector('.s-trust');
const sTrustObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.playing) {
            setTimeout(() => {
                entry.target.play();
                entry.target.setAttribute('data-playing', '');
            }, 700);
        }
    });
    
});
sTrust.querySelectorAll('video').forEach(video => {
    sTrustObserver.observe(video);
});




const contactOptions = document.querySelectorAll('.s-contact form .contacts-select .option');
contactOptions.forEach(option => {
    option.onclick = () => {
        if (!option.classList.contains('disabled')) return;

        contactOptions.forEach(option => {
            option.classList.add('disabled');
            option.querySelector('input').blur();
            option.querySelector('input').disabled = true;
            option.querySelector('.overlay').classList.add('open');
        });

        option.classList.remove('disabled');
        option.querySelector('input').removeAttribute('disabled');
        option.querySelector('input').focus();
        option.querySelector('.overlay').classList.remove('open');
    }
});

function clearContactForm() {
    document.querySelector('.s-contact form').querySelectorAll('input').forEach(inp => {
        inp.value = '';
    });
}


const FAQClosedHeight = 'calc(1.25em * 1.2 + .7em * 2)';
const FAQs = document.querySelector('.s-faq').querySelectorAll('.faq');

FAQs.forEach((faq, i) => {
    faq.style.height = FAQClosedHeight;
    faq.dataset.faqid = i;
    faq.onclick = () => {
        if (faq.classList.contains('open')) openFAQ(-1);
        else openFAQ(faq.dataset.faqid);
    }
});

function openFAQ(id) {
    FAQs.forEach(faq => {
        if (!faq.classList.contains('open')) return;
        faq.classList.remove('open');
        faq.animate(
            [
                { height: 'fit-content' },
                { height: FAQClosedHeight }
            ],
            {
                duration: 200, 
                easing: 'ease-out', 
                fill: 'both'
            }
        );
    });

    FAQs[id].classList.add('open');
    FAQs[id].animate(
        [
            { height: FAQClosedHeight },
            { height: 'fit-content' }
        ],
        {
            duration: 200, 
            easing: 'ease-out', 
            fill: 'both'
        }
    );
}