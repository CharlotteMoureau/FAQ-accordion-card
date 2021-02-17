document.addEventListener("DOMContentLoaded", function () {

    const accordion = document.getElementsByClassName('question');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {

            let panel = this.nextElementSibling;
            console.log(panel);
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

        });
    }
});