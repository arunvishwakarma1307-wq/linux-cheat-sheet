console.log(COMMANDS);

alert(COMMANDS.length);

const searchInput = document.getElementById("searchInput");
const container = document.getElementById("commands");
const noResults = document.getElementById("noResults");
const toast = document.getElementById("toast");


const ICONS = {
    "File & Directory": "📁",
    "User": "👤",
    "User Commands": "👤",
    "Network": "🌐",
    "Network Commands": "🌐",
    "Process": "⚙️",
    "Process Commands": "⚙️",
    "Disk": "💾",
    "Disk Commands": "💾",
    "Git": "🌿",
    "Git Commands": "🌿",
    "Docker": "🐳",
    "Docker Commands": "🐳",
    "Kubernetes": "☸️",
    "Kubernetes Commands": "☸️",
    "DevOps Tools": "🛠️",
    "DevOps Tools Commands": "🛠️",
    "Terraform": "☁️",
    "Terraform Commands": "☁️",
    "Ansible": "🤖",
    "Ansible Commands": "🤖",
    "Jenkins": "🚀",
    "Jenkins Commands": "🚀",
    "Maven": "📦",
    "Maven Commands": "📦",
    "Gradle": "🏗️",
    "Gradle Commands": "🏗️",
    "Helm": "⛵",
    "Helm Commands": "⛵",
    "Prometheus": "📊",
    "Prometheus Commands": "📊",
    "Grafana": "📈",
    "Grafana Commands": "📈"
};

function renderSidebar() {
    const categoryList = document.getElementById("categoryList");

    categoryList.innerHTML = "";

    const categories = [...new Set(COMMANDS.map(item => item.category))];

    categories.forEach(category => {

        const li = document.createElement("li");

        li.innerHTML = `
            <a href="#${category.toLowerCase().replace(/\s+/g, "-")}">
                ${ICONS[category] || "📁"} ${category}
            </a>
        `;

        categoryList.appendChild(li);
    });
}


function render(keyword = "") {

    container.innerHTML = "";

    let filtered = COMMANDS.filter(item => {

        const text =
            (item.command + " " + item.what + " " + item.when + " " + item.category)
            .toLowerCase();

        return text.includes(keyword.toLowerCase());

    });

    if (filtered.length === 0) {

        noResults.style.display = "block";
        return;

    }

    noResults.style.display = "none";

    let groups = {};

    filtered.forEach(item => {

        if (!groups[item.category]) groups[item.category] = [];

        groups[item.category].push(item);

    });

    for (let category in groups) {

        const card = document.createElement("div");
        card.className = "card";
        card.id = category.toLowerCase().replace(/\s+/g, "-");

        card.innerHTML = `
        <h2>${ICONS[category] || "📚"} ${category} Commands</h2>
        <div class="command-grid">
        </div>
`;

        const grid = card.querySelector(".command-grid");

groups[category].forEach(cmd => {

    grid.innerHTML += `
    <div class="command">

        <div>
            <strong>${cmd.command}</strong>

            <p>
                <span class="command-title">📖 What it does</span><br>
                ${cmd.what}
            </p>

            <p>
                <span class="command-title">💡 When to use</span><br>
                ${cmd.when}
            </p>

            <p>
                <span class="command-title">💻 Example</span><br>
                <code>${cmd.example}</code>
            </p>

        </div>

        <button onclick="copyText('${cmd.command}')">
            Copy
        </button>

    </div>
    `;

});

        container.appendChild(card);

    }

}

searchInput.addEventListener("input", e => {

    render(e.target.value);

});

renderSidebar();
render();

function copyText(text){

    navigator.clipboard.writeText(text);

    toast.style.display="block";
    toast.innerHTML="✓ Copied: "+text;

    setTimeout(()=>{

        toast.style.display="none";

    },2000);

}

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

    document.body.classList.toggle("light-mode");

    themeBtn.innerHTML=document.body.classList.contains("light-mode")?"🌙":"☀️";

};

const homeBtn = document.getElementById("homeBtn");

homeBtn.onclick = (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.querySelector(".sidebar").scrollTo({
        top: 0,
        behavior: "smooth"
    });
};