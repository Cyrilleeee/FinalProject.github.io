AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
});
window.onscroll = function() {
const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
