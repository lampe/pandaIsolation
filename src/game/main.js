game.module(
    "game.main",
    "game.pixi"
  )
  .require(
    "game.objectsManager",
    "game.assets",
    "game.objects",
    "game.effects",
    "game.rounds"
  )
  .body(function() {
    game.createScene("Main", {
      init: function() {
        this.addTimer(1000);
        this.bg = new game.ParallaxBackground();
        game.player = new game.Player({
          "path": "images/c_idle/c_idle_",
          "animationFrames": 20,
          "position": {
            "x": game.system.width / 3,
            "y": game.system.height / 2
          },
          "spriteSize": {
            "x": 117,
            "y": 215
          }
        });
        game.audio.playMusic("baseloop");
        game.audio.setMusicVolume(0.2);
        game.audio.musicTween = new game.Tween(game.audio);
        game.audio.musicTween.to({musicVolume: 1.0}, 10000);
        game.audio.musicTween.easing('Quadratic.InOut');
        game.audio.musicTween.start();
        game.audio.m1 = game.audio.playSound('m1');
        game.audio.m2 = game.audio.playSound('m2');
        game.audio.d1 = game.audio.playSound('d1');
        game.audio.d2 = game.audio.playSound('d2');
        game.audio.stopSound(game.audio.m1);
        game.audio.stopSound(game.audio.m2);
        game.audio.stopSound(game.audio.d1);
        game.audio.stopSound(game.audio.d1);
        // game.effects.Displacement.start();
        game.antenne2IsCreated = false;
        this.objectsManager = new game.ObjectsManager();
        game.rounds.start();
      },
      "update": function() {
        this._super();
        this.changePlayerX = false;
        this.changePlayerY = false;
        if(game.changeAudio = true){
          
        }
        if (game.antenne) {
          if (game.antenne.remoeved === false) {
            if (game.player.sprite[game.player.i]) {
              if (game.antenne.position.x < game.player.sprite[game.player.i].position.x) {
                game.antenne.position.x += 1;
              } else {
                this.changePlayerX = true;
              }
              if (game.antenne.position.y < game.player.sprite[game.player.i].position.y) {
                game.antenne.position.y += 1;
              } else {
                this.changePlayerY = true;
              }
              if (this.changePlayerX === true && this.changePlayerY === true) {
                game.scene.removeObject(game.antenne);
                game.antenne.remoeved = true;
                game.player.changePlayerAnimatoin("images/c_antennacatch/c_antennacatch_", 322, function() {});
              }
              game.antenne.rotation = game.player.sprite[game.player.i].rotation;
            }
          } else {
            game.antenne.remove();
          }
        }
        if (game.inRound.name === "zwischenSequenz1" && game.player.i >= 322) {
          game.player.changePlayerAnimatoin("images/c_repair_idle/c_repair_idle_", 9, function() {});
          game.rounds.nextRound("round3");
        }
        if (game.inRound.name === "zwischenSequenz2" && game.player.i >= 198) {
          game.player.changePlayerAnimatoin("images/c_sos_idle/c_sos_idle_", 8, function() {});
          game.rounds.nextRound("round4");
        }
        if (game.inRound.name === "zwischenSequenz3" && game.player.i >= 144) {
          game.player.changePlayerAnimatoin("images/c_sos_idle/c_sos_idle_", 8, function() {});
          game.rounds.nextRound("round6");
        }

        if (game.inRound.name === "round6" && game.player.i === 56) {
          if (game.antenne2IsCreated !== true) {
            game.antenne2IsCreated = true;
            game.antenne2 = new game.Sprite("images/antenne.png");
            game.antenne2.position.set(game.player.sprite[game.player.i].position.x, game.player.sprite[game.player.i].position.y);
            game.antenne2.scale.set(0.75, 0.75);
            game.antenne2.anchor.set(0.25, 0.48);
            game.antenne2.addTo(game.scene.stage);
            game.antenne2.rotation = game.player.sprite[game.player.i].rotation;
            game.scene.addObject(game.antenne2);
          }
        }
        if (game.antenne2IsCreated === true) {
          game.antenne2.position.x += 1;
          game.antenne2.position.y += 1;
          game.antenne2.rotation = game.rotation;
        }
        if (game.inRound.name === "round6" && game.player.i === 169) {
          game.antenne2.remove();
          game.antenne2IsCreated = false;
          game.player.changePlayerAnimatoin("images/c_sos_idle/c_sos_idle_", 8, function() {});
          game.scene.bg.changeBackground("staticM1");
          game.rounds.nextRound("round7");
        }
        if (game.inRound.name === "end") {
          if (game.end.step === "c_ship_arrival") {
            if (game.end.PlayerFirstLoadDone === undefined) {
              game.player.rotation = 0;
              game.player.rotationValue = 0;
              game.player.properties.position.y = 200;
              game.player.properties.position.x = -820;
              game.player.changePlayerAnimatoin("images/c_ship_arrival/c_ship_arrival_", 3, function() {});
              game.end.PlayerFirstLoadDone = true;
            }
            if (game.player.properties.position.x > 320) {
              game.player.movePlayerForward = false;
              game.end.step = "c_ship_evac";
              game.end.PlayerFirstLoadDone = false;

            } else {
              game.player.movePlayerForward = true;
            }
          }
          if (game.end.step === "c_ship_evac") {
            if (game.end.PlayerFirstLoadDone === false) {
              game.player.changePlayerAnimatoin("images/c_ship_evac/c_ship_evac_", 311, function() {});
              game.end.PlayerFirstLoadDone = true;
            }
          }
        }
        if (game.effects.CameraWabbel.isStarted === true) {
          if (game.effects.CameraWabbel.directionsTimer % game.effects.CameraWabbel.directionsDuration === 0) {
            game.effects.CameraWabbel.directionsBackPosition.x = game.scene.stage.position.x;
            game.effects.CameraWabbel.directionsBackPosition.y = game.scene.stage.position.y;
            game.effects.CameraWabbel.directionsTimer = 1;
            if (game.effects.CameraWabbel.directionsBackToCenter === true) {
              game.effects.CameraWabbel.currentDirection = game.effects.CameraWabbel.directions[Math.floor(Math.random() * game.effects.CameraWabbel.directions.length)];
              game.effects.CameraWabbel.directionsBackToCenter = false;
            } else {
              game.effects.CameraWabbel.directionsBackToCenter = true;
            }
          }

          if (game.effects.CameraWabbel.directionsBackToCenter === true) {
            if (game.effects.CameraWabbel.currentDirection === "nw") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.directionsBackPosition.x - game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration),
                y: game.effects.CameraWabbel.directionsBackPosition.x - game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "ne") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.directionsBackPosition.x + game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration),
                y: game.effects.CameraWabbel.directionsBackPosition.y - game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "sw") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.directionsBackPosition.x - game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration),
                y: game.effects.CameraWabbel.directionsBackPosition.y + game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "se") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.directionsBackPosition.x + game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration),
                y: game.effects.CameraWabbel.directionsBackPosition.y + game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
          } else {
            if (game.effects.CameraWabbel.currentDirection === "nw") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration),
                y: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "ne") {
              game.effects.CameraWabbel.directionPosition = {
                x: (game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)) / -1,
                y: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "sw") {
              game.effects.CameraWabbel.directionPosition = {
                x: (game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration)),
                y: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration) / -1
              };
            }
            if (game.effects.CameraWabbel.currentDirection === "se") {
              game.effects.CameraWabbel.directionPosition = {
                x: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration) / -1,
                y: game.effects.CameraWabbel.easeInOut(game.effects.CameraWabbel.directionsTimer, 0, game.effects.CameraWabbel.directionsDistance, game.effects.CameraWabbel.directionsDuration) / -1
              };
            }
          }
          game.effects.CameraWabbel.directionsTimer += 1;
          game.scene.stage.position.x = game.effects.CameraWabbel.directionPosition.x;
          game.scene.stage.position.y = game.effects.CameraWabbel.directionPosition.y;
        }
        if (game.effects.Displacement !== undefined) {
          if (game.effects.Displacement.isStarted === true) {
            game.effects.Displacement.displacementFilter.uniforms.offset.value.x = game.effects.Displacement.displacementFilter.uniforms.offset.value.x + 1;
            game.effects.Displacement.displacementFilter.uniforms.offset.value.y = game.effects.Displacement.displacementFilter.uniforms.offset.value.y + 1;
          }
        }
      }
    });
  });
