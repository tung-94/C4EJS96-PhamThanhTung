function findOppNum(n,inputNumber){
    var n,inputNumber;
    if(n%2 != 0 && n <4 || n > 20 && inputNumber < 0 || inputNumber >= n )
        alert("Số n không thỏa mãn");
    else{
        var OppNum = (( n + inputNumber*2) /2) % n;
    }
    return OppNum;
}
console.log(findOppNum(10,6));