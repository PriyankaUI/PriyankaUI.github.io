$(document).ready( function() {
		
	    $('#stdlogibtn').on('click', function(e) {
			e.preventDefault();
			//validateAdmin();
		});
		
	});//ready functin end*/
 function validateStudent(){
		var stdLoginData={};
		stdLoginData.student_id=$("#stdid").val();
		stdLoginData.student_pwd=$("#stdpwd").val();
		console.log(stdLoginData);
		/*if ($("#check1").is(":checked")){
			localStorage.setItem("stdLoginData", JSON.stringify(stdLoginData));
			console.log(localStorage.getItem("stdLoginData"))
	    }else {
		    localStorage.removeItem("stdLoginData")
	     }*/

		var loginReq = $.ajax({
				url: 'http://localhost:8083/student/data/validation',
				dataType: 'JSON',
				method: 'POST',
				data: stdLoginData
	     });
       loginReq.done(function(res){
			console.log("Sucess");
			console.log(res);
			if (res.msg == 'valid') {
			    pageRedirect(); 
			   //alert("done");               
			} else {
				$(".invaliddata").show();
			}
	   })
    }//function end
    function pageRedirect() {
     window.location.href = "studentProfilepagenew.html";
   } 
   /*****************student login**********************/