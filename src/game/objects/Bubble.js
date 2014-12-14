game.module(
  'game.objects.Bubble'
).body(function() {
  game.createClass("Bubble", {
    init: function(properties){
      var p = properties;
      this.sprite = new game.TilingSprite(p.asset, 210,178).addTo(game.scene.stage);
      this.sprite.properties = p;
      this.sprite.position.x = game.system.width+210;
      this.sprite.position.y = p.y;
      this.sprite.speed.set(50, 100);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.alpha = 0.1;
      this.sprite.refToBubble = this;
      this.sprite.runUpdate = true;
      game.scene.addObject(this);
      this.sprite.animatonFrames = this.sprite.texture.width / this.sprite.width;
      this.sprite.animatonFrame = 1;
      this.sprite.click = this.sprite.tap = function(){
        game.audio.playSound("audio/clickbubble.wav");
        this.clicked = true;
        this.tweenAlpha.stop();
        this.tweenAlpha = new game.Tween(this.position);
        this.tweenAlpha.to({ x: game.system.width/2, y: game.system.height/2 }, 1000);
        this.tweenAlpha.easing('Quadratic.InOut');
        this.tweenAlpha.start();
        this.tweenAlpha = new game.Tween(this.scale);
        this.tweenAlpha.to({ "x": 4, "y": 4 }, 1000);
        this.tweenAlpha.easing('Quadratic.InOut');
        this.tweenAlpha.start();
        function TO(object){
          console.log(object)
          new game.animationBubble({"asset":object.properties.clickedAnimation, "x":0, "y":game.system.height / 4});
          // game.scene.removeObject(this.refToBubble);
          // object.refToBubble._destroyCachedSprite();
          object.position ={ x: -9999, y: -9999};
          object.runUpdate = false;
        }
        setTimeout(TO, 1000, this);
      };
      this.sprite.interactive = true;
      this.frameCounter = 0;
      // console.log(this.sprite.position.x)
      var length = Math.floor(Math.random() * 12000) + 7000;
      this.sprite.tweenAlpha = new game.Tween(this.sprite);
      this.sprite.tweenAlpha.to({"alpha": 1}, length);
      this.sprite.tweenAlpha.easing('Quadratic.InOut');
      this.sprite.tweenAlpha.start();
      this.sprite.tweenAlpha = new game.Tween(this.sprite.position);
      var distance = (game.player.sprite.position.x + p.x);
      this.sprite.tweenAlpha.to({ "x": distance }, length);
      this.sprite.tweenAlpha.easing('Quadratic.InOut');
      this.sprite.tweenAlpha.start();

    },
    update: function(){
      if(this.sprite.runUpdate){
        this.frameCounter += 1;
        if(this.frameCounter%30 === 0){
          if(this.sprite.animatonFrames === this.sprite.animatonFrame){
            this.sprite.animatonFrame = 1;
          }else{
            this.sprite.animatonFrame += 1;
          }
          this.sprite.tilePosition.x += 210;
        }
        // if(this.sprite.position.x - game.player.sprite.position.x >= 500){
        //   this.sprite.position.x -= 5;
        // }
        // if(this.sprite.clicked){
        //   this.sprite.scale.x += 0.1;
        //   this.sprite.scale.y += 0.1;
        // }
        // if(this.sprite.scale.x >= 4){
        //   this.sprite.clicked = false;
        // }
      }
    }
  });
});
