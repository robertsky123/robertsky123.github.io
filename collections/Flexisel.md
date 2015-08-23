## Flexisel(自动播放)

###### 网址：[http://9bitstudios.github.io/flexisel](http://9bitstudios.github.io/flexisel/)

#### 介绍

> Flexisel是一款响应式的旋转木马jquery插件，使用简单，你所需要做的就是把图片放到无序列表中，然后在页面加载的时候初始化插件就可能了，Flexisel会自动获取图片的宽度，并自动适应屏幕的宽度。

## 使用方法：

#### 1.引入文件

	  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
      <script type="text/javascript" src="js/jquery.flexisel.js"></script>

#### 2.HTML

	<ul id="flexiselDemo3">
	    <li><img src="images/1.jpg" /></li>
	    <li><img src="images/2.jpg" /></li>
	    <li><img src="images/3.jpg" /></li>
	    <li><img src="images/4.jpg" /></li>                                                 
    </ul>  

    <div class="clearout"></div>

#### 3.CSS
    
     body {
		background:#fff;
		font-family:Arial, sans-serif;
		}
		
		p {
		margin-bottom:20px;
		}
		
		.clearout {
		height:20px;
		clear:both;
		}
		
		#flexiselDemo3 {
		display:none;
		}
		
		.nbs-flexisel-container {
		    position:relative;
		    max-width:100%;
		}
		.nbs-flexisel-ul {
		    position:relative;
		    width:9999px;
		    margin:0px;
		    padding:0px;
		    list-style-type:none;   
		    text-align:center;  
		}
		
		.nbs-flexisel-inner {
		    overflow:hidden;
		    float:left;
		    width:100%;
		    background:#fcfcfc;
		    background: #fcfcfc -moz-linear-gradient(top, #fcfcfc 0%, #eee 100%); /* FF3.6+ */
		    background: #fcfcfc -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fcfcfc), color-stop(100%,#eee)); /* Chrome,Safari4+ */
		    background: #fcfcfc -webkit-linear-gradient(top, #fcfcfc 0%, #eee 100%); /* Chrome10+,Safari5.1+ */
		    background: #fcfcfc -o-linear-gradient(top, #fcfcfc 0%, #eee 100%); /* Opera11.10+ */
		    background: #fcfcfc -ms-linear-gradient(top, #fcfcfc 0%, #eee 100%); /* IE10+ */
		    background: #fcfcfc linear-gradient(top, #fcfcfc 0%, #eee 100%); /* W3C */
		    border:1px solid #ccc;
		    border-radius:5px;
		    -moz-border-radius:5px;
		    -webkit-border-radius:5px;  
		}
		
		.nbs-flexisel-item {
		    float:left;
		    margin:0px;
		    padding:0px;
		    cursor:pointer;
		    position:relative;
		    line-height:0px;
		}
		.nbs-flexisel-item img {
		    width: 100%;
		    cursor: pointer;
		    position: relative;
		    margin-top: 10px;
		    margin-bottom: 10px;
		    max-width:100px;
		    max-height:45px;
		}
		
		/*** Navigation ***/
		
		.nbs-flexisel-nav-left,
		.nbs-flexisel-nav-right {
		    width: 22px;
		    height: 22px; 
		    position: absolute;
		    cursor: pointer;
		    z-index: 100;
		    opacity: 0.5;
		}
		
		.nbs-flexisel-nav-left {
		    left: 10px;
		    background: url(../images/button-previous.png) no-repeat;
		}
		
		.nbs-flexisel-nav-right {
		    right: 5px;
		    background: url(../images/button-next.png) no-repeat;
		}

#### 4.JavaScript
  
      $("#flexiselDemo3").flexisel({
        visibleItems: 5,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });