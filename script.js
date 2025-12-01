/* Kode Tahun Sekarang */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Kode untuk Toggel Button */
const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});

/* Kode untuk Hide/Show Navbar */
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    lastScroll = currentScroll;
});

/* Kode GitHub API */
const githubUsername = 'JonaRaenal';
const container = document.getElementById('projects-container');

fetch(`https://api.github.com/users/${githubUsername}/repos`)
.then(response => response.json())
.then(data => {
    const filtered = data.slice(0, 4); // ambil max 4 repo

    filtered.forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
        <img src="https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}" class="project-image" alt="Preview" />
        <div class="project-info">
        <h3>${repo.name}</h3>
        <p>${repo.description || "Tidak ada deskripsi"}</p>
        <a href="${repo.html_url}" target="_blank" class="project-btn">View on GitHub</a>
        </div>
        `;

        container.appendChild(card);
    });
})
.catch(error => {
container.innerHTML = "<p style='color:#ffd6ff;'>Gagal memuat data dari GitHub.</p>";
console.error(error);
});

/* Kode Yukari Yakumo API */
fetch("https://en.touhouwiki.net/api.php?action=query&prop=extracts&format=json&origin=*&titles=Yukari_Yakumo&redirects=1")
.then(response => response.json())
.then(data => {
    const pages = data.query.pages;
    const firstKey = Object.keys(pages)[0];
    const extract = pages[firstKey].extract;
    
    const paragraphs = extract.match(/<p>(.*?)<\/p>/gs);
    const limited = paragraphs.slice(0, 1).join("");
    document.getElementById("yukari-info").innerHTML = limited || "Informasi tidak ditemukan.";
})
.catch(error => {
document.getElementById("yukari-info").innerHTML = "Gagal memuat informasi Yukari.";
console.error(error);
});

/* Kode untuk API EmailJS */
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_n1bo39k";
    const templateID = "template_zygpcjf";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("🎉 Your message has been sent! Thank you for contacting me 😊");
        }
    ).catch(
        err => console.log(err)
    );
}

/* Kode untuk Scroll Reveal */
// Hero Section
ScrollReveal().reveal('.hero h1', {
    duration: 1200,
    distance: '0px',
    opacity: 0,
    scale: 0.8,
    rotate: { z: 8 },
    easing: 'ease-out',
    reset: true
});

ScrollReveal().reveal('.hero h2', {
    duration: 1400,
    distance: '0px',
    opacity: 0,
    scale: 0.9,
    delay: 200,
    easing: 'ease-out',
    reset: true
});

ScrollReveal().reveal('.profile-container', {
    duration: 1500,
    distance: '40px',
    origin: 'bottom',
    opacity: 0,
    scale: 0.9,
    easing: 'cubic-bezier(0.19,1,0.22,1)',
    delay: 300,
    reset: true
});

// About Section
ScrollReveal().reveal('#about .about-container:nth-child(1)', {
    duration: 1500,
    distance: '80px',
    origin: 'left',
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('#about .about-container:nth-child(2)', {
    duration: 1500,
    distance: '80px',
    origin: 'right',
    opacity: 0,
    reset: true
});

// Skills Section
ScrollReveal().reveal('.skills-title', {
    duration: 1200,
    distance: '40px',
    origin: 'bottom',
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.skill-card', {
    duration: 1000,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    rotate: { x: 10, z: -8 },
    interval: 100,
    reset: true
});

// Projects Section
ScrollReveal().reveal('.projects-title', {
    duration: 1200,
    distance: '0px',
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.projects-container', {
    duration: 1200,
    distance: '0px',
    opacity: 0,
    rotate: { y: 40 },
    scale: 0.9,
    interval: 150,
});


// CV Section
ScrollReveal().reveal('.cv-left', {
    duration: 1400,
    distance: '80px',
    origin: 'left',
    opacity: 0,
});

ScrollReveal().reveal('.cv-right', {
    duration: 1400,
    distance: '80px',
    origin: 'right',
    opacity: 0,
});

ScrollReveal().reveal('.cv-section-block', {
    duration: 1200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    interval: 120,
});

ScrollReveal().reveal('.contact-left img', {
    duration: 1400,
    distance: '80px',
    origin: 'left',
    opacity: 0,
});

//Contact Section
ScrollReveal().reveal('.contact-right', {
    duration: 1500,
    distance: '80px',
    origin: 'right',
    scale: 0.95,
    opacity: 0,
});

ScrollReveal().reveal('.contact-title', {
    duration: 1200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0,
    delay: 200
});

// Footer Section
ScrollReveal().reveal('.footer-name', {
    duration: 1200,
    distance: '20px',
    origin: 'top',
    opacity: 0,
});

ScrollReveal().reveal('.footer-grid div', {
    duration: 1400,
    distance: '40px',
    origin: 'bottom',
    opacity: 0,
    interval: 120,
});

ScrollReveal().reveal('.footer-copy', {
    duration: 1200,
    distance: '10px',
    origin: 'bottom',
    opacity: 0,
    delay: 200,
});