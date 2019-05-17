$(document).ready(function() {
  var hero;
  var bullet;
  var moveArray = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];
  $(document).on('click', '#startButton', function(e) {
    e.preventDefault();
    $('#startButton').remove();
    hero = new Hero();
    hero.startHero();
    bullet = new Bullet();
    bullet.startBullet();
    setInterval(function() {
      bullet.moveBullet();
      meeting();
    }, 200);

  });

  $(document).keydown(function(e) {
    let key = e.key;
    if($.inArray(key, moveArray) !== -1) {
      hero.moveHero(e.key);
    } else {
      e.preventDefault();
    }
  });

  function meeting() {
    // console.log(parseInt(div1+60));
    // console.log(parseInt(div2-25));
    // if(div1 == div2) {
    //   alert('asdasd');
    // }
    let div1 = document.getElementById('hero');
    let div2 = document.getElementById('bullet');
    let x1 = div1.offsetLeft;
    let y1 = div1.offsetTop;
    let w1 = div1.offsetWidth;
    let h1 = div1.offsetHeight;
    let b1 = parseInt(y1 + h1);
    let r1 = parseInt(x1 + w1);
    let x2 = div2.offsetLeft;
    let y2 = div2.offsetTop;
    let w2 = div2.offsetWidth;
    let h2 = div2.offsetHeight;
    let b2 = parseInt(y2 + h2);
    let r2 = parseInt(x2 + w2);
    console.log(w1);
    console.log(w2);
    if(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      console.log('yes');
    } else{
      return false;
    }
  }
});
