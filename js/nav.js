fetch("nav.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* Toggle between adding and removing the "dropdown-shown" class to topnav when the user clicks on the icon */
function toggleDropdown() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navbar responsive") {
    x.className += " dropdown-shown";
  } else {
    x.className = "navbar responsive";
  }
}
