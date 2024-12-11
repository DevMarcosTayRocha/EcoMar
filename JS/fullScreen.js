function goFullScreen1() {
  var img = document.querySelector(".img1"); // Corrigido para querySelector

  if (img.requestFullscreen) {
      img.requestFullscreen();
  } else if (img.mozRequestFullScreen) {
      img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) { 
      img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { 
      img.msRequestFullscreen();
  }
}

function goFullScreen2() {
  var img = document.querySelector(".img2");

  if (img.requestFullscreen) {
      img.requestFullscreen();
  } else if (img.mozRequestFullScreen) {
      img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) { 
      img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { 
      img.msRequestFullscreen();
  }
}

function goFullScreen3() {
  var img = document.querySelector(".img3");

  if (img.requestFullscreen) {
      img.requestFullscreen();
  } else if (img.mozRequestFullScreen) {
      img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) { 
      img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { 
      img.msRequestFullscreen();
  }
}
