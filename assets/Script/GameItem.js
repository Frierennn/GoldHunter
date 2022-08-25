var MyScore = require("MyScore")
var Player = require("Player")
cc.Class({
    extends: cc.Component,

    properties: {
        itemScoreValue: 0
    },


    getItemRect: function () {
        return this.node.getBoundingBoxToWorld();
    },

    update(dt) {
        var player = cc.find("Canvas/Player").getComponent(Player);
        var myScore = cc.find("Canvas/HUD/Score/ScoreLabel").getComponent(MyScore);
        if (cc.Intersection.rectRect(this.getItemRect(), player.getPlayerRect())) {
            myScore.addScore(this.itemScoreValue);
            this.node.destroy();
        }
    },
});
