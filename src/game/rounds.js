game.module(
  'game.rounds'
)
.body(function() {
  game.rounds = {
    "start": function(){
      game.rounds.randomDep.start();
      game.inRound = game.rounds.randomDep;
    },
    "nextRound": function(round){
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
      game.rounds[round].start();
      game.inRound = game.rounds[round];
    },
    "round1": {
      "bubbles": [],
      "start": function(){
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": 100,
          "y":game.system.height -200,
          "nextRound": "End"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_talk.png",
          "clickedAnimation": 'images/thought_talk.png',
          "x":200,
          "y":game.system.height / 2,
          "nextRound": "End"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":120,
          "y":game.system.height / 4,
          "nextRound": "End"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":-220,
          "y":game.system.height / 2,
          "nextRound": "End"
        }));
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
          "nextRound": "End"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_talk.png",
          "clickedAnimation": 'images/thought_talk.png',
          "x":200,
          "y":game.system.height / 2,
          "nextRound": "End"
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
      }
    },
    "roundM1":{
      "bubbles": [],
      "start": function(){
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":120,
          "y":game.system.height / 4
          ,
          "nextRound": "End"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":-220,
          "y":game.system.height / 2,
          "nextRound": "End"
        }));
      }
    },
    "randomManisch":{
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
      }
    },
    "randomDep": {
      "start": function(){
        new game.Bubble({
          "type": "growingBubble",
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x": game.system.width * 0.70,
          "y": game.system.height / 2,
          "nextRound": "End",
          "introAnimation": "plop",
          "outroAnimation": "biggerPlop"
        });
      }
    },
    "End":{
      "start": function(){
        var emitter = new game.Emitter();
        emitter.positionVar.set(game.system.width/2, game.system.height/2);
        emitter.textures.push('images/particle.png');
        // emitter.speed = 1000;
        emitter.position.set(game.system.width/2, game.system.height/2);
        emitter.addTo(game.scene.stage);
        game.scene.addEmitter(emitter);
        // game.player.sprite.position.set(-999999, 99999);
      }
    },
    "youlost":{
      "start": function(){
        var emitter = new game.Emitter();
        emitter.positionVar.set(game.system.width/2, game.system.height/2);
        emitter.textures.push('images/lose.png');
        // emitter.speed = 1000;
        emitter.position.set(game.system.width/2, game.system.height/2);
        emitter.addTo(game.scene.stage);
        game.scene.addEmitter(emitter);
        // game.player.sprite.position.set(-999999, 99999);
      }
    }
  };

});
