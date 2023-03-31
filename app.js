function buttonsOpt(num) {
    var input = document.getElementById("number");
    input.value += num;
}
function calculation() {
    var inputValue = document.getElementById("number");
    var output = eval(inputValue.value);
    inputValue.value = output;
}
function allClr(){
    var clrBtn = document.getElementById("number");
    clrBtn.value = "";
}
function delBtn(){
    var result = document.getElementById("number")
    result.value = result.value.slice(0, -1);
}