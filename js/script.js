const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
