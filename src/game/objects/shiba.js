game.module(
  'game.objects.shiba'
).body(function() {
  game.createClass('Shiba', {
    init: function(properties) {

      this.container = new game.Container().addTo(game.scene.stage);
      this.j = undefined;
      this.i = undefined;
      this.isPlaying = false;
      p = this.properties = properties;

      this.container.height = p.spriteSize.y;
      this.container.width = p.spriteSize.x;
      this.rotation = p.rotation;
      this.rotationValue = p.rotationValue;
      this.sprite = [];
      for (var i = 1; i <= p.animationFrames; i++) {
        this.sprite[i] = new game.Sprite(p.path + i + ".png");
        this.sprite[i].interactive = true;
        this.sprite[i].mousedown = p.clickTap;
        this.sprite[i].position.x = p.position.x;
        this.sprite[i].position.y = p.position.y;
        // this.sprite[i].scale.set(0.75, 0.75);
        this.sprite[i].anchor = {
          x: 0.5,
          y: 0.5
        };
        this.container.addChild(this.sprite[i]);
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

        if (this.j % 3 === 1) {
          if (this.i - 1 !== 0) {
            game.scene.stage.removeChild(this.sprite[this.i - 1]);
          } else {
            game.scene.stage.removeChild(this.sprite[this.properties.animationFrames]);
          }
          game.scene.stage.addChild(this.sprite[this.i]);
          this.rotation += this.rotationValue;
          this.sprite[this.i].rotation = this.rotation;
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
    changeShibaAnimation: function(path, animationFrames, cb) {
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
          x: 0.5,
          y: 0.5
        };
      }
      this.play();
      this.j = 1;
      this.i = 1;
      this.runOnce = false;
    }
  });
});
