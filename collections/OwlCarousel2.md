## OwlCarousel2

###### 网址：[http://smashingboxes.github.io/OwlCarousel2/demos/basic.html](http://smashingboxes.github.io/OwlCarousel2/demos/basic.html)

##### [更多效果](http://smashingboxes.github.io/OwlCarousel2/demos/demos.html)

#### 介绍

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

> #### 使用方法

#### 1.需引入的文件
    <link rel="stylesheet" href="http://smashingboxes.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="http://smashingboxes.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.theme.default.min.css">

    <script src="http://smashingboxes.github.io/OwlCarousel2/assets/vendors/jquery.min.js"></script>
    <script src="http://smashingboxes.github.io/OwlCarousel2/assets/owlcarousel/owl.carousel.js"></script>

#### 2.html

    <div class="owl-carousel owl-theme">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
</div>

#### 3.CSS

	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,300italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="http://smashingboxes.github.io/OwlCarousel2/assets/css/docs.theme.min.css">

#### 4.JavaScript

		 <script>
       $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }  //根据浏览器宽度进行数量的变化 
              })
            })
    </script>		