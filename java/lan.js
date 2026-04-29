function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-sv], [data-en]");
  elements.forEach((el) => {
    if (lang === "en") {
      el.textContent = el.getAttribute("data-en");
    } else {
      el.textContent = el.getAttribute("data-sv");
    }
  });
  document.documentElement.lang = lang;
}
