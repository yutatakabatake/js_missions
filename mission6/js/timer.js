const countDown = document.querySelector('.countDown');
const toggleButton = document.getElementById('toggle');
const resetButton = document.getElementById('reset');
const setForm = document.querySelector('.set');
const mysetList = document.getElementById('myset-list');
const mysetForm = document.getElementById('myset-form');

let focusTime = Number(getCookie('focusTime')) || 25; // 分
let breakTime = Number(getCookie('breakTime')) || 5;  // 分
let isFocus = true; // true:作業, false:休憩
let timer = null;
let remainSec = focusTime * 60;
let isRunning = false;
let sessionCount = Number(getCookie('sessionCount')) || 0;

// 残り時間をmm:ssで表示
function displayTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    countDown.textContent = `${m}:${s}`;
}

// 状態表示
function displayStatus() {
    let status = document.getElementById('status');
    if (!status) {
        status = document.createElement('div');
        status.id = 'status';
        countDown.parentNode.insertBefore(status, countDown.nextSibling);
    }
    if (isFocus) {
        status.textContent = '作業中';
        status.classList.remove('break');
        status.classList.add('work');
    } else {
        status.textContent = '休憩中';
        status.classList.remove('work');
        status.classList.add('break');
    }
}

// タイマー更新
function updateTime() {
    remainSec--;
    displayTime(remainSec);
    if (remainSec <= 0) {
        clearInterval(timer);
        isRunning = false;
        // セッションカウント
        if (isFocus) {
            sessionCount++;
            setCookie('sessionCount', sessionCount);
        }
        // 状態切り替え
        isFocus = !isFocus;
        remainSec = (isFocus ? focusTime : breakTime) * 60;
        displayStatus();
        toggleTime(); // 自動で次のタイマー開始
    }
}

// タイマー開始・停止
function toggleTime() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        toggleButton.textContent = '一時停止';
        isRunning = true;
    } else {
        clearInterval(timer);
        toggleButton.textContent = '開始';
        isRunning = false;
    }
}

// タイマーリセット
function resetTime() {
    clearInterval(timer);
    isRunning = false;
    remainSec = (isFocus ? focusTime : breakTime) * 60;
    displayTime(remainSec);
    toggleButton.textContent = '開始';
}

// Cookie操作
function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
}

function showCookie() {
    const focusTime = getCookie('focusTime');
    const breakTime = getCookie('breakTime');

    if (focusTime) {
        mysetList.textContent = `作業時間: ${focusTime}分`;
    }
    if (breakTime) {
        mysetList.textContent += `, 休憩時間: ${breakTime}分`;
    }
}

// マイセット保存
function setMylist() {
    const focus = this.querySelector('[name=focus]');
    const breakTime = this.querySelector('[name=break]');

    if (focus.value) {
        setCookie('focusTime', focus.value);
    }
    if (breakTime.value) {
        setCookie('breakTime', breakTime.value);
    }
    showCookie();
}

// イベント
// 停止・再生
toggleButton.addEventListener('click', toggleTime);
// リセット
resetButton.addEventListener('click', resetTime);
// マイセット保存
mysetForm.addEventListener('submit', setMylist);


// 初期表示
displayTime(remainSec);
displayStatus();
showCookie();