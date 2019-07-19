function mrBruno(operasi, num, arr){
    if(num <= 1000){
        let array1 = [];
        for(let i=1; i<=num; i++){
            array1.push(i); 
        }
        
        let array2 = array1.toString();
        let reg = new RegExp(',')
        for(let j=1; j<num; j++){
        array2 = array2.replace(reg, '');
        }

        let l =0;
        
        switch(operasi){
            case "SUM":
                let totalsum = 0;
                for(let k=0; k<arr.length; k++){
                    arr[k] = array2[(arr[k])-1];
                    totalsum = totalsum + parseInt(arr[k]);
                }
                console.log(totalsum);
                break;

            case "MUL":
                let totalmul = 1;
                    for(let k=0; k<arr.length; k++){
                        arr[k] = array2[(arr[k])-1];
                        totalmul = totalmul * parseInt(arr[k]);
                    }
                    console.log(totalmul);
                break;

            case "SUB":
                let totalsub = 0;
                for(let k=0; k<arr.length; k++){
                    arr[k] = array2[(arr[k])-1];
                    if(k===0){
                        totalsub = totalsub + parseInt(arr[k]);
                    }else{
                        totalsub = totalsub - parseInt(arr[k]);
                    }
                    
                }
                console.log(totalsub);
                break;

            case "DIV":
                let totaldiv = 0;
                for(let k=0; k<arr.length; k++){
                    arr[k] = array2[(arr[k])-1];
                    if(k===0){
                        totaldiv = totaldiv + parseInt(arr[k]);
                    }else{
                        totaldiv = totaldiv / parseInt(arr[k]);
                    }
                    
                }
                console.log(totaldiv);
                break;
        }
    }else{
        console.log("error");
    }
}

// mrBruno('SUB', 20, [17, 12, 13]);
mrBruno('SUM',30,[21,23,25]);
