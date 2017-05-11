names = [];

function addName() {
	if (document.getElementById('name').value == "") {
		alert('Please enter a name.');
	} else {
		names.push(document.getElementById('name').value);
		console.log(names);
		document.getElementById('output').style.display = 'block';
		getList();
		document.getElementById('name').focus();
		document.getElementById('name').value = '';
	}
}
function getWinner() {
	var winner = Math.floor((Math.random() * names.length) + 0);
	document.getElementById('winner').innerHTML = names[winner] + ' is the winner!';
	
}

function getList() {
	var outputNames;
	outputNames = "<ul>";

	for (i = 0; i < names.length; i++) {
		outputNames += "<li>" + names[i] + "</li>";
	}
	outputNames += "</ul>";
	document.getElementById("names").innerHTML = outputNames;
}
