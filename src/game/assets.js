game.module(
    'game.assets'
  )
  .body(function() {
    var i = 0;
    //background
    game.addAsset('images/sterne512.png');
    game.addAsset('images/sterne1024.png');
    game.addAsset('images/hintergrund.jpg');
    game.addAsset('images/hintergrund_d1.jpg');
    game.addAsset('images/hintergrund_d2.jpg');
    game.addAsset('images/hintergrund_m1.jpg');
    game.addAsset('images/hintergrund_m2.jpg');

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
    for (i = 1; i <= 9; i++) {
      game.addAsset('images/c_repair_idle/c_repair_idle_' + i + '.png');
    }
    for (i = 1; i <= 41; i++) {
      game.addAsset('images/c_sadrepair_idle/c_sadrepair_idle_' + i + '.png');
    }
    for (i = 1; i <= 198; i++) {
      game.addAsset('images/c_sosstart/c_sosstart_' + i + '.png');
    }
    for (i = 1; i <= 68; i++) {
      game.addAsset('images/c_thoughtshake/c_thoughtshake_' + i + '.png');
    }
    for (i = 1; i <= 8; i++) {
      game.addAsset('images/c_sos_idle/c_sos_idle_' + i + '.png');
    }
    for (i = 1; i <= 144; i++) {
      game.addAsset('images/c_sosconfirmed/c_sosconfirmed_' + i + '.png');
    }
    for (i = 1; i <= 169; i++) {
      game.addAsset('images/c_lol+lose/c_lol+lose_' + i + '.png');
    }
    for (i = 1; i <= 3; i++) {
      game.addAsset('images/c_ship_arrival/c_ship_arrival_' + i + '.png');
    }
    for (i = 1; i <= 311; i++) {
      game.addAsset('images/c_ship_evac/c_ship_evac_' + i + '.png');
    }
    for (i = 1; i <= 3; i++) {
      game.addAsset('images/c_ship_theend/c_ship_theend_' + i + '.png');
    }
    for (i = 1; i <= 59; i++) {
      game.addAsset('images/c_grunt_fall/c_grunt_fall_' + i + '.png');
    }
    for (i = 1; i <= 12; i++) {
      game.addAsset('images/c_shiba_idle/c_shiba_idle_' + i + '.png');
    }
    for (i = 1; i <= 8; i++) {
      game.addAsset('images/b_shibapull/b_shibapull_' + i + '.png');
    }
    for (i = 1; i <= 18; i++) {
      game.addAsset('images/b_shibapull2/b_shibapull_' + i + '.png');
    }
    for (i = 1; i <= 81; i++) {
      game.addAsset('images/c_manic_idle/c_manic_idle_' + i + '.png');
    }


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
    game.addAsset('images/b_alone/b_alone.png');
    game.addAsset('images/b_panic/b_panic.png');
    game.addAsset('images/b_saturn/b_saturn.png');
    game.addAsset('images/b_shibapull/b_shibapull.png');


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
