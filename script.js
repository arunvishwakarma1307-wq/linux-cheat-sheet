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

    const toast = document.getElementById("toast");

    toast.style.display = "block";
    toast.innerHTML = "✓ Copied: " + text;

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// 3D Card Effect

document.querySelectorAll(".command").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const button = e.target.closest("button");

        // agar mouse button ke upar hai to effect band
        if(button){
            return;
        }

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform =
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)`;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌙";
    }
    else{
        themeBtn.innerHTML = "☀️";
    }

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

});