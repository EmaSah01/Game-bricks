

const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

canvas.style.border = "1px solid black";

pocetniX = 5;
pocetniY = 3;

function NacrtajKvadratice() {

    for(let i = 0 ; i < 10 ; i++) {

        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(i * 50,0);
        context.lineTo(i * 50, 500);
        context.stroke();

        context.beginPath();
        context.moveTo(0,i * 50);
        context.lineTo(500, i * 50);
        context.stroke();
    }


    context.fillStyle = "red";
    context.fillRect(pocetniX * 50,pocetniY * 50 , 50,50 );
}

let listaZabranjenihMjesta = [];


canvas.addEventListener("click", function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (x > i * 50 && x < i * 50 + 50 && y > j * 50 && y < j * 50 + 50) {
                context.fillStyle = "orange";
                context.fillRect(i * 50, j * 50, 50, 50);
                listaZabranjenihMjesta.push({ i, j });
            }
        }
    }
});

window.addEventListener("keydown", function(event) {
    context.fillStyle = "white";
    context.fillRect(pocetniX * 50, pocetniY * 50, 50, 50);

    let nextX = pocetniX;
    let nextY = pocetniY;

    if (event.key === "ArrowUp") {
        nextY -= 1;
    } else if (event.key === "ArrowDown") {
        nextY += 1;
    } else if (event.key === "ArrowRight") {
        nextX += 1;
    } else if (event.key === "ArrowLeft") {
        nextX -= 1;
    }

    if (JeLiZabranjenoMjesto(nextX, nextY)) {
        alert("Ovo je zabranjeno mjesto!");
    } else {
        pocetniX = nextX;
        pocetniY = nextY;
    }

    NijeZabranjenoMjesto();
});


function JeLiZabranjenoMjesto(x,y) {
    for(let i = 0 ; i < listaZabranjenihMjesta.length ; i++) {
        if (x === listaZabranjenihMjesta[i].i &&
            y === listaZabranjenihMjesta[i].j)
            return true;
    }
    return false;
}

function NijeZabranjenoMjesto() {
    context.strokeStyle = "black";
    context.fillStyle = "red";
    context.fillRect(pocetniX * 50, pocetniY * 50 , 50,50 );
    context.strokeRect(pocetniX * 50, pocetniY * 50 , 50,50);
}

NacrtajKvadratice();