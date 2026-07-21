const searchInput = document.getElementById("searchInput");
const cmds = document.querySelectorAll(".command");
const noResults = document.getElementById("noResults");
const toast = document.getElementById("toast");


// SEARCH FUNCTION

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    let found = false;


    cmds.forEach(cmd => {

        if (cmd.innerText.toLowerCase().includes(value)) {

            cmd.style.display = "flex";
            found = true;

        } 
        else {

            cmd.style.display = "none";

        }

    });


    if(found){

        noResults.style.display = "none";

    }
    else{

        noResults.style.display = "block";

    }


});



// COPY FUNCTION

function copyText(text) {

    navigator.clipboard.writeText(text);


    toast.style.display = "block";
    toast.innerHTML = "✓ Copied: " + text;


    setTimeout(() => {

        toast.style.display = "none";

    },2000);


}



// THEME TOGGLE

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