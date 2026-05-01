document.addEventListener('DOMContentLoaded', () => {
    // 1 & 2 & 3. Header & About & Interests (Giữ nguyên như cũ)
    document.getElementById('nav-name').innerText = portfolioData.header.name;
    document.getElementById('hero-name').innerText = portfolioData.header.name;
    document.getElementById('hero-title').innerText = portfolioData.header.title;
    document.querySelector('#hero-inst span').innerText = portfolioData.header.institution;
    document.getElementById('hero-motto').innerText = portfolioData.header.motto;
    document.getElementById('hero-img').src = portfolioData.header.image;
    document.getElementById('badge-hindex').innerText = portfolioData.publications.metrics.hIndex;
    
    document.getElementById('about-edu').innerText = portfolioData.about.education;
    document.getElementById('about-mission').innerText = portfolioData.about.mission;

    const interestsContainer = document.getElementById('interests-container');
    portfolioData.interests.forEach(interest => {
        interestsContainer.innerHTML += `<div class="card"><i class="${interest.icon}"></i><h4>${interest.title}</h4><p>${interest.desc}</p></div>`;
    });

    // 4. Metrics & Publications (Giữ nguyên)
    const metricsContainer = document.getElementById('metrics-container');
    const m = portfolioData.publications.metrics;
    metricsContainer.innerHTML = `
        <div class="metric-box"><h4>${m.hIndex}</h4><p>H-Index</p></div>
        <div class="metric-box"><h4>${m.i10Index}</h4><p>i10-Index</p></div>
        <div class="metric-box"><h4>${m.citations}+</h4><p>Citations</p></div>
    `;

    const pubsAccordion = document.getElementById('pubs-accordion');
    portfolioData.publications.categories.forEach(cat => {
        let itemsHtml = cat.items.map(item => `<li>${item}</li>`).join('');
        pubsAccordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header">${cat.type} <i class="fas fa-chevron-down"></i></button>
                <div class="accordion-content"><ul>${itemsHtml}</ul></div>
            </div>`;
    });

    // 5. Projects (Giữ nguyên)
    const projectsAccordion = document.getElementById('projects-accordion');
    portfolioData.projects.forEach(proj => {
        projectsAccordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header">${proj.title} <i class="fas fa-chevron-down"></i></button>
                <div class="accordion-content">
                    <div style="padding: 20px;"><strong>Vai trò:</strong> ${proj.role}<br><br><strong>Chi tiết:</strong> ${proj.details}</div>
                </div>
            </div>`;
    });

    // --- PHẦN BỔ SUNG 6, 7, 8 ---
    
    // 6. Teaching
    const teachingCourses = document.getElementById('teaching-courses');
    portfolioData.teaching.courses.forEach(course => {
        teachingCourses.innerHTML += `<li>${course}</li>`;
    });
    document.getElementById('teaching-supervision').innerText = portfolioData.teaching.supervision;

    // 7. Awards
    const awardsList = document.getElementById('awards-list');
    portfolioData.awards.forEach(award => {
        awardsList.innerHTML += `<li>${award}</li>`;
    });

    // 8. Service
    const serviceList = document.getElementById('service-list');
    portfolioData.service.forEach(svc => {
        serviceList.innerHTML += `<li>${svc}</li>`;
    });

    // Logic Accordion dùng chung cho tất cả
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            accordions.forEach(other => {
                if(other !== this && other.classList.contains('active')) {
                    other.classList.remove('active');
                    other.nextElementSibling.style.maxHeight = null;
                }
            });
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Animation Scroll
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });
});