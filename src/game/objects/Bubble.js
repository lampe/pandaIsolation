game.module(
  'game.objects.Bubble'
).require(
  'game.objectsManager'
).body(function() {
  game.createClass("Bubble", {
    init: function(properties) {
      var that = this;
      var p = properties;
      if (p.size === undefined) {
        p.size = {};
        p.size.x = 152;
        p.size.y = 115;
      }
      that.spriteSheet = new game.SpriteSheet(p.asset, p.size.x, p.size.y);
      that.anim = that.spriteSheet.anim(that.spriteSheet.textures.length - 1, 0);
      that.anim.animationSpeed = 0.1;
      that.anim.play();
      that.anim.addTo(game.scene.stage);
      that.anim.properties = p;
      that.anim.anchor.set(0.5, 0.5);
      that.anim.refToBubble = that;
      that.anim.alpha = 0;
      that.anim.runUpdate = true;
      that.anim.clicked = false;
      that.anim.nextRound = p.nextRound;
      that.anim.click = that.anim.tap = that.clickTap;
      that.anim.costumeClickTap = p.costumeClickTap;
      that.anim.interactive = true;
      that.introAnimation(p);
      that.anim.gid = game.scene.objectsManager.idGenerator();
      game.scene.objectsManager.containter.addChild(this.anim);
    },
    update: function() {
      var that = this;
      if (that.anim.scale.x > game.inRound.maxBubbleScale) {
        game.rounds.nextRound("youlost");
      }
      if (that.anim.properties.type === "growingBubble") {
        if (that.anim.scale.x <= game.inRound.maxBubbleScale) {
          that.anim.scale.x += 0.01;
          that.anim.scale.y += 0.01;
        }
      }
    },
    clickTap: function() {
      var that = this;
      if (that.costumeClickTap) {
        that.costumeClickTap();
        return false;
      } else {
        if (that.clicked === false) {
          if (that.properties.type === "correctBubble") {
            game.inRound.gotAllCorrect(that.properties);
          } else if (that.properties.type === "smallerMakingBubble") {
            game.inRound.mainBubble.anim.scale.x -= 0.10;
            game.inRound.mainBubble.anim.scale.y -= 0.10;
          }
          if (that.properties.outroAnimation === "plop") {
            that.tweenAlpha.stop();
            that.tweenAlpha = new game.Tween(that.scale);
            that.tweenAlpha.to({
              "x": 0,
              "y": 0
            }, 1000);
            that.tweenAlpha.easing('Quadratic.InOut');
            that.tweenAlpha.start();
          } else if (that.properties.outroAnimation === "biggerPlop") {
            that.tweenAlpha.stop();
            that.tweenAlpha = new game.Tween(that.scale);
            that.tweenAlpha.to({
              "x": 2.0,
              "y": 2.0
            }, 100);
            that.tweenAlpha.easing('Quadratic.InOut');
            that.tweenAlpha.start();
            game.scene.addTimer(100, function() {
              that.tweenAlpha.stop();
              that.tweenAlpha = new game.Tween(that.scale);
              that.tweenAlpha.to({
                "x": 0,
                "y": 0
              }, 800);
              that.tweenAlpha.easing('Quadratic.InOut');
              that.tweenAlpha.start();
            });
          } else {
            game.audio.playSound("audio/clickbubble.wav");
            that.tweenAlpha.stop();
            that.tweenAlpha = new game.Tween(that.position);
            that.tweenAlpha.to({
              x: game.system.width / 1.5,
              y: game.system.height / 2
            }, 1000);
            that.tweenAlpha.easing('Quadratic.InOut');
            that.tweenAlpha.start();
            that.tweenAlpha = new game.Tween(that.scale);
            that.tweenAlpha.to({
              "x": 4,
              "y": 4
            }, 1000);
            that.tweenAlpha.easing('Quadratic.InOut');
            that.tweenAlpha.start();
            that.animationeTimer = new game.Timer();
            game.scene.addTimer(1000, function() {
              var animation = new game.AnimationMovie({
                "path": that.properties.clickedAnimation,
                "animationFrames": that.properties.animationFrames,
                "nextRound": that.nextRound,
                'playerTransitionAnimation': that.properties.playerTransitionAnimation,
              });
              animation.play();
              that.remove();
              that.runUpdate = false;
              that.animationeTimer.pause();
            });
          }
        }
      }
      that.clicked = true;
    },
    introAnimation: function(p) {
      var that = this;
      var length = null;
      if (p.introAnimation === "plop") {
        that.anim.interactive = true;
        that.anim.alpha = 0.5;
        that.anim.scale = {
          "x": 0,
          "y": 0
        };
        that.anim.position.x = p.x;
        that.anim.position.y = p.y;
        length = Math.floor(Math.random() * 1000) + 100;
        that.anim.tweenAlpha = new game.Tween(that.anim);
        that.anim.tweenAlpha.to({
          "alpha": 1
        }, length);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
        that.anim.tweenAlpha = new game.Tween(that.anim.scale);
        that.anim.tweenAlpha.to({
          "x": 1,
          "y": 1
        }, 500);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
      } else {
        that.anim.interactive = true;
        that.anim.alpha = 0.1;
        that.anim.position.x = game.system.width + 210;
        that.anim.position.y = p.y;
        length = Math.floor(Math.random() * 12000) + 7000;
        that.anim.tweenAlpha = new game.Tween(that.anim);
        that.anim.tweenAlpha.to({
          "alpha": 1
        }, length);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
        that.anim.tweenAlpha = new game.Tween(that.anim.position);
        var Xdistance = (game.player.properties.position.x + p.x);
        var Ydistance = (game.player.properties.position.y + p.y);
        that.anim.tweenAlpha.to({
          "x": Xdistance,
          "y": Ydistance
        }, length);
        that.anim.tweenAlpha.easing('Quadratic.InOut');
        that.anim.tweenAlpha.start();
      }
    }
  });
});
