var resultValue = ""; 
var result = 0;
function addValue(value) {

	resultValue+=value;
	
	document.getElementById('result').innerHTML = resultValue;

}

function calValue() {
	result = eval(resultValue);

	document.getElementById('result').innerHTML = result;

	resultValue = result;
}
function delValue() {
	document.getElementById('result').innerHTML = 0;
	resultValue = "";
}
function backValue() {
	resultValue = document.getElementById('result').textContent;
	resultValue = resultValue.substring(0, resultValue.length-1);
	document.getElementById('result').innerHTML = resultValue;
}
function sumNumber() {
	var number1 = document.getElementById('number1').value;
	var number2 = document.getElementById('number2').value;
	number1 = parseInt(number1);
	number2 = parseInt(number2);
	document.getElementById('sum').innerHTML = number1 + number2;
}