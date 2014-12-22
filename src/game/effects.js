game.module(
  'game.effects'
)
.require(
  'game.assets',
  'game.objects'
)
.body(function() {
  game.effects = {};
  game.effects.shakeitbaby = function(duration,buildup,cooldown){
    this.shake = [];
    // var buildup = 30;
    this.shake[0] = new game.Tween(game.scene.stage.position);
    for (i = 1; i < buildup; i++) {
      this.shake[i] = new game.Tween(game.scene.stage.position);
      if(i%2 === 0){
        this.shake[i].to({x:Math.floor(Math.random() * i) + 1, y:Math.floor(Math.random() * 5) + 1}, 50);
      }else{
        this.shake[i].to({x:Math.floor(Math.random() * 1) - i, y:Math.floor(Math.random() * 1) - 5}, 50);
      }
      this.shake[i-1].chain(this.shake[i]);
    }
    for (i = buildup; i < duration+buildup; i++) {
      this.shake[i] = new game.Tween(game.scene.stage.position);
      if(i%2 === 0){
        this.shake[i].to({x:Math.floor(Math.random() * 15) + 1, y:Math.floor(Math.random() * 15) + 1}, 30);
      }else{
        this.shake[i].to({x:Math.floor(Math.random() * 1) - 15, y:Math.floor(Math.random() * 1) - 15}, 30);
      }
      this.shake[i-1].chain(this.shake[i]);
    }
    // var cooldown = 30;
    var cooldownshake = 30;
    for (i = duration+buildup; i < duration+buildup+cooldown; i++) {
      this.shake[i] = new game.Tween(game.scene.stage.position);
      if(i%2 === 0){
        this.shake[i].to({x:Math.floor(Math.random() * cooldownshake) + 1, y:Math.floor(Math.random() * 5) + 1}, 50);
      }else{
        this.shake[i].to({x:Math.floor(Math.random() * 1) - cooldownshake, y:Math.floor(Math.random() * 1) - 5}, 50);
      }
      this.shake[i-1].chain(this.shake[i]);
      cooldownshake -= 1;
    }
    this.shake[this.shake.length] = new game.Tween(game.scene.stage.position);
    this.shake[this.shake.length-1].to({x:0,y:0}, 100);
    this.shake[this.shake.length-2].chain(this.shake[this.shake.length-1]);

    this.shake[0].start();
  };

});
