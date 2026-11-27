import * as Utility from "../utility/utility.js";
import * as Validation from "../utility/inputs.js";
import { loader } from "./general_view.js";

const lang = () => localStorage.getItem("SolveBox-current-language") || "english";
const label = (button) => button.dataset[lang()] || "Subscribe";

async function subscribe(form) {
  const emailDoc = form.querySelector("input[name=email]");
  const button = form.querySelector("button");
  const sr = lang() === "srpski";

  if (!Validation.isEmailValid(emailDoc.value)) {
    Validation.invalidateInput(emailDoc);
    Utility.removeClassOnClick(emailDoc, "error-input");
    setTimeout(() => Validation.removeInvalidations(form), 1000);
    Utility.updateButtonStatus(button, sr ? "Упс!" : "Oops!", true);
    setTimeout(() => Utility.updateButtonStatus(button, label(button)), 1000);
    return;
  }

  Utility.updateButtonStatus(button, (sr ? "Претплата... " : "Subscribing... ") + loader(), true);

  try {
    const res = await fetch("https://solvebox.onrender.com/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailDoc.value }),
    });

    if (res.status === 409) {
      Utility.updateButtonStatus(button, sr ? "Већ претплаћени!" : "Already subscribed!", false);
    } else if (res.ok) {
      Utility.updateButtonStatus(button, sr ? "Претплаћени" : "Subscribed", false);
    } else {
      Utility.updateButtonStatus(button, sr ? "Грешка!" : "Error!", false);
    }
  } catch {
    Utility.updateButtonStatus(button, sr ? "Грешка!" : "Error!", false);
  }

  setTimeout(() => {
    Utility.updateButtonStatus(button, label(button));
    form.reset();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".subscribe-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      subscribe(form);
    });
  });
});
