$(document).ready(function() {
  var hero;
  var sound;
  var bullet;
  var moveBullet;
  var sound = new Sound();
  var moveArray = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];

  $(document).on('click', '#startButton', function(e) {
    e.preventDefault();
    sound.id = 'start_game';
    sound.sound = 'start';
    sound.playSound();
    $('#startButton').remove();
    $('#healthBar').removeClass('hidden');
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
      if(key == 'ArrowUp') {
        console.log('sinsdf');
        sound.id = 'hero_sounds';
        sound.sound = 'jump';
        sound.playSound();
      }
    } else {
      e.preventDefault();
    }
  });

  function meeting() {
    let div1 = document.getElementById('hero').getBoundingClientRect();
    let div2 = document.getElementById('bullet').getBoundingClientRect();
    let r1 = div1.right;
    let r2 = div2.right;
    let l1 = div1.left;
    let l2 = div2.left;
    let t1 = div1.top;
    let t2 = div2.top;
    let b1 = div1.bottom;
    let b2 = div2.bottom;
    if(r1 > l2 && b2 > t1 && l1 < r2 && b1 > t2) {
      //console.log(r2 + ' ' + l1);
      clearInterval(moveBullet);
      hero.decreaseHealth(20);
      updateHealth(20);
    } else {
      return false;
    }
  }

  function updateHealth(val) {
    $('#health').text('');
    $('#health').text('-' + val);
    setTimeout(function(){ $('#health').text(hero.health); }, 1000);
  }
});
