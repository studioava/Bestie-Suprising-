/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 1400);

});


/* ==========================================
   START JOURNEY
========================================== */

function startJourney() {

  document
    .getElementById("gifts")
    .scrollIntoView({
      behavior: "smooth"
    });

  createHearts(12);

}


/* ==========================================
   GIFT CARDS
========================================== */

function openGift(card, type) {

  card.classList.toggle("open");

  if (card.classList.contains("open")) {

    createHearts(8);

  }

}


/* ==========================================
   FINAL SURPRISE
========================================== */

function finalSurprise() {

  createConfetti(100);

  createHearts(35);

  setTimeout(() => {

    document
      .getElementById("surpriseModal")
      .classList.add("show");

  }, 350);

}


/* ==========================================
   CLOSE MODAL
========================================== */

function closeSurprise() {

  document
    .getElementById("surpriseModal")
    .classList.remove("show");

}


/* ==========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================== */

document
  .getElementById("surpriseModal")
  .addEventListener("click", function(event) {

    if (event.target === this) {

      closeSurprise();

    }

  });


/* ==========================================
   CONFETTI
========================================== */

function createConfetti(amount) {

  const container =
    document.getElementById("confetti");

  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("div");

    piece.classList.add("confetti-piece");

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    const size =
      5 + Math.random() * 7;

    piece.style.width =
      size + "px";

    piece.style.height =
      size * 1.5 + "px";

    /*
      Using generated CSS shapes instead
      of fixed colours keeps the effect cute.
    */

    piece.style.background =
      "hsl(" +
      Math.floor(Math.random() * 360) +
      ", 65%, 78%)";

    container.appendChild(piece);


    setTimeout(() => {

      piece.remove();

    }, 4500);

  }

}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHearts(amount) {

  for (let i = 0; i < amount; i++) {

    const heart =
      document.createElement("div");

    heart.innerHTML =
      Math.random() > .5 ? "♡" : "♥";

    heart.style.position =
      "fixed";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.bottom =
      "-30px";

    heart.style.zIndex =
      "1001";

    heart.style.pointerEvents =
      "none";

    heart.style.fontSize =
      (12 + Math.random() * 20) + "px";

    heart.style.color =
      "#d97995";

    heart.style.transition =
      "transform 3s ease, opacity 3s ease";

    document.body.appendChild(heart);


    requestAnimationFrame(() => {

      heart.style.transform =
        `translateY(-${70 + Math.random() * 80}vh)
         translateX(${Math.random() * 100 - 50}px)
         rotate(${Math.random() * 180}deg)`;

      heart.style.opacity = "0";

    });


    setTimeout(() => {

      heart.remove();

    }, 3200);

  }

}


/* ==========================================
   MUSIC BUTTON
========================================== */

const musicButton =
  document.getElementById("musicToggle");

let musicOn = false;

musicButton.addEventListener("click", () => {

  musicOn = !musicOn;

  musicButton.classList.toggle(
    "active",
    musicOn
  );

  if (musicOn) {

    musicButton.innerHTML = "♫";

    createHearts(5);

  } else {

    musicButton.innerHTML = "♪";

  }

});


/* ==========================================
   RANDOM LITTLE HEARTS
========================================== */

setInterval(() => {

  if (Math.random() > .65) {

    createHearts(1);

  }

}, 4500);


/* ==========================================
   ESCAPE KEY CLOSES MODAL
========================================== */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeSurprise();

  }

});