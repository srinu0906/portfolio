function toggleNav() {
    const symbol = document.getElementById('toggle-nav').innerText;
    document.getElementById("toggle-nav").innerText = (symbol == "✖") ? "☰" : "✖";

    const toggle = document.getElementById('toggle-nav');
    if (toggle.classList.contains('cross')) {
        toggle.classList.remove('cross');
        toggle.classList.add("bar")
    } else {
        toggle.classList.remove("bar");
        toggle.classList.add("cross");
    }

    const navBar = document.getElementById("nav-bar");

    if (toggle.classList.contains("bar")) {

        navBar.classList.remove("show");
        navBar.classList.add("hide");

        navBar.addEventListener("animationend", () => {
            if (toggle.classList.contains("bar"))
                navBar.style.display = "none";
        })

    } else {
        navBar.style.display = "flex";
        navBar.classList.remove("hide");
        navBar.classList.add("show");
    }
}
