game.module(
    "game.assets"
  )
  .body(function() {
    var i = 0;
    //background
    game.addAsset("backgrounds/hintergrund.jpg");
    game.addAsset("backgrounds/hintergrund_d1.jpg");
    game.addAsset("backgrounds/hintergrund_d2.jpg");
    game.addAsset("backgrounds/hintergrund_m1.jpg");
    game.addAsset("backgrounds/hintergrund_m2.jpg");
    game.addAsset("backgrounds/sterne512.png");
    game.addAsset("backgrounds/sterne1024.png");

    //general
    game.addAsset("images/antenna.png");
    game.addAsset("images/c_coma.png");

    //player
    for (i = 1; i <= 324; i++) {
      game.addAsset("character/c_antennacatch/c_antennacatch_" + i + ".png");
    }
    for (i = 1; i <= 70; i++) {
      game.addAsset("character/c_depr/c_depr_" + i + ".png");
    }
    for (i = 1; i <= 2; i++) {
      game.addAsset("character/c_depr_idle/c_depr_idle_" + i + ".png");
    }
    for (i = 1; i <= 70; i++) {
      game.addAsset("character/c_depr_trans/c_depr_" + i + ".png");
    }
    for (i = 1; i <= 56; i++) {
      game.addAsset("character/c_facepalm/c_facepalm_" + i + ".png");
    }
    for (i = 1; i <= 20; i++) {
      game.addAsset("character/c_idle/c_idle_" + i + ".png");
    }
    for (i = 1; i <= 71; i++) {
      game.addAsset("character/c_grunt_drop/c_grunt_drop_" + i + ".png");
    }
    for (i = 1; i <= 297; i++) {
      game.addAsset("character/c_grunt_evac/c_grunt_evac_" + i + ".png");
    }
    for (i = 1; i <= 59; i++) {
      game.addAsset("character/c_grunt_fall/c_grunt_fall_" + i + ".png");
    }
    for (i = 1; i <= 163; i++) {
      game.addAsset("character/c_lol+lose/c_lol+lose_" + i + ".png");
    }
    for (i = 1; i <= 82; i++) {
      game.addAsset("character/c_manic_idle/c_manic_idle_" + i + ".png");
    }
    for (i = 1; i <= 10; i++) {
      game.addAsset("character/c_repair_idle/c_repair_idle_" + i + ".png");
    }
    for (i = 1; i <= 210; i++) {
      game.addAsset("character/c_sadrepair/c_sadrepair_" + i + ".png");
    }
    for (i = 1; i <= 42; i++) {
      game.addAsset("character/c_sadrepair_idle/c_sadrepair_idle_" + i + ".png");
    }
    for (i = 1; i <= 12; i++) {
      game.addAsset("character/c_shiba_idle/c_shiba_idle_" + i + ".png");
    }
    for (i = 1; i <= 12; i++) {
      game.addAsset("character/c_shiba_party/c_shiba_party_" + i + ".png");
    }
    for (i = 1; i <= 33; i++) {
      game.addAsset("character/c_shibapull/c_shibapull_" + i + ".png");
    }
    for (i = 1; i <= 3; i++) {
      game.addAsset("character/c_ship_arrival/c_ship_arrival_" + i + ".png");
    }
    for (i = 1; i <= 311; i++) {
      game.addAsset("character/c_ship_evac/c_ship_evac_" + i + ".png");
    }
    for (i = 1; i <= 198; i++) {
      game.addAsset("character/c_sosstart/c_sosstart_" + i + ".png");
    }
    for (i = 1; i <= 3; i++) {
      game.addAsset("character/c_ship_theend/c_ship_theend_" + i + ".png");
    }
    for (i = 1; i <= 215; i++) {
      game.addAsset("character/c_sosconfirmed/c_sosconfirmed_" + i + ".png");
    }
    for (i = 1; i <= 8; i++) {
      game.addAsset("character/c_sos_idle/c_sos_idle_" + i + ".png");
    }
    for (i = 1; i <= 198; i++) {
      game.addAsset("character/c_sosstart/c_sosstart_" + i + ".png");
    }
    for (i = 1; i <= 136; i++) {
      game.addAsset("character/c_suicide_depr/c_suicide_depr_" + i + ".png");
    }
    for (i = 1; i <= 68; i++) {
      game.addAsset("character/c_thoughtshake/c_thoughtshake_" + i + ".png");
    }
    for (i = 1; i <= 94; i++) {
      game.addAsset("character/c_tilt/c_tilt_" + i + ".png");
    }
    for (i = 1; i <= 6; i++) {
      game.addAsset("character/c_walk/c_walk_" + i + ".png");
    }
    for (i = 1; i <= 8; i++) {
      game.addAsset("bubbles/b_shibapull/b_shibapull_" + i + ".png");
    }
    for (i = 1; i <= 18; i++) {
      game.addAsset("bubbles/b_shibapull2/b_shibapull_" + i + ".png");
    }

    //fucking bubbles !!!
    game.addAsset("bubbles/b_alone/b_alone.png");
    game.addAsset("bubbles/b_bff/b_bff.png");
    game.addAsset("bubbles/b_coffee/b_coffee.png");
    game.addAsset("bubbles/b_coma/b_coma.png");
    game.addAsset("bubbles/b_crash/b_crash.png");
    game.addAsset("bubbles/b_date/b_date.png");
    game.addAsset("bubbles/b_minishiba/b_minishiba.png");
    game.addAsset("bubbles/b_music/b_music.png");
    game.addAsset("bubbles/b_onboard/b_onboard.png");
    game.addAsset("bubbles/b_oxygen/b_oxygen.png");
    game.addAsset("bubbles/b_oxytank/b_oxytank.png");
    game.addAsset("bubbles/b_gamepad/b_gamepad.png");
    game.addAsset("bubbles/b_panic/b_panic.png");
    game.addAsset("bubbles/b_party/b_party.png");
    game.addAsset("bubbles/b_rocket/b_rocket.png");
    game.addAsset("bubbles/b_saturn/b_saturn.png");
    game.addAsset("bubbles/b_shiba/b_shiba.png");
    game.addAsset("bubbles/b_shibapull/b_shibapull.png");
    // game.addAsset("bubbles/b_shibapull2/b_shibapull2.png");
    game.addAsset("bubbles/b_sinkship/b_sinkship.png");
    game.addAsset("bubbles/b_snail/b_snail.png");
    game.addAsset("bubbles/b_titansky/b_titansky.png");
    game.addAsset("bubbles/b_deprevent/b_deprevent.png");

    //Animation Bubbles
    for (i = 1; i <= 66; i++) {
      game.addAsset("bubbleAnimation/t_alone/t_alone_" + i + ".png");
    }
    for (i = 1; i <= 402; i++) {
      game.addAsset("bubbleAnimation/t_crash/t_crash_" + i + ".png");
    }
    for (i = 1; i <= 6; i++) {
      game.addAsset("bubbleAnimation/t_deprevent/t_deprevent_" + i + ".png");
    }
    for (i = 1; i <= 201; i++) {
      game.addAsset("bubbleAnimation/t_minishiba/t_minishiba_" + i + ".png");
    }
    for (i = 1; i <= 316; i++) {
      game.addAsset("bubbleAnimation/t_onboard/t_onboard_" + i + ".png");
    }
    for (i = 1; i <= 104; i++) {
      game.addAsset("bubbleAnimation/t_sinkship/t_sinkship_" + i + ".png");
    }

    //sound
    game.addAudio("audio/Bubble_Play_Sound.mp3", "bubblemoviesound");
    game.addAudio("audio/Soundtrack_Neutral.mp3", "baseloop");
    game.addAudio("audio/Soundtrack_Depression_1.mp3", "d1");
    game.addAudio("audio/Soundtrack_Depression_2.mp3", "d2");
    game.addAudio("audio/Soundtrack_Manie_1.mp3", "m1");
    game.addAudio("audio/Soundtrack_Manie_2.mp3", "m2");
    game.addAudio("audio/bubble_open.mp3", "bubblePlay");
    game.addAudio("audio/bubble_notopen_2.mp3", "bubblePlayFake");
    game.addAudio("audio/naut_facepalm.mp3", "naut_facepalm");
    game.addAudio("audio/c_antennacatch_reparieren_c_grunt_seilhochziehen.mp3", "c_antennacatch_reparieren_c_grunt_seilhochziehen");
    game.addAudio("audio/c_sosstart_signal_ohneradiowellen.mp3", "c_sosstart_signal_ohneradiowellen");
    game.addAudio("audio/naut_laugh_5.mp3", "nautLaugh");
    game.addAudio("audio/naut_cry_6.mp3", "nautCry");
    game.addAudio("audio/c_antennacatch_completesound.mp3", "c_antennacatch_completesound");

    game.addAudio("audio/c_antennacatch_greifen_schlüsselhervorholen.mp3", "c_antennacatch_greifen_schlüsselhervorholen");
    game.addAudio("audio/c_antennacatch_dagegenschlagen_c_grunt_rausschubsen.mp3", "c_antennacatch_dagegenschlagen_c_grunt_rausschubsen");
    game.addAudio("audio/c_antennacatch_reparieren_c_grunt_seilhochziehen.mp3", "c_antennacatch_reparieren_c_grunt_seilhochziehen");
    game.addAudio("audio/c_sosstart_signal_mitradiowellen.mp3", "c_sosstart_signal_mitradiowellen");
    game.addAudio("audio/naut_cheer_1.mp3", "naut_cheer_1");
    game.addAudio("audio/naut_laugh_2.mp3", "naut_laugh_2");
    game.addAudio("audio/naut_facepalm.mp3", "naut_facepalm");
    game.addAudio("audio/naut_cheer_2.mp3", "naut_cheer_2");
    game.addAudio("audio/naut_cry_1.mp3", "naut_cry_1");
    game.addAudio("audio/naut_cry_2.mp3", "naut_cry_2");
    game.addAudio("audio/naut_cry_3.mp3", "naut_cry_3");
    game.addAudio("audio/naut_cry_5.mp3", "naut_cry_5");

    game.addAudio("audio/c_sosconfirmed_completesound.mp3", "c_sosconfirmed_completesound");

    game.addAudio("audio/funk_erde_voice_1.mp3","funk_erde_voice_1");
    game.addAudio("audio/funk_erde_voice_2.mp3","funk_erde_voice_2");

    //video
  });
