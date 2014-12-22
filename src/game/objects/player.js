game.module(
  'game.objects.player'
).body(function() {
  game.createClass('Player', {
    init: function(properties) {
      p = this.properties = properties;
      console.log(p);
      this.spriteSheet = new game.SpriteSheet(p.asset, p.spriteSize.x, p.spriteSize.y);
      this.anim = this.spriteSheet.anim(this.spriteSheet.textures.length, 0);
      this.anim.animationSpeed = 0.1;
      this.anim.play();
      this.anim.position.x = p.position.x;
      this.anim.position.y = p.position.y;
      this.anim.anchor.set(0.5, 0.5);
      // this.anim.scale.x = 0.65;
      // this.anim.scale.y = 0.65;
      this.sanity = 0;
      this.anim.addTo(game.scene.stage);
      game.scene.addObject(this);
    },
    // update: function() {
    //   if (game.accelerometer) {
    //     this.sprite.position.x -= game.accelerometer.y * game.system.delta * 50;
    //     this.sprite.position.y -= game.accelerometer.x * game.system.delta * 50;
    //   }
    // }
    changePlayerAnimatoin: function(properties){
      pNew = properties;
      this.anim.remove();
      this.spriteSheet = new game.SpriteSheet(properties.asset, properties.spriteSize.x, properties.spriteSize.y);
      this.anim = this.spriteSheet.anim(this.spriteSheet.textures.length, 0);
      this.anim.animationSpeed = 0.1;
      this.anim.play();
      this.anim.position.x = pNew.position.x;
      this.anim.position.y = pNew.position.y;
      this.anim.anchor.set(0.5, 0.5);
      console.log(this.anim,this.spriteSheet.textures.length-1)
      this.anim.addTo(game.scene.stage);
      this.properties = properties;
      game.scene.addObject(this);
    }
  });
});
