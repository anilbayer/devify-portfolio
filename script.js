const hideOut = document.querySelector('.hideout');

function getRandomBlueTone() {
  const hue = 210;
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 30) + 40;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generateBlueGradient() {
  const color1 = getRandomBlueTone();

  const headerGradient = `linear-gradient(to top, ${color1}, #121212)`;
  document.querySelector('.salute').style.background = headerGradient;

  const navGradient = `linear-gradient(to bottom, ${color1}, #121212)`;
  document.querySelector('.navbar').style.background = navGradient;
}

generateBlueGradient();


function hideAndSeek() {
  if (hideOut.style.display === 'none') {
    hideOut.style.display = 'inline';
  } else { 
    hideOut.style.display = 'none';
  }
}
setInterval(hideAndSeek, 1000);

function start () {
  // (PART A) GET SPLASH SCREEN 
  let splash = document.getElementById("splash");

  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });

  // (PART C) GO!
  splash.classList.add("hide");
}