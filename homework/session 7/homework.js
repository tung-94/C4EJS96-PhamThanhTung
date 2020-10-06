// Bài 1:
const container= document.getElementById("list");
for(let i=1; i<=3; i++){
container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
}
console.log(container);
console.log("beforebegin-D");
console.log("afterbegin-A");
console.log("beforeend-C");
console.log("afterend-B")

//Bài 2:
var myVar = setInterval(myTimer, 5000);

function myTimer() {
  alert("Hello world!");
}

// Bài 3:
//3.1:

console.log(" the  variable can be used inside the  function, it can not exists after the function finishes running")
//3.2:

console.log(" the  variable can be used inside the  function, it can not exists after the function finishes running")

// Bài 4:
document.addEventListener("DOMContentLoaded",function(){
    const x = document.getElementsByTagName("li");
    for(let i=0; i< x.length; i++){
    x[i].innerHTML;
    console.log(x[i]);
    }
})

// Bài 5:
function myFunction() {
    let d= document.getElementsByClassName("singer");
    document.getElementById("Demo").innerHTML= d[1].innerHTML;
    for(let x of d)
    {
       console.log(x.innerHTML);
    }
   }

   // Bài 6:
   function myFunction() {
    var myobj = document.getElementById("demo");
    myobj.remove();
  }

  // Bài 7:
  let d= document.getElementById("button1");
d.addEventListener("click", (e)=>{
   console.log(e);
}
)
document.getElementById("button2").addEventListener("click", (e) =>
{
   console.log(e);
})
 
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

// Bài 8:
function displayWish(){
    alert("Helo my name is Tung");
    alert("I wish to be a family man");
}
displayWish();

// Bài 9:
function show(){
    if(wish == null || wish== ''){
        let fixWish = prompt('what is your wish for this year?')
        alert(`${name}\n${fixWish}`)
    }
    else{
        alert(`${name}\n${wish}`)
    }
}
    let name = prompt("Your name?")
    let wish = prompt("what is your wish for this year?")
show();

// Bài 10:
function displayWish(name, wish){
    if(wish){
     alert(`${n} wishes that  ${w}`);
    }
    else
    alert(`${n} have no wish`);
}
let n= prompt("What you name");
let w= prompt("Your wish");
displayWish(n, w);

// Bài 11: 
document.addEventListener("DOMContentLoaded",function(){
    let x = document.getElementById("upper_btn")
    console.log(x);

    let upper = document.getElementById("upper_btn")
    upper.addEventListener(`click`, (e) =>{
        let update = document.getElementById("name_input").value.toUpperCase();
        document.getElementById('result_div').innerHTML = update;
        console.log(update);
    });


    let y = document.getElementById("name_input")
    console.log(y);

    let z = document.getElementById("result_div")
    console.log(z);

})

// Bài 12:
let list = ["Backpack", "MiBand watch", "Ring"];
console.log(list);
document.addEventListener("DOMContentLoaded",function(){
    let show = document.getElementById("item_list_ul");
    console.log(show);
    let remove1 = document.getElementById("test_li_1");
    let remove2 = document.getElementById("test_li_2");
    remove1.remove();
    remove2.remove();
})
document.addEventListener("DOMContentLoaded",function(){
    let add = document.getElementById("add");
    let input = document.getElementById("list_input");
    add.addEventListener(`click`,()=>{
        let x =document.getElementsByTagName("li")
        x.innerHTML=input.value;
    })
    
})

// Bài 13:
