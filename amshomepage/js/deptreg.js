
		$(document).ready(function(){

			// Custom method to validate username
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
			}, "Username must contain only letters, numbers");
			//validate password
			$.validator.addMethod('strongPassword', function(value, element) {
			    return this.optional(element) 
			      || value.length >= 8
			      && /\d/.test(value)
			      && /[a-z]/i.test(value);
			  }, 'Your password must be at least 8 characters long and contain at least one number and one char\'.')

			$(".next").click(function(){
				var form = $("#myform");
				form.validate({
					errorElement: 'span',
					errorClass: 'help-block',
					highlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').addClass("has-error");
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').removeClass("has-error");
					},
					rules: {
						uname1: {
							required: true,
							usernameRegex: true,
							minlength: 6,
						},
						pswd : {
							required: true,
							strongPassword:true,
							minlength: 8,
						},
						cpwd : {
							required: true,
							equalTo: '#pswd',
						},
						
						name: {
							required: true,
							minlength: 6,

						},
						email: {
							required: true,
							minlength: 3,
						},
						faname:{
							required: true,
							minlength: 6,
						},
						mname:{
							required: true,
							minlength: 6,
						},
						praddr:{
							required: true,
							minlength: 6,
						},
						praddr:{
							required: true,
							minlength: 6,
						},
						peaddr:{
							required: true,
							minlength: 6,
						},
						phno:{
							required: true,
							minlength: 10,
							maxlength:10,
						},
						phno_2:{
							required: true,
							minlength: 3,
						},
						radio:{
							required: true,

						},
						sem:{
							required: true,

						},
						crs:{
							required: true,
						},
						examrollno:{
							required: true,
						},
						classrollno:{
							required: true,
						},
						registrationno:{
							required: true,
						},
						
						
					},
					messages: {
						uname1: {
							required: "Username required",
						},
						pwd : {
							required: "Password required",
						},
						cpwd : {
							required: "Password required",
							equalTo: "Password don't match",
						},
						name: {
							required: "Name required",
						},
						email: {
							required: "Email required",
						},
						faname:{
							required: "Father's Name required",
						},
						mname:{
							required: "Mother's Name required",
						},
						praddr:{
							required: "Present address required",
						},
						peaddr:{
							required: "Permanent address required",
						},
						
						phno:{
							required: "Phone no required",
						},
						phno_2:{
							required: "Alternet Phone no required",
						},
						radio:{
							required: "select one",

						},
						sem:{
							required: "choose one",

						},
						crs:{
							required: "choose one",
						},
						examrollno:{
							required: "Exam Roll no is mandatory",
						},
						classrollno:{
							required: "Class Roll no is mandatory",
						},
						registrationno:{
							required: "Registration no is mandatory",
						},

						
					}
				});
				if (form.valid() === true){
					if ($('#persional_information').is(":visible")){
						current_fs = $('#persional_information');
						next_fs = $('#academic_information');
					}else if($('#academic_information').is(":visible")){
						current_fs = $('#academic_information');
						next_fs = $('#account_information');
					}
					
					next_fs.show();
					current_fs.hide();
				}
			});

			$('#previous').click(function(){
				if($('#academic_information').is(":visible")){
					current_fs = $('#academic_information');
					next_fs = $('#persional_information');
				}else if ($('#account_information').is(":visible")){
					current_fs = $('#account_information');
					next_fs = $('#academic_information');
				}
				next_fs.show();
				current_fs.hide();
			});
				
			//hide login modal and show signup modal
			$("#signupbtn").click(function(){
				$("#stdLoginModal").modal("hide");
			    $("#stdSignupModal").modal("show");
           });
			//hide signup modal and show preview modal
            $("#preview").click(function(){
				//$("#stdSignupModal").modal("hide");
			    $("#stdPreviewModal").modal("show");
			});
			
		});//ready  function end

		//validate name
			function nameValidate(event){
              console.log(event);
           if((event.charCode>=97&&event.charCode<=122)||(event.charCode>=65&&event.charCode<=90)){
              return true;
          }else{
              return false;
            }
          }
          //validate contact number
          function cnoValidate(event){
              console.log(event);
           if(event.charCode>=48&&event.charCode<=57){
              return true;
          }else{
              return false;
            }
          }
       //show image
       function readURL(input){
       	if (input.files && input.files[0]) {
       		var reader=new FileReder();
       		reader.onload=function(e){
       			$('#blah').attr('src',e.target.result);
       		};
       		reader.readAsDataURL(input.files[0]);
       	}
       }


