var MyScore = require("MyScore")
var Player = require("Player")
cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node,
        },
        nickname: {
            default: null,
            type: cc.Label,
        },
        avatar: {
            default: null,
            type: cc.Sprite,
        },
        texture: {
            default: null,
            type: cc.Texture2D,
        },
        startb: {
            default: null,
            type: cc.Button,
        },
    },


    start() {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (touch) {
            var camera = cc.Camera.main;
            var touchWorldPos = camera.getScreenToWorldPoint(touch.getLocation());
            //console.log(touchWorldPos.y);
            //console.log(touchWorldPos.x);
            if (touchWorldPos.y > 320) {
                var visibleSize = cc.view.getVisibleSize();
                self.player.getComponent('Player').jump();
            } else {
                var visibleSize = cc.view.getVisibleSize();
                self.player.getComponent('Player').down();
                this.node.on(cc.Node.EventType.TOUCH_END, function (touch) {
                    var visibleSize = cc.view.getVisibleSize();
                    self.player.getComponent('Player').downRelease();
                }, this);
            }
        }, this);
    },

    onLoad: function () {
        var self = this;
        console.log(self.startb);
        //console.log(self.avatar.node.size);
        //self.avatar.node.scaleX = 30;

        wx.login({
            success: function (res) {
                if (res.code) {
                    console.log(res.code)
                }
                let sysInfo = wx.getSystemInfoSync();
                let left1 = sysInfo.screenWidth / 2 - 100;
                let top1 = sysInfo.screenHeight / 2;
                var button = wx.createUserInfoButton({
                    type: 'text',
                    text: '登陆游戏',
                    style: {
                        left: left1,
                        top: top1,
                        width: 210,
                        height: 40,
                        lineHeight: 40,
                        backgroundColor: '#f57557',
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: 16,
                        borderRadius: 4
                    }
                })
                button.show();
                button.onTap((res) => {
                    //console.log(res);
                    console.log(self.startb);
                    self.startb.node.active = true;

                    if (res.errMsg == "getUserInfo:ok") {
                        console.log('成功');
                        button.destroy();
                    } else {
                        console.log("失败");
                    };

                    self.nickname.string = res.userInfo.nickName;
                    
                    //console.log(res.userInfo.avatarUrl);
                    cc.loader.load(res.userInfo.avatarUrl + "?aaa=aa.jpg", function (err, texture) {
                        //下载用户头像
                        //console.log(texture);
                        self.avatar.spriteFrame = new cc.SpriteFrame(texture);
                        self.avatar.node.scaleX = 0.5;
                        self.avatar.node.scaleY = 0.5;

                    })
                })
            }
        })
    },
    update(dt) {

    },

});
