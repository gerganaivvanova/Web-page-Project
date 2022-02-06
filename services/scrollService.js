window.addEventListener("scroll", handleScroll);
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}