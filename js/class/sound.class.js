class Sound {
  sound;
  id;

  playSound() {
    let element = document.getElementById(this.id);
    element.src = 'sound/'+this.sound+'.wav';
    document.getElementById('game_sounds').play();
  }

  destructor() {

  }

}
