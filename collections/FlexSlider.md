网址：[FlexSlider](http://www.woothemes.com/flexslider/)

>#### FlexSlider支持、前进后退按钮，点，按键翻页

### 引用的库文件###
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script defer src="../jquery.flexslider.js"></script>
### 引用的css样式###
	<link rel="stylesheet" href="css/demo.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="../flexslider.css" type="text/css" media="screen" />
### html缩略图结构###
	<div id="main" role="main">
  		<section class="slider">
		    <div class="flexslider">
				  <ul class="slides">
				    <li>
				      <img src="" />
				    </li>
				    <li>
				      <img src="" />
				    </li>
				    <li>
				      <img src="" />
				    </li>
				    <li>
				      <img src="" />
				    </li>
				  </ul>
			</div>
  		</section>
	</div>

### 函数调用###
	<script type="text/javascript">
	    $(window).load(function(){
	      $('.flexslider').flexslider({
	        animation: "slide",
	        start: function(slider){
	          $('body').removeClass('loading');
	        }
	      });
	    });
	</script>
### 可修改的选项
	//支持的特征
	pauseOnAction: true,            //暂停幻灯片当与控制交互元素
	pauseOnHover: false,            //暂停幻灯片当悬停在滑块,然后恢复当不再徘徊
	useCSS: true,                   //滑块将使用CSS3转换如果可用
	touch: true,                    //允许触摸滑动滑块在触屏设备上的导航
	video: false,                   //如果使用视频在滑块,将防止CSS3 3 d转换,以避免图形化故障
	
	//主要控制
	controlNav: true,               //每个clide创建分页导航控制
	directionNav: true,             //是否要为之前创建导航下导航
	prevText: "Previous",           //设置文本的“前一个”
	nextText: "Next",               //设置文本的“下一个”
	
	//二级导航
	keyboard: true,                 //允许滑块通过键盘左/右导航键
	multipleKeyboard: false,        //让键盘导航影响多个滑块。默认行为削减了键盘导航与多个滑块。
	mousewheel: false,              //允许通过鼠标滚轮滑动导航
	pausePlay: false,               //创建暂停/播放动态元素
	pauseText: 'Pause',             //设置文本的“暂停”
	playText: 'Play',               //设置文本的“play”
	
	//特殊的性质
	controlsContainer: "",          //使用类选择器。声明应该附加的容器的导航元素。默认的容器是FlexSlider元素。如果没有找到给定元素属性将被忽略。
	manualControls: "",             //声明自定义控件导航。
	sync: "",                       //镜子的另一个滑块滑块上执行的动作
	asNavFor: "",                   //内部属性暴露将滑块变成缩略图导航为另一个滑块
	
	                                
	//回调函数 API
	start: function(){},            //滑块装入第一张幻灯片
	before: function(){},           //异步与每个滑块动画
	after: function(){},            //每个滑块动画完成
	end: function(){},              //当滑块达到最后的幻灯片(异步)
	added: function(){},            //添加一个幻灯片
	removed: function(){}           //删除幻灯片
