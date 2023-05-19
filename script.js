document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'pass') {
      Swal.fire({
        icon: 'success',
        title: 'Logged in!',
        text: 'Logged in succesfully.'
      });
      redirectToDashboard();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Username or password was unvalid.'
      });
    }
  });
  
  function redirectToDashboard() {
    var redirectURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";
    window.location.href = redirectURL;
  }

var audio = new Audio("assets/stereo_love.mp3"); // Müzik dosyasının yolunu güncelleyin
var isPlaying = false;

function playMusic() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}

  