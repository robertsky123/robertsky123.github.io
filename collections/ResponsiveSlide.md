网址：[ResponsiveSlides](https://github.com/viljamis/ResponsiveSlides.js)

>#### ResponsiveSlides图片以淡入淡出的方式轮播

### 引用的库文件###
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="../responsiveslides.min.js"></script>
### 引用的css样式###
	<link rel="stylesheet" href="../responsiveslides.css">
	<link rel="stylesheet" href="demo.css">
### html缩略图结构###
	<ul class="rslides">
	  <li><img src="1.jpg" alt=""></li>
	  <li><img src="2.jpg" alt=""></li>
	  <li><img src="3.jpg" alt=""></li>
	</ul>
### 函数调用###
	<script>
	  $(function() {
	    $(".rslides").responsiveSlides();
	  });
	</script>
### 可修改的选项		
	$(".rslides").responsiveSlides({
	  auto: true,             // 自动动画
	  speed: 500,            // 过度的速度，毫秒
	  timeout: 4000,          // 幻灯片切换间隔时间，毫秒
	  nav: false,             // 显示导航
	  random: false,          // 随机的顺序幻灯片
	  pause: false,           // 鼠标移上去时暂停
	  pauseControls: true,    // 暂停时悬停控制
	  prevText: "Previous",   // 文本的“前进”按钮
	  nextText: "Next",       // 文本的“后退”按钮
	  maxwidth: "",           // 幻灯片的最大宽度
	  namespace: "rslides",   // 改变使用的默认名称空间
	  before: function(){},   // 在回调之前
	  after: function(){}     // 在回调之后
	});
