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
      console.log(round, game.inRound.bubbles);
      for (var i = 0; i < game.inRound.bubbles.length; i++) {
        if(game.inRound.bubbles[i].sprite.clicked !== true){
          sprite = game.inRound.bubbles[i].sprite;
          sprite.tweenAlpha.stop();
          sprite.tweenAlpha = new game.Tween(sprite.position);
          sprite.tweenAlpha.to({ x: -500, y: sprite.position.y }, 1000);
          sprite.tweenAlpha.easing('Quadratic.InOut');
          sprite.tweenAlpha.start();
        }
      }
      game.rounds[round].start();
      game.inRound = game.rounds[round];
    },
    "round1": {
      "bubbles": [],
      "start":function(){
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
          "nextRound": "roundM1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_toast_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":120,
          "y":game.system.height / 4
          ,
          "nextRound": "roundM1"
        }));
        this.bubbles.push(new game.Bubble({
          "asset": "images/bubble_test_animsheet.png",
          "clickedAnimation": "images/thought_test.png",
          "x":-220,
          "y":game.system.height / 2,
          "nextRound": "roundD1"
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
    "End":{
      "start": function(){
        var emitter = new game.Emitter();
        emitter.positionVar.set(game.system.width/2, game.system.height/2);
        emitter.textures.push('images/particle.png');
        emitter.position.set(game.system.width/2, game.system.height/2);
        emitter.addTo(game.scene.stage);
        game.scene.addEmitter(emitter);
        game.player.sprite.position.set(-999999, 99999);
      }
    }
  };

});
