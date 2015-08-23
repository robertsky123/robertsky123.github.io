网址：[glide](https://github.com/jedrzejchalubek/Glide.js)

>#### glide支持卡片式效果
### 引用的库文件###
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="js/jquery.glide.js"></script>
### 引用的css样式###
	<link rel="stylesheet" href="css/glide.core.css">
	<link rel="stylesheet" href="css/glide.theme.css">
### html缩略图结构###
	<div id="Glide" class="glide">

	    <div class="glide__arrows">
	        <span class="glide__arrow prev" data-glide-dir="<">prev</span>
	        <span class="glide__arrow next" data-glide-dir=">">next</span>
	    </div>
	
	    <div class="glide__wrapper">
	        <ul class="glide__track">
	            <li class="glide__slide"></li>
	            <li class="glide__slide"></li>
	            <li class="glide__slide"></li>
	        </ul>
	    </div>
	
	    <ul class="glide__bullets"></ul>

	</div>
### 初始化插件###
	<script>
	    $("#Glide").glide({
	        type: "carousel"
	    });
	</script>
#### selector: '',//滑块的CSS选择器
	height: 400, // 滑块的高度
	interval: 4000,//切换到下一张图片需要等待的时间
	transitionDuration: 700,//动画过渡的持续时间(ms)
	effect: 'slide',//过渡效果(幻灯片/褪色默认情况下)
	disableNav: false,//切换前一个/下一个导航(也禁用触摸和键盘导航)
	keyboardNav: true,//切换键盘导航
	previousNavSelector: '',//为自定义前一个的导航元素选择器
	nextNavSelector: ''//为自定义下一个导航元素选择器
#### API####
	.current()//返回当前幻灯片编号
	.pause()//暂停播放。返回当前播放时间间隔。
	.play()//自动播放。返回当前播放时间间隔。
	.refresh()//刷新滑块。重新计算并重建滑块
	.destroy()//破坏滑块。明确对象和绑定。