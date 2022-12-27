// import numberPhone from "./numberList";

// btn disabled funciton
const isDisabled = document.querySelector(".isDisabled");
const anchorElement = document.querySelectorAll("a");

function disabledLink() {
  let index = 0;
  anchorElement.forEach((element) => {
    index++;
    console.log(index);
    if (element.classList.contains("isDisabled")) {
      console.log("TRUE");
    } else {
      console.log("FALSE");
    }
  });
}

let hifni = ["089683768942", "089683768942"];
let number = 0;

let WA_NUMBER = document.getElementById("noWA");
let PESAN_WA = document.getElementById("pesanWhatsapp");

function sendBlastingFetch() {
  for (let i = 0; i < 1; i++) {
    var formdata = new FormData();
    formdata.append("device_id", "8c0dc127cf6cd6756eb34bffbde413e7");
    formdata.append("number", `${WA_NUMBER.value}`);
    formdata.append("message", PESAN_WA.value);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://app.whacenter.com/api/send", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(WA_NUMBER.value);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }
}
