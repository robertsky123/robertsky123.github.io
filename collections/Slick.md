## slick(Center Mode)

###### 网址：[https://github.com/kenwheeler/slick](https://github.com/kenwheeler/slick)

###### [效果](http://kenwheeler.github.io/slick/)

#### 介绍

> #### slick 是一个基于 jQuery 的幻灯片插件，具有以下特点：

	
* 支持响应式
* 浏览器支持 CSS3 时，则使用 CSS3 过度/动画
* 支持移动设备滑动
* 支持桌面浏览器鼠标拖动
* 支持循环
* 支持左右控制
* 支持动态添加、删除、过滤
* 支持自动播放、圆点、箭头、回调等等

> #### 兼容

浏览器兼容：兼容 IE7+ 及其他主流浏览器，若要兼容 IE7，需修改 CSS（slick.css）。

jQuery兼容：兼容 1.7 及以上版本。

> #### 使用方法

#### 1.需引入的文件

	<link rel="stylesheet" href="style/slick.css">
	<script src="script/jquery.min.js"></script>
	<script src="script/slick.min.js"></script>

#### 2.html

    <div class="slick">
		<div><img src="http://idowebok.u.qiniudn.com/84/1.jpg" alt=""></div>
		<div><img src="http://idowebok.u.qiniudn.com/84/2.jpg" alt=""></div>
		<div><img src="http://idowebok.u.qiniudn.com/84/3.jpg" alt=""></div>
		<div><img src="http://idowebok.u.qiniudn.com/84/4.jpg" alt=""></div>
		<div><img src="http://idowebok.u.qiniudn.com/84/5.jpg" alt=""></div>
		<div><img src="http://idowebok.u.qiniudn.com/84/6.jpg" alt=""></div>
    </div>

#### 3.CSS
	 *{ margin: 0; padding: 0;}
	.slick { width: 900px; margin: 0 auto;}
	.slick img { box-sizing: border-box;  width: 260px; height: 170px;}
	.slick-slide img { padding: 20px;}
	.slick-center img { padding: 10px;}
	.slick-prev:before, .slick-next:before { position: absolute; left: 0; top: 1px; color: #ccc;}
	.slick-prev { left: -35px;}
	.slick-next { right: -35px;}
	.slick-dots { bottom: -35px;}

#### 4.JavaScript

##### [更多参数理解](http://www.dowebok.com/84.html)

		$(function(){
		$('.slick').slick({
			centerMode: true,
			centerPadding: '60px',   //中心模式左右内边距
			slidesToShow: 3,         //幻灯片每屏显示个数
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
						settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});
	})


##### 中文：[了解更多](http://www.dowebok.com/84.html)

##### English：[了解更多](http://kenwheeler.github.io/slick/)				