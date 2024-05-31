function fade() {
  const btn = document.querySelector(".btn");
  const cir = document.createElement("div");

  btn.addEventListener("click", () => {
    document.body.appendChild(cir);
    cir.classList.add("cir");

    gsap.to("body", {
      background: "#fff",
      duration: 3
    });

    gsap.to(".cir", {
      scaleX: window.innerWidth / btn.getBoundingClientRect().width,
      scaleY: window.innerHeight / btn.getBoundingClientRect().height,
      width: "100vw",
      height: "100vh",
      background: "#fff",
      borderRadius: "50%",
      duration: 6
    });
  });
}
