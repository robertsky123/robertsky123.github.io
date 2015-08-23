
网址：[Flux-Slider](https://github.com/joelambert/Flux-Slider)

>#### Flux-Slider支持2D 3D效果翻转的多种效果，支持响应式
### 引用的库文件###
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
  	<script src="jquery.slides.min.js"></script>
### 引用的css样式###
	<link rel="stylesheet" href="css/example.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
### html缩略图结构###
	<div id="slides">
	    <img src="http://placehold.it/940x528">
	    <img src="http://placehold.it/940x528">
	    <img src="http://placehold.it/940x528">
	    <img src="http://placehold.it/940x528">
	    <img src="http://placehold.it/940x528">
  	</div>
### 函数调用###
	$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });
### 方法
#### 设置幻灯片的宽度和高度####
	$(function(){
	  $("#slides").slidesjs({
	    width: 700,
	    height: 393
	  });
	});
#### 设置幻灯片的第一张幻灯片####
	$(function(){
	  $("#slides").slidesjs({
	    start: 3
	  });
	});
#### 设置下一个和前一个按钮####
	$(function(){
	  $("#slides").slidesjs({
	    navigation: {
	      	active: true,
			//可以是“滑”或“消失”。	        
	      	effect: "slide"	        
	    }
	  });
	});
#### 分页设置####
	$(function(){
	  $("#slides").slidesjs({
	    pagination: {
	      active: true,
	      effect: "slide"
	    }
	  });
	});
#### 效果设置####
	$(function(){
	  $("#slides").slidesjs({
	    effect: {
	      slide: {
	        speed: 200
	      },
	      fade: {
	        speed: 300,         
	        crossfade: true
	      }
	    }
	  });
	});
### 回调函数
	$(function(){
	  $("#slides").slidesjs({
	    callback: {
	      loaded: function(number) {
	      },
	      start: function(number) {
	      },
	      complete: function(number) {
	      }
	    }
	  });
	});