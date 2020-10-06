// Counter:
let btnP = document.getElementById('btn_P');
let btnS = document.getElementById('btn_S');
let count = document.getElementById('count');
let a =0;
btnP.onclick = btnPOnclick;

function btnPOnclick(e){
    e.preventDefault();
    a++;
    count.innerHTML =a;
};
btnS.onclick = btnSOnclick;

function btnSOnclick(e){
    e.preventDefault();
    a--;
    count.innerHTML =a;
}

// Timer:
document.addEventListener("DOMContentLoaded", function(){
    let numberEl = document.getElementById('number_input');
    let startEl = document.getElementById('start_btn');
    setInterval (startEl.addEventListener(`click`,()=>{
    let time = numberEl.value;
        time--;
        if(time>=0){
    let countdownEl = document.getElementById('countdown');
            countdownEl.innerHTML = time;
        }
}),3000);
})

// Random Quote:
let allQuote = [{
    quoteText: "Thành công là một người thầy tồi tệ. Nó quyến rũ những người thông minh vào ý nghĩ rằng họ sẽ chẳng bao giờ thất bại.",
    quoteAuthor: "Bill Gates"
    }, {
    quoteText: "Chúng tôi sẽ làm tất cả để thành công. Đơn giản bởi chúng tôi là những người trẻ và chúng tôi không bao giờ biết từ bỏ.",
    quoteAuthor: " Jack Ma"
    }, {
    quoteText: "Trên con đường thành công, không có dấu chân của kẻ lười biếng.",
    quoteAuthor: "Lỗ Tấn"
    }, {
    quoteText: "Cái người đời thường thiếu là ý chí chứ không phải là sức mạnh.",
    quoteAuthor: "Victor Hugo"
    }, {
    quoteText: "Người ta hiếm khi thành công nếu không làm điều mình thấy vui thích.",
    quoteAuthor: "Dale Carnegie"
    }, {
    quoteText: "Đừng sợ thất bại. Không phải thất bại, mà chính mục tiêu thấp kém mới là tội lỗi. Khi bạn nỗ lực hết mình, ngay cả sự thất bại cũng vẻ vang.",
    quoteAuthor: "Lý Tiểu Long"
    }, {
    quoteText: "Nếu thực sự có lòng biết ơn. Bạn sẽ làm gì? Hãy chia sẽ với mọi người.",
    quoteAuthor: "W.Clement Stone"
    }, {
    quoteText: "Thành công là mang lại lợi ích cho xã hội.",
    quoteAuthor: "Bill Gates"
    }, {
    quoteText: "Thành công là khi bạn không ngừng lớn lên.",
    quoteAuthor: "Deepak Chopra"
    }, 
]
document.addEventListener("DOMContentLoaded",function(){
    let press = document.getElementById('press_btn')
    let output = document.getElementById('output')
    press.addEventListener(`click`, () =>{
        let randomQuote = allQuote[Math.floor(Math.random() * allQuote.length)]
        output.innerHTML= randomQuote.quoteText +"\n" +randomQuote.quoteAuthor;
    })
})

// Timesheet:
let timesheet = [
    {
        project: 'learn front-end',
        task:'learn HTML',
        timeSpent: 6,
    },
    {
        project: 'learn front-end',
        task:'learn CSS',
        timeSpent: 8,
    },
    {
        project: 'learn front-end',
        task:'learn JS Variables and Data Types',
        timeSpent:6,
    },
    {
        project: 'learn git',
        task:'learn git basics',
        timeSpent:2,
    },
]
for(let i=0; i<=timesheet.length; i++){
    console.log(timesheet[i]);
}

document.addEventListener("DOMContentLoaded",function(){
    let tbody = document.getElementById("ts_tbody");
    console.log(tbody);
    let remove = document.getElementById("tbody_1");
    remove.remove();
})

