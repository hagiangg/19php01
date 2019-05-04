var myTest1 = "The Los Angeles Daily News is the local news source";
var myTest2 = "The Los Angeles Daily News";
document.write(myTest1 + '<br> ' + myTest2);
var a = 5;
//console.log(typeof myTest1);
//console.log(typeof a);
//console.log(typeof myTest2);

//
var myTest1Length = myTest1.length;
document.write("myTest1 dai "+ myTest1Length + " ki tu <br>");


var myTest2Length = myTest2.length;
document.write("myTest2 dai "+ myTest2Length + " ki tu <br>");


//kiem tra ki tu co trong chuoi string k
var aCharInMyTest1 = myTest1.indexOf('ts');
console.log(aCharInMyTest1);


var aCharLastInMyTest1 = myTest1.lastIndexOf('a');
console.log(aCharLastInMyTest1);

//thay the mot ki tu hoac chuoi ki tu trong chuoi sting
var replaceCity = myTest1.replace('Los Angeles', 'Da Nang');
document.write('<br>' + replaceCity);

//cat ki tu hoac chuoi ki tu trong chuoi string
var cutStringMyTest1 = myTest1.substring(4, 15);
document.write('<br>' + cutStringMyTest1);

var cutStringLengthMyTest1 = myTest1.substr(4, 15);
document.write('<br>' + cutStringLengthMyTest1);

//viet hoa tat ca chu cai trong chuoi string
var upperCaseTest1 = myTest1.toUpperCase();
document.write('<br>' + upperCaseTest1);

var lowerCaseTest1 = myTest1.toLowerCase();
document.write('<br>' + lowerCaseTest1);

//Dat mot bien la ten du bat ki duoc truyen vao tu ban
//vi du: function myName (name) {}
//ex: myName('Luong Hoai Canh');
/*
1. Tach ho, ten dem, ten cua nguoi do ra
2. Kiem tra trong ten day du do co chu n khong
3. neu co chu n thi dem xem co bao nhieu chu n
4. Viet hoa ten nguoi do len va in ra
ex: Luong hoai CANH
5. thay the ten dem cua nguoi do thanh: 19PHP01
ex: Luong 19PHP01 Canh
*/

function nhapName(name) {
	document.write('<br>' + name);
	var cutHo = name.substr(0, 5);
	var cutTenDem = name.substr(6, 4);
	var cutTen = name.substr(11, 4);
	var check = name.indexOf('n');
	var uppercaseTen = cutTen.toUpperCase();
	var replaceTen = name.replace('Nhat', '19PHP01');
	document.write('<br>');
	document.write('Ho: '+ cutHo + ', Ten dem: ' + cutTenDem + ', Ten: ' + cutTen);
	document.write('<br> Co ki tu n trong ten: ' + check);
	document.write('<br>' + uppercaseTen);
	document.write('<br>' + replaceTen);
}
nhapName('Huynh Nhat Linh')

