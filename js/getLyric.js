function  gettxt(url){
		let src = url;
		var lyricStr ;
		//通过ajax请求本地文件
		$.ajax({
				url: src,
				async:false,
				success: function(data, status) {	
					lyricStr = data;
					console.log("获取成功！")
				},
				error: function(data, status) {
					// console.log(arguments)
					console.log("获取失败!");
				}
			});	
	return lyricStr;
} 