$(document).ready(function() {
  var hero;
  var bullet;
  var moveBullet;
  var moveArray = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];
  $(document).on('click', '#startButton', function(e) {
    e.preventDefault();
    $('#startButton').remove();
    $('body').css('background-image', 'url("img/backgrounds/trees.jpg")');
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');     
    hero = new Hero();
    hero.startHero();
    bullet = new Bullet();
    bullet.startBullet();
    moveBullet = setInterval(function() {
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
    let div1 = document.getElementById('hero').getBoundingClientRect();
    let div2 = document.getElementById('bullet').getBoundingClientRect();
    let r1 = div1.right;
    let l2 = div2.left;
    console.log(r1);
    console.log(l2);
    if(r1 > l2) {
      console.log('yes');
      clearInterval(moveBullet);
    } else{
      return false;
    }
  }
});
