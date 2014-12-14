game.module(
  'game.objects.AnimationBubble'
).body(function() {
  game.createClass('AnimationBubble',{
    init: function(properties){
      this.sprite = new game.TilingSprite(properties.asset,749,589).addTo(game.scene.stage);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.position.x = game.system.width/2;
      this.sprite.position.y = game.system.height/2;
      // this.sprite.scale.x = 4;
      // this.sprite.scale.y = 4;
      this.frameCounter = 0;
      this.sprite.animatonFrames = this.sprite.texture.width / this.sprite.width;
      this.sprite.animatonFrame = 1;
      this.sprite.runUpdate = true;

      game.scene.addObject(this);
    },
    update: function(){
      if(this.sprite.runUpdate){
        this.frameCounter += 1;
        if(this.frameCounter%6 === 0){
          this.sprite.tilePosition.x += 749;
          if(this.sprite.animatonFrame === this.sprite.animatonFrames){
            this.sprite.runUpdate = false;
            this.scaleOut = new game.Tween(this.sprite.scale);
            this.scaleOut.to({ x:0, y:0 }, 1000);
            this.scaleOut.easing('Quadratic.InOut');
            this.scaleOut.start();
            setTimeout(game.switchPlayer ,900 ,game.player);
          }else{
            this.sprite.animatonFrame += 1;
          }
        }
      }
    }
  });
});
