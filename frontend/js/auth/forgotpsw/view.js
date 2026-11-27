const lang = localStorage.getItem("SolveBox-current-language");

export const View = {
  displayCongratulations() {
    const inputFields = document.getElementById("input-fields");
    const button = document.getElementById("proceed");
    const form = document.getElementById("forgot-password-form");
    form.classList.replace("opacity-100", "opacity-0");

    setTimeout(() => {
      button.textContent =
        lang === "english" ? "Let's sign in!" : "Хајде да се пријавимо!";
      button.setAttribute("data-english", "Let's sign in!");
      button.setAttribute("data-srpski", "Хајде да се пријавимо!");

      button.addEventListener("click", () => {
        window.location.href = "./signin.html";
      });

      const underText = document.getElementById("remembered");
      form.classList.add("mb-[5rem]");
      inputFields.remove();
      underText.remove();

      const title = document.getElementById("title");
      const text = document.getElementById("text");

      title.textContent =
        lang === "english"
          ? "Your password is changed"
          : "Лозинка је промењена";
      title.setAttribute("data-english", "Your password is changed");
      title.setAttribute("data-srpski", "Лозинка је промењена");

      title.classList.remove("lg:text-start");
      text.textContent =
        lang === "english"
          ? "You can sign in with the new password now."
          : "Сада се можете пријавити новом лозинком.";
      text.setAttribute(
        "data-english",
        "You can sign in with the new password now."
      );
      text.setAttribute(
        "data-srpski",
        "Сада се можете пријавити новом лозинком."
      );
    }, 200);

    setTimeout(() => {
      form.classList.replace("opacity-0", "opacity-100");
    }, 300);
  },

  displayResetPassword() {
    const inputField = document.getElementById("input-field");
    const inputFields = document.getElementById("input-fields");
    const title = document.getElementById("title");
    const text = document.getElementById("text");
    const form = document.getElementById("forgot-password-form");

    const lang = document.documentElement.lang; // Provera jezika

    form.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => {
      let label = document.getElementById("label1");
      const button = document.getElementById("proceed");
      button.textContent =
        lang === "english" ? "Reset my password" : "Поништи моју лозинку";
      button.setAttribute("data-english", "Reset my password");
      button.setAttribute("data-srpski", "Поништи моју лозинку");

      inputField.remove();
      label.remove();
      title.textContent =
        lang === "english" ? "Welcome back!" : "Поново добродошао!";
      title.setAttribute("data-english", "Welcome back!");
      title.setAttribute("data-srpski", "Поново добродошао!");

      text.textContent =
        lang === "english"
          ? "Enjoy your new password!"
          : "Уживај у својој новој лозинци!";
      text.setAttribute("data-english", "Enjoy your new password!");
      text.setAttribute("data-srpski", "Уживај у својој новој лозинци!");

      const inputWrapper = document.createElement("div");
      inputWrapper.classList = "flex flex-col w-full";

      const input = document.createElement("input");
      input.classList =
        "border-2 text-sm outline-none focus:border-[#75e1d9] py-2 px-4 2xl:py-4 2xl:px-8 2xl:text-lg sm:rounded-lg rounded-md w-full text-black";
      input.setAttribute("type", "password");
      input.setAttribute("placeholder", "Amar!123");
      input.setAttribute("name", "new-password");
      input.id = "password";

      label = document.createElement("label");
      label.classList = "text-[0.6rem] sm:text-sm 2xl:text-[1rem]";
      label.textContent = lang === "english" ? "New Password" : "Нова лозинка";
      label.setAttribute("data-english", "New Password");
      label.setAttribute("data-srpski", "Нова лозинка");

      inputWrapper.append(label);
      inputWrapper.append(input);

      const inputWrapper2 = document.createElement("div");
      const input2 = document.createElement("input");

      input2.classList =
        "border-2 text-sm outline-none focus:border-[#75e1d9] py-2 px-4 2xl:py-4 2xl:px-8 2xl:text-lg sm:rounded-lg rounded-md w-full text-black";
      input2.setAttribute("placeholder", "Amar!123");
      input2.setAttribute("name", "conf-password");
      input2.id = "conf-password";
      input2.setAttribute("type", "password");

      const label2 = document.createElement("label");
      label2.classList = "text-[0.6rem] sm:text-sm 2xl:text-[1rem]";
      label2.textContent =
        lang === "english" ? "Confirm New Password" : "Потврдите нову лозинку";
      label2.setAttribute("data-english", "Confirm New Password");
      label2.setAttribute("data-srpski", "Потврдите нову лозинку");

      inputWrapper2.append(label2);
      inputWrapper2.append(input2);

      inputFields.append(inputWrapper);
      inputFields.append(inputWrapper2);
    }, 200);

    setTimeout(() => {
      form.classList.replace("opacity-0", "opacity-100");
    }, 300);
  },

  displayGetCode() {
    const inputField = document.getElementById("input-field");
    const title = document.getElementById("title");
    const text = document.getElementById("text");
    const label = document.getElementById("label1");
    const button = document.getElementById("proceed");
    const form = document.getElementById("forgot-password-form");

    const lang = document.documentElement.lang; // Provera jezika

    form.classList.add("opacity-0");

    setTimeout(() => {
      button.textContent = lang === "english" ? "Enter Code" : "Унесите код";
      button.setAttribute("data-english", "Enter Code");
      button.setAttribute("data-srpski", "Унесите код");

      title.textContent =
        lang === "english" ? "What's the code?" : "Који је код?";
      title.setAttribute("data-english", "What's the code?");
      title.setAttribute("data-srpski", "Који је код?");

      text.textContent =
        lang === "english"
          ? "Enter the code we've sent you & change your password!"
          : "Унесите код који смо вам послали и промените лозинку!";
      text.setAttribute(
        "data-english",
        "Enter the code we've sent you & change your password!"
      );
      text.setAttribute(
        "data-srpski",
        "Унесите код који смо вам послали и промените лозинку!"
      );

      label.textContent = lang === "english" ? "Your Code" : "Ваш код";
      label.setAttribute("data-english", "Your Code");
      label.setAttribute("data-srpski", "Ваш код");

      inputField.innerHTML = "";

      for (let i = 0; i < 6; i++) {
        const codeNumber = document.createElement("input");
        codeNumber.setAttribute("type", "number");
        codeNumber.setAttribute("name", "number" + i);
        codeNumber.setAttribute("min", "0");
        codeNumber.setAttribute("max", "9");
        codeNumber.classList =
          "text-black border-2 outline-none w-[15%] focus:border-[#75e1d9] py-2 lg:py-4 px-4 text-lg rounded-lg";

        inputField.append(codeNumber);
      }
    }, 200);

    setTimeout(() => {
      form.classList.replace("opacity-0", "opacity-100");
    }, 300);
  },
};
