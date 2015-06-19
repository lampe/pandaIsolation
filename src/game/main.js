game.module(
    'game.main',
    'game.pixi'
  )
  .require(
    'game.objectsManager',
    'game.assets',
    'game.objects',
    'game.effects',
    'game.rounds'
  )
  .body(function() {
    game.createScene('Main', {
      init: function() {
        this.addTimer(1000);
        this.bg = new game.ParallaxBackground();
        game.player = new game.Player({
          "path": 'images/c_idle/c_idle_',
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
        // game.effects.Displacement.start();
        this.objectsManager = new game.ObjectsManager();
        game.rounds.start();
      },
      "update": function() {
        this._super();
        if (game.antenne) {
          if (game.antenne.remoeved === false) {
            if (game.player.sprite[game.player.i]) {
              if (game.antenne.position.x < game.player.sprite[game.player.i].position.x) {
                game.antenne.position.x += 1;
              }
              if (game.antenne.position.y < game.player.sprite[game.player.i].position.y) {
                game.antenne.position.y += 1;
              } else {
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
          game.rounds.nextRound("round4");
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
        if (game.scene.displacementFilter !== undefined) {
          if (game.scene.displacementFilter.isStarted === true) {
            game.scene.displacementFilter.uniforms.offset.value.x = game.scene.displacementFilter.uniforms.offset.value.x + 1;
            game.scene.displacementFilter.uniforms.offset.value.y = game.scene.displacementFilter.uniforms.offset.value.y + 1;
          }
        }
      }
    });
  });
