/**
 * function delted div by id
 */
function deleteDiv() {
  let divTask1 = document.getElementById("div-task1-1");
  divTask1.remove();
}
/**
 * function hidden div by id
 */
function deleteDivWithCSS() {
  let divTask1 = document.getElementById("div-task1-1");
  divTask1.className = "hidden";
}
/**
 * function reverse style css display:hidden or display not hidden
 */
function reverseDisplayInSection1() {
  let divTask1 = document.getElementById("div-task1-1");
  if (divTask1.className == "hidden") {
    divTask1.className = "";
  } else {
    divTask1.className = "hidden";
  }
}
/**
 * function reverse style css display:hidden or display not hidden
 * with selected div by class
 */
function reverseDisplayFiveBlocks() {
  let divTask3 = document.getElementsByClassName("divSection3");
  for (let i = 0; i < divTask3.length; i++) {
    if (divTask3[i].style.display == "none") {
      divTask3[i].style.display = "";
    } else {
      divTask3[i].style.display = "none";
    }
  }
}
/**
 * function reverse style css display:hidden or display not hidden
 * with selected div by css selectors
 */
function reverseBlocksByCssSelector() {
  let selector = document.getElementById("section4-input").value;
  if (selector[0] == ".") {
    let classSelectors = document.getElementsByClassName(selector.substring(1));
    reverseHidden(classSelectors);
  } else if (selector[0] == "#") {
    let idSelector = selector.substring(1);
    reverseDisplay(idSelector);
  } else {
    let tegSelectors = document.getElementsByTagName(selector);
    reverseHidden(tegSelectors);
  }
}
/**
 * Function reverse hidden with selectors
 */
function reverseHidden(selectors) {
  for (let i = 0; i < selectors.length; i++) {
    if (selectors[i].style.display == "none") {
      selectors[i].style.display = "";
    } else {
      selectors[i].style.display = "none";
    }
  }
}
/**
 * Function reverse hidden with id
 */
function reverseDisplay(id) {
  let element = document.getElementById(id);
  if (element.style.display == "none") {
    element.style.display = "";
  } else {
    element.style.display = "none";
  }
}
/**
 * Function view alert and change function for event onClick
 */
function onChangeFunction() {
  alert("Привіт");
  document.getElementById("section5").innerHTML =
    '<div id="section5-div" onclick="removeSquare()"></div>';
}
function removeSquare() {
  document.getElementById("section5").innerHTML = "";
}
/**
 * Function visibility onmove mouse over button
 */
function reverseVisibility() {
  let element = document.querySelector("#section6 div");
  if (element.style.visibility == "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}
/**
 * Function visibility onfocus mouse on input
 */
function visibilityOnFokus() {
  let element = document.querySelector("#section7 div");
  element.style.visibility = "visible";
}
/**
 * Function hidden onchange text on input
 */
function hiddenOnChange() {
  let element = document.querySelector("#section7 div");
  element.style.visibility = "hidden";
}
/**
 * Visible image from link in input text
 */
function visibleImage() {
  let linkImage = document.getElementById("section8-input").value;
  document.getElementById("section8").innerHTML =
    "<img src = " +
    linkImage +
    ' alt="image" style="width:200px; height=200px;">' +
    document.getElementById("section8").innerHTML;
}
/**
 * Visible images from link in input text
 */
function visibleImages() {
  let linkImages = document
    .getElementById("section9-textarea")
    .value.trim()
    .split("\n");
  console.log(linkImages);
  let section9Content = "";
  for (let i = 0; i < linkImages.length; i++) {
    section9Content +=
      '<img src="' +
      linkImages[i] +
      '" alt="image" style="width:200px; height:200px;">';
  }
  document.getElementById("section9").innerHTML =
    '<div id="section9-div-image">' +
    section9Content +
    document.getElementById("section9").innerHTML +
    "</div>";
}
//Section 10 11 12
navigator.geolocation.getCurrentPosition(success);
let latitude;
let longitude;
function success(pos) {
  let crd = pos.coords;
  latitude = crd.latitude;
  longitude = crd.longitude;
}

window.addEventListener("mousemove", (event) => {
  let X = event.clientX;
  let Y = event.clientY;
  let section10Content = "";
  section10Content += "Х:" + X + ", Y:" + Y;

  document.getElementById("section10-coordinate-cursor").innerHTML =
    "<div>" +
    section10Content +
    "<br>" +
    navigator.language +
    "<br>Ш: " +
    latitude +
    ", Д: " +
    longitude +
    "</div>";
});
//Section 13
/**
 * Function set text from div and saving in localeStorage
 */
window.onload = function () {
  loadPages();
};

function loadPages() {
  addEventListener("input", function (event) {
    this.localStorage.setItem(
      "block1",
      document.getElementById("section13-localStorage").innerText
    );
    this.sessionStorage.setItem(
      "block3",
      document.getElementById("section13-sessionStorage").innerText
    );
    let contentBlock2 = document.getElementById("section13-cookies").innerText;
    if (contentBlock2 != "") {
      document.cookie = "block2=" + contentBlock2;
    } else {
      document.cookie = "block2=" + "";
    }
  });
  let content = localStorage.getItem("block1");
  document.getElementById("section13-localStorage").innerText = content;
  content = sessionStorage.getItem("block3");
  document.getElementById("section13-sessionStorage").innerText = content;
  document.getElementById("section13-cookies").innerText =
    document.cookie.split("=")[1];
}
/**section14 */
window.addEventListener("scroll", function () {
  let positionCursor = window.scrollY;
  let pageHeight = positionCursor + window.innerHeight;
  if (pageHeight <= document.body.offsetHeight) {
    this.document.getElementById("section14HideButton").style.display = "none";
  } else {
    this.document.getElementById("section14HideButton").style.display = "flex";
  }
});

function scrollUpPage() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
/**
 * section15
 */
document
  .getElementById("section15-child-div")
  .addEventListener("click", function (event) {
    event.stopPropagation(); //заборона винурення
  });
/**
 * section 16
 */

let overlay = document.getElementsByClassName("section16-div")[0];
function abortScrole() {  
  overlay.style.display = "block";
  window.onscroll = () => {
    let styleDivVisibility = overlay.style.display;
    if (styleDivVisibility == "block") {
      //document.body.style.overflow = 'hidden';
      //window.scroll({ top: 0, left: 0, behavior: "auto" });
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  };
}
function switchOnScrole() {
  document.body.style.height = "auto";
  document.body.style.overflow = "auto";
  overlay.style.display = "none";
}
/**
 * section 18
 */
const droparea= document.getElementsByClassName("droparea")[0];
const dropSection = document.getElementById("section18");
const dropLabel = document.getElementsByClassName("section18-label")[0];
droparea.addEventListener("dragover", (event)=>{
  event.preventDefault();
  droparea.classList.add("hover");
  dropSection.classList.add("hover");
  dropLabel.classList.add("hover");
})
droparea.addEventListener("dragleave",()=>{
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");
  dropLabel.classList.remove("hover");
})
droparea.addEventListener("drop", (event)=>{
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");

  droparea.classList.add("fileDropped");
  dropSection.classList.add("fileDropped");
})
droparea.addEventListener("change", (event)=>{
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");
  droparea.classList.remove("hover");

  droparea.classList.add("fileDropped");
  dropSection.classList.add("fileDropped");
  dropLabel.classList.add("fileDropped");

  let fullPath = droparea.value;
  arrayPath = fullPath.split(/\\|\//);
  document.getElementsByTagName("span")[0].innerText ="Your selected file => " + arrayPath[arrayPath.length-1];
})
