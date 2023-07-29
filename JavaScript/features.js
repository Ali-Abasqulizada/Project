let minusI = document.querySelector(".minusI"),
    minusII = document.querySelector(".minusII"),
    minusIII = document.querySelector(".minusIII"),
    minusIV = document.querySelector(".minusIV"),
    minusV = document.querySelector(".minusV"),
    I = document.querySelector(".I"),
    II = document.querySelector(".II"),
    III = document.querySelector(".III"),
    IV = document.querySelector(".IV"),
    V = document.querySelector(".V");

I.addEventListener("click", () => {
    minusI.classList.toggle("plus");
})
II.addEventListener("click", () => {
    minusII.classList.toggle("plus");
})
III.addEventListener("click", () => {
    minusIII.classList.toggle("plus");
})
IV.addEventListener("click", () => {
    minusIV.classList.toggle("plus");
})
V.addEventListener("click", () => {
    minusV.classList.toggle("plus");
})