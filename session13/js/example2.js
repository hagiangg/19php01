function kiemTraTen() {
	var name = document.getElementById('name').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errorName').innerHTML = '';
		//khi nay moi xu li
		var spaceFirstName = name.indexOf(' ');
		var spaceLastName = name.lastIndexOf(' ');
		var firstName = name.substring(0, spaceFirstName);
		var midName = name.substring(spaceFirstName, spaceLastName);
		var lastName = name.substring(spaceLastName, name.length);
		document.getElementById('ex1').innerHTML = 'Ho la: ' + firstName + '<br> Ten dem la: ' + midName + '<br>Ten la: ' + lastName; 
		var checkN = name.indexOf('n');
		if (checkN != -1)
			document.getElementById('ex2').innerHTML = '<br>Trong ten co chu n va co ' + checkN + ' chu n';
		else 
			document.getElementById('ex2').innerHTML = '<br>Khong co chu n nao trong ten';

		var upperCase = lastName.toUpperCase();
		document.getElementById('ex3').innerHTML = '<br>' firstName + lastName + upperCase;

		var replaceName = name.replace(midName, '19PHP01');
		document.getElementById('ex4').innerHTML = '<br>' + replaceName;


		//cau 2:
		//cach 1: dem tung ki tu
		//truong hop khong phan biet n hoa hoac n thuong
		var newName = name.toLowerCase();
		var countN = 0;
		for (var i = 0; i<newName.length; i++) {
			if (newName[i] == 'n') {
				countN++;
			}
		}

		document.getElementById('ex2').innerHTML = 'Trong ten ban co ' + countN + ' chu n khong phai viet hoa';
		
		//cach 2: cat chuoi ten ra tung phan
		var countN2 = 0;
		while(newName.indexOf('n') != -1) {
			countN2++;
			newName = newName.substring(newName.indexOf('n') + 1, newName.length);
		}
		document.getElementById('ex2').innerHTML = 'Trong ten ban co ' + countN2 + ' chu n khong phai viet hoa';
	}

}
