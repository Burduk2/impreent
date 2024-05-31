const teleportParticleCount = 75;
const teleportNode = document.querySelector('.teleport-particles');
for (let i = 0; i < teleportParticleCount; i++) {
    const particle = document.createElement('div');
    particle.style.top = i * 100 / teleportParticleCount + 'svh';
    particle.style.height = 100 / teleportParticleCount + 'svh';
    resetTeleportParticle(particle);
    teleportNode.appendChild(particle);
}

function lightTeleport() {
    teleportNode.style.display = 'block';
    
    (function removeParticle(i=0) {
        if (i >= teleportParticleCount) {
            teleportNode.style.display = 'none';   
            teleportNode.querySelectorAll('div').forEach(div => { resetTeleportParticle(div) });
            return;
        }

        const particles = teleportNode.querySelectorAll('[data-open]');
        const target = particles[Math.floor(Math.random() * particles.length)];
        target.removeAttribute('data-open');
        
        setTimeout(() => { removeParticle(i + 1) }, 4);
    })();
}
lightTeleport();

function resetTeleportParticle(particle) {
    particle.dataset.open = '';
    Math.random() > .7 ? particle.style.backgroundColor = 'var(--brand1)' 
        : Math.random() < .2 ? particle.style.backgroundColor = '#000' 
        : particle.style.backgroundColor = '#fff';
}

document.querySelectorAll('a[href]').forEach(el => {
    if (el.getAttribute('href').charAt(0) !== '#') return;
    el.addEventListener('click', lightTeleport);
});


(function lightServicesSpans() {
    const variations = ['l1', 'l2', 'l'];
    const spansToLightUp = variations[Math.floor(Math.random() * variations.length)];
    
    document.querySelectorAll(`.s-services h1 span.${spansToLightUp}`).forEach(span => {
        span.classList.add('l-up');
    });
    setTimeout(() => {
        document.querySelectorAll(`.s-services h1 span`).forEach(span => {
            span.classList.remove('l-up');
        });
        setTimeout(lightServicesSpans, 400);
    }, Math.random() * 2000 + 1000);
})();


document.querySelectorAll('footer .bottom-menu p.lang a').forEach(a => {
    if (a.dataset.lang === document.querySelector('html').getAttribute('lang')) {
        a.classList.add('selected');
    }
    function setCookie(cookieName, cookieValue, expirationDays) {
        let d = new Date();
        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }
    a.addEventListener('click', () => { 
        if (a.classList.contains('selected')) return;  
        setCookie('lang', a.dataset.lang, 7);
        // window.location.href = '/impreent#bottom';
        window.location.href = '#bottom';
        window.location.reload();

    });
});