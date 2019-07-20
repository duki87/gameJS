class Sound {
  constructor(sound, id) {
    this.sound = sound;
    this.id = id;
  }

  playSound() {
    let element = document.getElementById(this.id);
    element.src = 'sound/'+this.sound+'.wav';
    document.getElementById('game_sounds').play();
  }

  destructor() {

  }

}
