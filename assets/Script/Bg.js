cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    start () {

    },

    startAnim () {
        var anim = this.getComponent(cc.Animation);
        anim.play('bg_roll');
    },

    onAnimEnd () {
        var anim = this.getComponent(cc.Animation);
        anim.play('bg_roll');
    },
});
