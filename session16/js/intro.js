$('.demo1-click').click(function() {
	$('#demo1').html('Hello Jquery');
});
$('.demo2-click').click(function() {
	//$('#demo2').css('color', 'red');
	//thay doi nhieu style cung mot luc
	$('#demo2').css({'color':'red', 'font-size':'30px', 'font-style':'italic'});
});
$('.demo3-click').click(function() {
	$('#demo3').attr('src', '../img/blue.jpg');
});
$('.demo4-show').click(function() {
	$('#demo4').show("fast");
});
$('.demo4-hide').click(function() {
	$('#demo4').hide(5000);
});