document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").style.background =
      "rgba(255, 255, 255, 0.98)";
  } else {
    document.querySelector(".navbar").style.background =
      "rgba(255, 255, 255, 0.95)";
  }
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    
    alert("Thank you for your message! I will respond shortly.");
    this.reset();
  });
