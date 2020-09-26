//Bài 1:
// 1.1
 console.log("X nhận được giá trị property từ product")
 // 1.2
 let product = {
    name:"Xiaomi rice cooker",
    price: 1700,
    brand: "Xiaomi",
    color: "white"
};
 console.log("Name: "+ product.name)
 console.log("price: "+ product.price)
 console.log("brand: "+ product.brand)
 console.log("color: "+ product.color)
 
 //Bài 2:
 let task = {
     subject: "Implement login feature",
     createdBy: "Phạm Thanh Tùng",
     assignTo: "Hoàng Tiến Đạt",
     dueDate: "2019-10-08T18:00:24+0000",
     expectedHours: 0.5,
     };
 
 let { subject , dueDate , assignTo } = task;
 console.log(
 "Subject: "+ subject +"\n",
 "DueDate: "+ dueDate +"\n",
 "AssignTo: "+ assignTo);

 //Bài 3:



 //Bài 4:
 let a = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done:"When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}
var check;
    let n= prompt("enter a keyword")
for(let prop in a)
{
    if(n==prop)
    {
        check=true;
        break;
    }
}
if(check==true)
{
    alert(`${n} \n ${a[n]}`);
}
else 
{
    let p = prompt("We could not find your word: dev, leave your explanation");
    alert("Done");
    a[n]=p;
    alert(`${n} \n ${a[n]}`);
}

//Bài 5:
//5.1:

var a = {
    name : "Xiaomi portable charger 20000mah",
    brand : "xiaomi",
    price : "428",
    color : "while",
    category : "changer"
}
let b = {
    name : "VSmart Active 1",
    brand : "vsmart",
    price : "5487",
    color : "black",
    category : "phone"
}
let c = {
    name : "IPhone X",
    brand : "apple",
    price : "21490",
    color : "gray",
    category : "phone"
}
let d = {
    name : "Samsung Galaxy A9",
    brand : "samsung",
    price : "8490",
    color : "blue",
    category : "phone"
}
let arr = [];
arr.push(a,b,c,d);
console.log(arr);
console.log("====================5.1===================")

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i].name);
    console.log(arr[i].price);
    console.log("-----------------------------------------");
}

//5,2:

let n = prompt("Enter product Position:");
console.log(arr[n - 1]);
//5.3:

let cat = prompt("Enter your Caelory");
cat = cat.toLowerCase(cat);
let ct = 0;
for (let i = 0; i < arr.length; i++) {
  let tmp = arr[i].category;
  if (tmp == cat) {
    console.log("-----------------");
    console.log(`Name: ${tmp.name}`);
    console.log(`Price: ${tmp.price}`);
    ct++;
  }
}
if (ct == 0) { console.log("Not found!"); }

//5.4:

let arr = [];
arr.push(a,b,c,d);
console.log(arr);
console.log("====================5.4===================");
arr[0].providers=["Phukienzero Dientuccc"];
arr[1].providers=["Tgdd, ddghn, vhstore"];
arr[2].providers=["Tgdd"];
arr[3].providers=["Tgdd"];
for(let i=0;i<arr.length;i++)
{
    console.log(`#${i+1}. ${arr[i].name} \n ${arr[i].price} \n ${arr[i].providers[i]}`);
}


//5.5:

for (let i = 0; i < arr.length; i++) {
  console.log(`#${i}. ${arr[i].name}`);
  console.log(`       Price: ${arr[i].price}`);
  console.log(`       Providers: ${arr[i].providers}`)
}

//Bài 6:
//6.1:

let a= {
    name: "html",
    complete: "complete: false"
}
let b= {
    name: "css",
    complete: "complete: false"
}
let c= {
    name: "basics of javascript",
    complete: "complete: false"
}
let d= {
    name: "node package manager",
    complete: "complete: false"
}
let e= {
    name: "git",
    complete: "complete: false"
}
let arr= [];
arr.push(a,b,c,d,e);
for(let i=0;i<arr.length;i++)
{
    console.log(`${i+1}. ${arr[i].name} \n ${arr[i].complete} `);
}
//6.2:

let b = prompt("Enter your command (New , update , complete")
if (b=="new") {let c = prompt("Enter new task:")
learn.push({
    name: c,
    Complete: false
}) ; console.log(learn)
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};}

// 6.3:

let b = prompt("Enter your command (New , update , complete")
if (b=="update") {let c =Number(prompt("Enter position:"))
let d = prompt("Enter new title")
learn[c-1].name = d
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.4:

let b = prompt("Enter your command (New , update , complete")
if (b=="complete") {let c =prompt("Enter position:")
learn[c-1].Complete = true
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.5:

let d = prompt("Bạn muốn xóa gì? ( HTML, CSS , ...)")

//Bài 7:
const pos = {
    x: 200,
    y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

//Bài 8:

const square = {
    x: 100,
    y: 50,
    width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
    fd(square.width);
    rt(90);
}

//Bài 9:

const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++) {
    fd(rect.height);
    rt(90);
    fd(rect.width);
    rt(90);
}

//Bài 10:
console.log('Câu 10:draw data')
console.log('draw rect 10.1');
const pos = {
shape: 'rect',
x: 8,
y: 70,
w: 12,
h: 40
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('draw square 10.2');
const pos = {
  shape: 'square',
  x: 20,
  y: 40,
  w: 50,
  };
  penup();
  lt(90);
  fd(pos.x);
  rt(90);
  fd(pos.y);
  for (let i=0; i<4; i++)
  {
  pendown();
    fd(pos.w);
    rt(90);
  }
console.log('draw rect 10.3');
home()
const pos = {
shape: 'rect',
x: 70,
y: 70,
w: 12,
h: 40,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}
console.log('draw rect 10.4');
home()
const pos = {
shape: 'rect',
x: 10,
y: 20,
w: 70,
h: 20,
};
penup();
lt(90);
fd(pos.x);
rt(90);
fd(pos.y);
for (let i=0; i<2; i++)
{
pendown();
  fd(pos.w);
  rt(90);
  fd(pos.h);
  rt(90);
}

//Bài 11:

const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
let a = 2*3.14*circle.radius;
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
fd(circle.radius);
pendown();
rt(90);
for (let i = 0; i < a; i++) {
    fd(1);
    rt(360/a);
}