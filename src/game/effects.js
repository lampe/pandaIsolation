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
  game.effects.Displacement = {};
  game.effects.Displacement.isStarted = false;
  game.effects.Displacement.start = function(){
    var displacementTexture = game.PIXI.Texture.fromImage("http://i.imgur.com/2yYayZk.png");
    this.displacementFilter = new game.PIXI.DisplacementFilter(displacementTexture);
    this.isStarted = true;
    this.displacementFilter.type = "displacement";
    // game.scene.stage.filters = [this.displacementFilter];
    game.scene.bg.bgContainer.filters = [this.displacementFilter];
  };
  game.effects.Displacement.stop = function(){
    game.scene.stage.filters = null;
    // for (var i = 0; i < game.scene.stage.filters.length; i++) {
    //   if(game.scene.stage.filters[i].type === "displacement"){
    //     game.scene.stage.filters.splice(i, 1);
    //     // delete game.scene.stage.filters[i];
    //   }
    // }
  };
  game.effects.CameraWabbel = {};
  game.effects.CameraWabbel.start = function(){
    game.effects.CameraWabbel.directions = ["ne","se","nw","sw"];
    game.effects.CameraWabbel.directionsTimer = 0;
    game.effects.CameraWabbel.directionsBackToCenter = true;
    game.effects.CameraWabbel.directionsDuration = 300;
    game.effects.CameraWabbel.directionsDistance = 20;
    game.effects.CameraWabbel.directionsBackPosition = {};
    game.effects.CameraWabbel.currentDirection = game.effects.CameraWabbel.directions[Math.floor(Math.random() * game.effects.CameraWabbel.directions.length)];
    game.effects.CameraWabbel.isStarted = true;
  };
  game.effects.CameraWabbel.stop = function(){
    game.effects.CameraWabbel.isStarted = false;
  };
  game.effects.CameraWabbel.easeInOut = function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  // bf = new game.PIXI.DisplacementFilter();
  // pf = new game.PIXI.PixelateFilter()
  // game.scene.bg.bgContainer.filters = [bf,pf]
  // game.player.anim.filters = [bf,pf]
  // game.audio.playMusic('music');
  // game.audio.setMusicVolume(0.4);
  // game.effects.shakeitbaby(10,100,10);
});
