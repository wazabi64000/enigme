document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("charadeForm");
    const responseInput = document.getElementById("response");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const response = responseInput.value.toLowerCase();
        
        // La réponse correcte
        if (response === "un") {
            feedback.textContent = "Correct ! Accédez à l’énigme suivante :";
            feedback.innerHTML += `<a href="enigme2.html">Énigme 2</a>`;
        } else {
            feedback.textContent = "Faux ! Essayez encore.";
        }
    });
});
