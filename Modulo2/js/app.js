var hoteles = {
    W: {
        name: "W",
        location: "Barcelona",
        img: "img/w.png",
    },
    Princess:{
        name: "Princess",
        location: "Barcelona",
        img: "img/princess.png",
    }
};

var selectedHotel = prompt("Indica el nombre del hotel: W o Princess");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel]["location"];
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    };

var rating = prompt("¿Cuántas estrellas?: 1, 2, 3, 4 o 5");
document.getElementById("rating").innerHTML = stars[rating];