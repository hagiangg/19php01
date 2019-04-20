function checkRegister() {
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var school = document.getElementById('school').value;
	var check = true;
	var year = document.getElementById('year').value;
	
	if (name == '') {
		document.getElementById('errorname').innerHTML = 'Please input your name';
		check = false;
	} else {
		document.getElementById('errorname').innerHTML = '';
	}
	if (phone == '') {
		document.getElementById('errorphone').innerHTML = 'Please input your phone';
		check = false;
	} else {
		document.getElementById('errorphone').innerHTML = '';
	}
	if (school == '') {
		document.getElementById('errorschool').innerHTML = 'Please input your school/university/college';
		check = false;
	} else {
		document.getElementById('errorschool').innerHTML = '';
	}
	if (check) {
		document.getElementById('check').innerHTML = 'Sucessful';
	} else {
		document.getElementById('check').innerHTML = '';
	}
	document.getElementById('print').innerHTML = '<br>' + name;
	if (year >= 1998) {
		document.getElementById('print').style.color = "red";
	} else {
		document.getElementById('print').style.color = "green";
	}

}

