import { View } from "./view.js";
import { Model } from "./model.js";

export const Controller = {
  handleChangeTheme(theme) {
    View.changeTheme(theme);
  },

  handleSaveTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    document.body.classList.add(savedTheme.replaceAll('"', ""));
  },

  handleThemeEvents() {
    const themeJs = document.querySelector(".theme-js");
    const themeCont = document.querySelector(".theme-container-js");

    // Toggle dropdown on trigger click (ignore clicks inside the dropdown itself)
    themeJs?.addEventListener("click", (e) => {
      if (!themeCont?.contains(e.target)) {
        e.stopPropagation();
        if (themeCont?.classList.contains("inactive")) {
          document.querySelector(".more-container-js")?.classList.replace("active", "inactive");
          document.querySelector(".settings-container-js")?.classList.replace("active", "inactive");
          themeCont.classList.replace("inactive", "active");
        } else {
          themeCont.classList.replace("active", "inactive");
        }
      }
    });

    // Close on outside click
    document.addEventListener("click", () => {
      themeCont?.classList.replace("active", "inactive");
    });
  },

  init() {
    this.handleThemeEvents();
    this.handleSaveTheme();

    const themeCont = document.querySelector(".theme-container-js");
    const themeBtns = document.querySelectorAll(".theme-btn");

    themeBtns.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.stopPropagation();
        this.handleChangeTheme(Model[e.target.dataset.theme]);
        themeCont?.classList.replace("active", "inactive");
      });
    });
  },
};
