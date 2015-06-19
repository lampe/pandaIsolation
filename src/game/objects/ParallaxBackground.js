game.module(
  'game.objects.ParallaxBackground'
).body(function() {
  game.createClass("ParallaxBackground", {
    init: function(){
      this.bgContainer = new game.Container().addTo(game.scene.stage);
      this.staticBg1 = new game.Sprite('images/hintergrund.jpg',game.system.width/2,game.system.height/2);
      this.staticBg1.anchor.set(0.5, 0.5);
      this.bgContainer.addChild(this.staticBg1); // Add the background to the bg container
      // this.staticBg2 = new game.Sprite('images/hintergrund_saturn.png',game.system.width/2,game.system.height/2);
      // this.staticBg2.anchor.set(0.5, 0.5);
      // this.bgContainer.addChild(this.staticBg2); // Add the background to the bg container

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
      // this.bgContainer.addChild(this.levelBg2); // Add the background to the bg container
      this.bgContainer.addChild(this.levelBg3);
      this.bgContainer.addChild(this.levelBg4);
      // this.bgContainer.addChild(this.levelBg5);
      // this.bgContainer.addChild(this.levelBg6);

      game.scene.addObject(this);
      game.switchPlayer = function(object){
        game.player = new game.Player('images/naut_sadtest.png',game.system.width / 4, game.system.height / 2);
        object.sprite.position = { x: -9999, y: -9999};
        object.sprite.runUpdate = false;
      };
      // console.log(this.levelBg.position, this.levelBg.texture.width * this.levelBg.scale.x);
    },
    update: function() {
      this.levelBg.position.x -= 1;
      this.levelBg2.position.x -= 0.5;
      this.levelBg3.position.x -= 0.5;
      this.levelBg4.position.x -= 0.5;
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
});
