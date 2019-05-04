function checkRegister() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var check = true;
	if (name == '') {
		document.getElementById('errorname').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errorname').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('erroremail').innerHTML = 'Please input your name';
	} else {
		document.getElementById('erroremail').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errorpassword').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errorpassword').innerHTML = '';
	}
	// if (name != '' && email != '' && password != '') {
	// 	document.getElementById('check').innerHTML = 'Sucessful';
	// }
	if (check) {
		document.getElementById('check').innerHTML = 'Sucessful';
	} else {
		document.getElementById('check').innerHTML = '';
	}
}
var BinhBook = 27;
var MinhBook;
MinhBook = BinhBook / 3;
var SoLanChuyen = 0;
while (BinhBook != MinhBook*2) {
	BinhBook --;
	MinhBook ++;
	SoLanChuyen ++;
}
document.write('<br>So sach Binh chuuyen cho Minh la: ' + SoLanChuyen + '<br>');

var tien = 2000;
var soKeo = 0;
var soVoKeo = 0;
while (tien >= 200) {
	tien -= 200;
	soKeo ++;
	soVoKeo ++;
}
while (soVoKeo >= 2) {
	soKeo ++;
	soVoKeo --;
}
document.write('<br>So keo mua duoc la: ' + soKeo + '<br>');