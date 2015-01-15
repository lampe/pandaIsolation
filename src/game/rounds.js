game.module(
  'game.rounds'
)
.body(function() {
  game.rounds = {
    "start": function(){
      game.rounds.round1.start();
      game.inRound = game.rounds.round1;
    },
    "nextRound": function(round){
      if(game.inRound.onEnd() !== undefined){
        game.inRound.onEnd();
      }
      game.rounds[round].start();
      game.inRound = game.rounds[round];
    },
    "removeBubbles": function(){
      if(game.inRound.bubbles !== undefined){
        for (var i = 0; i < game.inRound.bubbles.length; i++) {
          if(game.inRound.bubbles[i].anim.clicked !== true){
            sprite = game.inRound.bubbles[i].anim;
            sprite.tweenAlpha.stop();
            sprite.tweenAlpha = new game.Tween(sprite.position);
            sprite.tweenAlpha.to({ x: -500, y: sprite.position.y }, 1000);
            sprite.tweenAlpha.easing('Quadratic.InOut');
            sprite.tweenAlpha.start();
          }
        }
      }
    },
    "round1": {
      "bubbles": [],
      "start": function(){
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": 100,
          "y":game.system.height -200,
          "nextRound": "roundD1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_talk.png",
          "clickedAnimation": 'images/thought_talk.png',
          "x":200,
          "y":game.system.height / 2,
          "nextRound": "roundD1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":120,
          "y":game.system.height / 4,
          "nextRound": "roundM1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":-220,
          "y":game.system.height / 2,
          "nextRound": "roundM1"
        }));
      },
      "onEnd": function(){
        game.rounds.removeBubbles();
      }
    },
    "roundD1": {
      "bubbles": [],
      "start": function(){
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": 100,
          "y":game.system.height -200,
          "nextRound": "roundM1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_talk.png",
          "clickedAnimation": 'images/thought_talk.png',
          "x":200,
          "y":game.system.height / 2,
          "nextRound": "youMan"
        }));
        game.player.changePlayerAnimatoin({
          "asset":'images/naut_sadtest.png',
          "position": {
            "x": game.system.width / 4,
            "y": game.system.height / 2
          },
          "spriteSize": {
            "x": 260,
            "y": 400
          }
        });
      },
      "onEnd": function(){
        game.rounds.removeBubbles();
      }
    },
    "roundM1":{
      "bubbles": [],
      "start": function(){
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":120,
          "y":game.system.height / 4,
          "nextRound": "roundD1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":-220,
          "y":game.system.height / 2,
          "nextRound": "youWon"
        }));
      },
      "onEnd": function(){
        game.rounds.removeBubbles();
      }
    },
    "randomManischAlt":{
      "falseBubbles": [],
      "corectBubbles": [],
      "start": function(){
        var that = this;
        var assets = [];
        assets.push("images/bubble_toast_animsheet.png");
        assets.push("images/bubble_test_animsheet.png");
        assets.push("images/bubble_talk.png");
        for (var i = 0; i < 40; i++) {
          game.scene.addTimer(Math.floor(Math.random() * 12000) + 100, function() {
            if(that.won === false){
              that.falseBubbles.push(new game.Bubble({
                "type": "falseBubble",
                "asset": assets[Math.floor(Math.random() * assets.length) + 0],
                "clickedAnimation": "images/thought_test.png",
                "x": Math.floor(Math.random() * game.system.width) + (-210),
                "y": Math.floor(Math.random() * game.system.height) + 0,
                "nextRound": "End",
                "introAnimation": "plop",
                "outroAnimation": "plop"
              }));
            }
          });
        }
        for (var i = 0; i < this.correctToWin; i++) {
          game.scene.addTimer(Math.floor(Math.random() * 5000) + 500, function() {
            that.corectBubbles.push(new game.Bubble({
              "type": "correctBubble",
              "asset": assets[Math.floor(Math.random() * assets.length) + 0],
              "clickedAnimation": "images/thought_test.png",
              "x": Math.floor(Math.random() * game.system.width) + (0),
              "y": Math.floor(Math.random() * game.system.height) + 0,
              "nextRound": "End",
              "introAnimation": "plop",
              "outroAnimation": "biggerPlop"
            }));
          });
        }
        game.scene.addTimer(Math.floor(Math.random() * 24000) + 100, function() {
          if(that.won === false){
            game.rounds.nextRound("youlost");
          }
        });
      },
      correctCounter: 0,
      correctToWin: 3,
      won: false,
      gotAllCorrect: function(properties){
        this.correctCounter += 1;
        if(this.correctCounter === this.correctToWin){
          this.won = true;
          console.log(this, this.falseBubbles)
          for (var i = 0; i < this.falseBubbles.length; i++) {
            sprite = this.falseBubbles[i].anim;
            sprite.tweenAlpha.stop();
            sprite.tweenAlpha = new game.Tween(sprite.position);
            sprite.tweenAlpha.to({ x: -500, y: sprite.position.y }, 1000);
            sprite.tweenAlpha.easing('Quadratic.InOut');
            sprite.tweenAlpha.start();
          }
          game.rounds.nextRound(properties.nextRound);
        }
        for (var i = 0; i < 10; i++) {
          rand =  Math.floor(Math.random() * this.falseBubbles.length);
          console.log(rand)
          if(this.falseBubbles[rand].anim !== undefined){
            if(this.falseBubbles[rand].anim.removed !== true){
              this.falseBubbles[rand].anim.removed = true;
              sprite = this.falseBubbles[rand].anim;
              sprite.tweenAlpha.stop();
              sprite.tweenAlpha = new game.Tween(sprite.position);
              sprite.tweenAlpha.to({ x: -500, y: sprite.position.y }, 1000);
              sprite.tweenAlpha.easing('Quadratic.InOut');
              sprite.tweenAlpha.start();
            }
          }
        }
      },
      "onEnd": function(){
        // game.rounds.removeBubbles();
      }
    },
    "randomDep":{
      "falseBubbles": [],
      "corectBubbles": [],
      "bubbles": [],
      "start": function(){
        var that = this;
        this.mainBubble = new game.Bubble({
          "type": "growingBubble",
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": game.system.width * 0.70,
          "y": game.system.height / 2,
          "nextRound": "End",
          "introAnimation": "plop",
          "outroAnimation": "biggerPlop"
        });
        for (var i = 0; i < 5; i++) {
          this.generateBubble();
        }
      },
      "generateBubble": function(){
        var that = this;
        bubbleTypes = ["correct", "false"];
          var rand = bubbleTypes[Math.floor(Math.random() * bubbleTypes.length)];
          if(rand === "correct"){
            that.bubbles.push(new game.Bubble({
              "type": "correct",
              "asset": "images/thought_yup.png",
              "clickedAnimation": "images/thought_test.png",
              "x": Math.abs(Math.floor(Math.random() * game.system.width) + (-210)),
              "y": Math.abs(Math.floor(Math.random() * game.system.height) + 0),
              "nextRound": "End",
              "introAnimation": "plop",
              "outroAnimation": "plop",
              "costumeClickTap": function(){
                that.mainBubble.anim.scale.x -= 0.50;
                that.mainBubble.anim.scale.y -= 0.50;
                that.check(this);
              }
            }));
          }else if(rand === "false"){
            that.bubbles.push(new game.Bubble({
              "type": "false",
              "asset": "images/thought_nope.png",
              "clickedAnimation": "images/thought_test.png",
              "x": Math.abs(Math.floor(Math.random() * game.system.width) + (-210)),
              "y": Math.abs(Math.floor(Math.random() * game.system.height) + 0),
              "nextRound": "End",
              "introAnimation": "plop",
              "outroAnimation": "plop",
              "costumeClickTap": function(){
                that.mainBubble.anim.scale.x += 0.50;
                that.mainBubble.anim.scale.y += 0.50;
                that.check(this);
              }
            }));
          }
      },
      "check": function(bubble){
        if(this.mainBubble.anim.scale.x >= 4){
          game.rounds.nextRound("youLost");
          return;
        }
        if(this.mainBubble.anim.scale.x <= 0){
          game.rounds.nextRound("youWon");
          return;
        }
        bubble.remove();
        this.generateBubble();
      },
      "onEnd": function(){
        // game.rounds.removeBubbles();
      }
    },
    "randomDepAlt": {
      "mainBubble": undefined,
      "maxBubbleScale": 4,
      "bubbles": [],
      "won": false,
      "start": function(){
        var that = this;
        var assets = [];
        assets.push("images/bubble_toast_animsheet.png");
        assets.push("images/bubble_test_animsheet.png");
        assets.push("images/bubble_talk.png");
        this.mainBubble = new game.Bubble({
          "type": "growingBubble",
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": game.system.width * 0.70,
          "y": game.system.height / 2,
          "nextRound": "End",
          "introAnimation": "plop",
          "outroAnimation": "biggerPlop"
        });
        for (var i = 0; i < 40; i++) {
          game.scene.addTimer(Math.floor(Math.random() * 12000) + 100, function() {
            if(that.won === false){
              that.bubbles.push(new game.Bubble({
                "type": "smallerMakingBubble",
                "asset": assets[Math.floor(Math.random() * assets.length) + 0],
                "clickedAnimation": "images/thought_test.png",
                "x": Math.floor(Math.random() * game.system.width) + (-210),
                "y": Math.floor(Math.random() * game.system.height) + 0,
                "nextRound": "End",
                "introAnimation": "plop",
                "outroAnimation": "plop"
              }));
            }
          });
        }
        game.scene.addTimer(10000, function(){
          that.won = true;
          that.mainBubble.anim.remove();
          game.rounds.nextRound("End");
        });
      },
      "onEnd": function(){

      }
    },
    "End":{
      "start": function(){
        // var emitter = new game.Emitter();
        // emitter.positionVar.set(game.system.width/2, game.system.height/2);
        // emitter.textures.push('images/particle.png');
        // // emitter.speed = 1000;
        // emitter.position.set(game.system.width/2, game.system.height/2);
        // emitter.addTo(game.scene.stage);
        // game.scene.addEmitter(emitter);
        // // game.player.sprite.position.set(-999999, 99999);
      },
      "onEnd": function(){

      }
    },
    "youLost":{
      "start": function(){
        var sprite = new game.Sprite("images/gameover_depr.png",game.system.width/2,game.system.height/2);
        sprite.anchor.set(0.5, 0.5);
        sprite.addTo(game.scene.stage);
        game.scene.addObject(sprite);
      },
      "onEnd": function(){

      }
    },
    "youWon":{
      "start": function(){
        var sprite = new game.Sprite("images/gameover_okay.png",game.system.width/2,game.system.height/2);
        sprite.anchor.set(0.5, 0.5);
        sprite.addTo(game.scene.stage);
        game.scene.addObject(sprite);
      },
      "onEnd": function(){

      }
    },
    "youMan":{
      "start": function(){
        var sprite = new game.Sprite("images/gameover_manie.png",game.system.width/2,game.system.height/2);
        sprite.anchor.set(0.5, 0.5);
        sprite.addTo(game.scene.stage);
        game.scene.addObject(sprite);
      },
      "onEnd": function(){

      }
    }
  };
});
