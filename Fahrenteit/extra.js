var records = document.getElementById('records');

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

function convert() {
	var fa = document.getElementById("fa").value;

	var fahrenheit = document.getElementById("fahrenheit").value;
	var fahrenheit = fa* (9/5) + 32;
	printHTML(fahrenheit); 
  }
  convert();