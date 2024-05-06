document.addEventListener("DOMContentLoaded", function() {
    const perkForm = document.getElementById("perkForm");
    const createdPerks = document.getElementById("createdPerks");

    perkForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const perkName = document.getElementById("perkName").value;
        const perkDescription = document.getElementById("perkDescription").value;

        const perkElement = document.createElement("div");
        perkElement.classList.add("perk");
        perkElement.innerHTML = `
            <h3>${perkName}</h3>
            <p>${perkDescription}</p>
        `;

        createdPerks.appendChild(perkElement);

        perkForm.reset();
    });
});
