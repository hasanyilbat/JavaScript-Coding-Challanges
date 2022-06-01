// DOM işlemleri (sıradaki JS konusu)
// Add the CroCoder logo (image element) as a child element to the existing div element.
const imageSrc = "https://crocoder.dev/icon.png";

// querySelector, createElement, appendChild ile çözülecek

const div = document.querySelector(".div");
const imgElement = document.createElement("img");
imgElement.src = imageSrc;
imgElement.classList.add("resim");
div.classList.add("divBuyuk");
// imgElement.setAttribute("src", "https://crocoder.dev/icon.png");
div.appendChild(imgElement);
// div.innerHTML = `<ul> </ul>`;
