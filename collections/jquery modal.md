# jQuery Modal

> 点击可打开、关闭弹窗或提示框

网址：[https://github.com/kylefox/jquery-modal](https://github.com/kylefox/jquery-modal)

### 使用方法
	
	引入js文件
	<script src="jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="jquery.modal.min.js" type="text/javascript" charset="utf-8"></script>

	引入css样式
	<link rel="stylesheet" href="jquery.modal.css" type="text/css" media="screen" />

### HTML代码

	<a href="#demo" rel="modal:open">Open Modal</a>

	<div class="modal" id="demo" style="display:none;">
	  <p>我是案例 <br />Click <a href="#" rel="modal:close">close</a>, 我是案例</p>
	</div>

#### 打开modal方法：	

	1、<a href="#demo" rel="modal:open">Login</a>
	2、$('#demo').modal();

#### 关闭modal方法

	1、<a href="#close" rel="modal:close">Close window</a>
    2、$.modal.close();


## 可修改的选项：

这些都是支持选项及其默认值:

    $.modal.defaults = 
      overlay: "#000",        // 颜色
      opacity: 0.75,          // 不透明度
      zIndex: 1,              // Overlay z-index.
      escapeClose: true,      // 允许用户关闭modal按“ESC”
      clickClose: true,       // 允许用户关闭modal通过单击叠加
      closeText: 'Close',     // 结束标记<a>的文本内容。
      closeClass: '',         // 添加额外的 class(es) 关闭 <a> 标签.
      showClose: true,        // 显示了一个(X),在右上角图标/链接
      modalClass: "modal",    // CSS类添加到元素显示在modal。
      spinnerHtml: null,      // 在AJAX请求HTML添加到默认微调控制项。
      showSpinner: true,      // 启用/禁用默认的Spinner在AJAX请求下。
      fadeDuration: null,     // fade过渡期时间的毫秒数(null意味着没有)
      fadeDelay: 1.0          // 在modal的叠加的淡入开始fade in (0.5 = 50%, 1.5 = 150%, etc.)
    };


