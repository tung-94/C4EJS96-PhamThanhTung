//Bài 1:
console.log("1.var và const: Phạm vi của const bị giới hạn trong scope giông let và cont không thể truy cập nhặt được giá trị của biến");
console.log("2.let và var: Phạm vi sử dụng của var rộng hơn let. Var có thể sử dụng xuyên qua scope -> code chính xác hơn");
console.log("3.let và const: Biến const chỉ được khai báo một lần và không thể thay thế giá trị của nó");
console.log("4.Var dùng khi muốn biến tồn tại bên ngoài scope. Let sử dụng khi cần sự chính xác dễ đọc. Const dùng khi muốn một biến không thể thay đổi trong suốt thời gian");

//Bài 2:
console.log("1.Boolean là kiểu dữ liệu chỉ có true và false");
console.log("2.Boolean trả lại kiểu true hoặc false");

//Bài 3:
console.log("a");
for (let i = 0; i < 7; i++) {
    console.log(i)    
};

console.log("b");
let n = prompt("n=?");
for (let i = 0; i < n; i++) {
  console.log(i);
}

console.log("c")
let n = prompt("n=?");
for (let i = 3; i < n; i++) {
  console.log(i);
}

console.log("d");
let n = prompt("n=?");
let c = prompt("c=?");
for (let i = c; i < n; i++) {
  console.log(i);
}

console.log("e");
let n = prompt("n=?");
let c = prompt("c=?");
for (let i = c; i < n; i += 3) {
  console.log(i);
}

console.log("f");
let n = prompt("n=?");
let s = prompt("s=?");
let c = prompt("c=?");
for (let i = c; i < n; i += s) {
  console.log(i);
}

//Bài 4:
const x = prompt("a=?");
function factorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a - 1);
}
console.log(factorial(a));

//Bài 5:
let a = prompt("How are you?");
if ( a > 14)
{
    console.log("You are old enough to enter!");
  } else {
    console.log("You can't enter :)");
  }

  //Bài 6:
  let a = prompt("Enter a number 0 - 9");
if (a>=9) {}
if (a < 9 / 2 && a >= 0)
 {alert("lower helf of 9");}
else {alert("higher helf of 9");}

//Bài 7:
let a = prompt("a = ");
let b = prompt("b = ");
if (b < a / 2 && b > 0) {
  alert('${b} is in lower half of ${a}');
} else {
  alert('${b} is in higher half of ${a}');
}

// Bài 8:
let a = prompt("a = ");
if (a % 2 == 0) {
  alert('${a} is an even number');
} else {
  alert('${a} is an odd number');
}

//Bài 9:
console.log("a");
for(let i=0 ; i<3; i++){
    console.log('H')
}
for(let i=0 ; i<3; i++){
    console.log('L')
}

console.log("b");
let b = prompt("Enter the total number of L's and H's?");
for(let i=1 ; i<b/2; i++){
    console.log('H');
}
for(let i=1 ; i<b/2; i++){
    console.log('L');
}

console.log("c");
for(let i=0; i<4; i++ ){
    console.log('0')
    console.log('1')
}

//Bài 10:
let mass = prompt("Your weight in kg?");
let height = prompt("Your height in cm?");
let BMI = mass/((height/100)*(height/100))
alert("Your BMI is ${BMI}");
if(BMI<16)
{
    alert("You are Severely")
}
else if(16<=BMI&&BMI<=18.5)
{
    alert("You are Underweight");
}
else if(18.5<=BMI&&BMI<=25)
{
    alert("You are Normal");
}
else if(25<=BMI&&BMI<=30)
{
    alert("You are Overweight");
}
else alert("You are Obese");

//Bài 11:
console.log("a. A Square");
for (var i = 1; i <= 4; i++) {
  fd(50);
  lt(90);
}
console.log("b. A Triangle");
for (var i = 1; i <= 3; i++) {
  fd(50);
  rt(120);
}
console.log("c. A Pentagon");
for (var i = 1; i <= 5; i++) {
  fd(50);
  rt(72);
}
console.log("d. A Hexagon");
for (var i = 1; i <= 6; i++) {
  fd(50);
  rt(60);
}

//Bài 12:
let a = prompt('Enter number of edges');
if (a=3)
{
  console.log("triangle") 
    for (var i=1; i <= 3; i++) {
      fd(50)
      rt(120)
    }
}
if (a=8)
{
    console.log("octagonal") 
    for (var i=1; i <= 8; i++) {
      fd(50)
      rt(45)
    }
if (a=999)
{
    console.log("circle") 
      for (var i=1; i <= 366; i++) {
      fd(1)
      rt(1)
      }
    }
}

//Bài 13:
let a = prompt("How many polygons?");
console.log("polygons") 
{
  let a=prompt("enter number")
  for (let i = 1; i <= a; i++) {
    for (let x = 1; x <= i + 2; x++) {
      fd(100);
      rt(360 / (i + 2));
    }
  }
}