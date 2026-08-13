let card = document.querySelector(".cardfollower")
let hero = document.querySelector(".hero")
let mouseMoved = false;
document.addEventListener("mousemove", (e) => {
    if (!mouseMoved) {
        card.classList.add("visible");
        mouseMoved = true;
    }
    card.style.top = e.clientY + "px"
    card.style.left = e.clientX + "px"
})

document.addEventListener("mouseleave", () => {
    card.classList.remove("visible");
});

document.addEventListener("mouseenter", () => {
    if (mouseMoved) {
        card.classList.add("visible");
    }
});

let menu = document.querySelector(".menu");
let openBtn = document.querySelector("#menuClick");
let closeBtn = document.querySelector("#closeMenu");
openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    hero.classList.add("shrink");
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    hero.classList.remove("shrink");
});


document.querySelectorAll(".menu-links h1").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        hero.classList.remove("shrink");
    });
});


let darkModeBtn = document.querySelector("#darkMode");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "light mode" : "dark mode";
});

const boxes = document.querySelectorAll(".box");

const rectangle = document.querySelector(".rectangle");
const rectangleText = rectangle.querySelector("h1");


const projectNames = [
    "Matera",
    "Chance",
    "Silvr",
    "Intramuros"
];


boxes.forEach((box, index) => {


    box.addEventListener("mouseenter", () => {

        rectangle.classList.add("active");

        rectangleText.textContent =
            projectNames[index];

    });


    box.addEventListener("mousemove", (e) => {


        rectangle.style.left =
            e.clientX + "px";


        rectangle.style.top =
            e.clientY + "px";


    });


    box.addEventListener("mouseleave", () => {

        rectangle.classList.remove("active");
    });
});
const preview = document.getElementById("preview");

const detail = document.querySelector(".detail");
const playground = document.querySelector(".playground");

const detailImages = [
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
];

const playgroundImages = [
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
];

let interval;

function startPreview(images) {

    let index = 0;

    preview.src = images[index];
    preview.classList.add("show");

    interval = setInterval(() => {

        index = (index + 1) % images.length;
        preview.src = images[index];

    }, 250);
}

function stopPreview() {

    clearInterval(interval);
    preview.classList.remove("show");
}

detail.addEventListener("mouseenter", () => {

    startPreview(detailImages);

});

playground.addEventListener("mouseenter", () => {

    startPreview(playgroundImages);

});

detail.addEventListener("mouseleave", stopPreview);
playground.addEventListener("mouseleave", stopPreview);

document.addEventListener("mousemove", (e) => {

    preview.style.left = e.clientX + 20 + "px";
    preview.style.top = e.clientY + 20 + "px";

});
const servicePreview = document.querySelector(".service-preview");
const serviceImg = document.getElementById("serviceImg");

const serviceImages = {

    art: [
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
    ],

    branding: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=900",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900"
    ],

    webflow: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900"
    ],

    uiux: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
    ],

    gsap: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
    ],

    advertising: [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900"
    ],

    seo: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=900",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900"
    ]

};

let serviceInterval;

document.querySelectorAll(".services-list h1").forEach(service => {

    service.addEventListener("mouseenter", () => {

        const images = serviceImages[service.dataset.service];

        let index = 0;

        serviceImg.src = images[index];

        servicePreview.classList.add("show");

        clearInterval(serviceInterval);

        serviceInterval = setInterval(() => {

            index = (index + 1) % images.length;

            serviceImg.src = images[index];

        }, 200);

    });

    service.addEventListener("mousemove", (e) => {

        servicePreview.style.left = (e.clientX - 420) + "px";
        servicePreview.style.top = (e.clientY - 130) + "px";

    });

    service.addEventListener("mouseleave", () => {

        servicePreview.classList.remove("show");

        clearInterval(serviceInterval);

    });

});