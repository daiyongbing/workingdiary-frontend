$(function(){
    //ajax提交用户信息
    $('#adduser_btn').click(function(){
        var obj = {
            "userName":$("#userName").val(),
            "userId":$("#userId").val(),
            "projectTeam":$("#projectTeam").val(),
            "userPosition":$("#userPosition").val(),
            "certNo":$("#certNo").val(),
            "password":$("#password").val(),
            "leader":$("#leader").val(),
            "sex":$('input[name="sex"]:checked').val()
        }
        var registerJson = JSON.stringify(obj)
        alert(registerJson)
  
        $.ajax({
            type:"post",
            url:"http://192.168.21.14:8080/user/register",
            contentType:"application/json",
            dataType:"json",
            data:registerJson,
            success:function(result){
                //$(location).attr("href","login.html");
                alert("添加成功");
            },
            error:function(xhr){
                alert("添加失败："+xhr.status+xhr.statusText);
            }
        });
    });


    // 异步验证用户是否已存在
    $("#userId").blur(function(){
        // 使用jquery的ajax的操作异步发送请求.
        var id = $("#userId").val();
        if(id==null || id==""){return;}
        var obj = {
            "userId":$("#userId").val()
        }

        var jsonStr = JSON.stringify(obj);
		$.ajax({
            type:"post",
            url:"http://192.168.21.14:8080/user/validate",
            contentType:"application/json",
            dataType:"json",
            data:jsonStr,
            success:function(data){
                if(data){
                    // true:用户名可以使用
                    $("#id_warning").html("<font color='green'>用户名可以使用</font>");
                }else{
                    alert("用户ID已存在，请重新输入！");
                    // false:用户名已经存在,情况输入框
                    $("#userId").val("");
                    $("#id_warning").html("<font color='red'>用户名已经被占用</font>");
                }
            }
        });
    });
});