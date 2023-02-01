let selectors = [
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Zeta",
    "Lambda",
    "Omega",
    "Theta",
    "Sigma",
    "Phi"
]
let main = document.querySelector("#main")
main.addEventListener('click', (event) => {
    main.textContent = "..."
    main.classList.add("rubberBand")
    main.classList.add("infinite")
    main.classList.remove("tada")
    setTimeout(() => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * selectors.length);
            main.textContent = selectors[random]
            main.classList.add("tada")
            main.classList.remove("rubberBand")
            main.classList.remove("infinite")
        }, 2000)
    }, 500)
})