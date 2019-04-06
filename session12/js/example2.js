function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 =='' || number2 == '') {
			document.getElementById('result').innerHTML = 'Vui long nhap so';
			document.getElementById('result').style.color = 'red';
	} else
		document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
//	alert(parseInt(number1) + parseInt(number2));
//	alert(number1);
//	alert(number2);
}
function subNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 =='' || number2 == '') {
			document.getElementById('result1').innerHTML = 'Vui long nhap so';
			document.getElementById('result1').style.color = 'red';
	} else
		document.getElementById('result1').innerHTML = parseInt(number1) - parseInt(number2);
}
function mulNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 =='' || number2 == '') {
		document.getElementById('result2').innerHTML = 'Vui long nhap so';
		document.getElementById('result2').style.color = 'red';
	} else
		document.getElementById('result2').innerHTML = parseInt(number1) * parseInt(number2);
}
function divNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 =='' || number2 == '') {
		document.getElementById('result3').innerHTML = 'Vui long nhap so';
		document.getElementById('result3').style.color = 'red';
	} else
		document.getElementById('result3').innerHTML = parseInt(number1) / parseInt(number2);
}
