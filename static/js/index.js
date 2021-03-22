const imgBox = document.getElementsByClassName("img-box");

let body = document.addEventListener("click", addSticky);

function showBig(e) {
  for (let item of imgBox) {
    if (item != e.path[1]) {
      item.classList.remove("bigSize");
    }
  }
  e.path[1].classList.toggle("bigSize");
}
function addSticky(e) {
  for (let item of imgBox) {
    item.addEventListener("click", showBig);
  }
}
