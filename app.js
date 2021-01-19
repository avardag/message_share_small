const messageInput = document.querySelector("#message-input");
const linkArea = document.querySelector("#link-input");
const copyBtn = document.querySelector(".btn-cb");
const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");
const messageShow = document.querySelector("#message-show");

//check for hash in url params
let { hash } = window.location;

hash = hash.replace("#", ""); //remove # at the beginning
//atob() built in func to convert base 64 to ASCII
const message = atob(hash);

if (message) {
  messageForm.classList.add("hide");
  messageShow.classList.remove("hide");

  document.querySelector("h4").innerHTML = message;
}
//////////////////////////////////////////////////////////////

// a function to copy to Clipboard link Area text
const copyToclipBoard = () => {
  /* Get the text field */
  // const linkArea = document.querySelector("#link-input");

  /* Select the text field */
  linkArea.select();
  linkArea.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  const copied = document.execCommand("copy");
  if (copied) {
    copyBtn.innerText = "Copied";
    /* Alert the copied text */
    // console.log("Copied the text: " + linkArea.value);
  } else console.log("not coppied");
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  messageForm.classList.add("hide");
  linkForm.classList.remove("hide");
  // btoa() built in func to make a base64 encoding
  const encrypted = btoa(messageInput.value);

  linkArea.value = `${window.location}#${encrypted}`;

  // copyBtn.style.display = "block";
});

copyBtn.addEventListener("click", copyToclipBoard);
