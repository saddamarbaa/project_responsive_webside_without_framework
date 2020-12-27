// function to show the hidden dives

function showDiv(element, givenType) {
  const divList = document.getElementsByClassName(element);
  // Iterate over thedivListsList and remove the active class
  for (let i = 0, length = divList.length; i < length; i++) {
    divList[i].style.display = "none";
    if (divList[i].classList.contains("active")) {
      divList[i].classList.remove("active");
    }
  }

  // add the active class only for the current element
  document.getElementById(givenType).classList.toggle("active");
  document.getElementById(givenType).style.display = "block";
}

// function to show the hidden Navigation Bar

function showNav() {
  const showNav = document.getElementById("topnav");
  // console.log(showNav);
  showNav.classList.toggle("visible-xs");
}
