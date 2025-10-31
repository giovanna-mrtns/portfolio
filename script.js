//smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } else {
            entry.target.classList.remove('mostrar');
        }
    });
});

const revelarElementos = document.querySelectorAll('.esconder');
revelarElementos.forEach((el) => observer.observe(el));



  