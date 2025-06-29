// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
    highlightNav();
};
scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Highlight nav links based on scroll position
const sections = document.querySelectorAll('main section, header');
const navLinks = document.querySelectorAll('.nav-links a');
function highlightNav() {
    let index = sections.length;
    while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove('active'));
    if (sections[index]) {
        const id = sections[index].id;
        const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('active');
    }
}
highlightNav();

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Tab switching logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');
        const tab = this.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
    });
}); 