/**
 * function deleted div by id
 */
function deleteDiv(idDiv) {
  let divTask1 = document.getElementById(idDiv);
  if (!divTask1) {
    throw new Error(`Element with id "${idDiv}" not found`);
  }
  divTask1.remove();
}
/**
 * function hidden div by id
 */
function deleteDivWithCSS(idDiv) {
  let divTask1 = document.getElementById(idDiv);
  if (!divTask1) {
    throw new Error(`Element with id "${idDiv}" not found`);
  }
  divTask1.className = "hidden";
  divTask1.style.display = "none";
}
/**
 * function reverse style css display:hidden or display not hidden
 */
function reverseDisplayInSection(idDiv) {
  let divTask = document.getElementById(idDiv);
  if (!divTask) {
    document.getElementById("section1").innerHTML =
      `<div id='${idDiv}'></div>` +
      document.getElementById("section1").innerHTML;
    divTask = document.getElementById(idDiv);
  }
  if (divTask.className == "hidden" || divTask.style.display == "none") {
    divTask.className = "";
    divTask.style.display = "block";
  } else {
    divTask.className = "hidden";
    divTask.style.display = "none";
  }
}
/**
 * function reverse style css display:hidden or display not hidden
 * with selected div by class
 */
function reverseDisplayAllBlocksWithClassName(classDiv) {
  let divTask = document.getElementsByClassName(classDiv);
  for (let i = 0; i < divTask.length; i++) {
    if (divTask[i].style.display == "none") {
      divTask[i].style.display = "";
    } else {
      divTask[i].style.display = "none";
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
function onChangeFunction(idElement) {
  alert("Привіт");
  document.getElementById(
    idElement
  ).innerHTML = `<div id="section5-div" onclick='removeSquare(${idElement})'></div>`;
}
function removeSquare() {
  document.getElementById("section5").innerHTML = "";
}
/**
 * Function visibility onmove mouse over button
 */
function reverseVisibility(divInSection) {
  let element = document.querySelector(divInSection);
  if (element.style.visibility == "visible") {
    element.style.visibility = "hidden";
  } else {
    element.style.visibility = "visible";
  }
}
/**
 * Function visibility onfocus mouse on input
 */
function visibilityOnFokus(divInSection) {
  let element = document.querySelector(divInSection);
  element.style.visibility = "visible";
}
/**
 * Function hidden onchange text on input
 */
function hiddenOnChange(divInSection) {
  let element = document.querySelector(divInSection);
  element.style.visibility = "hidden";
}
/**
 * Visible image from link in input text
 */
function visibleImage(link, section) {
  let linkImage = document.getElementById(link).value;
  if (!linkImage) {
    alert(`Element with link "${linkImage}" not found`);
  } else {
    let img = document.createElement("img");
    img.src = linkImage;
    img.onload = function () {
      document.getElementById(section).innerHTML =
        "<img src = " +
        linkImage +
        ' alt="image" style="width:200px; height=200px;" >' +
        document.getElementById(section).innerHTML;
    };
    img.onerror = function () {
      alert("Image not found");
    };
  }
}
/**
 * Visible images from link in input text
 */

function visibleImages() {
  let linkImages = document
    .getElementById("section9-textarea")
    .value.trim()
    .split("\n");
  let section9Content = "";
  let loadedImagesCount = 0;
  for (let i = 0; i < linkImages.length; i++) {
    let img = document.createElement("img");
    img.src = linkImages[i];
    img.onload = function () {
      section9Content +=
        '<img src="' +
        linkImages[i] +
        '" alt="image" style="width:200px; height:200px;">';
      loadedImagesCount++;
      if (loadedImagesCount === linkImages.length) {
        // All images have loaded, update the content
        document.getElementById("section9").innerHTML =
          `<div id="section9-div-image"> ${section9Content} ` +
          "</div>" +
          document.getElementById("section9").innerHTML;
      }
    };
    img.onerror = function () {
      console.log(`image with link = ${linkImages[i]} not found`);
      loadedImagesCount++;
      if (loadedImagesCount === linkImages.length) {
        // All images have loaded, update the content
        if (section9Content != "") {
          document.getElementById("section9").innerHTML =
            `<div id="section9-div-image"> ${section9Content} ` +
            "</div>" +
            document.getElementById("section9").innerHTML;
        }
      }
    };
  }
}
/**
 * Function Get position mouse pointer, language in browser and geographik location
 * after view this information in browser
 */
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
 * Function set text from div and saving in localeStorage, session storage and with coockies
 */
window.onload = function () {
  loadPages();
};

function loadPages() {
  addEventListener("input", function (event) {
    //after input text in block, save information or update in localStorage
    this.localStorage.setItem(
      "block1",
      document.getElementById("section13-localStorage").innerText
    );
    //after input text in block, save information or update in sessionStorage
    this.sessionStorage.setItem(
      "block3",
      document.getElementById("section13-sessionStorage").innerText
    );
    //after input text in block, save information or update in coockie
    let contentBlock2 = document.getElementById("section13-cookies").innerText;
    if (contentBlock2 != "") {
      document.cookie = "block2=" + contentBlock2 + ";max-age=3600";
    } else {
      document.cookie = "block2=" + "";
    }
  });
  //if nothing not change get information with stroages and coockies and set in divs
  let content = localStorage.getItem("block1");
  document.getElementById("section13-localStorage").innerText = content;
  content = sessionStorage.getItem("block3");
  document.getElementById("section13-sessionStorage").innerText = content;
  //check if the cookie exists and if exist set value in block 2
  let cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  let block2Cookie = cookies.find((cookie) => cookie.startsWith("block2="));
  if (block2Cookie) {
    document.getElementById("section13-cookies").innerText =
      document.cookie.split("=")[1];
  }
}
/**section14
 * Visible button after scroll end pages
 */
window.addEventListener("scroll", function () {
  let positionCursor = window.scrollY; //current position cursor
  let pageHeight = positionCursor + window.innerHeight; //height visible part pages
  if (pageHeight <= document.body.offsetHeight) {
    this.document.getElementById("section14HideButton").style.display = "none";
  } else {
    this.document.getElementById("section14HideButton").style.display = "flex";
  }
});
//Function scroll pages to top
function scrollUpPage() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
/**
 * section15
 * Function stopping Propagation for child after click
 */
document
  .getElementById("section15-child-div")
  .addEventListener("click", function (event) {
    event.stopPropagation(); //заборона винурення
  });
/**
 * section 16
 * Function abort scrole and set grey block on screen
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
// function swith on scrole and hide grey block
function switchOnScrole() {
  document.body.style.height = "auto";
  document.body.style.overflow = "auto";
  overlay.style.display = "none";
}
/**
 * section 18
 * This section code makeing it change beautifully when you drag a file to
 * this input (drag-n-drop).
 * And when the file is already selected, too.
 */
const droparea = document.getElementsByClassName("droparea")[0];
const dropSection = document.getElementById("section18");
const dropLabel = document.getElementsByClassName("section18-label")[0];
droparea.addEventListener("dragover", (event) => {
  event.preventDefault();
  droparea.classList.add("hover");
  dropSection.classList.add("hover");
  dropLabel.classList.add("hover");
});
droparea.addEventListener("dragleave", () => {
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");
  dropLabel.classList.remove("hover");
});
droparea.addEventListener("drop", (event) => {
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");

  droparea.classList.add("fileDropped");
  dropSection.classList.add("fileDropped");
});
droparea.addEventListener("change", (event) => {
  droparea.classList.remove("hover");
  dropSection.classList.remove("hover");
  droparea.classList.remove("hover");

  droparea.classList.add("fileDropped");
  dropSection.classList.add("fileDropped");
  dropLabel.classList.add("fileDropped");

  let fullPath = droparea.value;
  arrayPath = fullPath.split(/\\|\//);
  document.getElementsByTagName("span")[0].innerText =
    "Your selected file => " + arrayPath[arrayPath.length - 1];
});
