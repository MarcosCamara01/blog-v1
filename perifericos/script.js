const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("keepOpen")) {
        nav.classList.remove("active");
    }
});

let mainLocation = window.pageYOffset;
window.onscroll = function () {
    let currentOffset = window.pageYOffset;
    if (mainLocation >= currentOffset) {
        nav.style.top = '0';
    } 
    else {
        nav.style.transition = 'top 0.3s'
        nav.style.top = '-100px'
    }
    mainLocation = currentOffset;
}

// nav menu list
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});
