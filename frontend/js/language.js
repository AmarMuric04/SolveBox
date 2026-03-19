let curr_lang = localStorage.getItem("SolveBox-current-language") || "english";
let items;

const originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
  const event = new Event("localStorageChange");
  event.key = key;
  event.newValue = value;
  originalSetItem.apply(this, arguments);
  window.dispatchEvent(event);
};

function syncSelects() {
  document.querySelectorAll(".lang-select").forEach((sel) => {
    sel.querySelectorAll("option").forEach((opt) => {
      opt.selected = opt.value === curr_lang;
    });
  });
}

function changeLanguage(e) {
  curr_lang = e.target.value;
  localStorage.setItem("SolveBox-current-language", curr_lang);
  items.forEach((el) => {
    el.textContent = el.getAttribute("data-" + curr_lang);
  });
  syncSelects();
}

export function allowLangChange() {
  items = document.querySelectorAll("[data-english], [data-srpski]");

  items.forEach((el) => {
    el.textContent = el.getAttribute("data-" + curr_lang);
  });

  syncSelects();

  document.querySelectorAll(".lang-select").forEach((sel) => {
    sel.addEventListener("change", changeLanguage);
  });
}

export function getLang() {
  return curr_lang;
}

document.addEventListener("DOMContentLoaded", () => {
  allowLangChange();
});
