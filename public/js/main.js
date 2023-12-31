// OWL CAROUSEL FUNCTION
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// NOTIFICATION
const toastTrigger = document.getElementById("liveToastBtn");
const toast1 = new bootstrap.Toast(document.getElementById("toast1"));
const toast2 = new bootstrap.Toast(document.getElementById("toast2"));

if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    toast1.show();
    toast2.show();
  });
}

// NAVBAR FUNCTION
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
};


// CAPTCHA
var captcha = document.getElementById("fake-captcha");

var passOrFail = function () {
  var pass = Math.round(Math.random());
  return pass ? "pass" : "fail";
};

captcha.onclick = function () {
  if (captcha.className.includes("loading")) return;

  captcha.className = "";

  captcha.className += "loading";

  setTimeout(function () {
    captcha.className = captcha.className.replace("loading", "");
    captcha.className += passOrFail();
  }, Math.floor(Math.random() * 3000 + 1000));
};
