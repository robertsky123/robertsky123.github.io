# Animate.css

> ```Animate.css```是一串能在你的项目中使用的很酷很有趣并能跨浏览器的动画。其优点在于它是纯CSS代码编写的动画库。

动画演示网址：[http://daneden.github.io/animate.css/](http://daneden.github.io/animate.css/)

## 用法：

要想有```animate```的效果显示，首先要在在```<head>```中添加它的CSS库：
		
		<head>
			<link rel="stylesheet" href="animate.min.css">
		</head>

接着，你就可以愉快的添加你想要的```animate```类了，或许还想要一个无限循环类```infinite```，比如：

		<p class="animated infinite bounce">Example</p>

在```Animate.css```中有很多类：

* ```tada```
* ```bounce```
* ```bounceIn```
* ```fadeInRight```
* ```lightSpeedout```
* ```rotateInDownLeft```

当然，类还有很多，就不在这边一一列举了。

你不仅可以在CSS中使用```Animate.css```,也可以在jQuery中使用。通过使用jQuery动态地添加animation是更轻松：

		$('#yourElement').addClass('animated zoomIn');

不止于此，你也可以改变你的动画的持续时间,增加延迟或改变它的次数:

		#yourElement
		{
			-vendor-animation-duration: 3s;
			-vendor-animation-delay: 2s;
			-vendor-animation-iteration-count: infinite;
		}

## 自定义构建：

```Animate.css```由[Grunt](http://gruntjs.com/)提供技术支持，并且你可以相当容易地创建自定义构建。不过，首先你需要Grunt和所有其他的依赖项：

		$ cd path/to/animate.css/
		$ sudo npm install

接着，运行```grunt watch```来查看你的自定义构建的变化和编译。比如，你只想要一些"attention seekers"，简单地编辑```animate-config.json```文件去选择那些你想用的animations：

		"attention_seekers": {
			"bounce": true,
			"flash": false,
			"pulse": false,
			"shake": true,
			"swing": true,
			"tada": true,
			"wobble": true,
			"jello":true
		}



想要了解更多，请戳：[https://github.com/daneden/animate.css](https://github.com/daneden/animate.css)