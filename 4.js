function beliTelur(tgl, uang) {
	var telur = uang/2000;
	var totalTelur;
	if (tgl%2!=0 && tgl%5==0){
		if (telur >= 12 && telur <= 20){
			totalTelur = telur + (1 * 5);
			console.log(totalTelur); 
		}else if (telur >= 20 && telur < 40){
			totalTelur = telur + (3 * 5)
			console.log(totalTelur);
		}else{
			totalTelur = telur + (6 * 10);
			console.log(totalTelur);
		}
	}else{
		totalTelur = telur;
		console.log(totalTelur);
	}
}

beliTelur(25, 50000);
