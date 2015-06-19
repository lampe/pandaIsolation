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
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_crash/b_crash.png",
            "clickedAnimation": "images/t_minishiba/t_minishiba_",
            "animationFrames": 201,
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
            "nextRound": "round2"
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "round2": {
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_idle/c_idle_", 20, function() {});
          this.bubbles.push(new game.Bubble({
            "asset": "images/b_minishiba/b_minishiba.png",
            "clickedAnimation": "images/t_minishiba/t_minishiba_",
            "animationFrames": 201,
            "x": -250,
            "y": 0,
            "playerTransitionAnimation": {
              "path": "images/c_depr_trans/c_depr_",
              "animationFrames": 70
            },
            "nextRound": "round3"
          }));
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "round3": {
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_idle/c_idle_", 20, function() {});
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
          game.antenne.anchor.set(0.5, 0.5);
          game.antenne.addTo(game.scene.stage);
          game.scene.addObject(game.antenne);
          game.antenne.remoeved = false;
            // game.player.changePlayerAnimatoin("images/c_antennacatch/c_antennacatch_", 322, function() {});
        },
        "onEnd": function() {
          game.rounds.removeBubbles();
        }
      },
      "round4": {
        "bubbles": [],
        "start": function() {
          game.player.changePlayerAnimatoin("images/c_sadrepair/c_sadrepair_", 255, function() {});
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
          assets.push("images/bubble_toast_animsheet.png");
          assets.push("images/bubble_test_animsheet.png");
          assets.push("images/bubble_talk.png");
          for (var i = 0; i < 40; i++) {
            game.scene.addTimer(Math.floor(Math.random() * 12000) + 100, function() {
              if (that.won === false) {
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
            console.log(this, this.falseBubbles)
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
            console.log(rand)
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
        "start": function() {
          var that = this;
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
          for (var i = 0; i < 5; i++) {
            this.generateBubble();
          }
        },
        "generateBubble": function() {
          var that = this;
          bubbleTypes = ["correct", "false"];
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
          if (this.mainBubble.anim.scale.x >= 4) {
            game.rounds.nextRound("youLost");
            return;
          }
          if (this.mainBubble.anim.scale.x <= 0) {
            game.rounds.nextRound("youWon");
            return;
          }
          bubble.remove();
          this.generateBubble();
        },
        "onEnd": function() {
          // game.rounds.removeBubbles();
        }
      },
      "randomDepAlt": {
        "mainBubble": undefined,
        "maxBubbleScale": 4,
        "bubbles": [],
        "won": false,
        "start": function() {
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
              if (that.won === false) {
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
          game.scene.addTimer(10000, function() {
            that.won = true;
            that.mainBubble.anim.remove();
            game.rounds.nextRound("End");
          });
        },
        "onEnd": function() {

        }
      },
      "End": {
        "start": function() {},
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
