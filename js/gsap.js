console.log("✅ gsap.js est bien chargé !");
gsap.registerPlugin(Draggable, InertiaPlugin);

const gradients = [
  "--gradient-macha",
  "--gradient-orange-crush",
  "--gradient-lipstick",
  "--gradient-purple-haze",
  "--gradient-skyfall",
  "--gradient-emerald-city",
  "--gradient-summer-fair"
];

const circleColors = [
  "--color-shockingly-green",
  "--color-surface-white",
  "--color-pink",
  "--color-shockingly-pink",
  "--color-orangey",
  "--color-lilac",
  "--color-lt-green",
  "--color-blue"
];

const letterColors = [
  "--grey-dark",
  "--light",
  "--green",
  "--green-dark",
  "--green-light",
  "--blue",
  "--purple",
  "--red",
  "--orange"
];

const poster = document.getElementById("poster");
const logo = document.querySelector(".logo");
const circle = document.querySelector(".circle");
const sticker = document.querySelector(".sticker");
const smooothContainer = document.querySelector(".smoooth-container");
const smoooth = document.querySelector(".smoooth");
const controls = document.querySelector(".controls");

let posterW = null;
let posterH = null;

function getCSSVarValue(varName) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomizeVisuals() {
  // Background
  const gradientValue = getComputedStyle(poster)
  .getPropertyValue(getRandomItem(gradients))
  .trim();
  if (poster) poster.style.background = gradientValue;

  // Circle
  if (circle)
    circle.style.backgroundColor = getCSSVarValue(
      getRandomItem(circleColors)
    );

  // Sticker
  if (sticker) {
    const excluded = [5, 9, 24, 27];
    const validFlairs = Array.from({ length: 35 }, (_, i) => i + 1).filter(
      (i) => !excluded.includes(i)
    );
    const flairNumber = getRandomItem(validFlairs);
    const flairClass = flairNumber === 1 ? "flair" : `flair--${flairNumber}`;

    // Flair
    sticker.classList.remove(
      "flair",
      ...Array.from({ length: 35 }, (_, i) => `flair--${i + 1}`)
    );
    sticker.classList.add(flairClass);
  }

  // Letters
  if (smoooth)
    smoooth.style.color = getCSSVarValue(getRandomItem(letterColors));
}

// Pause Button
const pauseBtn = document.getElementById("pause");
const pauseBtnLabel = pauseBtn.querySelector(".label");
let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    spin.resume();
    pauseBtn.classList.remove("paused");
  } else {
    spin.pause();
    pauseBtn.classList.add("paused");
  }
  isPaused = !isPaused;
});

// Screenshot & Hide
const hideBtn = document.getElementById("screenshot");

hideBtn.addEventListener("click", () => {
  if (!controls) return;

  pauseBtn.click();

  const posterRect = poster.getBoundingClientRect();
  posterW = `${posterRect.width}px`;
  posterH = `${posterRect.height}px`;

  controls.style.display = "none";
  smooothContainer.style.display = "none";

  Object.assign(logo.style, {
    width: "300px",
    maxWidth: "none",
    top: "auto",
    bottom: "7%"
  });

  Object.assign(poster.style, {
    width: "1290px",
    height: "2796px"
  });

  Object.assign(sticker.style, {
    width: "484px",
    height: "484px",
    maxWidth: "none",
    maxHeight: "none"
  });

  Object.assign(circle.style, {
    width: "968px",
    height: "968px",
    maxWidth: "none",
    maxHeight: "none"
  });

  window.requestAnimationFrame(() => {
    htmlToImage
      .toPng(poster)
      .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "gsap-smoooth-poster_randomizer.png";
      link.href = dataUrl;
      link.click();
      resetPoster();
      pauseBtn.click();
    })
      .catch((error) => {
      console.error("Screenshot failed:", error);
      resetPoster();
      pauseBtn.click();
    });
  });
});

function resetPoster() {
  controls.style.removeProperty("display");

  smooothContainer.style.removeProperty("display");
  gsap.set([logo, poster, sticker, circle], {clearProps:"width,height,maxWidth,maxHeight"});
  gsap.set(logo, {clearProps: "top,bottom"})
}

// Spin & Drag
const initialRotationOffset = -36.25;
const letterPos = [0, 15.25, 30.25, 42.25, 54.25, 64.25, 73.5];
const shapes = gsap.utils.toArray(".letter");
const proxy = document.createElement("div");
const progressWrap = gsap.utils.wrap(0, 1);
const wrapRotation = gsap.utils.wrap(-90, 90);

let screenRange = gsap.utils.mapRange(0, 2000, 500, 4500), 
    dragDistancePerRotation = screenRange(window.innerWidth),
    startProgress;

window.addEventListener("resize", () => dragDistancePerRotation = screenRange(window.innerWidth));

const spin = gsap.fromTo(shapes, {
  rotationY: (i) => letterPos[i] + initialRotationOffset
}, {
  rotationY: `-=${360}`,
  modifiers: {
    rotationY: (value) => wrapRotation(parseFloat(value)) + "deg"
  },
  duration: 10,
  ease: "none",
  repeat: -1
});

Draggable.create(proxy, {
  trigger: smoooth,
  type: "x",
  inertia: true,
  allowNativeTouchScrolling: true,
  onPress() {
    gsap.killTweensOf(spin);
    spin.timeScale(0);
    startProgress = spin.progress();
  },
  onDrag: updateRotation,
  onThrowUpdate: updateRotation,
  onRelease() {
    if (!this.tween || !this.tween.isActive()) {
      gsap.to(spin, { timeScale: 1, duration: 1 });
    }
  },
  onThrowComplete() {
    gsap.to(spin, { timeScale: 1, duration: 1 });
  }
});

function updateRotation() {
  const p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
  spin.progress(progressWrap(p));
}

function adjustRadius() {
  const radius = Math.min(window.innerWidth * 0.5, 650, window.innerHeight * 0.43);
  
  gsap.set(shapes, {
    xPercent: -50,
    yPercent: -50,
    x: 0,
    y: 0,
    transformOrigin: `50% 50% ${-radius}px`
  });
}

adjustRadius();
randomizeVisuals();

window.addEventListener("resize", adjustRadius);
document.getElementById("reroll").addEventListener("click", randomizeVisuals);
