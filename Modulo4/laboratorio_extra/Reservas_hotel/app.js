var rateRoom;
var occupationRoom;
var rateSpa;

// Inputs
function RoomSelected() {
rateRoom = document.getElementById("room").value;
} 

function OccupationSelected() {
occupationRoom = document.getElementById("occupation-room").value;
} 

function spa(checkbox){
    if(checkbox.checked){
        rateSpa = 20;
    }else {
        rateSpa = 0;
    }
}

var getNights = () => parseInt(document.getElementById("number-nights").value);
var getParkingDays = () => parseInt(document.getElementById("parking").value);

// Operations
var parking = () => getParkingDays() * 10;
var priceRoom = () => (rateRoom * occupationRoom) * getNights();
var totalPrice = () => parking() + priceRoom() + rateSpa;

// Results
var total = () => document.getElementById("result").innerText = "Precio total: " + totalPrice() + " €";

// Events
document.getElementById("button-result").addEventListener("click", total);
