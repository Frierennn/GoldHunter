var MyScore = require("MyScore")
var Player = require("Player")
cc.Class({
    extends: cc.Component,

    properties: {
        itemScoreValue: 0
    },


    start() {

    },
    getItemRect: function () {
        return this.node.getBoundingBoxToWorld();
    },
    update(dt) {
        var player = cc.find("Canvas/Player").getComponent(Player);
        var BgGame = cc.find("Canvas/BgGame").getComponent(cc.Animation);
        var Controller = cc.find("Canvas/Controller");
        var EndUI = cc.find("Canvas/HUD/EndUI");
        var Pr = cc.find("Canvas/pr");
        if (cc.Intersection.rectRect(this.getItemRect(), player.getPlayerRect())) {
            //myScore.DeScore();
            this.node.destroy();
            player.hideNode();
            EndUI.active = true;
            BgGame.pause();
            Controller.getComponent(cc.Component).unscheduleAllCallbacks();
            Controller.removeAllChildren();   
            Pr.active=true;                  
        }
    },
});
