function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function onOnlyFansClick() {
    if (localStorage.getItem("num")) {
        alert("Eres la persona " + (parseInt(localStorage.getItem("num")) + 1) + " que hace click aquí!");
        localStorage.setItem("num", parseInt(localStorage.getItem("num")) + 1);
    }
    else {
        num = getRndInteger(1000, 2000);
        alert("Eres la persona " + num + " que hace click aquí!");
        localStorage.setItem("num", parseInt(num));
    }
}