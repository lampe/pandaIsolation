game.module(
  'game.objects.AnimationBubble'
).body(function() {
  game.createClass('AnimationBubble',{
    init: function(properties){
      console.log("animation")
      this.sprite = new game.TilingSprite(properties.asset,749,589).addTo(game.scene.stage);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.position.x = game.system.width/2;
      this.sprite.position.y = game.system.height/2;
      // this.sprite.scale.x = 4;
      // this.sprite.scale.y = 4;
      this.frameCounter = 0;
      this.sprite.nextRound = properties.nextRound;
      this.sprite.animatonFrames = this.sprite.texture.width / this.sprite.width;
      this.sprite.animatonFrame = 1;
      this.sprite.runUpdate = true;
      this.sprite.animationRunning = true;
      this.sprite.afterAnimationDone = function(){
        console.log(game.player);
        game.player.sprite.position.x = -9999;
        game.player.sprite.position.y = -9999;
        game.player = new game.Player('images/naut_sadtest.png',game.system.width / 4, game.system.height / 2);
        game.rounds.nextRound(this.nextRound);
        this.runUpdate = false;
      };
      game.scene.addObject(this);
    },
    update: function(){
      if(this.sprite.runUpdate){
        if(this.sprite.animationRunning){
          this.frameCounter += 1;
          if(this.frameCounter%6 === 0){
            this.sprite.tilePosition.x += 749;
            if(this.sprite.animatonFrame === this.sprite.animatonFrames){
              this.sprite.afterAnimationDoneTimer = new game.Timer();
              this.scaleOut = new game.Tween(this.sprite.scale);
              this.scaleOut.to({ x:0, y:0 }, 900);
              this.scaleOut.easing('Quadratic.InOut');
              this.scaleOut.start();
              this.sprite.animationRunning = false;
            }else{
              this.sprite.animatonFrame += 1;
            }
          }
        }
        if(this.sprite.afterAnimationDoneTimer !== undefined){
          console.log(this.sprite.afterAnimationDoneTimer.time());
          if(this.sprite.afterAnimationDoneTimer.time() >= 900){
            this.sprite.afterAnimationDone();
          }
        }
      }
    }
  });
});
