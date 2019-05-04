var a;
/*
quy tac dat ten bien:
- co y nghia
- bang chu cai hoa hoac thuong, so va dau gach duoi
- khong bat dau bang so
- nen dat bang tieng anh
- theo quy tac Camel
Ex: userName, myAge, getMyInfo, getElemrntById
*/

//bt: Dat ten bien cho: ten nguoi dung, email, so dien thoai. ngay sinh
var userName;
var email;
var phonNumber;
var dateOfBirth;

//cac phep toan trong javascript: + - * /
var x=6, y=8;
document.write('Tong 2 so x + y la: ');
document.write(x + y);
document.write('<br>');
document.write('Tong 2 so x - y la: ');
document.write(x - y);
document.write('<br>');
document.write('Tong 2 so x * y la: ');
document.write(x * y);
document.write('<br>');
document.write('Tong 2 so x / y la: ');
document.write(x /y);

//cac phep toan so sanh trong javascript: >, <, >=, <=, ==, !=


//cac dieu kien trong javascript
//if(dieukien) {
	//thuc hien neu dieu kien dung
//}
document.write('<br>');
if (3 > 2) {
	document.write('So 3 lon hon so 2');
}

//if(dieukien) {
	//thuc hien neu dieu kien dung
//} else {
	//thuc hien neu dieu kien sai
//}
document.write('<br>');
var x=5, y=7;
if (x > y) {
	document.write('So y lon hon so x');
} else {
	document.write('So x lon hon so y');
}

//if(dieukien1) {
	//thuc hien neu dieu kien 1 dung
//} else if (dieukien2){
	//thuc hien neu dieu kien 2 dung
//} else {
	//thuc hien neu dieu kien 1 va 2 sai
//}

document.write('<br>');
var x=5, y=7;
if (x > y) {
	document.write('So y lon hon so x');
} else if (x <y) {
	document.write('So x lon hon so y');
} else {
	document.write('So x bang so y');
}

//cau lenh switch case
var x=5;
document.write('<br>');
switch (x) {
	case 2:
		document.write('Hom nay la thu 2');
		break;
	case 3:
		document.write('Hom nay la thu 3');
		break;
	case 4:
		document.write('Hom nay la thu 4');
		break;
	case 5:
		document.write('Hom nay la thu 5');
		break;
	case 6:
		document.write('Hom nay la thu 6');
		break;
	case 7:
		document.write('Hom nay la thu 7');
		break;
	case 8:
		document.write('Hom nay la thu 8');
		break;
	default:
		document.write('Day khong phai la thu torng tuan');
		break;
}
//
var x=5;
document.write('<br>');
switch (x) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
		document.write('Hom nay la thu ' + x);
		break;
	case 8:
		document.write('Hom nay la chu nhat');
		break;
	default:
		document.write('Day khong phai la thu trong tuan');
		break;
}

//cho truoc mot so, kiem tra so do co phai la thang trong nam khong? 
//neu phai, cho biet so ngay trong thang do?
//vd: 2-> day la thang trong nam, thangb 2 co 28 ngay hoac 29 ngay
//su dung switch case de lam

//cho them 1 so y la nam
//x la thang, y la nam
//dua vao y kiem tra nam do la nam nhuan hay k
//de in ra dung ngay cua thang 2

var x=2, y=2000;
document.write('<br>');
switch (x) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		document.write('thang ' + x + ' co 31 days');
		break;
	case 2:
		if (y % 400 == 0)
			document.write('thang ' + x + ' co 29 days');
		else
			document.write('thang ' + x + ' co 28 days');
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		document.write('thang ' + x + ' co 30 days');
		break;
	default:
		document.write('Day khong phai la thang trong nam');
		break;
}
