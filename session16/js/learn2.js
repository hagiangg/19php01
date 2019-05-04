$('.runMyBox').click(function() {
	$('#myBox').animate({'font-size':'30px'});
	$('#myBox').animate({'left':'100px'});
	$('#myBox').animate({'top':'300px'});
	$('#myBox').animate({'color':'blue'});
	$('#myBox').animate({'height':'300px'});
	$('#myBox').animate({'width':'300px'});
});
// $('.showHide').click(function() {
// 	$('#myBox').hide(4000).css('color','red').show(5000);
// });
$('.runImage').click(function() {
	$('#myBox1').animate({'right':'500px'}, "slow");
	//$('#myBox1').animate({'left':'200px'}, "slow");
	//$('#myBox2').animate({'right':'200px'}, "slow");
	$('#myBox2').animate({'left':'-100px'}, "slow");
//	$('#myBox3').animate({'left':'-100px'}, "slow");

});
$('.showHide').click(function() {
	$('#lua').src.hide(4000).show(5000);
});