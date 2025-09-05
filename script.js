// Attach click handler to each dropdown trigger
document
  .querySelectorAll("li.booking, li.currency, li.account")
  .forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation(); // stop bubbling so window.onclick doesn’t fire immediately

      // close all dropdowns first
      document
        .querySelectorAll(".buk_drp, .cur_drp, .acc_drp")
        .forEach((drop) => {
          if (!item.contains(drop)) drop.classList.remove("show");
        });

      // find the dropdown inside this li and toggle it
      const dropdown = item.querySelector(".buk_drp, .cur_drp, .acc_drp");
      if (dropdown) dropdown.classList.toggle("show");
    });
  });

// Close dropdowns when clicking anywhere else
window.addEventListener("click", () => {
  document.querySelectorAll(".buk_drp, .cur_drp, .acc_drp").forEach((drop) => {
    drop.classList.remove("show");
  });
});
