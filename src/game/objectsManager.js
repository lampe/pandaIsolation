game.module(
  'game.objectsManager'
).body(function() {
  game.createClass("ObjectsManager", {
    init: function(){
      var that = this;
      that.containter = new game.Container().addTo(game.scene.stage);
    },
    idGenerator: function(){
      var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+S4()+S4());
    }
  });
});
