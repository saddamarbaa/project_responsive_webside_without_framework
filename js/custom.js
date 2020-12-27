function alignText(element, givenType) {
  const divList = document.getElementsByClassName(element);
  // console.log(divList);
  // Iterate over thedivListsList and remove the active class
  for (let i = 0, length = divList.length; i < length; i++) {
    divList[i].style.display = "none";
    if (divList[i].classList.contains("active")) {
      divList[i].classList.remove("active");
    }
    // console.log(divList[i]);
  }
  // add the active class only for the current element
  // document.classList.toggle("active");
  document.getElementById(givenType).classList.toggle("active");
  document.getElementById(givenType).style.display = "block";
}
