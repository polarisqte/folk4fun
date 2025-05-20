// 2025 | Piotr N

// Navigation Handler
const navBar = document.getElementById("main-nav");
const logo = document.getElementById("main-logo");

function changeSite(target) {
    if (target[0] == "_") {
        if (document.querySelector(`#${target.slice(1)}`)) {
            document.querySelector(`#${target.slice(1)}`).scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "index.html";
        }
    } else {
        let formatted_href = target + ".html";

        if (window.location.pathname.split("/").pop() !== formatted_href) {
            window.location.href = formatted_href;
        }
    }
}

Array.from(navBar.children).forEach(btn => {
    btn.addEventListener("click", function() {
        changeSite(btn.id);
    });
})

logo.addEventListener("click", function() {
    changeSite("index");
})