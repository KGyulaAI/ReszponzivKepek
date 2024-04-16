kepekFajlNevei = [
    "Health & Fitness PNG 01.png",
    "Health & Fitness PNG 02.png",
    "Health & Fitness PNG 03.png",
    "Health & Fitness PNG 04.png",
    "Health & Fitness PNG 05.png",
    "Health & Fitness PNG 06.png",
    "Health & Fitness PNG 07.png",
    "Health & Fitness PNG 08.png",
    "Health & Fitness PNG 09.png",
    "Health & Fitness PNG 10.png",
    "Health & Fitness PNG 11.png",
    "Health & Fitness PNG 12.png",
    "Health & Fitness PNG 13.png",
    "Health & Fitness PNG 14.png",
    "Health & Fitness PNG 15.png",
    "Health & Fitness PNG 16.png",
    "Health & Fitness PNG 17.png",
    "Health & Fitness PNG 18.png",
    "Health & Fitness PNG 19.png",
    "Health & Fitness PNG 20.png",
    "Health & Fitness PNG 21.png",
    "Health & Fitness PNG 22.png",
    "Health & Fitness PNG 23.png",
    "Health & Fitness PNG 24.png",
    "Health & Fitness PNG 25.png",
    "Health & Fitness PNG 26.png",
    "Health & Fitness PNG 27.png",
    "Health & Fitness PNG 28.png",
    "Health & Fitness PNG 29.png",
    "Health & Fitness PNG 30.png",
    "Health & Fitness PNG 31.png",
    "Health & Fitness PNG 32.png",
    "Health & Fitness PNG 33.png",
    "Health & Fitness PNG 34.png",
    "Health & Fitness PNG 35.png",
    "Health & Fitness PNG 36.png",
    "Health & Fitness PNG 37.png",
    "Health & Fitness PNG 38.png",
    "Health & Fitness PNG 39.png",
    "Health & Fitness PNG 40.png"
    ];

kepekFajlNevei.forEach(element => {
    const kep = new Image();
    kep.src = `képek/${element}`;
    const kartya = document.createElement("div");

    kartya.classList.add("kartya");

    kartya.appendChild(kep);
    document.getElementsByTagName("body")[0].appendChild(kartya);
});