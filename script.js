let images = [
    "https://i.redd.it/xs5huy10hfk61.jpg",
    "https://i.redd.it/tddy4990hfk61.jpg",
    "https://i.pinimg.com/originals/7a/4a/66/7a4a668a7e4e19f9a0e39faa105aad5b.png",
    "https://i.redd.it/5lt1w9ewwm421.jpg",
    "https://preview.redd.it/1920x1080-fuji-v0-1lba9vomb5g51.png?width=1080&crop=smart&auto=webp&s=92f35b5dfc5bf36f9146beda436221de213eb73d",
    "https://img1.akspic.ru/crops/1/6/0/6/7/176061/176061-yablochnyj_pejzazh-yabloko-illustracia-prirodnyj_landshaft-purpur-1920x1080.jpg"
];

let index = 0;

let mainImg = document.getElementById("main-img");
let thumbs = document.querySelectorAll(".thumb");

function show(i) {
    if (i >= images.length) {
        index = 0;
    } else if (i < 0) {
        index = images.length - 1;
    } else {
        index = i;
    }

    mainImg.src = images[index];

    for (let j = 0; j < thumbs.length; j++) {
        thumbs[j].classList.remove("active");
    }
    thumbs[index].classList.add("active");
}

function next() {
    show(index + 1);
}

function prev() {
    show(index - 1);
}
