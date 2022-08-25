# GoldHunter

试玩二维码
![image](https://raw.githubusercontent.com/Frierennn/GoldHunter/master/demo.jpg)


项目简介：手机屏幕中介水平线为分界，点击上半部分为跳跃，点击下半部分为滑铲。在六十秒内，尽可能的跳跃淘到更多的宝藏，同时躲避飞来的火石陷阱。

技术说明：
创建wx.createUserInfoButton按钮，点击按钮获取用户名字与头像加载到屏幕上，成功后触发开始游戏按钮.ative=true。
点击开始游戏，触发背景滚动播放、人物奔跑、预载体加载。通过camera.getScreenToWorldPoint(touch.getLocation())获取用户点击坐标，判断屏幕上半与下半，分别进行跳跃与下蹲。
取消跳跃动画的硬直，通过.stopAllActions()停止跳跃，setPosition()回到奔跑人物坐标。
预载体挂在组件，检查碰撞，cc.Intersection.rectRect(this.getItemRect(), player.getPlayerRect())检查人物与预载体碰撞，碰撞加分、扣分或结束游戏。
预载体schedule固定时间产生，利用Math.random()随机加载，通过addChild加载到Controller组件中。
预载体子组件带粒子特效，碰撞后跟预载体一起触发.destroy()销毁。


心得体会：
微信小游戏中图片最大仅支持像素2048*2048，导致背景图片长度压缩，找不到好的素材屏幕会有黑边。
unscheduleAllCallbacks()可以停止所有通过schedule加载的预载体。
弄清楚了this在js里的指向。
