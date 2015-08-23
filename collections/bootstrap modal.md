# Bootstrap Modal

> Bootstrap-Modal是一个动态的弹出窗口的插件。

### 网址：[https://github.com/jschr/bootstrap-modal](https://github.com/jschr/bootstrap-modal)

### 兼容性
* 不支持ie
### 使用方法
	
	引入js文件
 	<script src="js/bootstrap-modalmanager.js"></script>
 	<script src="js/bootstrap-modal.js"></script>

	引入css样式
 	<link href="css/bootstrap-modal.css" rel="stylesheet" />

### HTML代码

	<button class="demo btn btn-primary btn-large" data-toggle="modal" href="#responsive">demo</button>

	<div id="responsive" class="modal hide fade" >
    	<p><input type="text" class="span12" /></p>
	</div>



### 可修改的选项：
* width
* height
* maxHeight
* loading
* spinner
* backdropTemplate
* consumeTab
* focusOn
* replace
* attentionAnimation
* modalOverflow
* manager
* ModalManager
* loading
* backdropLimit
* spinner
* backdropTemplate

### 五种弹出类型

* 向后兼容
* 响应
* 可堆叠
* 全宽度
* 通过Ajax加载内容
* 禁用背景滚动
