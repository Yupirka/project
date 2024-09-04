"use strict"

let incr = 10;
let decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);

console.log(5 % 2);// % высчитывает остаток при делении

console.log(2*4 == 8);//== сравнивает не строго, может сравнивать число и строку

console.log(2*4 === '8');//=== сравнивает строго, не может сравнивать число и строку


&&;// и
||;// или
!// оператор описания, пределывает true в false

const isChecked = true,
      isClose = false;
      console.log(isChecked || isClose);

      console.log(2 + 2 * 2 == '6')