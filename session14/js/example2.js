function changeImage(image, id) {
	document.getElementById('imageSlide').scr = "../img/"+image;
	switch(id) {
		case 'icon':
			document.getElementById('icon').style.color = "red";
			document.getElementById('alarm').style.color = "black";
			document.getElementById('danang').style.color = "black";
			document.getElementById('lienhe').style.color = "black";
			document.getElementById('information').innerHTML = "This is "
			break;
		case 'alarm':
			document.getElementById('alarm').style.color = "red";
			document.getElementById('icon').style.color = "black";
			document.getElementById('danang').style.color = "black";
			document.getElementById('lienhe').style.color = "black";
			break;
		case 'danang':
			document.getElementById('danang').style.color = "red";
			document.getElementById('icon').style.color = "black";
			document.getElementById('alarm').style.color = "black";
			document.liegetElementById('lienhe').style.color = "black";
			break;
		case 'nhe':
			document.getElementById('lienhe').style.color = "red";
			document.getElementById('icon').style.color = "black";
			document.getElementById('danang').style.color = "black";
			document.getElementById('alarm').style.color = "black";
			break;
	}

}