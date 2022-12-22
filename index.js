const butonSec = document.querySelectorAll("button");
const anasayfaSec = document.querySelector(".anasayfa");

let sayilar = [];

let toplamHesap;

let hesapla = (button) => {
  const sayi = button.textContent;

  if (sayi === "Temizle") {
    sayilar = [];
    anasayfaSec.textContent = "";
  } else if (sayi === "=") {
    console.log(toplamHesap);
    anasayfaSec.textContent = eval(toplamHesap);
  } else {
    sayilar.push(sayi);
    toplamHesap = sayilar.join("");
    anasayfaSec.textContent = toplamHesap;
  }
};

butonSec.forEach((button) =>
  button.addEventListener("click", () => hesapla(button))
);
