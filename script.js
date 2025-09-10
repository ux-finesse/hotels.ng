// Attach click handler to each dropdown trigger
document
  .querySelectorAll("li.booking, li.currency, li.account, .num")
  .forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation(); // stop bubbling so window.onclick doesn’t fire immediately

      // close all dropdowns first
      document
        .querySelectorAll(".buk_drp, .cur_drp, .acc_drp, .mob_drp")
        .forEach((drop) => {
          if (!item.contains(drop)) drop.classList.remove("show");
        });

      // find the dropdown inside this li and toggle it
      const dropdown = item.querySelector(
        ".buk_drp, .cur_drp, .acc_drp, .mob_drp"
      );
      if (dropdown) dropdown.classList.toggle("show");
    });
  });

// Close dropdowns when clicking anywhere else
window.addEventListener("click", () => {
  document
    .querySelectorAll(".buk_drp, .cur_drp, .acc_drp, .mob_drp")
    .forEach((drop) => {
      drop.classList.remove("show");
    });
});

const menuButton = document.getElementById("menu");
const menuCont = document.querySelector(".menu_cont");
const closeBtn = document.querySelector(".menu_cont .close");

// Toggle open
menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  menuCont.classList.add("show");
});

// Close with X
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuCont.classList.remove("show");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (!menuCont.contains(e.target) && !menuButton.contains(e.target)) {
    menuCont.classList.remove("show");
    document.body.style.overflow = "";
  }
});

// Prevent internal clicks from bubbling up
menuCont.addEventListener("click", (e) => e.stopPropagation());

const mobCur = document.querySelector(".mob_cur");
const mobCurDrp = document.querySelector(".mob_cur_drp");

mobCur.addEventListener("click", () => {
  mobCurDrp.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!mobCur.contains(e.target) && !mobCurDrp.contains(e.target)) {
    mobCurDrp.classList.remove("show");
  }
});
