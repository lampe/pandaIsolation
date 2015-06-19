game.module(
    'game.assets'
  )
  .body(function() {
    var i = 0;
    //background
    game.addAsset('images/sterne512.png');
    game.addAsset('images/sterne256.png');
    game.addAsset('images/hintergrund.jpg');

    //general
    game.addAsset('images/platzhalter/gameover_depr.png');
    game.addAsset('images/platzhalter/gameover_manie.png');
    game.addAsset('images/platzhalter/gameover_okay.png');
    game.addAsset('images/antenne.png');
    //player
    for (i = 1; i <= 20; i++) {
      game.addAsset('images/c_idle/c_idle_' + i + '.png');
    }
    for (i = 1; i <= 122; i++) {
      game.addAsset('images/c_suicide_depr/c_suicide_depr_' + i + '.png');
    }
    for (i = 1; i <= 2; i++) {
      game.addAsset('images/c_depr_idle/c_depr_idle_' + i + '.png');
    }
    for (i = 1; i <= 70; i++) {
      game.addAsset('images/c_depr_trans/c_depr_' + i + '.png');
    }
    for (i = 1; i <= 56; i++) {
      game.addAsset('images/c_facepalm/c_facepalm_' + i + '.png');
    }
    for (i = 1; i <= 332; i++) {
      game.addAsset('images/c_antennacatch/c_antennacatch_' + i + '.png');
    }
    for (i = 1; i <= 255; i++) {
      game.addAsset('images/c_sadrepair/c_sadrepair_' + i + '.png');
    }


    // game.addAsset('images/c_depr/c_depr.png');
    // game.addAsset('images/c_suicide_depr/c_suicide_depr.png');

    //fucking bubbles !!!
    game.addAsset('images/b_crash/b_crash.png');
    game.addAsset('images/b_date/b_date.png');
    game.addAsset('images/b_minishiba/b_minishiba.png');
    game.addAsset('images/b_music/b_music.png');
    game.addAsset('images/b_onboard/b_onboard.png');
    game.addAsset('images/b_oxygen/b_oxygen.png');
    game.addAsset('images/b_sinkship/b_sinkship.png');
    game.addAsset('images/b_snail/b_snail.png');
    game.addAsset('images/b_titansky/b_titansky.png');
    game.addAsset('images/b_shiba/b_shiba.png');

    //Animation Bubbles
    for (i = 1; i <= 40; i++) {
      game.addAsset('images/t_alone/t_alone_' + i + '.png');
    }
    for (i = 1; i <= 402; i++) {
      game.addAsset('images/t_crash/t_crash_' + i + '.png');
    }
    for (i = 1; i <= 201; i++) {
      game.addAsset('images/t_minishiba/t_minishiba_' + i + '.png');
    }
    for (i = 1; i <= 318; i++) {
      game.addAsset('images/t_onboard/t_onboard_' + i + '.png');
    }
    for (i = 1; i <= 104; i++) {
      game.addAsset('images/t_sinkship/t_sinkship_' + i + '.png');
    }

    //sound
    game.addAudio('audio/clickbubble.wav');

    //video
  });
