$(document).ready( function() {
		$('#preview').on('click', function(e) {
			e.preventDefault();
			previewstdDtetails();
		});
	});
function previewstdDtetails(){
	var std_data={};
	//1st fieldset
	std_data.std_name=$("#name").val();
	std_data.std_fname=$("#faname").val();
	std_data.std_mname=$("#mname").val();
	std_data.std_addr=$("#praddr").val();
	std_data.std_no=$("#phno").val();
	std_data.std_gender=$('input[name="gender"]:checked').val();
	//2nd fieldset
	std_data.std_sem=$("#sem").val();
	std_data.std_course=$("#crs").val();
	std_data.std_examrollno=$("#examrollno").val();
	std_data.std_classrollno=$("#classrollno").val();
	std_data.std_regdno=$("#registrationno").val();
	//3rd fieldset
	std_data.std_email=$("#email").val();
	std_data.std_photo=$("#pic").val();
	console.log(std_data);
	//takking the label field
	//1st fieldset
	label_name=$('label[for="sname"]').text();
	label_fname=$('label[for="fname"]').text();
	label_mname=$('label[for="mname"]').text();
	label_addr=$('label[for="address"]').text();
    label_no=$('label[for="contact"]').text();
    label_gender=$('label[for="gender"]').text();
	//2nd fieldset
    label_sem=$('label[for="sem"]').text();
    label_course=$('label[for="course"]').text();
    label_examrollno=$('label[for="examRollno"]').text();
	label_classrollno=$('label[for="classRollno"]').text();
	label_regdno=$('label[for="registrationno"]').text();
	//3rd fieldset
	label_email=$('label[for="email"]').text();
	label_photo=$('label[for="photo"]').text();

	std_data.displayDetails=function(){
        var name_data='<p><strong>' + label_name + '</strong> : ' + this.std_name + '</p>';
        var fname_data='<p><strong>' + label_fname + '</strong> : ' + this.std_fname + '</p>';
        var mname_data='<p><strong>' + label_mname + '</strong> : ' + this.std_mname + '</p>';
        var addr_data='<p><strong>' + label_addr + '</strong> : ' + this.std_addr + '</p>';
        var no_data='<p><strong>' + label_no + '</strong> : ' + this.std_no + '</p>';
        var gender_data='<p><strong>' + label_gender + '</strong> : ' + this.std_gender + '</p>';
        //2nd fieldset
        var sem_data='<p><strong>' + label_sem + '</strong> : ' + this.std_sem + '</p>';
        var course_data='<p><strong>' + label_course + '</strong> : ' + this.std_course + '</p>';
        var examrollno_data='<p><strong>' + label_examrollno + '</strong> : ' + this.std_examrollno + '</p>';
        var classrollno_data='<p><strong>' + label_classrollno + '</strong> : ' + this.std_classrollno + '</p>';
        var regdno_data='<p><strong>' + label_regdno + '</strong> : ' + this.std_regdno + '</p>';
        var email_data='<p><strong>' + label_email + '</strong> : ' + this.std_email + '</p>';
        var pic_data='<p><strong>Your photo</strong>' + this.std_photo+'</p>' ;

        var data=name_data+fname_data+mname_data+addr_data+no_data+gender_data+sem_data
        +course_data+examrollno_data+classrollno_data+regdno_data+email_data+pic_data;
        $('#previewbox').append(data);
        console.log(data);
	}
	std_data.displayDetails();
}