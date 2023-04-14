let audioAtual = null;
let posicaoAudio = 0;

function playMusic(audioFile) {
  if (audioAtual) {
    audioAtual.pause();
    
  }

  let audio = new Audio(audioFile);
  audio.currentTime = posicaoAudio;
  audio.play();
  audioAtual = audio;

}

function pauseMusic() {
  if (audioAtual) {
    posicaoAudio = audioAtual.currentTime;
    audioAtual.pause();
  }
}

let likeButtons = document.querySelectorAll('#likeButton');

function like(event) {
  const button = event.currentTarget;
  button.classList.toggle('liked');
}

likeButtons.forEach((button) => {
  button.addEventListener('click', like);
});






