$(function(){
    $('#submit').click(function(){
		var obj = {
			"title":$("#title").val(),
			"content":$("#content").val()
		}
		var loginJSON = JSON.stringify(obj)
        $.ajax({
			type:"post",
			url:"http://192.168.21.14:8080/diary/postWorkingDiary",
			contentType:"application/json",
			dataType:"json",
			data:loginJSON,
			success:function(data){
				alert("success");
			},
			error:function(xhr){
				alert("failed");
			}
		});
    });
});