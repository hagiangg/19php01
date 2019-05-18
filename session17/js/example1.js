function checkRegister() {
//	var name = document.getElementById('name').value;
//	var phone = document.getElementById('phone').value;
//	var address = document.getElementById('address').value;
//	var firstday = document.getElementById('firstday').value;
//	var lastday = document.getElementById('lastday').value;
//	var firstnumber = document.getElementById('firstnumber').value;
//	var lastnumber = document.getElementById('lastnumber').value;
	var name = $("#name").val();
	var address = $("#address").val();
	var phone = $("#phone").val();
	var firstday = $("#firstday").val();
	var lastday = $("#lastday").val();
	var firstnumber = $("#firstnumber").val();
	var lastnumber = $("#lastnumber").val();
	var check = true;	
	if (name == '') {
		document.getElementById('errorname').innerHTML = 'Nhập tên';
		check = false;
	} else {
		document.getElementById('errorname').innerHTML = '';
	}
	if (phone == '') {
		document.getElementById('errorphone').innerHTML = 'Nhập số điện thoại';
		check = false;
	} else {
		document.getElementById('errorphone').innerHTML = '';
	}
	if (address == '') {
		document.getElementById('erroraddress').innerHTML = 'Nhập địa chỉ';
		check = false;
	} else {
		document.getElementById('erroraddress').innerHTML = '';
	}
	if (firstday == '') {
		document.getElementById('errorfirst').innerHTML = 'Nhập ngày đầu kỳ';
		check = false;
	} else {
		document.getElementById('errorfirst').innerHTML = '';
	}
	if (lastday == '') {
		document.getElementById('errorlast').innerHTML = 'Nhập ngày cuối kỳ';
		check = false;
	} else {
		document.getElementById('errorlast').innerHTML = '';
	}
	if (firstnumber == '') {
		document.getElementById('errorfirstnumber').innerHTML = 'Nhập số đầu kỳ';
		check = false;
	} else {
		document.getElementById('errorfirstnumber').innerHTML = '';
	}
	if (lastnumber == '') {
		document.getElementById('errorlastnumber').innerHTML = 'Nhập số cuối kỳ';
		check = false;
	} else {
		document.getElementById('errorlastnumber').innerHTML = '';
	}
	if (check) {
		document.getElementById('check').innerHTML = '<br>Họ và tên: ' + name + '<br>Địa chỉ: ' + address + '<br>Số điện thoại:' + phone + '<br>Ngày đầu kỳ: ' + firstname + '<br>Ngày cuối ngày: ' + lastname + '<br>Số đầu kỳ: ' + firstnumber + '<br>Số cuối kỳ: ' + lastnumber ;
	} else {
		document.getElementById('check').innerHTML = '';
	}
//	document.getElementById('print').innerHTML = '<br>' + name + '<br>' + address + '<br>' + phone + '<br>' + first + '<br>' + last + '<br>' + firstnumber + '<br>' + lastnumber ;
	
}

function calculate() {
//	var firstday = document.getElementById('firstday').value;
//	var lastday = document.getElementById('lastday').value;
//	var firstnumber = document.getElementById('firstnumber').value;
//	var lastnumber = document.getElementById('lastnumber').value;
	var firstday = $("#firstday").val();
	var lastday = $("#lastday").val();
	var firstnumber = $("#firstnumber").val();
	var lastnumber = $("#lastnumber").val();
	if (firstday >= lastday) document.getElementById('errorfirst').innerHTML = 'Nhập ngày đầu kỳ nhỏ hơn cuối kỳ';
	if (firstnumber >= lastnumber) document.getElementById('errorlastnumber').innerHTML = 'Nhập số đầu kỳ nhỏ hơn số cuối kỳ';
	else {
		var sum;
	sum = parseInt(lastnumber) - parseInt(firstnumber);
	if (sum <= 100) sum = sum * 1500;
	else 
		if (sum > 100 && sum < 300) sum = 100 * 1500 + (sum - 100) * 2000;
		else sum = 100 * 1500 + 200 * 2000 + (sum - 200) * 3000;
	}
	document.getElementById('print').innerHTML = '<br>Số tiền điện: ' + format_currency(sum);
}
function format_currency(a) {
 	a = a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return a;
}
// document.write(format_currency(10000));
