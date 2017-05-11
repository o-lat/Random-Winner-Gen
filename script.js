names = [];

function addName() {
	if (document.getElementById('name').value == "") {
		alert('Textbox blank.');
	} else {		
		names.push(document.getElementById('name').value);
		console.log(names);
	}
}
function getWinner() {
	var winner = Math.floor((Math.random() * names.length) + 0);
	console.log('the winner is:' + names[winner]);
	getList()
}
function getList() {
	for (i in names){
		String(document.getElementById('names').innerHTML = names).split('\n');
	}
}