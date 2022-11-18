function arabicToRoman(number){
    const arabicRomanHash = {
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10: 'X',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100: 'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
    };
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
 
         var string = ''
         let i = 0
         while(number > 0){
             const minus = numbers[i]
             if(minus > number){
                 i++;
             } else {
                 number -= minus;
                 string += arabicRomanHash[minus]
             }
         }
     return string;
 }
 
 console.log(romanNumbers(1500));