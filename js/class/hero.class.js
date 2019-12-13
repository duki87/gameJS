class Hero {
  constructor(health = 100, positionX = 20, positionY = 510) {
    this.health = health;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  startHero() {
    //console.log('startHero');
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = 'img/hero.png';
    div.setAttribute('id', 'hero');
    div.classList.add('hero');
    div.appendChild(img);
    document.getElementById('area').appendChild(div);
  }

  moveHero(direction) {
    switch(direction) {
      case 'ArrowUp':
        this.heroTopPosition;
        this.positionY -= 50;
        document.getElementById('hero').style.top = this.positionY+'px';
        break;
      case 'ArrowDown':
        this.heroTopPosition;
        this.positionY += 50;
        document.getElementById('hero').style.top = this.positionY+'px';
        break;
      case 'ArrowRight':
        this.heroLeftPosition;
        this.positionX += 3;
        document.getElementById('hero').style.left = this.positionX+'px';
        break;
      case 'ArrowLeft':
        this.heroLeftPosition;
        this.positionX -= 3;
        document.getElementById('hero').style.left = this.positionX+'px';
        break;
      default:
        console.log('default');
    }
  }

  get heroLeftPosition() {
    this.positionX = parseInt(document.getElementById('hero').offsetLeft);
  }

  get heroTopPosition() {
    this.positionY = parseInt(document.getElementById('hero').offsetTop);
  }

  increaseHealth(val) {
    this.health += val;
  }

  decreaseHealth(val) {
    this.health -= val;
  }

  // moveHero(direction) {
  //   switch(direction) {
  //     case 'ArrowUp':
  //       let positionUp = this.heroTopPosition;
  //       let newPositionUp = --positionUp;
  //       document.getElementById('hero').style.top = newPositionUp+'px';
  //       break;
  //     case 'ArrowDown':
  //       let positionDown = this.heroTopPosition;
  //       let newPositionDown = ++positionDown;
  //       document.getElementById('hero').style.top = newPositionDown+'px';
  //       break;
  //     case 'ArrowRight':
  //       let positionRight = this.heroLeftPosition;
  //       let newPositionRight = ++positionRight;
  //       document.getElementById('hero').style.left = newPositionRight+'px';
  //       break;
  //     case 'ArrowLeft':
  //       let positionLeft = this.heroLeftPosition;
  //       let newPositionLeft = --positionLeft;
  //       document.getElementById('hero').style.left = newPositionLeft+'px';
  //       break;
  //     default:
  //       console.log('default');
  //   }
  // }
  //
  // get heroLeftPosition() {
  //   let left = parseInt(document.getElementById('hero').offsetLeft);
  //   return left;
  // }
  //
  // get heroTopPosition() {
  //   let top = parseInt(document.getElementById('hero').offsetTop);
  //   return top;
  // }

  destructor() {

  }
}
