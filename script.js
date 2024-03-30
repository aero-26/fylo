const emailbox = document.getElementsByClassName("e-mail-box");

const errorMsg = document.getElementsByClassName("error-msg");

const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const checkEmail = () => {
  for (let i = 0; i <= emailbox.length; i++) {
    if (!validEmail.test(emailbox[i]?.value) && emailbox[i]?.value !== "") {
      emailbox[i]?.classList.add("error-box");
      errorMsg[i]?.classList.remove("hide");
    } else {
      emailbox[i]?.classList.remove("error-box");
      errorMsg[i]?.classList.add("hide");
    }
  }
};

setInterval(checkEmail, 500);
