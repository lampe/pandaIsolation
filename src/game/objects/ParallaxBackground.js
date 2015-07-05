game.module(
  'game.objects.ParallaxBackground'
).body(function() {
  game.createClass("ParallaxBackground", {
    init: function() {
      this.bgContainer = new game.Container().addTo(game.scene.stage);
      this.staticBg1 = new game.Sprite('backgrounds/hintergrund.jpg', game.system.width / 2, game.system.height / 2);
      this.staticBg1.anchor.set(0.5, 0.5);
      this.staticBg1.name = "staticBg1";
      this.bgContainer.addChild(this.staticBg1);
      this.staticD1 = new game.Sprite('backgrounds/hintergrund_d1.jpg', game.system.width / 2, game.system.height / 2);
      this.staticD1.anchor.set(0.5, 0.5);
      this.staticD1.alpha = 0;
      this.staticD1.name = "staticD1";
      this.bgContainer.addChild(this.staticD1);
      this.staticD2 = new game.Sprite('backgrounds/hintergrund_d2.jpg', game.system.width / 2, game.system.height / 2);
      this.staticD2.anchor.set(0.5, 0.5);
      this.staticD2.alpha = 0;
      this.staticD2.name = "staticD2";
      this.bgContainer.addChild(this.staticD2);
      this.staticM1 = new game.Sprite('backgrounds/hintergrund_m1.jpg', game.system.width / 2, game.system.height / 2);
      this.staticM1.anchor.set(0.5, 0.5);
      this.staticM1.alpha = 0;
      this.staticM1.name = "staticM1";
      this.bgContainer.addChild(this.staticM1);
      this.staticM2 = new game.Sprite('backgrounds/hintergrund_m2.jpg', game.system.width / 2, game.system.height / 2);
      this.staticM2.anchor.set(0.5, 0.5);
      this.staticM2.alpha = 0;
      this.staticM2.name = "staticM2";
      this.bgContainer.addChild(this.staticM2);

      this.levelBg = new game.TilingSprite('backgrounds/sterne512.png', game.system.width, game.system.height);
      this.levelBg.position.set(game.system.width / 2, game.system.height / 2);
      this.levelBg.anchor.set(0.5, 0.5);
      this.levelBg.alpha = 0.7;

      this.levelBg2 = new game.TilingSprite('backgrounds/sterne512.png', game.system.width, game.system.height);
      this.levelBg2.position.set(game.system.width + (game.system.width / 2), game.system.height / 2);
      this.levelBg2.anchor.set(0.5, 0.5);
      this.levelBg2.alpha = 0.5;

      this.levelBg3 = new game.TilingSprite('backgrounds/sterne1024.png', game.system.width, game.system.height);
      this.levelBg3.position.set(game.system.width / 2, game.system.height / 2);
      this.levelBg3.anchor.set(0.5, 0.5);
      this.levelBg3.alpha = 0.5;

      this.levelBg4 = new game.TilingSprite('backgrounds/sterne1024.png', game.system.width, game.system.height);
      this.levelBg4.position.set(game.system.width + (game.system.width / 2), game.system.height / 2);
      this.levelBg4.anchor.set(0.5, 0.5);
      this.levelBg4.alpha = 0.5;


      this.bgContainer.addChild(this.levelBg);
      this.bgContainer.addChild(this.levelBg2);
      this.bgContainer.addChild(this.levelBg3);
      this.bgContainer.addChild(this.levelBg4);
      this.currentBackground = this.staticBg1;
      game.scene.addObject(this);
    },
    changeBackground: function(bg) {
      console.log(this.currentBackground);
      if(this.currentBackground.name === bg){
        return false;
      }
      this.tweenOut = new game.Tween(this.currentBackground);
      this.tweenOut.easing('Quadratic.InOut');
      this.tweenOut.to({
        alpha: 0
      }, 3000);
      this.tweenOut.start();

      this.tweenIn = new game.Tween(this[bg]);
      this.tweenIn.easing('Quadratic.InOut');
      this.tweenIn.start();
      this.tweenIn.to({
        alpha: 1
      }, 3000);
      this.currentBackground = this[bg];
    },
    update: function() {
      this.levelBg.position.x -=  1.7;
      this.levelBg2.position.x -= 1.7;
      this.levelBg3.position.x -= 5.2;
      this.levelBg4.position.x -= 5.2;

      if (this.levelBg.position.x <= -(game.system.width - (game.system.width / 2))) {
        this.levelBg.position.set((game.system.width + (game.system.width / 2)), game.system.height / 2);
      }
      if (this.levelBg2.position.x <= -(game.system.width - (game.system.width / 2))) {
        this.levelBg2.position.set((game.system.width + (game.system.width / 2)), game.system.height / 2);
      }
      if (this.levelBg3.position.x <= -(game.system.width - (game.system.width / 2))) {
        this.levelBg3.position.set((game.system.width + (game.system.width / 2)), game.system.height / 2);
      }
      if (this.levelBg4.position.x <= -(game.system.width - (game.system.width / 2))) {
        this.levelBg4.position.set((game.system.width + (game.system.width / 2)), game.system.height / 2);
      }
    }
  });
});
