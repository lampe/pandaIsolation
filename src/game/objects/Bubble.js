game.module(
  'game.objects.Bubble'
).body(function() {
  game.createClass("Bubble", {
    init: function(properties){
      var p = properties;
      this.spriteSheet = new game.SpriteSheet(p.asset, 210, 178);
      this.anim = this.spriteSheet.anim(this.spriteSheet.textures.length-1, 0);
      this.anim.animationSpeed = 0.1;
      this.anim.play();
      this.anim.addTo(game.scene.stage);
      this.anim.properties = p;
      this.anim.anchor.set(0.5, 0.5);
      this.anim.refToBubble = this;
      this.anim.alpha = 0;
      this.anim.runUpdate = true;
      this.anim.clicked = false;
      this.anim.nextRound = p.nextRound;
      this.anim.click = this.anim.tap = this.clickTap;
      this.anim.costumeClickTap = p.costumeClickTap;
      this.anim.interactive = true;
      this.introAnimation(p);
      game.scene.addObject(this);
    },
    update: function(){
      if(this.anim.scale.x >game.inRound.maxBubbleScale){
        game.rounds.nextRound("youlost");
      }
      if(this.anim.properties.type === "growingBubble"){
        if(this.anim.scale.x <= game.inRound.maxBubbleScale){
          this.anim.scale.x += 0.01;
          this.anim.scale.y += 0.01;
        }
      }
    },
    clickTap: function(){
      if(this.costumeClickTap){
        this.costumeClickTap();
      }else{
        if(this.clicked === false){
          if(this.properties.type === "correctBubble"){
            console.log("correct");
            game.inRound.gotAllCorrect(this.properties);
          }else if(this.properties.type === "smallerMakingBubble"){
            game.inRound.mainBubble.anim.scale.x -= 0.10;
            game.inRound.mainBubble.anim.scale.y -= 0.10;
          }
          if(this.properties.outroAnimation === "plop"){
            this.tweenAlpha.stop();
            this.tweenAlpha = new game.Tween(this.scale);
            this.tweenAlpha.to({ "x": 0, "y": 0 }, 1000);
            this.tweenAlpha.easing('Quadratic.InOut');
            this.tweenAlpha.start();
          }else if(this.properties.outroAnimation === "biggerPlop"){
            this.tweenAlpha.stop();
            this.tweenAlpha = new game.Tween(this.scale);
            this.tweenAlpha.to({ "x": 2.0, "y": 2.0 }, 100);
            this.tweenAlpha.easing('Quadratic.InOut');
            this.tweenAlpha.start();
            var that = this;
            game.scene.addTimer(100, function(){
              that.tweenAlpha.stop();
              that.tweenAlpha = new game.Tween(that.scale);
              that.tweenAlpha.to({ "x": 0, "y": 0 }, 800);
              that.tweenAlpha.easing('Quadratic.InOut');
              that.tweenAlpha.start();
            })
          }else{
            game.audio.playSound("audio/clickbubble.wav");
            this.tweenAlpha.stop();
            this.tweenAlpha = new game.Tween(this.position);
            this.tweenAlpha.to({ x: game.system.width/2, y: game.system.height/2 }, 1000);
            this.tweenAlpha.easing('Quadratic.InOut');
            this.tweenAlpha.start();
            this.tweenAlpha = new game.Tween(this.scale);
            this.tweenAlpha.to({ "x": 4, "y": 4 }, 1000);
            this.tweenAlpha.easing('Quadratic.InOut');
            this.tweenAlpha.start();
            this.animationeTimer = new game.Timer();
            var that = this;
            game.scene.addTimer(1000, function(){
              new game.AnimationBubble({
                "asset":that.properties.clickedAnimation,
                "x":0,
                "y":game.system.height / 4,
                "nextRound": that.nextRound
              });
              that.remove();
              that.runUpdate = false;
              that.animationeTimer.pause();
            });
          }
        }
      }
      this.clicked = true;
    },
    introAnimation: function(p){
      var that = this;
      if(p.introAnimation === "plop"){
        that.anim.interactive = true;
        that.anim.alpha = 0.5;
        that.anim.scale = {"x": 0, "y": 0};
        that.anim.position.x = p.x;
        that.anim.position.y = p.y;
        var length = Math.floor(Math.random() * 1000) + 100;
        that.anim.tweenAlpha = new game.Tween(that.anim);
        that.anim.tweenAlpha.to({"alpha": 1}, length);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
        that.anim.tweenAlpha = new game.Tween(that.anim.scale);
        that.anim.tweenAlpha.to({ "x": 1, "y": 1 }, 500);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
      }else{
        this.anim.interactive = true;
        this.anim.alpha = 0.1;
        this.anim.position.x = game.system.width+210;
        this.anim.position.y = p.y;
        var length = Math.floor(Math.random() * 12000) + 7000;
        this.anim.tweenAlpha = new game.Tween(this.anim);
        this.anim.tweenAlpha.to({"alpha": 1}, length);
        this.anim.tweenAlpha.easing('Quadratic.InOut');
        this.anim.tweenAlpha.start();
        this.anim.tweenAlpha = new game.Tween(this.anim.position);
        var distance = (game.player.anim.position.x + p.x);
        this.anim.tweenAlpha.to({ "x": distance }, length);
        this.anim.tweenAlpha.easing('Quadratic.InOut');
        this.anim.tweenAlpha.start();
      }
    }
  });
});
