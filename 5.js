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
