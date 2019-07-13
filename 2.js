// Fungsi validasi username
function username(){
	var nama = "Nursyahid";
   	pola_username=/^[a-zA-Z0-9]{5,9}$/;
   	if (!pola_username.test(nama)){
      	console.log ('Username minimal 5-9 karakter dan hanya boleh Huruf atau Angka!');

   	}else{
		console.log("Username Anda benar!");   		
   	}

}

username();

// Fungsi validasi password
function password(){
	var pwd = "qdndndnNNNN1222";
  	pola_pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,100}$/g;
  	if (!pola_pwd.test(pwd)){
    	console.log('Penulisan password tidak benar!');

  	}else{
  		console.log('Penulisan password benar!');		
  	}
  
}

password();