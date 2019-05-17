class Bullet {
  constructor(positionX = 0, positionY = 0) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  startBullet() {
    //console.log('startBullet');
    let div = document.createElement('div');
    div.setAttribute('id', 'bullet');
    div.classList.add('bullet');
    document.getElementById('area').appendChild(div);
  }

  moveBullet() {
    this.bulletLeftPosition;
    this.positionX -= 24;
    document.getElementById('bullet').style.left = this.positionX+'px';
  }

  get bulletLeftPosition() {
    this.positionX = parseInt(document.getElementById('bullet').offsetLeft);
  }

  get bulletTopPosition() {
    this.positionX = parseInt(document.getElementById('bullet').offsetTop);
  }

  // moveBullet() {
  //   let positionLeft = this.bulletLeftPosition;
  //   let newPositionLeft = positionLeft-24;
  //   document.getElementById('bullet').style.left = newPositionLeft+'px';
  // }
  //
  // get bulletLeftPosition() {
  //   let left = parseInt(document.getElementById('bullet').offsetLeft);
  //   return left;
  // }

  destructor() {

  }
}
