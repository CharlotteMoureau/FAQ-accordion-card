document.addEventListener('DOMContentLoaded', function () {

    const accordion = document.getElementsByClassName('question');
    const faq = document.getElementsByClassName('faq-points');
    const arrowImage = document.getElementsByClassName('arrow');

    for (let i = 0; i < accordion.length; i++) {

        accordion[i].addEventListener('click', function () {

            let arrowRotated = arrowImage[i].className;

            if (arrowRotated == 'arrow') {
                arrowImage[i].classList.add('rotated');
            } else if (arrowRotated == 'arrow rotated') {
                arrowImage[i].classList.remove('rotated');
            }

            let h2Black = faq[i].className;

            if (h2Black == 'faq-points') {
                faq[i].classList.add('active');
            } else if (h2Black == 'faq-points active') {
                faq[i].classList.remove('active');
            }

            let panel = this.nextElementSibling;

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }
});