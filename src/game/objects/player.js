game.module(
  'game.objects.player'
).body(function() {
  game.createClass('Player', {
    init: function(asset,x,y) {
      this.sprite = new game.TilingSprite(asset, 262, 477).addTo(game.scene.stage);
      this.sprite.position.x = x;
      this.sprite.position.y = y;
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.scale.x = 0.65;
      this.sprite.scale.y = 0.65;
      this.sanity = 0;
      game.scene.addObject(this);
    },
    // update: function() {
    //   if (game.accelerometer) {
    //     this.sprite.position.x -= game.accelerometer.y * game.system.delta * 50;
    //     this.sprite.position.y -= game.accelerometer.x * game.system.delta * 50;
    //   }
    // }
  });
});
