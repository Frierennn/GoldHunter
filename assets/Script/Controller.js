var Player = require("Player")
cc.Class({
    extends: cc.Component,

    properties: {
        item1: {
            default: null,
            type: cc.Prefab
        },
        item2: {
            default: null,
            type: cc.Prefab
        },
        item3: {
            default: null,
            type: cc.Prefab
        },
        item4: {
            default: null,
            type: cc.Prefab
        },
        item5: {
            default: null,
            type: cc.Prefab
        },
        times: {
            default: null,
            type: cc.Label
        },
    },

    newItem: function (nType, nSpeed) {
        if (nType == 5) {
            var newItemNode5;
            newItemNode5 = cc.instantiate(this.item5);
            this.node.addChild(newItemNode5, 10);
            newItemNode5.setPosition(480, 40)
            var moveAction = cc.moveTo(nSpeed, cc.v2(-480, 40));
            var finish = cc.callFunc(newItemNode5.destroy, newItemNode5);
            var seqAction = cc.sequence(moveAction, finish);
            newItemNode5.runAction(seqAction);
        } else {
            var newItemNode;
            switch (nType) {
                case 1:
                    newItemNode = cc.instantiate(this.item1);
                    break;
                case 2:
                    newItemNode = cc.instantiate(this.item2);
                    break;
                case 3:
                    newItemNode = cc.instantiate(this.item3);
                    break;
                case 4:
                    newItemNode = cc.instantiate(this.item4);
                    break;
            }
            this.node.addChild(newItemNode, 10);
            newItemNode.setPosition(480, 130)
            var moveAction = cc.moveTo(nSpeed, cc.v2(-480, 130));
            var finish = cc.callFunc(newItemNode.destroy, newItemNode);
            var seqAction = cc.sequence(moveAction, finish);
            newItemNode.runAction(seqAction);
        }
    },
    
    updateItem1: function (dt) {
        var a = Math.random() * 10;
        if (a > 2) {
            this.newItem(1, 2.3);
        }
    },
    
    updateItem2: function (dt) {

        var a = Math.random() * 10;
        if (a > 2) {
            this.newItem(2, 2.3);
        }
    },
    
    updateItem3: function (dt) {

        var a = Math.random() * 10;
        if (a > 2) {
            this.newItem(3, 2.3);
        }
    },
    
    updateItem4: function (dt) {

        var a = Math.random() * 10;
        if (a > 2) {
            this.newItem(4, 2.3);
        }
    },

    updateItem5: function (dt) {
        var a = Math.random() * 10;
        if (a > 7) {
            this.newItem(5, 1);
        } else if (a > 4 && a < 7) {
            this.newItem(5, 1.5);
        } else if (a == 7) {
            this.newItem(5, 2);
        } else {
        }

    },

    updateOneSceond: function () {
        this.timesValue -= 1;
        this.times.string = this.timesValue.toString();
        if (this.timesValue <= 0) {
            this.gameOver();
            this.timesValue = 60
        }
    },

    updateItem: function (a) {
        this.timesValue = 60;
        this.schedule(this.updateOneSceond, 1);
        this.schedule(this.updateItem1, 1.5);
        this.schedule(this.updateItem2, 2);
        this.schedule(this.updateItem3, 3);
        this.schedule(this.updateItem4, 2.5);
        this.schedule(this.updateItem5, 2.5);
    },

    gameOver: function () {
        var player = cc.find("Canvas/Player").getComponent(Player);
        var BgGame = cc.find("Canvas/BgGame").getComponent(cc.Animation);
        var EndUI = cc.find("Canvas/HUD/EndUI");
        var Controller = cc.find("Canvas/Controller");
        player.hideNode();
        EndUI.active = true;
        BgGame.pause();
        this.unscheduleAllCallbacks();
        Controller.removeAllChildren();
    },

});
