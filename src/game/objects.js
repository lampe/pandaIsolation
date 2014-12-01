game.module(
  'game.objects'
)
.body(function() {
  game.createClass('Player', {
    init: function(asset,x,y) {
      this.sprite = new game.TilingSprite(asset, 262, 477).addTo(game.scene.stage);
      this.sprite.position.x = x;
      this.sprite.position.y = y;
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.scale.x = 0.65;
      this.sprite.scale.y = 0.65;
      game.scene.addObject(this);
    },
    // update: function() {
    //   if (game.accelerometer) {
    //     this.sprite.position.x -= game.accelerometer.y * game.system.delta * 50;
    //     this.sprite.position.y -= game.accelerometer.x * game.system.delta * 50;
    //   }
    // }
  });

  game.createClass("ParallaxBackground", {
    init: function(){
      this.bgContainer = new game.Container().addTo(game.scene.stage);
      this.staticBg1 = new game.Sprite('images/hintergrund.jpg',game.system.width/2,game.system.height/2);
      this.staticBg1.anchor.set(0.5, 0.5);
      this.bgContainer.addChild(this.staticBg1); // Add the background to the bg container
      this.staticBg2 = new game.Sprite('images/hintergrund_saturn.png',game.system.width/2,game.system.height/2);
      this.staticBg2.anchor.set(0.5, 0.5);
      this.bgContainer.addChild(this.staticBg2); // Add the background to the bg container

      this.levelBg = new game.TilingSprite('images/sterne512.png',game.system.width,game.system.height);
      this.levelBg.position.set(game.system.width/2, game.system.height/2);
      this.levelBg.anchor.set(0.5, 0.5);

      this.levelBg2 = new game.TilingSprite('images/sterne512.png',game.system.width,game.system.height);
      this.levelBg2.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      this.levelBg2.anchor.set(0.5, 0.5);

      this.levelBg3 = new game.TilingSprite('images/sterne256.png',game.system.width,game.system.height);
      this.levelBg3.position.set(game.system.width/2, game.system.height/2);
      this.levelBg3.anchor.set(0.5, 0.5);

      this.levelBg4 = new game.TilingSprite('images/sterne256.png',game.system.width,game.system.height);
      this.levelBg4.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      this.levelBg4.anchor.set(0.5, 0.5);

      // this.levelBg5 = new game.TilingSprite('images/BG_Layer3.png',game.system.width,game.system.height);
      // this.levelBg5.position.set(game.system.width/2, game.system.height/2);
      // this.levelBg5.anchor.set(0.5, 0.5);
      //
      // this.levelBg6 = new game.TilingSprite('images/BG_Layer3.png',game.system.width,game.system.height);
      // this.levelBg6.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      // this.levelBg6.anchor.set(0.5, 0.5);

      this.bgContainer.addChild(this.levelBg); // Add the background to the bg container
      this.bgContainer.addChild(this.levelBg2); // Add the background to the bg container
      this.bgContainer.addChild(this.levelBg3);
      this.bgContainer.addChild(this.levelBg4);
      // this.bgContainer.addChild(this.levelBg5);
      // this.bgContainer.addChild(this.levelBg6);

      game.scene.addObject(this);
      game.switchPlayer = function(object){
        game.player = new game.Player('images/naut_sadtest.png',game.system.width / 4, game.system.height / 2);
        console.log(object)
        object.sprite.position = { x: -9999, y: -9999};
        object.sprite.runUpdate = false;
      };
      // console.log(this.levelBg.position, this.levelBg.texture.width * this.levelBg.scale.x);
    },
    update: function() {
      this.levelBg.position.x -= 5;
      this.levelBg2.position.x -= 5;
      this.levelBg3.position.x -= 3;
      this.levelBg4.position.x -= 3;
      // this.levelBg5.position.x -= 1;
      // this.levelBg6.position.x -= 1;
      if(this.levelBg.position.x <= -(game.system.width-(game.system.width/2))){
        this.levelBg.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      }
      if(this.levelBg2.position.x <= -(game.system.width-(game.system.width/2))){
        this.levelBg2.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      }
      if(this.levelBg3.position.x <= -(game.system.width-(game.system.width/2))){
        this.levelBg3.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      }
      if(this.levelBg4.position.x <= -(game.system.width-(game.system.width/2))){
        this.levelBg4.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      }
      // if(this.levelBg5.position.x <= -(game.system.width-(game.system.width/2))){
      //   this.levelBg5.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      // }
      // if(this.levelBg6.position.x <= -(game.system.width-(game.system.width/2))){
      //   this.levelBg6.position.set((game.system.width+(game.system.width/2)), game.system.height/2);
      // }
    }
  });
game.createClass('animationBubble',{
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
