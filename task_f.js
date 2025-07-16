let count = 0;
function updateDisplay(){
    document.getElementById('btn').innerText = count;
}
function increase(){
    count++;
    updateDisplay();
}
function decrease(){
    count--;
    updateDisplay();
}