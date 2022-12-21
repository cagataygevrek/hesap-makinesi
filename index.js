const butonSec = document.querySelectorAll("button");
const anasayfaSec = document.querySelector(".anasayfa");

let hesapMakinesi = [];

let toplamHesap;

function hesapla(button) {
  const sayi = button.textContent;

  if (sayi === "Temizle") {
    hesapMakinesi = [];
    anasayfaSec.textContent = "";
  } else if (sayi === "=") {
    console.log(toplamHesap);
    anasayfaSec.textContent = eval(toplamHesap);
  } else {
    hesapMakinesi.push(sayi);
    toplamHesap = hesapMakinesi.join("");
    anasayfaSec.textContent = toplamHesap;
  }
}

butonSec.forEach((button) =>
  button.addEventListener("click", () => hesapla(button))
);
