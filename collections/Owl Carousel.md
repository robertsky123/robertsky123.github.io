## 猫头鹰旋转木马(Owl Carousel)

###### 网址：[http://owlgraphic.com/owlcarousel/demos/images.html](http://owlgraphic.com/owlcarousel/demos/images.html)

> **Owl Carousel 是一个强大、实用但小巧的 jQuery 幻灯片插件具有以下特点：**

* 兼容所有浏览器
* 支持响应式
* 支持 CSS3 过度
* 支持触摸事件
* 支持 JSON 及自定义 JSON 格式
* 支持进度条
* 支持自定义事件
* 支持延迟加载
* 支持自适应高度

> 主要应用于产品及热门景点的展示
 
Owl Carousel 提供了众多的参数、回调函数及自定义事件（具体请往下浏览），所以它几乎可以满足你的所有要求。

## 兼容：

浏览器兼容：兼容所有浏览器，包括 IE6、IE7。

jQuery 兼容：兼容 1.7 及以上版本。

## 使用方法：

[相关文件请到官网下载](http://www.owlgraphic.com/owlcarousel/#demo)

    引入文件:
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.css" rel="stylesheet">
    <script src="js/jquery.min.js"></script>
    <script src="../owl-carousel/owl.carousel.js"></script>
    
### HTML:

	<div id="owl-demo">
	          
	  <div class="item"><img src="assets/owl1.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl2.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl3.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl4.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl5.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl6.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl7.jpg" alt="Owl Image"></div>
	  <div class="item"><img src="assets/owl8.jpg" alt="Owl Image"></div>
	                 
                           以此类推（需要多少图片放多少）
	</div>

### CSS:
	
> 首先对所有图片所在层给一个外边距为3的值。

    #owl-demo .item{  

	  margin: 3px;

	}

> 对图片本身设置成块级元素（这样有利于对图片进行宽度与高度的设置）*

	#owl-demo .item img{

	  display: block;

	  width: 100%;

	  height: auto;

	}

### JavaScript：

> 介绍：

ready（）：当DOM载入就绪可以查询及操纵时绑定一个要执行的函数。

> 相关代码:


	$(document).ready(function() {
	 
	  $("#owl-demo").owlCarousel({    //根据需求选择适应的选择器
	      
          autoPlay: 3000,             //设置自动播放3秒
	      items : 4,                  //设置图片显示的张数
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
	  });
	 
	});

**itemsDesktop/itemsDesktopSmall：** 允许您预设的幻灯片可见与特定浏览器宽度。格式(x,y),即：x =浏览器宽度和y =数量的幻灯片显示。

> #### 例如:
**itemsDesktop[1199,4]:** 如果窗口小于及等于1199每页显示4幻灯片,此参数主要用于响应式设计。或者使用【itemsDesktop:false】覆盖这些设置。

##### 中文：[了解更多](http://www.dowebok.com/93.html)

##### English：[了解更多](http://www.owlgraphic.com/owlcarousel/#demo)




