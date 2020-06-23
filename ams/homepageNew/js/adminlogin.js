//$(document).ready( function() {
		//$('#adminloginbtn').on('click', function() {
			
			//validateAdmin();
		//});
	//});//ready functin end*/
function validateAdmin(){
		var adminLoginData={};
		adminLoginData.admin_id=$("#adminid").value();
		adminLoginData.admin_pwd=$("#adminpswd").value();
		console.log(adminLoginData);
		var loginReq = $.ajax({
				url: 'http://localhost:8083/admin/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: adminLoginData
	     });
       loginReq.done(function(res){
			console.log("res");
			console.log(res);
			if (res.msg == 'Valid') {
				alert("done");
			} else {
				$(".invaliddata").show(500);
			}
	   })
    }//function end