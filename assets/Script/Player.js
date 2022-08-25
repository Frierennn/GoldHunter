cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight: 0,
        jumpDuration: 0,
        state: 'run',
    },

    run: function () {
        this.getComponent(cc.Animation).play('run');
        this.state = 'run';
    },

    jump: function () {
        if (this.state == 'run' || this.state == 'down') {
            this.state = 'jump';
            this.getComponent(cc.Animation).stop();
            this.node.runAction(cc.sequence(cc.jumpBy(this.jumpDuration, cc.v2(0, 0), this.jumpHeight, 1),
                cc.callFunc(function () {
                    this.run();
                }, this)));
        }
    },

    down: function () {
        this.state = 'down';
        this.node.stopAllActions();
        this.node.setPosition(-391.121, -103.838);
        this.getComponent(cc.Animation).stop();
        this.getComponent(cc.Animation).play('down');

    },

    downRelease: function () {
        if (this.state == 'down') {
            this.run(); 
        }
    },

    showNode() {
        this.node.active = true;
        var anim = this.getComponent(cc.Animation);
        anim.play('run');
    },
    hideNode() {
        this.node.active = false;
        var anim = this.getComponent(cc.Animation);
        anim.pause();
    },
    onAnimEnd() {
        var anim = this.getComponent(cc.Animation);
        anim.play('run');
    },

    getPlayerRect: function () {
        return this.node.getBoundingBoxToWorld();
    },
});
