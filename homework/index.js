//Bài 1:
let a=5;
let b=6;
let x=a;
a=b;
b=x;
console.log(a,b);

//Bài 2:
{
    let x="Code very good";
    let s=x.split(" ");
    console.log(s);
}

//Bài 3:
{
    let  a = [4, 5, 7, -8];
    console.log(...a);
}

//Bài 4:
let list = ["Jeans", "T-Shirt", "Sock"];

let count = 0;
while(true)
{
    var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");
    if(n== '' || n===null)
    {
        break;
    }
    switch(n)
    {
        case "r":
            for(let i=0;i<list.length;i++)
            {
                console.log((i+1)+"."+list[i]);
            }
            break;
            count++
        case "c":
    
            let x=prompt("Enter the name of the new item");
            list.push(x);
            break;
            count++
        case "u":
            let m=prompt("Enter the posititon you want to update");
            let u=prompt("Enter the new name: ");
            list[m]=u;
            console.log(list)
            break;
            count++
        case "d":
            let o=prompt("Enter the posititon you want to delete");
            list.splice(o,1);
            break;
            count++
        default: alert("This command is not supported")
        break;
    }
}
let list =["Jeans", "T-Shirt", "Socks"];
while(true)
/////////////////////////////////
{
    var n = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");

    if(n=="r")
{
    for(let i=0;i<list.length;i++)
        {
            console.log((i+1)+"."+list[i]);
        }
    
}
else if(n=="c")
{
    let x=prompt("Enter the name of the new item");
        list.push(x);
        alert("Done")
        console.log(list)
        
}
else if(n=="u")
{
    let m=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        list[m]=u;
        alert("Done")
        console.log(list)
        
}
else if(n=="d")
{
    let o=prompt("Enter the posititon you want to delete");
        list.splice(o,1);
        alert("Done")
        console.log(list)
        
}
else alert("no")
if (n==null)
{
    alert("goodbye!")
    break;
}
}

//Bài 5:
let a = prompt('Enter a squence of numbers, separated by commas (,)');
let sum = a.split(",");
console.log(sum);
let s=0;
for(let i=0;i<sum.length;i++)
{
    s+=Number(sum[i]);
}
alert('The sum of them is '+ s);

//Bài 6:
var x=prompt("Enter a squence of Number, speparated by commas (,)");
var sum = x.split(",");
console.log(sum);
let min=sum[0];
for(let i=0;i<sum.length;i++)
{
    if(sum[i]<min)
    {
        min=sum[i];
    }
}
alert(`The smallest number is `+min);

//Bài 7:
{
    let x=prompt('enter a number')
    let number = ['10','20','30','40'];
    let n = number.includes(x);
    let i = number.indexOf(x);
    if(n== true)
   {  
        alert(" IN my array at index "+i)
    }
    else if(n==false)
    {
        alert(' Not in my array')
    }
    
}

//Bài 8:
//8.1:
let mySheep=[5,7,300,90,24,50,75];
console.log(`Hello, my name is Long and here is my sheep sizes: `+mySheep);
console.log("\n");
// 8.2:
let max = mySheep[0];
for(let i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
console.log("\n");

// 8.3:
mySheep[2]=8;
console.log(`After shearing, here is my flock: `+mySheep);
// 8.4:
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
console.log("MONTH 1")
console.log("One month has, passed, my sheeps have grown, here are their sizes")
console.log(mySheep);
console.log("\n");
// 8.5:
max = mySheep[0];
for(i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
mySheep[3]=8;
console.log(`After shearing, here is my flock: `+mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
console.log("MONTH 2")
console.log("One month has, passed, my sheeps have grown, here are their sizes")
console.log(mySheep);
max = mySheep[0];
for(i=0;i<mySheep.length;i++)
{
    if(mySheep[i]>max)
    {
        max=mySheep[i];
    }
}
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
mySheep[6]=8;
console.log(`After shearing, here is my flock: `+mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    mySheep[i]=mySheep[i]+50;
}
let s=0;
console.log("MONTH 3")
console.log("One month has, passed, my shepps have grown, here are their sizes")
console.log(mySheep);
console.log("\n");
for(i=0;i<mySheep.length;i++)
{
    s+=mySheep[i];
}
console.log(`My flock has size in total : ${s}`);
console.log(`I would get ${s} * 2$ = ${s*2}`);
// 8.6:
{let Array=["60","190","320","20","45"]
var x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
let i = Array.indexOf( maxInNumbers);
Array[i]=8
console.log(Array)
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log( '1 Month');
console.log('one month has passed and my sheep have grown');
console.log(Array)
console.log('3 Month');
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log('three month has passed and my sheep have grown');
console.log(Array)
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size "+maxInNumbers+" let shave it");
let sum=0
for(let t=0;t<Array.length;t++)
  {
    sum+=Array[t];
  }
console.log("my flock has size in total "+sum)
let money=sum*2
console.log("i would get  "+ sum+"*2$ ="+money)
}

//Bài 9:
{
    const  colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
        for (let i=0; i<colors.length; i++)
        {
       for( let j= 1; j<=4; j++)
     {
       color(colors[i])
       fd(25*i);
       rt(90);
     }
   }
   
}

//Bài 10:
var x=prompt("Enter a squence of Name");
var sum = x.split(",");
console.log(sum);
var sum1 = sum.map(y => "<"+y+">");
alert(sum+"=>"+sum1)

//Bài 11:
let x =prompt("Enter a sequence number");
let arr = x.split(",");
const result = arr.filter(x => x%2==1);
alert(x + " => " + result);