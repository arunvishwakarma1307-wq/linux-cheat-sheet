const searchInput = document.getElementById("searchInput");
const cmds = document.querySelectorAll(".command");
const noResults = document.getElementById("noResults");
const toast = document.getElementById("toast");
const searchResults = document.getElementById("searchResults");


// SEARCH FUNCTION

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (value === "") {

        noResults.style.display = "none";

        cmds.forEach(cmd => {
            cmd.style.display = "flex";
        });

        return;

    }

    let found = false;

    cmds.forEach(cmd => {

        if (cmd.innerText.toLowerCase().includes(value)) {

            found = true;

            const clone = cmd.cloneNode(true);

            searchResults.appendChild(clone);

        }

    });

    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

});



// =====================
// COPY FUNCTION
// =====================

function copyText(text) {

    navigator.clipboard.writeText(text);

    toast.style.display = "block";
    toast.innerHTML = "✓ Copied: " + text;

    setTimeout(() => {

        toast.style.display = "none";

    }, 2000);

}



// =====================
// THEME TOGGLE
// =====================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML = "🌙";

    } else {

        themeBtn.innerHTML = "☀️";

    }

});