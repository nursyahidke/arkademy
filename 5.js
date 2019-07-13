/*function segitiga() {
	var nilai = 5;
	for(a = 1; a <= nilai; a++) {
		for(b = 1; b <= a; b++) {
			document.write(b+" ");
  		}
 		document.write("\n");
 	}
}
*/
function segitiga() {
	var row = 5;
	for (var i = 1; i <= row; i++) {
		var result = '';
		for (var j = 1; j <= i; j++) {
	    	result += j;
		}
		console.log(result);
	}
}

segitiga();
