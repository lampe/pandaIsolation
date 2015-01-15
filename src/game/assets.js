game.module(
  'game.assets'
)
.body(function() {
  //background
  game.addAsset('images/sterne512.png');
  game.addAsset('images/sterne256.png');
  game.addAsset('images/hintergrund.jpg');
  game.addAsset('images/hintergrund_saturn.png');

  //general
  game.addAsset('images/particle.png');
  game.addAsset('images/lose.png');
  game.addAsset('images/gameover_depr.png');
  game.addAsset('images/gameover_manie.png');
  game.addAsset('images/gameover_okay.png');

  //player
  game.addAsset('images/player.png');
  game.addAsset('images/naut_test.png');
  game.addAsset('images/naut_sadtest.png');

  //fucking bubbles !!!
  game.addAsset('images/bubble_test_animsheet.png');
  game.addAsset('images/bubble_toast_animsheet.png');
  game.addAsset("images/bubble_talk.png");
  game.addAsset("images/thought_nope.png");
  game.addAsset("images/thought_yup.png");

  //Animation Bubbles
  game.addAsset('images/thought_test.png');
  game.addAsset('images/thought_talk.png');

  //sound
  game.addAudio('audio/bgmusic.ogg', 'music');
  game.addAudio('audio/clickbubble.wav');
});
