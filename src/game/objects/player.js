game.module(
  'game.objects.player'
).body(function() {
  game.createClass('Player', {
    init: function(properties) {
      this.container = new game.Container().addTo(game.scene.stage);
      this.j = undefined;
      this.i = undefined;
      this.isPlaying = false;
      this.rotation = 0;
      p = this.properties = properties;
      this.rotationValue = 314;
      this.sprite = [];
      this.rotateFaster = false;
      for (var i = 1; i <= p.animationFrames; i++) {
        this.sprite[i] = new game.Sprite(p.path + i + ".png");
        this.sprite[i].position.x = p.position.x;
        this.sprite[i].position.y = p.position.y;
        this.sprite[i].scale.set(0.75, 0.75);
        this.sprite[i].anchor = {
          x: 0.25,
          y: 0.48
        };
      }
      game.scene.addObject(this);
      this.play();
    },
    update: function() {
      if (this.isPlaying === true) {
        if (this.properties.animationFrames < this.i) {
          this.i = 1;
          this.j = 1;
          if (this.runOnce === false) {
            this.runOnce = true;
            if (this.cb) {
              this.cb();
            }
          }
        }
        if (this.clickedOnShiba === true) {
          console.log(game.rotation % 628)
          if (game.rotation % 63114 === 0) {
            this.rotationValue = 0;
            this.movePlayerForward = false;
          } else {
            if (this.rotateFaster === false) {
              if (game.rotation % 628 === 314) {
                this.rotationValue = 628;
                this.rotateFaster = true;
              }
            }
          }
        }
        if (this.j % 3 === 1) {
          if (this.i - 1 !== 0) {
            game.scene.stage.removeChild(this.sprite[this.i - 1]);
          } else {
            game.scene.stage.removeChild(this.sprite[this.properties.animationFrames]);
          }
          game.scene.stage.addChild(this.sprite[this.i]);
          this.rotation += this.rotationValue;
          game.rotation = this.rotation;
          this.sprite[this.i].rotation = this.rotation / 10000;
          if (this.movePlayerForward === true) {
            this.properties.position.x = this.properties.position.x + 4;
            this.sprite[this.i].position.set(this.properties.position.x, this.properties.position.y);
          } else {
            this.sprite[this.i].position.set(this.properties.position.x, this.properties.position.y);
          }

          this.i = this.i + 1;
        }
        this.j = this.j + 1;
      }
    },
    play: function() {
      this.i = 1;
      this.j = 1;
      this.isPlaying = true;
    },
    changePlayerAnimatoin: function(path, animationFrames, cb) {
      var i = 1;
      for (i = 1; i <= this.properties.animationFrames; i++) {
        game.scene.stage.removeChild(this.sprite[i]);
      }
      this.cb = cb;
      this.properties.path = path;
      this.properties.animationFrames = animationFrames;
      this.sprite = [];
      for (i = 1; i <= this.properties.animationFrames; i++) {
        this.sprite[i] = new game.Sprite(this.properties.path + i + ".png");
        this.sprite[i].position.x = this.properties.position.x;
        this.sprite[i].position.y = this.properties.position.y;
        this.sprite[i].scale.set(0.75, 0.75);
        this.sprite[i].anchor = {
          x: 0.25,
          y: 0.48
        };
      }
      this.play();
      this.j = 1;
      this.i = 1;
      this.runOnce = false;
    }
  });
});
