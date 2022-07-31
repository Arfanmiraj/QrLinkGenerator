const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generatebutton = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector (".qr-code img");

generatebutton.addEventListener("click",() => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) ;
    preValue = qrValue;
    generatebutton.innerText = "Please Wait";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200pxx200px&data=${qrValue}`;
    qrImg.addEventListener ('load',() => {
        wrapper.classList.add("active");
        generatebutton.innerText="Qr Generate";

    });
});
qrInput.addEventListener("keyup",() => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
    }
});