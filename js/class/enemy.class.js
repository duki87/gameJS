class Enemy {
  constructor(health = 100, positionX = 0, positionY = 0) {
    this.health = health;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  startEnemy() {
    console.log('start');
    let div = document.createElement('div');
    div.setAttribute('id', 'hero');
    div.classList.add('hero');
    document.getElementById('area').appendChild(div);
  }

  moveHero(direction) {
    switch(direction) {
      case 'ArrowUp':
        let positionUp = this.heroTopPosition;
        let newPositionUp = --positionUp;
        document.getElementById('hero').style.top = newPositionUp+'px';
        break;
      case 'ArrowDown':
        let positionDown = this.heroTopPosition;
        let newPositionDown = ++positionDown;
        document.getElementById('hero').style.top = newPositionDown+'px';
        break;
      case 'ArrowRight':
        let positionRight = this.heroLeftPosition;
        let newPositionRight = ++positionRight;
        document.getElementById('hero').style.left = newPositionRight+'px';
        break;
      case 'ArrowLeft':
        let positionLeft = this.heroLeftPosition;
        let newPositionLeft = --positionLeft;
        document.getElementById('hero').style.left = newPositionLeft+'px';
        break;
      default:
        console.log('default');
    }
  }

  get heroLeftPosition() {
    let left = parseInt(document.getElementById('hero').offsetLeft);
    return left;
  }

  get heroTopPosition() {
    let top = parseInt(document.getElementById('hero').offsetTop);
    return top;
  }

  destructor() {

  }
}
