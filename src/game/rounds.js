game.module(
    'game.rounds'
  )
  .body(function() {
    game.rounds = {
      "start": function() {
        game.rounds.round1.start();
        game.inRound = game.rounds.round1;
      },
      "nextRound": function(round) {
        console.log("changing to round: ", round);
        if (game.inRound.onEnd() !== undefined) {
          game.inRound.onEnd();
        }
        game.rounds[round].start();
        game.inRound = game.rounds[round];
      },
      "removeBubbles": function() {
        if (game.inRound.bubbles !== undefined) {
          for (var i = 0; i < game.inRound.bubbles.length; i++) {
            if (game.inRound.bubbles[i].anim.clicked !== true) {
              var tweenTime = 1000;
              sprite = game.inRound.bubbles[i].anim;
              sprite.tweenAlpha.stop();
              sprite.tweenAlpha = new game.Tween(sprite.position);
              sprite.tweenAlpha.to({
                x: -500,
                y: sprite.position.y
              }, tweenTime);
              sprite.tweenAlpha.easing('Quadratic.InOut');
              sprite.tweenAlpha.start();
            }
          }
        }
      },
      "round1": {
        "bubbles": [],
        "start": function() {
          game.scene.bg.changeBackground("staticBg1");
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_crash/b_crash.png",
            "clickedAnimation": "images/t_crash/t_crash_",
            "animationFrames": 402,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_facepalm/c_facepalm_",
              "animationFrames": 56
            },
            "nextRound": "round2"
          }));
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_oxygen/b_oxygen.png",
            "clickedAnimation": 'images/thought_talk.png',
            "x": 250,
            "y": 0,
            "clickTap": function() {},
            "isFake": true
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
          game.audio.d1 = game.audio.playSound('d1');
          // game.audio.setVolume(game.audio.d1, 0.1);
          // game.audio.tweenD1 = new game.Tween(game.audio.d1);
          // game.audio.tweenD1.to({musicVolume: 1.0}, 10000);
          // game.audio.tweenD1.easing('Quadratic.InOut');
          // game.audio.tweenD1.start();
          game.scene.bg.changeBackground("staticD1");
        }
      },
      "round2": {
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_idle/c_idle_", 20, function() {});
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_panic/b_panic.png",
            "animationFrames": 201,
            "x": -250,
            "y": 0,
            "costumeClickTap": function() {
              game.rounds.removeBubbles();
              game.audio.d2 = game.audio.playSound('d2');
              game.scene.bg.changeBackground("staticD2");
              var tween = new game.Tween(this);
              tween.to({
                alpha: 0
              }, 1000);
              tween.easing('Quadratic.InOut');
              tween.start();
              tween.onComplete(function() {
                game.rounds.nextRound("randomDep");
              });
            },
            "nextRound": "randomDep"
          }));
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_saturn/b_saturn.png",
            "x": 250,
            "y": 0,
            "clickTap": function() {},
            "isFake": true
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "round3": {
        "bubbles": [],
        "start": function() {
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_alone/b_alone.png",
            "clickedAnimation": "images/t_alone/t_alone_",
            "animationFrames": 40,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_sadrepair/c_sadrepair_",
              "animationFrames": 255
            },
            "nextRound": "zwischenSequenz2"
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "zwischenSequenz1": {
        "name": "zwischenSequenz1",
        "bubbles": [],
        "start": function() {
          game.antenne = new game.Sprite('images/antenne.png');
          game.antenne.position.set(50, 80);
          game.antenne.scale.set(0.75, 0.75);
          game.antenne.anchor.set(0.25, 0.48);
          game.antenne.addTo(game.scene.stage);
          game.scene.addObject(game.antenne);
          game.antenne.remoeved = false;
          // game.player.changePlayerAnimatoin("images/c_antennacatch/c_antennacatch_", 322, function() {});
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "zwischenSequenz2": {
        "name": "zwischenSequenz2",
        "bubbles": [],
        "start": function() {
          // game.antenne = new game.Sprite('images/antenne.png');
          // game.antenne.position.set(50, 80);
          // game.antenne.scale.set(0.75, 0.75);
          // game.antenne.anchor.set(0.25, 0.48);
          // game.antenne.addTo(game.scene.stage);
          // game.scene.addObject(game.antenne);
          // game.antenne.remoeved = false;
          game.player.changePlayerAnimatoin("images/c_sosstart/c_sosstart_", 198, function() {});
        },
        "onEnd": function() {

        }
      },
      "zwischenSequenz3": {
        "name": "zwischenSequenz3",
        "bubbles": [],
        "start": function() {
          // game.antenne = new game.Sprite('images/antenne.png');
          // game.antenne.position.set(50, 80);
          // game.antenne.scale.set(0.75, 0.75);
          // game.antenne.anchor.set(0.25, 0.48);
          // game.antenne.addTo(game.scene.stage);
          // game.scene.addObject(game.antenne);
          // game.antenne.remoeved = false;
          game.player.changePlayerAnimatoin("images/c_sosconfirmed/c_sosconfirmed_", 144, function() {});
        },
        "onEnd": function() {

        }
      },
      "round4": {
        "name": "runde4",
        "bubbles": [],
        "start": function() {
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_sinkship/b_sinkship.png",
            "clickedAnimation": "images/t_sinkship/t_sinkship_",
            "animationFrames": 104,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_thoughtshake/c_thoughtshake_",
              "animationFrames": 68
            },
            "nextRound": "round5"
          }));
          // game.player.changePlayerAnimatoin("images/c_sadrepair/c_sadrepair_", 255, function() {});
        },
        "onEnd": function() {
          game.audio.stopSound(game.audio.d2);
          game.audio.d1 = game.audio.playSound('d1');
          game.scene.bg.changeBackground("staticD1");
          game.rounds.removeBubbles();
        }
      },
      "round5": {
        "name": "runde5",
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_sos_idle/c_sos_idle_", 8, function() {});
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_onboard/b_onboard.png",
            "clickedAnimation": "images/t_onboard/t_onboard_",
            "animationFrames": 318,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_sos_idle/c_sos_idle_",
              "animationFrames": 8
            },
            "nextRound": "zwischenSequenz3"
          }));
          // game.player.changePlayerAnimatoin("images/c_sadrepair/c_sadrepair_", 255, function() {});
        },
        "onEnd": function() {
          game.audio.stopSound(game.audio.d1);
          game.scene.bg.changeBackground("staticBg1");
          game.rounds.removeBubbles();
        }
      },
      "round6": {
        "name": "round6",
        "bubbles": [],
        "start": function() {
          this.bubbles.push(new game.Bubble({
            "type": "correct",
            "asset": "images/b_minishiba/b_minishiba.png",
            "clickedAnimation": "images/t_minishiba/t_minishiba_",
            "animationFrames": 201,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_lol+lose/c_lol+lose_",
              "animationFrames": 169
            },
            "nextRound": "round7"
          }));
        },
        "onEnd": function() {
          game.audio.stopSound(game.audio.d1);
          game.audio.m1 = game.audio.playSound('m1');

          game.scene.bg.changeBackground("staticM1");

          game.rounds.removeBubbles();
        }
      },
      "round7": {
        "name": "round7",
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_manic_idle/c_manic_idle_", 81, function() {});
          game.shiba = new game.Shiba({
            "path": 'images/b_shibapull/b_shibapull_',
            "animationFrames": 8,
            "position": {
              "x": game.player.sprite[game.player.i].position.x + 520,
              "y": game.player.sprite[game.player.i].position.y
            },
            "rotation": 0,
            "rotationValue": 0,
            "spriteSize": {
              "x": 140,
              "y": 238
            },
            "clickTap": function() {
              // game.player.rotationValue = 0;
              // tween = new game.Tween(game.player.container);
              // tween.to({
              //   rotation: 2
              // }, 1000);
              // tween.start();
              game.player.movePlayerForward = true;
              game.player.clickedOnShiba = true;
              game.audio.m2 = game.audio.playSound('m2');
              game.scene.bg.changeBackground("staticM2");
            }
          });

          this.bubbles.push(new game.Bubble({
            "asset": "images/b_shiba/b_shiba.png",
            "x": -250,
            "y": 0,
            "clickTap": function() {},
            "isFake": true
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "randomManischAlt": {
        "falseBubbles": [],
        "corectBubbles": [],
        "start": function() {
          var that = this;
          var assets = [];
          assets.push("images/b_minishiba/b_minishiba.png");
          assets.push("images/b_panic/b_panic.png");
          assets.push("images/b_onboard/b_onboard.png");
          for (var i = 0; i < 40; i++) {
            game.scene.addTimer(Math.floor(Math.random() * 12000) + 100, function() {
              if (that.won === false) {
                that.falseBubbles.push(new game.Bubble({
                  "type": "falseBubble",
                  "asset": assets[Math.floor(Math.random() * assets.length) + 0],
                  "clickedAnimation": "images/t_minishiba/t_minishiba_",
                  "animationFrames": 201,
                  "x": Math.floor(Math.random() * game.system.width) + (-210),
                  "y": Math.floor(Math.random() * game.system.height) + 0,
                  "nextRound": "End",
                  "introAnimation": "plop",
                  "outroAnimation": "plop"
                }));
              }
            });
          }
          for (i = 0; i < this.correctToWin; i++) {
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
            if (that.won === false) {
              game.rounds.nextRound("youlost");
            }
          });
        },
        correctCounter: 0,
        correctToWin: 3,
        won: false,
        gotAllCorrect: function(properties) {
          this.correctCounter += 1;
          if (this.correctCounter === this.correctToWin) {
            this.won = true;
            for (var i = 0; i < this.falseBubbles.length; i++) {
              sprite = this.falseBubbles[i].anim;
              sprite.tweenAlpha.stop();
              sprite.tweenAlpha = new game.Tween(sprite.position);
              sprite.tweenAlpha.to({
                x: -500,
                y: sprite.position.y
              }, 1000);
              sprite.tweenAlpha.easing('Quadratic.InOut');
              sprite.tweenAlpha.start();
            }
            game.rounds.nextRound(properties.nextRound);
          }
          for (var i = 0; i < 10; i++) {
            rand = Math.floor(Math.random() * this.falseBubbles.length);
            if (this.falseBubbles[rand].anim !== undefined) {
              if (this.falseBubbles[rand].anim.removed !== true) {
                this.falseBubbles[rand].anim.removed = true;
                sprite = this.falseBubbles[rand].anim;
                sprite.tweenAlpha.stop();
                sprite.tweenAlpha = new game.Tween(sprite.position);
                sprite.tweenAlpha.to({
                  x: -500,
                  y: sprite.position.y
                }, 1000);
                sprite.tweenAlpha.easing('Quadratic.InOut');
                sprite.tweenAlpha.start();
              }
            }
          }
        },
        "onEnd": function() {
          // game.rounds.removeBubbles();
        }
      },
      "randomDep": {
        "falseBubbles": [],
        "corectBubbles": [],
        "bubbles": [],
        "maxBubbleScale": 4,
        "start": function() {
          var that = this;
          game.player.changePlayerAnimatoin("images/c_depr_idle/c_depr_idle_", 2, function() {});
          var tween = new game.Tween(game.scene.bg.bgContainer);
          tween.to({
            alpha: 0
          }, 1000);
          tween.easing('Quadratic.InOut');
          tween.start();

          this.mainBubble = new game.Bubble({
            "type": "growingBubble",
            "asset": "images/b_crash/b_crash.png",
            "clickedAnimation": "images/t_alone/t_alone_",
            "x": game.system.width * 0.70,
            "y": game.system.height / 2,
            "nextRound": "End",
            "introAnimation": "plop",
            "outroAnimation": "biggerPlop"
          });
          mainBubble = this.mainBubble;
          for (var i = 0; i < 5; i++) {
            this.generateBubble();
          }
        },
        "generateBubble": function() {
          var that = this;
          bubbleTypes = ["correct", "correct", "correct", "correct", "false"];
          var rand = bubbleTypes[Math.floor(Math.random() * bubbleTypes.length)];
          if (rand === "correct") {
            that.bubbles.push(new game.Bubble({
              "type": "correct",
              "asset": "images/b_minishiba/b_minishiba.png",
              "clickedAnimation": "images/t_minishiba/t_minishiba_",
              "x": Math.abs(Math.floor(Math.random() * game.system.width) + (-210)),
              "y": Math.abs(Math.floor(Math.random() * game.system.height) + 0),
              "nextRound": "End",
              "introAnimation": "plop",
              "outroAnimation": "plop",
              "costumeClickTap": function() {
                that.mainBubble.anim.scale.x -= 0.50;
                that.mainBubble.anim.scale.y -= 0.50;
                that.check(this);
              }
            }));
          } else if (rand === "false") {
            that.bubbles.push(new game.Bubble({
              "type": "false",
              "asset": "images/b_crash/b_crash.png",
              "clickedAnimation": "images/t_crash/t_crash_",
              "x": Math.abs(Math.floor(Math.random() * game.system.width) + (-210)),
              "y": Math.abs(Math.floor(Math.random() * game.system.height) + 0),
              "nextRound": "End",
              "introAnimation": "plop",
              "outroAnimation": "plop",
              "costumeClickTap": function() {
                that.mainBubble.anim.scale.x += 0.50;
                that.mainBubble.anim.scale.y += 0.50;
                that.check(this);
              }
            }));
          }
        },
        "check": function(bubble) {
          var tween;
          if (this.mainBubble.anim.scale.x >= 4) {
            game.rounds.nextRound("round1");
            return;
          }
          if (this.mainBubble.anim.scale.x <= 0.5) {
            game.rounds.nextRound("zwischenSequenz1");
            return;
          }
          bubble.remove();
          this.generateBubble();
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
          this.mainBubble.anim.remove();
          tween = new game.Tween(game.scene.bg.bgContainer);
          tween.to({
            alpha: 1
          }, 1000);
          tween.easing('Quadratic.InOut');
          tween.start();
        }
      },
      "end": {
        "name": "end",
        "bubbles": [],
        "start": function() {
          game.end = game.end || {};
          game.end.step = "c_ship_arrival";
          game.end.PlayerFirstLoadDone = undefined;
          game.end.finaleShipXPosition = 320;
        },
        "onEnd": function() {}
      },
      "youLost": {
        "start": function() {
          var sprite = new game.Sprite("images/platzhalter/gameover_depr.png", game.system.width / 2, game.system.height / 2);
          sprite.anchor.set(0.5, 0.5);
          sprite.addTo(game.scene.stage);
          game.scene.addObject(sprite);
        },
        "onEnd": function() {

        }
      },
      "youWon": {
        "start": function() {
          var sprite = new game.Sprite("images/platzhalter/gameover_okay.png", game.system.width / 2, game.system.height / 2);
          sprite.anchor.set(0.5, 0.5);
          sprite.addTo(game.scene.stage);
          game.scene.addObject(sprite);
        },
        "onEnd": function() {

        }
      },
      "youMan": {
        "start": function() {
          var sprite = new game.Sprite("images/platzhalter/gameover_manie.png", game.system.width / 2, game.system.height / 2);
          sprite.anchor.set(0.5, 0.5);
          sprite.addTo(game.scene.stage);
          game.scene.addObject(sprite);
        },
        "onEnd": function() {

        }
      }
    };
  });
