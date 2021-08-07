var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c3f355b9-21dd-48f2-91ae-7c26d6d666bb","87120050-0dd7-49a9-9422-27082c2a8572","655a714f-8ec4-4058-8488-968bee19714c","59110026-42f6-47cf-a571-2021500470ef","6ce6b91d-d115-4424-a272-6cb3d25d5c4c","ec8596e0-9ef7-4ef9-8b55-0e3cea486038","3a5f3c35-e5c8-4f04-8c5d-3e5f28cd3680","02b260f7-5f85-47b5-adf6-c28657fd9468","0dbe9a60-c1bd-4438-9964-48de3864f09a","6d98e935-72cf-4469-8c17-768ba3d655d0","ba355a9e-ef81-4fb3-9057-8563258df930","9f8cab1b-84e2-440f-8a9f-bfb54a797499","61cd3c42-9110-4f0b-b941-565c39174bba","d6dec3b3-ad31-4fcd-8652-32997a556598","f0af28cb-00d6-4a8d-bffe-b50703ea985f","1f022336-4dd9-4338-a093-08608ef72291","419b34f4-730d-4968-b357-37e7a01e6dd5","bb553bf3-98a1-4f6b-85f6-f59131174ec3","701edf42-99be-48b6-9929-8f5a5d635e52","12dc94fa-deef-416f-864d-39017c2b4261","a76682bd-f81d-49c4-9f9f-81375427ce6a","4408ae7d-446d-4ef2-a816-b8cd1664c50e","42d30529-ee4f-4cac-9066-ea9a7022ea22","19a4f1f0-aa85-4d00-87ef-d48dd06682f6","c96bec8e-82a0-4911-9304-18e75c042dc0","75e6c53d-a247-4074-aa48-18c8892509a2"],"propsByKey":{"c3f355b9-21dd-48f2-91ae-7c26d6d666bb":{"name":"bush1.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/c3f355b9-21dd-48f2-91ae-7c26d6d666bb.png","frameSize":{"x":30,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"Qa7vXBapqaLCBoIsile3yrEgJH.7K4y.","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":66},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/c3f355b9-21dd-48f2-91ae-7c26d6d666bb.png"},"87120050-0dd7-49a9-9422-27082c2a8572":{"name":"bush2.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/87120050-0dd7-49a9-9422-27082c2a8572.png","frameSize":{"x":64,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"J.bxsyrWHHSb5K8ovEwQqQnC2lZG7YmO","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":66},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/87120050-0dd7-49a9-9422-27082c2a8572.png"},"655a714f-8ec4-4058-8488-968bee19714c":{"name":"bush3.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/655a714f-8ec4-4058-8488-968bee19714c.png","frameSize":{"x":63,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"z8B9DQ34AmVlktORJ1xHTlxxEMCSKzYu","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":43},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/655a714f-8ec4-4058-8488-968bee19714c.png"},"59110026-42f6-47cf-a571-2021500470ef":{"name":"bush4.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/59110026-42f6-47cf-a571-2021500470ef.png","frameSize":{"x":64,"y":133},"frameCount":1,"looping":true,"frameDelay":4,"version":"mRqlzOT2qoaasvpq.DBvA_7Q8FJN_D7z","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":133},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/59110026-42f6-47cf-a571-2021500470ef.png"},"6ce6b91d-d115-4424-a272-6cb3d25d5c4c":{"name":"bush5.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/6ce6b91d-d115-4424-a272-6cb3d25d5c4c.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"eTaGPTJ3_ggrUkrkuX42UQGPRSYZ8bb9","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/6ce6b91d-d115-4424-a272-6cb3d25d5c4c.png"},"ec8596e0-9ef7-4ef9-8b55-0e3cea486038":{"name":"bush6.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/ec8596e0-9ef7-4ef9-8b55-0e3cea486038.png","frameSize":{"x":64,"y":41},"frameCount":1,"looping":true,"frameDelay":4,"version":"_ZUC2dmu7VKHaZXhJPL4BmIlQJX5G7qI","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":41},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/ec8596e0-9ef7-4ef9-8b55-0e3cea486038.png"},"3a5f3c35-e5c8-4f04-8c5d-3e5f28cd3680":{"name":"Clouds.png","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/3a5f3c35-e5c8-4f04-8c5d-3e5f28cd3680.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"fa_n6s67kthbk5mcTu4cDkwRrp4AO4K9","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/3a5f3c35-e5c8-4f04-8c5d-3e5f28cd3680.png"},"02b260f7-5f85-47b5-adf6-c28657fd9468":{"name":"GameOver","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/02b260f7-5f85-47b5-adf6-c28657fd9468.png","frameSize":{"x":92,"y":5},"frameCount":1,"looping":true,"frameDelay":4,"version":"qwe28GYnz3Yl9pSidYOQuhVO7_ahogDG","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":5},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/02b260f7-5f85-47b5-adf6-c28657fd9468.png"},"0dbe9a60-c1bd-4438-9964-48de3864f09a":{"name":"Ground.png","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/0dbe9a60-c1bd-4438-9964-48de3864f09a.png","frameSize":{"x":320,"y":2},"frameCount":1,"looping":true,"frameDelay":4,"version":"6SMzMd4UAcAwt0YyRaW.i0_2xEUSbJFh","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":2},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/0dbe9a60-c1bd-4438-9964-48de3864f09a.png"},"6d98e935-72cf-4469-8c17-768ba3d655d0":{"name":"Obs1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/6d98e935-72cf-4469-8c17-768ba3d655d0.png","frameSize":{"x":30,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"8vYh9rf2.uAYNwujlVfVBTP_nHPIP4c1","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":66},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/6d98e935-72cf-4469-8c17-768ba3d655d0.png"},"ba355a9e-ef81-4fb3-9057-8563258df930":{"name":"Obs2","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/ba355a9e-ef81-4fb3-9057-8563258df930.png","frameSize":{"x":64,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"RGw0SuzfLNcRVlV_87Q6GtprmERX7.4a","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":66},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/ba355a9e-ef81-4fb3-9057-8563258df930.png"},"9f8cab1b-84e2-440f-8a9f-bfb54a797499":{"name":"Obs3","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/9f8cab1b-84e2-440f-8a9f-bfb54a797499.png","frameSize":{"x":63,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"ncF1o7_VQCeroZQw1Nlejwydyq0m0F8Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":43},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/9f8cab1b-84e2-440f-8a9f-bfb54a797499.png"},"61cd3c42-9110-4f0b-b941-565c39174bba":{"name":"Obs4","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/61cd3c42-9110-4f0b-b941-565c39174bba.png","frameSize":{"x":64,"y":133},"frameCount":1,"looping":true,"frameDelay":4,"version":"7_XKnzp8Y0XULiiykuo.Jd41hMW.wiA0","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":133},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/61cd3c42-9110-4f0b-b941-565c39174bba.png"},"d6dec3b3-ad31-4fcd-8652-32997a556598":{"name":"Obs5","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/d6dec3b3-ad31-4fcd-8652-32997a556598.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"kdwW.mIm3C7GBGNxJKL.kXBfp4.Qampe","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/d6dec3b3-ad31-4fcd-8652-32997a556598.png"},"f0af28cb-00d6-4a8d-bffe-b50703ea985f":{"name":"Obs6","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/f0af28cb-00d6-4a8d-bffe-b50703ea985f.png","frameSize":{"x":64,"y":41},"frameCount":1,"looping":true,"frameDelay":4,"version":"XvZFMOoGWnT3LDMBJVhevENUztH0VUaX","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":41},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/f0af28cb-00d6-4a8d-bffe-b50703ea985f.png"},"1f022336-4dd9-4338-a093-08608ef72291":{"name":"resetBt","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/1f022336-4dd9-4338-a093-08608ef72291.png","frameSize":{"x":99,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"UO1deXb6sPo2iYXT0s1mT1bGEn3I4IKE","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":64},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/1f022336-4dd9-4338-a093-08608ef72291.png"},"419b34f4-730d-4968-b357-37e7a01e6dd5":{"name":"taro0.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/419b34f4-730d-4968-b357-37e7a01e6dd5.png","frameSize":{"x":42,"y":30},"frameCount":1,"looping":true,"frameDelay":4,"version":"CBM6Uvqc54hdgP0U41vU1xX2S2ognear","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":30},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/419b34f4-730d-4968-b357-37e7a01e6dd5.png"},"bb553bf3-98a1-4f6b-85f6-f59131174ec3":{"name":"taro1.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/bb553bf3-98a1-4f6b-85f6-f59131174ec3.png","frameSize":{"x":42,"y":30},"frameCount":1,"looping":true,"frameDelay":4,"version":"sZ002G37wGa5oTE1y3AO3MJ4zZCwKmRW","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":30},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/bb553bf3-98a1-4f6b-85f6-f59131174ec3.png"},"701edf42-99be-48b6-9929-8f5a5d635e52":{"name":"Trex-run.png","sourceUrl":null,"frameSize":{"x":99,"y":106},"frameCount":3,"looping":true,"frameDelay":12,"version":"1OR.cCGchk0EMZQ2KcKFXF5ZLRkKmuZ5","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":212},"rootRelativePath":"assets/701edf42-99be-48b6-9929-8f5a5d635e52.png"},"12dc94fa-deef-416f-864d-39017c2b4261":{"name":"trex_run0.png_1","sourceUrl":null,"frameSize":{"x":99,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"7HqNNPK.2pdZOGsrIfjL8bEt1mtgQ9ls","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":106},"rootRelativePath":"assets/12dc94fa-deef-416f-864d-39017c2b4261.png"},"a76682bd-f81d-49c4-9f9f-81375427ce6a":{"name":"Trex-collide","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/a76682bd-f81d-49c4-9f9f-81375427ce6a.png","frameSize":{"x":64,"y":68},"frameCount":1,"looping":true,"frameDelay":4,"version":"lSRiL5DTTDnNhh_wV0ZqNP8K_zFvQnSu","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":68},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/a76682bd-f81d-49c4-9f9f-81375427ce6a.png"},"4408ae7d-446d-4ef2-a816-b8cd1664c50e":{"name":"trex-duck.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/4408ae7d-446d-4ef2-a816-b8cd1664c50e.png","frameSize":{"x":53,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"b5hUI.ohx4qcpPbcxSMmGiFKgorEnuQP","loadedFromSource":true,"saved":true,"sourceSize":{"x":53,"y":27},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/4408ae7d-446d-4ef2-a816-b8cd1664c50e.png"},"42d30529-ee4f-4cac-9066-ea9a7022ea22":{"name":"Trex-rest.png","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/42d30529-ee4f-4cac-9066-ea9a7022ea22.png","frameSize":{"x":64,"y":67},"frameCount":1,"looping":true,"frameDelay":4,"version":"oEyEZukB.ZMg8D0kXGTvaFYpcRp_Hghf","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":67},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/42d30529-ee4f-4cac-9066-ea9a7022ea22.png"},"19a4f1f0-aa85-4d00-87ef-d48dd06682f6":{"name":"trex0.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/19a4f1f0-aa85-4d00-87ef-d48dd06682f6.png","frameSize":{"x":99,"y":106},"frameCount":1,"looping":true,"frameDelay":4,"version":"HfGOmQHvMPqZC7VhuIhF6r.RyjeKax9l","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":106},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/19a4f1f0-aa85-4d00-87ef-d48dd06682f6.png"},"c96bec8e-82a0-4911-9304-18e75c042dc0":{"name":"trex1.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/c96bec8e-82a0-4911-9304-18e75c042dc0.png","frameSize":{"x":99,"y":106},"frameCount":1,"looping":true,"frameDelay":4,"version":"WNPvhMpjeiGuJE4.SebkpVGuzGOB30Ab","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":106},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/c96bec8e-82a0-4911-9304-18e75c042dc0.png"},"75e6c53d-a247-4074-aa48-18c8892509a2":{"name":"trex2.png_1","sourceUrl":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/75e6c53d-a247-4074-aa48-18c8892509a2.png","frameSize":{"x":99,"y":106},"frameCount":1,"looping":true,"frameDelay":4,"version":"McLZZk2uSiC4ToIKHWbrhFDAKNJ2J04t","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":106},"rootRelativePath":"assets/v3/animations/Hm76NQlNyskhCwUT2ARo0_29UPs_B3n9ge-OabnFzfE/75e6c53d-a247-4074-aa48-18c8892509a2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var trex = createSprite(50,350,20,30);

//Creating Ground
var ground = createSprite(200,375,400,30);
ground.setAnimation("Ground.png")
ground.depth = -1;

//Creating Invisible Ground
var invisible_ground = createSprite(200,400,400,40);
invisible_ground.visible=false;

var gameState = "start";

var cactusGrp = createGroup();
var cloudGrp = createGroup();

var gaov = createSprite(200,150);
gaov.setAnimation("GameOver");
gaov.scale = 4;
gaov.visible = false;

var resetBt = createSprite(200,250);
resetBt.setAnimation("resetBt");
resetBt.scale = 0.8;
resetBt.visible = false;

var score = 0;

function draw() {
  
  //Giving background color
  background("white");
  
  //Making trex collide with invisible ground
  trex.collide(invisible_ground);
  
  
  if(gameState=="start"){
    
    fill("grey");
    textSize(25);
    text("Press space to start the game",30,200);
    
    trex.setAnimation("Trex-rest.png");
    
    
    gaov.visible = false;
    resetBt.visible = false;
  }
  
  if(keyDown("space")&& gameState=="start"){
    
    gameState="play";
    
   playSound("assets/category_accent/puzzle_game_accent_small_b_01.mp3")
   
  }
  
  if(gameState=="play"){
    
    trex.setAnimation("Trex-run.png");
    trex.scale = 0.60;
    
    score = score+Math.round(World.frameRate/60);
    
    if(trex.collide(cactusGrp)&&gameState=="play"){
      
      gameState="over"
      
    }
   
    
   Gravity();
   Ground_Move();
   Jump();
   Clouds();
   Cactus();

  }
  
 Over();
  
  drawSprites();
  
  
  fill("gray");
  textSize(20);
  text("Score: "+score,290,25)
  
  
 console.log(gameState)
  
  
   
}

function Gravity(){
  
  var grav = 0.50;
  trex.velocityY=trex.velocityY+grav;
}


function Ground_Move(){
  
  ground.velocityX = -5;
  
  if(ground.x<0){
    
    ground.x = ground.width/2;
  }
}

function Jump(){
  
  if(keyDown("space")&&trex.isTouching(ground)&&gameState=="play"){
    playSound("assets/category_notifications/game_notification_81.mp3", false);
    
    trex.velocityY = -10
  }
}

function Clouds(){
  
  if(frameCount%40==0){
    
    var cloud = createSprite(410,random(100,200),10,10);
    cloud.setAnimation("Clouds.png");
    cloud.velocityX = -5;
    cloud.lifetime = 100;
    cloudGrp.add(cloud);
  }
}

function Cactus(){
  
  if(frameCount%80==0){
    
    var rand = randomNumber(1,6)
    
    var cactus = createSprite(410,370,10,50);
    cactus.setAnimation("Obs"+rand)
    cactus.scale=0.7;
    cactus.velocityX = -5;
    cactus.lifetime=100;
    cactusGrp.add(cactus)
    
  }
}

function Over(){
  
   if(gameState=="over"){
    
    trex.setAnimation("Trex-collide")
    trex.velocityX = 0;
    trex.scale = 0.95
    
    cactusGrp.setVelocityXEach(0);
    cloudGrp.setVelocityXEach(0);
    
    cloudGrp.setLifetimeEach(-1);
    cactusGrp.setLifetimeEach(-1);
  
    gaov.visible = true;
    resetBt.visible = true;
    
    ground.velocityX = 0;
    
    if(mousePressedOver(resetBt)&&gameState=="over"){
      
      gameState = "start";
      
      cactusGrp.destroyEach();
      cloudGrp.destroyEach();
      
      score = 0;
    }
   
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
