# spin.js

> 一个简单的动态创建loading旋转图标的插件。

动画地址：[http://spin.js.org/](http://spin.js.org/)（这个网站需要翻墙才能看哟~）

##### 浏览器：IE 6+，Firefox 3.5+，Safari 3.2+，Chrome，Opera 10.6+，Mobile Safari，Android 2.3+

## 使用方法：

在引用jQuery库之后引用```spin.min.js```或者```spin.js```。jQuery库要求版本在1.7以上：

		<script src="jquery-1.7.1.js"></script>
		<script src="spin.min.js"></script>

##### 用法：

在引用了```spin.js```之后你要做的就是：

		var opts = {
			color: '#fff',			//loading动画中线条的颜色
			lines: 13,				// loading动画中线条的数量
			length: 33,				// 每条线条的长度
			width: 15,				// 每条线条的宽度
			radius: 48,				// 内圆的半径
			scale: 1,				// 调整loading动画的大小
			corners: 1,				// 角的圆润度（0——1）
			opacity： 0,				// 线条的透明度
			rotate: 46,				// The rotation offset
			direction: 1,			// 1: 顺时针方向, -1: 逆时针方向
			speed: 1,				// 旋转一圈的速度
			trail: 52,				// 余辉（小尾巴）百分比
			fps: 20，				// 帧/秒当使用CSS setTimeout()作为后备
			zIndex: 2e9，			// z-index(默认值为2000000000)
			className: 'spinner',	// 微调控制项的CSS类分配
			top: '49%',				// 相对于父级的上下位置
			left: '49%',			// 相对于父级的左右位置
			shadow: false,			// 是否要呈现影子
			hwaccel: false,			// 是否要使用硬件加速
			position: 'absolute'	// 控件定位
		}
		var target = document.getElementById('foo');
		var spinner = new Spinner(opts).spin(target);

```spin()```方法创建了必要的HTML元素和启动了动画，当然也可以手动创建：

		var spinner = new Spinner().spin();
		target.appendChild(spinner.el);


以上我只是简单的介绍了这款简单却又很实用的旋转图标的插件，想要了解更多，请戳[https://github.com/fgnass/spin.js](https://github.com/fgnass/spin.js)
