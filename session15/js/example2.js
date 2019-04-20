var myArray = [];
console.log( typeof myArray);

var myArray2 = ['Nam', 'Trung', 'Mai', 'Tuan'];
console.log(myArray2[0]);
console.log(myArray2[2]);
console.log(myArray2.length);
for (var i = 0; i < myArray2.length; i++) {
	// console.log(myArray2[i]);
	document.write('<p>' + myArray2[i] + '</p>') ;
}

document.write('<br>');
var myArray3 = [5, 4, 9, 12, 78, 4, 6, 2];
//Sap xep mang myArray3 theo thu tu tang dan va in ra
for (var i = 0; i < myArray3.length; i++) {
	for (var j = i + 1; j < myArray3.length; j++){
		if (myArray3[j] < myArray3[i]) {
			var t = myArray3[i];
			myArray3[i] = myArray3[j];
			myArray3[j] = t;
		}
	}
	document.write('<p>' + myArray3[i] + '</p>');
}
