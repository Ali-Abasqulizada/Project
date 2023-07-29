let a = document.querySelector(".a"),
    b = document.querySelector(".b"),
    c = document.querySelector(".c"),
    d = document.querySelector(".d");
d.addEventListener("click", () => {
    if(a.value != "" && b.value != "" && c.value != ""){
        alert("MESSAGE SENT");
    }
})