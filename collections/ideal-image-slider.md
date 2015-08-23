网址：[ideal-image-slider](https://github.com/gilbitron/Ideal-Image-Slider)

>#### ideal-image-slider通过点击前进、后退按钮时图片滑动
### 引用的库文件###
	<script src="../ideal-image-slider.js"></script>
### 引用的css样式###
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="../ideal-image-slider.css">
    <link rel="stylesheet" href="../themes/default/default.css">
### html缩略图结构###
	<div id="slider">
		<img src="img/1.jpg" data-src-2x="img/1@2x.jpg" alt="Slide 1" />
		<img data-src="img/2.jpg" data-src-2x="img/2@2x.jpg" src="" alt="Slide 2" />
		<img data-src="img/3.jpg" data-src-2x="img/3@2x.jpg" src="" alt="Slide 3" />
		<img data-src="img/4.jpg" data-src-2x="img/4@2x.jpg" src="" alt="Slide 4" />
	</div>
### 初始化插件###
	<script>
		var slider = new IdealImageSlider.Slider('#slider');
	    slider.start();
	</script>
#### 选项####
	selector: '',//滑块的CSS选择器
	height: 400, // 滑块的高度
	interval: 4000,//切换到下一张图片需要等待的时间
	transitionDuration: 700,//动画过渡的持续时间(ms)
	effect: 'slide',//过渡效果(幻灯片/褪色默认情况下)
	disableNav: false,//切换前一个/下一个导航(也禁用触摸和键盘导航)
	keyboardNav: true,//切换键盘导航
	previousNavSelector: '',//为自定义前一个的导航元素选择器
	nextNavSelector: ''//为自定义下一个导航元素选择器
#### 回调函数####
	onInit: function(){},//当滑块和第一映像加载
	onStart: function(){},//滑块开始时
	onStop: function(){},//滑块停止时
	onDestroy: function(){},//当滑块被摧毁
	beforeChange: function(){},//幻灯片发生了改变之前
	afterChange: function(){}//幻灯片发生了改变之后