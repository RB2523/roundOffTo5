
 
  
    function roundOff(){
        let input = parseInt( document.getElementById("amount").value) ;
        let output = document.getElementById("output");

         // 11 12   --> 10
         // 13 14 15 16 17 ---> 15
         //18 19 20 21 22 ---> 20

         let lastDigit = input % 10 ;

         if(lastDigit == 0 || lastDigit == 1 || lastDigit == 2) input = input - lastDigit ;
         else if(lastDigit == 3 ||  lastDigit == 4 || lastDigit == 5 ) input = input + (5 - lastDigit) ;
         else if( lastDigit == 6 || lastDigit == 7 ) input = input - ( lastDigit - 5 ) ;
         else if(lastDigit == 8 || lastDigit == 9) input = input + (10 - lastDigit ) ;

        output.textContent = input;
    }