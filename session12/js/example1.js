//for, while, do while
for (var i=0; i<10; i++) {
	document.write(i);
	document.write('<br>');
}

document.write('-------------<br>');
var x = 5;
var y = 5;
x++; //++x;
y--; //--y;
document.write(x);
document.write('<br>');
document.write(y);

var a = 5, b = 7;
var c;
c = a++ + b++;
document.write('<br>');
document.write(c);
c = ++a + ++b;
document.write('<br>');
document.write(c);


document.write('<br>-------------<br>');
var i =5;
while (i<10) {
	document.write(i);
	document.write('<br>');
	i++;
}

document.write('<br>-------------<br>');
var i=5;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while (i<10);


//cho mot so chay tu 2 den 15
//kiem tra xam so do co phai la ngay trong tuan khong?
//neu co thi in ra: hom nay la thu x
//neu khong thi in ra: so nay khong thuoc ngay trong tuan


for (var i=2; i<15; i++) {
	if (i <= 7) {document.write('hom nay la thu ' + i + '<br>');}
	else {
		if (i == 8) document.write('hom nay la chu nhat <br>');
		else document.write('so ' + i + ' khong thuoc ngay trong tuan <br>');
	}
}


//ham trong javascript

function myFunction() {
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();

function sub(x, y) {
	document.write(x + y);
}
document.write('<br>');
sub(6, 7);
document.write('<br>');
sub(9, 6);

//cho mot day so chay tu 0 den 10
// voi n la so nam kinh nghiem
//tinh luong thuc nhan voi 
//luong co ban la 2.300.000
//so nam kinh nghiem <3 thi he so luong la 2
//so nam kinh nghiem <5 thi he so luong la 3
//so nam kinh nghiem >5 thi he so luong la 5
//su dung: function, if else, for hoac while

//ex: luong thuc nhan = luong co ban * he so luong

//c1
function luong() {
	for (var i=0; i<=10; i++) {
		if (i < 3) document.write('luong: ' + 2300000 * 2 +'<br>' );
		else 
			if (i >= 3 && i < 5) document.write('luong: ' + 2300000 * 3 +'<br>' );
			else 
				if (i == 5) document.write('luong: ' + 2300000 * 4 +'<br>');
				else document.write('luong: ' + 2300000 * 5 +'<br>');
	}
}
document.write('<br>');
luong();

//c2
var lcb=2300000;
for (var i=0; i<=10; i++) {
		if (i < 3) document.write(luong(lcb,2) + '<br>');
		else 
			if (i >= 3 && i < 5) document.write(luong(lcb,3) +'<br>' );
			else 
				if (i == 5) document.write(luong(lcb,4) +'<br>');
				else document.write(luong(lcb,5) +'<br>');
}

function luong(lcb, n) {
	document.write(lcb * n);
}