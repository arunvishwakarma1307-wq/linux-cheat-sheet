const searchInput = document.getElementById("searchInput");
const cmds = document.querySelectorAll(".cmd");
const toast = document.getElementById("toast");

// SEARCH FUNCTION
searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cmds.forEach(cmd => {
        if (cmd.textContent.toLowerCase().includes(value)) {
            cmd.style.display = "flex";
        } else {
            cmd.style.display = "none";
        }
    });
});

// COPY FUNCTION
function copyText(text) {
    navigator.clipboard.writeText(text);

    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 1500);
}