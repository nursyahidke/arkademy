/*
	Pada suatu hari, Putri diperintahkan ibunya membeli Telur di warung Pak Haji Qodir. 
	Harga 1 telur umumnya 1500 rupiah. Warung tersebut biasa memberikan bonus terhadap 
	pelanggannya. Pada tanggal prima, setiap pembelian 1 lusin telur mendapat bonus 1 butir telur. 
	Pada tanggal ganjil, setiap pembelian 1 kodi butir telur mendapat bonus 3 butir telur. 
	Pada tanggal dengan kelipatan 5, jika jumlah bonus telurnya merupakan bilangan genap maka bonus telurnya akan dikalikan 10. 
	Namun jika bonus telurnya merupakan bilangan ganjil, maka bonus telurnya akan dikalikan 5. 
	Buatlah fungsi/method yang akan menghitung dengan cepat dan tepat, 
	berapa banyak telur yang akan didapat Putri jika semua uangnya dibelanjakan untuk membeli telur. 
	Harga 1 telur adalah 2000 Rupiah. Method/function tersebut menerima 2 parameter. 
	Parameter pertama adalah tanggal dari 1 - 31, dan parameter kedua adalah uang yang akan dibelanjakan.

Contoh Input: buyEgg(25, 50000)
Contoh Output: 40 
50000/2000 = 25 -> 25 + 3 = 28 -> 28 + (3*5)= 43 ->  
*/
// 1 telur = 1500/2000 , bonus pada tgl prima setiap lusin(12) bonus 1 butir tlr
// bonus pada tgl ganjil per kodi(20) = 3 tlr
// tgl kelipatan 5 && jlh bonus tlr genap x 10 = ... if ganjil x 5 =... 
var prima=0;
function cekPrima(bil) {
	for (i=2;i<bil;i++){
		if (bil%i==0) {
			prima=0;
			break;
		}else {
			prima=1;
		}
	}/*
	if (prima) {
		console.log('bilangan prima');
	}else {
		console.log('bukan bilangan prima');
	}
}*/

function beliTelur(tgl, uang) {
	var telur = uang/2000;
	var totalTelur;
	if (tgl == cekPrima() && tgl%2!=0 && tgl%5=0){
		if (telur >= 12 && telur <= 20){
			totalTelur = telur + (1 * 5);
			console.log(totalTelur); 
		}else if (telur >= 20){
			totalTelur = telur + 3
		}
	}
}
