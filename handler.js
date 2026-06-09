const buttons = document.querySelectorAll(".category");
const items = document.querySelectorAll(".gallery-item");

const heroImages = [
    "animationpics/picture1.png",
    "animationpics/picture2.png",
    "animationpics/picture3.png",
    "animationpics/picture4.png",
    "animationpics/picture5.png"
];

const workImages = {
    fences: [
        "workExamples/IMG_1337.png",
        "workExamples/IMG_1338.png",
        "workExamples/IMG_1308.png",
        "workExamples/IMG_1309.png",
        "workExamples/IMG_1310.png",
        "workExamples/IMG_5404.png",
        "workExamples/IMG_5405.png",
    ],
    tables: [
        "workExamples/IMG_1331.png",
        "workExamples/IMG_1332.png",
        "workExamples/IMG_1333.png",
        "workExamples/IMG_1335.png",
        "workExamples/IMG_1336.png",
        "workExamples/IMG_0986.jpeg",
        "workExamples/IMG_0988.jpeg",
        "workExamples/IMG_0989.jpeg",
        "workExamples/IMG_5406.png",
        "workExamples/IMG_3183.jpeg",
        "workExamples/IMG_3186.jpeg",
        "workExamples/IMG_3189.jpeg",
    ],
    chairs: [
        "workExamples/IMG_1245.jpeg",
        "workExamples/IMG_1246.jpeg",
        "workExamples/IMG_1247.jpeg",
        "workExamples/IMG_1313.png",
        "workExamples/IMG_1321.png",
        "workExamples/IMG_1316.png",
        "workExamples/IMG_1317.png",
        "workExamples/IMG_0985.jpeg",
        "workExamples/IMG_0986.jpeg",
    ],
    stairs: [
       "workExamples/IMG_6263.jpeg",
        "workExamples/IMG_6265.jpeg",
        "workExamples/IMG_6266.jpeg",
        "workExamples/IMG_6268.jpeg",
        "workExamples/IMG_6269.jpeg",
        "workExamples/IMG_6271.jpeg",
    ],
    shelves: [
        "workExamples/IMG_1329.png",
        "workExamples/IMG_1330.png",
        "workExamples/IMG_0000.jpeg",
        "workExamples/IMG_0991.jpeg",
        "workExamples/IMG_1322.png",
        "workExamples/IMG_1323.png",
        "workExamples/IMG_1324.png",
        "workExamples/IMG_1325.png",
        "workExamples/IMG_3225.jpeg",
        "workExamples/IMG_3219.jpeg",
        "workExamples/IMG_3225.jpeg",
        "workExamples/IMG_3181.jpeg",
    ],
    other: [
        "workExamples/IMG_1329.png",
        "workExamples/IMG_1330.png",
        "workExamples/IMG_0000.jpeg",
        "workExamples/IMG_0991.jpeg",
        "workExamples/IMG_1322.png",
        "workExamples/IMG_1323.png",
        "workExamples/IMG_1324.png",
        "workExamples/IMG_1325.png",
        "workExamples/IMG_3225.jpeg",
        "workExamples/IMG_3219.jpeg",
        "workExamples/IMG_3225.jpeg",
        "workExamples/IMG_3181.jpeg",
    ],
};

const heroImage = document.getElementById("heroSlideshow");

let currentHeroIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

    const heroImage =
        document.getElementById("heroSlideshow");

    if (!heroImage) return;

    let currentIndex = 0;

    setInterval(() => {

        heroImage.style.opacity = "0";

        setTimeout(() => {

            currentIndex =
                (currentIndex + 1) % heroImages.length;

            heroImage.src =
                heroImages[currentIndex];

            heroImage.style.opacity = "1";

        }, 200);

    }, 2000);

});

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category =
            button.dataset.category;

            loadGallery(button.dataset.category);

        items.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});



const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

const gallery = document.getElementById("gallery");

function loadGallery(category){

    gallery.innerHTML = "";

    // Force browser reflow so animations restart
    void gallery.offsetWidth;

    let images = [];

    if(category === "all"){

        for(const cat in workImages){
            images.push(...workImages[cat]);
        }

    } else {

        images = workImages[category] || [];

    }

    images.forEach((imagePath, index) => {

        const item = document.createElement("div");
        item.classList.add("gallery-item");

        // Visible stagger
        item.style.animationDelay = `${index * 0.05}s`;

        const img = document.createElement("img");
        img.src = imagePath;
        img.loading = "lazy";

        item.appendChild(img);
        gallery.appendChild(item);

    });

}


loadGallery("all")