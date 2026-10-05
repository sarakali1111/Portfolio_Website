const writeups = [
    {
        title: "Jailbreaking - AI Security",
        platform: "THM",
        description: "Exploring techniques to bypass LLM safeguards and constraints.",
        content: '<embed src="jailbreaking.pdf" type="application/pdf" width="100%" height="100%" style="border: none; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">'
    },
    {
        title: "Voleur - Active Directory",
        platform: "HTB",
        description: "A comprehensive breakdown of the enumeration and exploitation process for the Voleur machine.",
        content: '<embed src="voleur.pdf" type="application/pdf" width="100%" height="100%" style="border: none; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">'
    },
    {
        title: "Postman - API Security",
        platform: "HTB",
        description: "Exploring API testing, request manipulation and security analysis using Postman.",
        content: '<embed src="Postman.pdf" type="application/pdf" width="100%" height="100%" style="border: none; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">'
    }

];

const bgImages = [
    'PIA04234~orig.jpg',
    'PIA12174~orig.jpg',
    'PIA20695~orig.jpg'
];

let currentBgIndex = 0;

const routes = {
    home: () => `
        <section class="hero">
            <h1>Hello, I'm <span class="highlight">Sara</span></h1>
            <p>Security Researcher & Ethical Hacker. Documenting my journey through the depths of HTB and TryHackMe.</p>
            <a href="#writeups" class="btn nav-item" data-link>Explore Writeups</a>
        </section>
    `,
    writeups: () => `
        <section>
            <h2 class="mono" style="margin-bottom: 2rem; font-size: 2rem;">// WALKTHROUGHS</h2>
            <div class="grid">
                ${writeups.map((w, i) => `
                    <div class="card" onclick="navigateToWriteup(${i})">
                        <span class="tag ${w.platform.toLowerCase()}">${w.platform}</span>
                        <h3>${w.title}</h3>
                        <p>${w.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,
    about: () => `
        <section class="about-content">
            <h2>About Me</h2>
            <p>I am an aspiring penetration tester focusing on Active Directory and advanced exploitation techniques. My goal is to merge AI capabilities with cybersecurity to automate threat detection and research.</p>
            <br>
            <p>Currently mastering the HTB Academy and building tools to enhance my offensive security workflow.</p>
        </section>
    `,
    detail: (index) => `
        <div class="detail-container">
            <aside class="detail-sidebar">
                <a href="#writeups" class="btn nav-item" data-link>← Back to List</a>
                <h2 class="mono" style="font-size: 2rem; margin: 0;">${writeups[index].title}</h2>
                <span class="tag ${writeups[index].platform.toLowerCase()}">${writeups[index].platform}</span>
            </aside>
            <div class="detail-viewer">
                ${writeups[index].content}
            </div>
        </div>
    `
};

function navigateToWriteup(index) {
    window.location.hash = `detail/${index}`;
}

async function router() {
    const path = window.location.hash.slice(1) || 'home';
    const [route, param] = path.split('/');
    
    const app = document.getElementById('app');
    
    if (routes[route]) {
        app.innerHTML = routes[route](param);
    } else if (route === 'detail' && param) {
        app.innerHTML = routes.detail(param);
    } else {
        app.innerHTML = routes.home();
    }

    // Update active nav links
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${route}`) {
            link.classList.add('active');
        }
    });
}

function rotateBackground() {
    const slider = document.getElementById('bg-slider');
    slider.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    router();
    rotateBackground();
    setInterval(rotateBackground, 7000);
});
