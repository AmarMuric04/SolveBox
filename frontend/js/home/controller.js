import * as Utility from "../../utility/utility.js";
import * as Validation from "../../utility/inputs.js";
import { loader } from "../general_view.js";
import { handleUnderlineHover } from "../general_view.js";

import { Model } from "./model.js";
import { View } from "./view.js";

let lang = localStorage.getItem("SolveBox-current-language");

window.addEventListener("localStorageChange", (event) => {
  lang = event.newValue;
});

export const Controller = {
  handleNextReview(reviewsParent, scrollAmount, scrollIndex) {
    if (scrollIndex % 5 == 0)
      reviewsParent.append(reviewsParent.firstElementChild);
    reviewsParent.scrollTo({
      left: reviewsParent.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  },

  handlePrevReview(reviewsParent, scrollAmount, scrollIndex) {
    if (scrollIndex % 5 == 0)
      reviewsParent.prepend(reviewsParent.lastElementChild);
    reviewsParent.scrollTo({
      left: reviewsParent.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  },

  handleNewsletterSubscribe(inputs, form) {
    const emailDoc = document.getElementById("email");
    const nameDoc = document.getElementById("name");
    const numDoc = document.getElementById("number");
    const subBtn = form.querySelector("button");

    let invalidInput;
    let inputInvalidations;

    clearTimeout(inputInvalidations);

    if (!Validation.isEmailValid(inputs.email)) {
      Validation.invalidateInput(emailDoc);
      Utility.removeClassOnClick(emailDoc, "error-input");
      invalidInput = true;
    }
    if (!Validation.isValidPhoneNumber(inputs.number)) {
      Validation.invalidateInput(numDoc);
      Utility.removeClassOnClick(numDoc, "error-input");
      invalidInput = true;
    }
    if (Validation.isInputEmpty(inputs.name)) {
      Validation.invalidateInput(nameDoc);
      Utility.removeClassOnClick(nameDoc, "error-input");
      invalidInput = true;
    }

    inputInvalidations = setTimeout(() => {
      Validation.removeInvalidations(form);
    }, 1000);

    setTimeout(() => {
      Validation.removeInvalidations(form);
    }, 1000);

    if (invalidInput) {
      if (lang === "srpski") {
        Utility.updateButtonStatus(subBtn, "Упс!", true);
        setTimeout(() => {
          Utility.updateButtonStatus(subBtn, "Претплатите се");
        }, 1000);
      } else {
        Utility.updateButtonStatus(subBtn, "Oops!", true);
        setTimeout(() => {
          Utility.updateButtonStatus(subBtn, subBtn.dataset[lang]);
        }, 1000);
      }
      return;
    }

    if (lang === "srpski") {
      Utility.updateButtonStatus(subBtn, "Претплата... " + loader(), true);
      setTimeout(() => {
        Utility.updateButtonStatus(subBtn, "Претплаћени 😀");
      }, 3000);
      setTimeout(() => {
        Utility.updateButtonStatus(subBtn, "Претплатите се");
      }, 6000);
    } else {
      Utility.updateButtonStatus(subBtn, "Subscribing... " + loader(), true);
      setTimeout(() => {
        Utility.updateButtonStatus(subBtn, "Subscribed 😀");
      }, 3000);
      setTimeout(() => {
        Utility.updateButtonStatus(subBtn, subBtn.dataset[lang]);
      }, 6000);
    }

    setTimeout(() => {
      form.reset();
    }, 3000);
  },

  async handleFooterSubscribe(inputs, form) {
    const emailDoc = document.getElementById("footer-email");
    const subBtn = form.querySelector("button");

    if (!Validation.isEmailValid(inputs.email)) {
      Validation.invalidateInput(emailDoc);
      Utility.removeClassOnClick(emailDoc, "error-input");
      setTimeout(() => Validation.removeInvalidations(form), 1000);

      if (lang === "srpski") {
        Utility.updateButtonStatus(subBtn, "Упс!", true);
        setTimeout(() => Utility.updateButtonStatus(subBtn, subBtn.dataset[lang]), 1000);
      } else {
        Utility.updateButtonStatus(subBtn, "Oops!", true);
        setTimeout(() => Utility.updateButtonStatus(subBtn, subBtn.dataset[lang] || "Subscribe"), 1000);
      }
      return;
    }

    Utility.updateButtonStatus(
      subBtn,
      lang === "srpski" ? "Претплата... " + loader() : "Subscribing... " + loader(),
      true
    );

    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputs.email }),
      });

      if (res.status === 409) {
        Utility.updateButtonStatus(subBtn, lang === "srpski" ? "Већ претплаћени!" : "Already subscribed!", false);
        setTimeout(() => {
          Utility.updateButtonStatus(subBtn, subBtn.dataset[lang] || "Subscribe");
          form.reset();
        }, 3000);
        return;
      }

      Utility.updateButtonStatus(subBtn, lang === "srpski" ? "Претплаћени 😀" : "Subscribed 😀", false);
    } catch {
      Utility.updateButtonStatus(subBtn, lang === "srpski" ? "Грешка!" : "Error!", false);
    }

    setTimeout(() => {
      Utility.updateButtonStatus(subBtn, subBtn.dataset[lang] || "Subscribe");
      emailDoc.value = "";
    }, 3000);
  },

  async init() {
    handleUnderlineHover();

    const newsForm = document.getElementById("news-form");

    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = Utility.retrieveFormData(e);

      this.handleNewsletterSubscribe(inputs, newsForm);
    });

    const footerForm = document.getElementById("footer-form");

    footerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = Utility.retrieveFormData(e);
      this.handleFooterSubscribe(inputs, footerForm);
    });

    const reviews = await Model.getReviews();
    View.renderReviews(reviews);

    const reviewsParent = document.querySelector(".reviews");
    const scrollAmount = reviewsParent.firstElementChild.offsetWidth;

    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    let scrollIndex = 1;

    nextButton.addEventListener("click", () => {
      if (scrollIndex != reviews.length) scrollIndex++;
      this.handleNextReview(reviewsParent, scrollAmount, scrollIndex);
      Utility.disableButton(nextButton);
    });
    prevButton.addEventListener("click", () => {
      if (scrollIndex != 0) scrollIndex--;
      this.handlePrevReview(reviewsParent, scrollAmount, scrollIndex);
      Utility.disableButton(prevButton);
    });
  },
};
