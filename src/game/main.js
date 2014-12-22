game.module(
  'game.main',
  'game.pixi'
)
.require(
  'game.assets',
  'game.objects',
  'game.effects',
  'game.rounds'
)
.body(function() {
  game.createScene('Main', {
      init: function() {
        this.addTimer(1000);
        this.bg = new game.ParallaxBackground();
        game.player = new game.Player({
          "asset":'images/naut_test.png',
          "position": {
            "x": game.system.width / 4,
            "y": game.system.height / 2
          },
          "spriteSize": {
            "x": 262,
            "y": 477
          }
        });
        game.rounds.start();
        // bf = new game.PIXI.DisplacementFilter();
        // pf = new game.PIXI.PixelateFilter()
        // game.scene.bg.bgContainer.filters = [bf,pf]
        // game.player.anim.filters = [bf,pf]
        // game.audio.playMusic('music');
        // game.audio.setMusicVolume(0.4);
        // game.effects.shakeitbaby(10,100,10);
      }
  });
});
