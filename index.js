// for navbar maintainance
let scopsFn = () => {
  let menu = document.querySelector("#icon");
  let navbars = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbars.classList.toggle("showNavBar");
  };

  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbars.classList.remove("showNavBar");
  };
};

scopsFn();

let counter = document.querySelectorAll("#counter");
let speed = 200;

counter.forEach((event) => {
  let update = () => {
    let target = +event.getAttribute("data-target");
    let count = +event.innerText;
    let ins = target / speed;

    if (count < target) {
      event.innerText = Math.round(count + ins);
      setTimeout(update, 10);
    } else {
      event.innerText = target;
    }
  };
  update();
});
