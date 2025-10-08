const arr = new Array('大吉', '中吉', '小吉');

const rand_num = Math.random() * 3;
const num = Math.floor(rand_num);

const result = document.getElementById('result');
result.innerText = arr[num];