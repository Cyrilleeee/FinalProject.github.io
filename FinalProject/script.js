AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
});
window.onscroll = function() {
const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  }
  else {
    btn.style.display = "none";
  }
  };
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  });
