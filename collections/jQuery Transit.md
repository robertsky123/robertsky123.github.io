# jQuery Transit

> jQuery Transit是一个扩展了jQuery的动画功能的一个插件，jQuery的超光滑CSS3转换和转换。

##### 网址：[http://ricostacruz.com/jquery.transit/](http://ricostacruz.com/jquery.transit/)

##### 浏览器：IE 10+，Firefox 4+，Safari 5+，Chrome 10+，Opera 11+，Mobile Safari。


## 使用方法：

在引用jQuery库之后引用jquery.transit.js。jQuery库要求版本在1.4以上：

	
		<script src="jquery.js"></script>
		<script src="jquery.transit.js"></script>


## 例子代码：

你可以在jQuery中设置任何你想要的CSS属性转换样式，而```$.fn.animate()```是不被允许的，只允许设置CSS样式：

		$("#box").css({x:'30px'});                   //向右移动30px
		$("#box").css({ translate: [60,30] });       //向右移动60px并向下移动30px
		$("#box").css({ scale: 2 });                 //放大到原来的两倍
		$("#box").css({ rotate3d: [1, 1, 0, 45] });  //3D旋转效果

另外还支持相对值：

		$("#box").css({ rotate: '+=30' });  // 多于30度
		$("#box").css({ rotate: '-=30' });  // 少于30度

单位也是可有可无的：

		$("#box").css({x:30});
		$("#box").css({y:'30px'});

### $.fn.transition

你能用CSS3的动画过渡效果通过使用```$.fn.transition()```来实现。其工作原理很像```$.fn.animate()```，只不过使用了CSS3转换：

		$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() {..});

而另一种编写方式就较为完整和宽松了,就像在```$.fn.animate()```中一样：

		$("#box").transition({
			opacity: 0.1, scale: 0.3,
			duration: 500,
			easing: 'in',
			complete: function() { /* ... */ }
		});

了解更多，请戳：[http://ricostacruz.com/jquery.transit/](http://ricostacruz.com/jquery.transit/)