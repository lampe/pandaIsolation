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
      this.runEverySecondTimeIndex = 1;
      game.scene.addObject(this);
      this.play();
    },
    update: function() {
      if (this.isPlaying === true) {
        if (this.properties.animationFrames < this.i) {
          this.runEverySecondTimeIndex += 1;
          if (this.runEverySecondTimeIndex > 2) {
            this.runEverySecondTimeIndex = 1;
          }
          this.i = 1;
          this.j = 1;
          if (this.properties.path === "character/c_manic_idle/c_manic_idle_") {
            setTimeout(function() {
              this.nautCry = game.audio.playSound("nautCry");
            }, 500);
            setTimeout(function() {
              this.nautLaugh = game.audio.playSound("nautLaugh");
            }, 2000);
          }
          if (this.runEverySecondTimeIndex === 1) {
            if (this.properties.path === "character/c_repair_idle/c_repair_idle_") {
              this.soundAntennacatch = game.audio.playSound("c_antennacatch_reparieren_c_grunt_seilhochziehen");
              game.audio.setVolume(this.soundAntennacatch, 0.5);
            }
            if (this.properties.path === "character/c_sos_idle/c_sos_idle_") {
              this.soundAntennacatch = game.audio.playSound("c_sosstart_signal_ohneradiowellen");
              game.audio.setVolume(this.soundAntennacatch, 0.3);
            }
          }
          if (this.runOnce === false) {
            this.runOnce = true;
            if (this.cb) {
              this.cb();
            }
          }
        }
        // console.log(game.rotation);
        if (this.clickedOnShiba === true) {
          if (game.rotation % 63115 === 0) {
            this.rotationValue = 0;
            game.rotation += 1;
            this.clickedOnShiba = false;
            game.shiba.properties.oldX = game.shiba.properties.position.x;
            game.shiba.properties.position.x = 9999;
            game.player.changePlayerAnimatoin("character/c_shibapull/c_shibapull_", 33, function() {
              game.shiba.properties.position.x = 600;
              game.shiba.properties.position.y = 180;
              game.shiba.changeShibaAnimation("character/c_shiba_idle/c_shiba_idle_", 12, function() {});
              var tween2 = new game.Tween(game.shiba.properties.position);
              tween2.to({
                x: 400,
                y: 360
              }, 2000);
              tween2.start();
              setTimeout(function() {
                game.player.isPlaying = false;
                game.shiba.isPlaying = false;
                game.shiba.rotationValue = -0.01;
                var staticD2 = new game.Sprite('backgrounds/hintergrund_d2.jpg', game.system.width / 2, game.system.height / 2);
                staticD2.anchor.set(0.5, 0.5);
                staticD2.alpha = 0;
                staticD2.name = "staticD2";
                game.scene.stage.addChild(staticD2);
                var tween3 = new game.Tween(staticD2);
                tween3.to({
                  alpha: 1
                }, 2000);
                tween3.start();
              }, 5010);
              setTimeout(function() {
                window.location.href = "video.html";
              }, 8010);
              game.player.changePlayerAnimatoin("character/c_manic_idle/c_manic_idle_", 82, function() {});

            });
          } else {
            if (this.rotateFaster === false) {
              if (game.rotation % 628 === 314) {
                this.rotationValue = 628;
                this.rotateFaster = true;
              }
            }
          }
        }
        // if (game.rotation % 63114 === 0) {
        //   game.rotation = 1;
        //   this.rotation = 1;
        // }
        if (this.j % 3 === 1) {
          if (this.i - 1 !== 0) {
            game.scene.stage.removeChild(this.sprite[this.i - 1]);
          } else {
            game.scene.stage.removeChild(this.sprite[this.properties.animationFrames]);
          }
          game.scene.stage.addChild(this.sprite[this.i]);
          if (game.rotation % 63115 === 0) {
            game.rotation = 1;
            this.rotation = 1;
          }else{
            game.rotation = this.rotation;
          }
          this.rotation += this.rotationValue;
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
      if (path === "character/c_facepalm/c_facepalm_") {
        game.audio.playSound('naut_facepalm');
      }
    }
  });
});
