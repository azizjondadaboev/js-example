function getValues() {
	var numbers = [];
	numbers['fn'] = checkValue(document.getElementById('firstNumber').value);
	numbers['sn'] = checkValue(document.getElementById('secondNumber').value);
	numbers['tn'] = checkValue(document.getElementById('thirdNumber').value);
	return numbers;
}

function checkValue(val) {
	if(val == "")
		return 0;
	else
		return val;
}

function summ() {
	var numbers = getValues();
	var result = parseInt(numbers['fn']) + parseInt(numbers['sn']) + parseInt(numbers['tn']);
	document.getElementById('result').value = result;
}

function minus() {
	var numbers = getValues();
	var result = parseInt(numbers['fn']) - parseInt(numbers['sn']) - parseInt(numbers['tn']);
	document.getElementById('result').value = result;	
}

function umnozhenie() {
	var numbers = getValues();
	var result = parseInt(numbers['fn']) * parseInt(numbers['sn']) * parseInt(numbers['tn']);
	document.getElementById('result').value = result;	
}

function delenie() {
	var numbers = getValues();
	if(numbers['fn'] == 0 || numbers['sn'] == 0 || numbers['tn'] == 0)
		var result = "Delenie na 0. Error!!!"
	else
		var result = parseInt(numbers['fn']) / parseInt(numbers['sn']) / parseInt(numbers['tn']);
	document.getElementById('result').value = result;
}

function clearInputs(){
	document.getElementById('firstNumber').value = "";
	document.getElementById('secondNumber').value = "";
	document.getElementById('thirdNumber').value = "";
	document.getElementById('result').value = "";	
}