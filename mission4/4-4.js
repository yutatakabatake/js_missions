const arr = new Array('大吉', '中吉', '小吉');
const result = document.getElementById('result');
const button = document.querySelector('button');

function showItem() {
    const rand_num = Math.random() * 3;
    const num = Math.floor(rand_num);

    result.innerText = arr[num];
}