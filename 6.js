function mrBruno(operator, a, b, c) {
	operator = new Array('SUM', 'MUL', 'SUB', 'DIV');
	switch (operator){
		case 'SUM':
			var hasil = a + b + c;
			console.log(hasil);
			break;
		case 'MUL':
			var hasil = a * b * c;
			console.log(hasil);
			break;
		case 'SUB':
			var hasil = a - b - c;
			console.log(hasil);
			break;
		case 'DIV':
			var hasil = a / b /c;
			console.log(hasil);
			break;
		default:
			console.log("Invalid choise!");				
	}

}

mrBruno(1, 2, 3);