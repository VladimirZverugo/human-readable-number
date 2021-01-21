module.exports = function toReadable (number) {
    // declare dictionaries with "readeble" elements to build a string
    let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let b = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
    let c = ['','hundred '];
    // declare "buffers" for mapping dictionaries
    let temp100 = 0;
    let temp10 = number%100;
    let temp1  = number%10;
    let tempString = "";
    //Throw RangeError in case of (number out of test scenario)
    if (number < 0 || number > 999) {
        throw new RangeError();
    }
    if (number >= 100 ){
        temp100 =  Math.trunc(number/100);  //get hundreeds
        if (temp10 <= 19) {
            tempString = tempString.concat(a[temp100]).concat(c[1]).concat(a[temp10]);
        }else{
            temp10 = Math.trunc(temp10/10) ;
            tempString = tempString.concat(a[temp100]).concat(c[1]).concat(b[temp10]).concat(a[temp1]);
        }
    }else if (number <= 99 ){
        if (number <= 19 && number !==0) {
            tempString = tempString.concat(a[temp10]);
        }else if(number >=20 ){
            temp10 = Math.trunc(temp10/10);
            tempString = tempString.concat(b[temp10]).concat(a[temp1]);

        }else if(number === 0 || !number)  { tempString = 'zero ';
        }
    }
    return tempString.trim();
};
