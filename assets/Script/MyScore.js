cc.Class({
    extends: cc.Component,

    properties: {
    },

    updateScore: function () {
        this.score.string = this.scoreValue.toString();
    },
    addScore: function (s) {
        this.scoreValue += s;
        cc.sys.localStorage.setItem("scoreString", this.scoreValue.toString());

        var BgGame = cc.find("Canvas/BgGame").getComponent(cc.Animation);
        if (this.scoreValue>100) {
            console.log(300)
            BgGame.speed = 9;
        }
    },
    DeScore:function () {
        this.scoreValue=0;
        cc.sys.localStorage.setItem("scoreString", this.scoreValue.toString());
    },
    onLoad() {
        this.score=this.node.getComponent(cc.Label);
        this.scoreValue=0;
        this.updateScore();
    },

    start() {

    },

    update (dt) {
        this.updateScore();
    },
});
