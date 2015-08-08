## Unslider

网址：[http://unslider.com/](http://unslider.com/)

>#### unslider 图片轮播，用于大屏展示，支持点翻页，按键翻页，支持移动端 ####
### 引用的库文件###
`<script src="//unslider.com/unslider.min.js"></script>`
`<script src="//code.jquery.com/jquery-latest.min.js"></script>`

### html结构结构###
	<div class="banner">
		<ul id="ul-1">
			<li><img src="imgs/..."></li>
			<li><img src="imgs/..."></li>
			<li><img src="imgs/..."></li>
			<li><img src="imgs/..."></li>
		</ul>
	</div>
### 函数###
	$(function() {
	 	$('.banner').unslider();
	});
### 前一页，后一页调用方式###
#### html部分####
	<a href="#" class="unslider-arrow prev">Previous slide</a>
	<a href="#" class="unslider-arrow next">Next slide</a>
#### javascript部分####
	<script>
	    var unslider = $('.banner').unslider();
	    
	    $('.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];
	        
	        //  Either do unslider.data('unslider').next() or .prev() depending on the className
	        unslider.data('unslider')[fn]();
	    });
	</script>
### 点翻页方法###
	o.dots && nav('dot');
### 箭头翻页方法###
	o.arrows && nav('arrow');
### 按键翻页方法###
	if (o.keys) {
				$(document).keydown(function(e) {
					switch(e.which) {
						case 37:
							_.prev(); // Left
							break;
						case 39:
							_.next(); // Right
							break;
						case 27:
							_.stop(); // Esc
							break;
						};
				});
	};
