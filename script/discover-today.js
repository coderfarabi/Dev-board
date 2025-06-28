document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("rendom_color").addEventListener("click", () => {
    document.getElementById("body").style.backgroundColor = getRandomRGBColor();
  });

  // clicking on the logo/home button
  document.getElementById("brand-logo").addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  document.getElementById("backToDesk").addEventListener("click", () => {
    window.location.href = "/index.html";
  });
});
