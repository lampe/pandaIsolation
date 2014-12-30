game.module(
  'game.objects.AnimationBubble'
).body(function() {
  game.createClass('AnimationBubble',{
    init: function(properties){
      this.spriteSheet = new game.SpriteSheet(properties.asset,749,589);
      this.anim = this.spriteSheet.anim(this.spriteSheet.textures.length-1, 0);
      this.anim.animationSpeed = 0.1;
      this.anim.anchor.set(0.5, 0.5);
      this.anim.position.x = game.system.width/2;
      this.anim.position.y = game.system.height/2;
      this.anim.nextRound = properties.nextRound;
      this.anim.addTo(game.scene.stage);
      this.anim.play();
      this.anim.loop=false;
      game.scene.addObject(this);
      this.anim.onComplete = function(){
        this.afterAnimationDoneTimer = new game.Timer();
        this.scaleOut = new game.Tween(this.scale);
        this.scaleOut.to({ x:0, y:0 }, 900);
        this.scaleOut.easing('Quadratic.InOut');
        this.scaleOut.start();
        this.animationRunning = false;
        this.remove();
        // game.player = new game.Player('images/naut_sadtest.png',game.system.width / 4, game.system.height / 2);
        game.rounds.nextRound(this.nextRound);
      };
    },
    update: function(){
    }
  });
});
