game.module(
  'game.objects.AnimationMovie'
).body(function() {
  game.createClass('AnimationMovie', {
    init: function(properties) {
      this.container = new game.Container().addTo(game.scene.stage);
      this.j = undefined;
      this.i = undefined;
      this.isPlaying = false;
      p = this.properties = properties;
      this.sprite = [];
      for (var i = 1; i <= p.animationFrames; i++) {
        this.sprite[i] = new game.Sprite(p.path + i + ".png");
        this.sprite[i].position.x = game.system.width / 1.5;
        this.sprite[i].position.y = game.system.height / 2;
        this.sprite[i].anchor = {
          x: 0.5,
          y: 0.5
        };
      }
      game.scene.addObject(this);
    },
    update: function() {
      if (this.isPlaying === true) {
        if (this.properties.animationFrames < this.i) {
          this.stop();
        }
        if (this.j % 4 === 1) {
          if (this.i - 1 !== 0) {
            game.scene.stage.removeChild(this.sprite[this.i - 1]);
          }
          game.scene.stage.addChild(this.sprite[this.i]);
          this.i = this.i + 1;
        }
        this.j = this.j + 1;
      }
    },
    play: function() {
      this.i = 1;
      this.j = 1;
      this.bubblePlay = game.audio.playSound('bubblePlay');
      game.audio.setVolume(this.bubblePlay, 0.5);
      this.isPlaying = true;

    },
    stop: function() {
      if (this.properties.animationFrames < this.i) {
        this.isEnded();
      }
      game.scene.stage.removeChild(this.sprite[this.i - 1]);
      this.isPlaying = false;
    },
    isEnded: function() {
      var that = this;
      game.audio.stopSound(this.bubblePlay);
      game.player.changePlayerAnimatoin(that.properties.playerTransitionAnimation.path, that.properties.playerTransitionAnimation.animationFrames, function() {
        game.rounds.nextRound(that.properties.nextRound);
      });
    }
  });
});
