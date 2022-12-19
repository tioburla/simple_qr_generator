let inserir = document.querySelector("input");
let qr = document.querySelector("#qrimage");
let divqr = document.querySelector("#divqr");

function digitando() {
    if(inserir.value != "") {
        qr.style.opacity = 1;
        divqr.style.opacity = 1;
        return qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inserir.value}`;
    }else{
        qr.style.opacity = 0;
        divqr.style.opacity = 0;
    }
};    

