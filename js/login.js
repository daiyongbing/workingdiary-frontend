$(function(){
	
	//登录输入框效果
	$('.form_text_ipt input').focus(function(){
		$(this).parent().css({
			'box-shadow':'0 0 3px #bbb',
		});
	});
	$('.form_text_ipt input').blur(function(){
		$(this).parent().css({
			'box-shadow':'none',
		});
		//$(this).parent().next().hide();
	});
	
	//表单验证
	$('.form_text_ipt input').bind('input propertychange',function(){
		if($(this).val()==""){
			$(this).css({
				'color':'red',
			});
			$(this).parent().css({
				'border':'solid 1px red',
			});
			//$(this).parent().next().find('span').html('helow');
			$(this).parent().next().show();
		}else{
			$(this).css({
				'color':'#ccc',
			});
			$(this).parent().css({
				'border':'solid 1px #ccc',
			});
			$(this).parent().next().hide();
		}
	});
	
	//ajax提交信息
    $('#login_button').click(function(){
		var obj = {
			"userName":$("#username").val(),
			"password":$("#password").val()
		}
		var loginJSON = JSON.stringify(obj)
        $.ajax({
			type:"post",
			url:"http://192.168.21.14:8080/user/login",
			contentType:"application/json",
			dataType:"json",
			data:loginJSON,
			success:function(data){
				if (data == 200){
					$(location).attr("href","main.html");
				}
				if(data == 201){
					alert("用户名或密码错误");
					$(location).attr("href","login.html");
				}
				
			},
			error:function(xhr){
				$(location).attr("href","error.html");
			}
		});
    });
	
});
