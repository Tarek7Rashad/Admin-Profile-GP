const userProfile = document.querySelector(".user-profile");
userProfile.addEventListener("click", function () {
  document.querySelector(".user-link-dropdown").classList.toggle("show");
});
const sidebarStag = document.querySelector(".toggle-btn");
sidebarStag.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});
function toggleRootClass() {
  document.querySelector(":root").classList.toggle("light");
}
function isLight() {
  return localStorage.getItem("light-theme");
}

function toggleLocalStorgeItem() {
  if (isLight()) {
    localStorage.removeItem("light-theme");
  } else {
    localStorage.setItem("light-theme", "set");
  }
}
if (isLight) {
  toggleRootClass();
}
document.querySelector(".theme-toggle").addEventListener("click", () => {
  toggleLocalStorgeItem();
  toggleRootClass();
});
let openProfilePage = document.querySelector(".openP");
openProfilePage.addEventListener("click", function () {
  window.open(
    "file:///E:/4th%20year%20lecture%20semester%20two/adminProofile/profile.html",
    "_self"
  );
});
function closeWindow() {
  window.close();
}
let closeProfilePage = document.querySelector(".logoutA");
closeProfilePage.addEventListener("click", function () {
  alert("Are You Sure To Leave This Page?");
  closeWindow();
});
let for_notify = document.querySelector(".for_notify");
let block_btn = document.querySelector(".block");
let time = document.querySelector(".time");
let checkbox_btn = document.querySelectorAll(".checkbox");
checkbox_btn.addEventListener("click", () => {
  checkbox_btn.classList.add("checked");
});
if (checkbox_btn.hasAttribute("checked")) {
  console.log("aegyqr");
}
block_btn.addEventListener("click", () => {
  for_notify.innerHTML = "has been Blocked";

  time.innerHTML = "";
});
/////////////////////////////////////////////
