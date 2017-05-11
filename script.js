// JS File

function e() {
	document.getElementById('submit').addEventListener("click", getBMI);
	document.getElementById('retry').addEventListener("click", reload);
}

function reload() {
	location.reload();
}

function getBMI() {
	var weight = document.getElementById("textbox1").value;
	var height = document.getElementById("textbox2").value;
	var outputBMI = document.getElementById('output_bmi');
	var outputMeasure = document.getElementById('output_measure');
	var bmiText = document.getElementById('bmi_text');
	var measureText = document.getElementById('measure_text');
	var BMI = (weight / (height * height));
	var rounded = Math.round(BMI);
	if (weight == '0' || height == '0') {
		alert('Please enter a valid BMI.');
		console.log(BMI);
	} else if(rounded <= 18.4) {
		outputBMI.innerHTML = rounded;
		outputMeasure.innerHTML = 'Underweight';
		showOutput();
		console.log(BMI);
	} else if(rounded <= 24.9) {
		outputBMI.innerHTML = rounded;
		outputMeasure.innerHTML = 'Normal';
		showOutput();
		console.log(BMI);
	} else if(rounded <= 29.9) {
		outputBMI.innerHTML = rounded;
		outputBMI.style.display = 'block';
		outputMeasure.innerHTML = 'Overweight';
		showOutput();
		console.log(BMI);
	} else if(rounded >= 30) {
		outputBMI.innerHTML = rounded;
		outputMeasure.innerHTML = 'Obese';
		showOutput();
		console.log(BMI);
	} else {
		outputBMI.innerHTML = rounded;
		outputMeasure.innerHTML = 'Error';
		showOutput();
		console.log(BMI);
	}
}

function showOutput() {
	document.getElementById('output').style.display = 'block';
}