const arr = new Array('大吉', '中吉', '小吉');
const result = document.getElementById('result');
const result_image = document.getElementById('result-image');
const button = document.querySelector('button');

function showItem() {
    const rand_num = Math.random() * 3;
    const num = Math.floor(rand_num);

    result.innerText = arr[num];

    // 結果の文字の色を変更
    if (num === 0) {
        result.style.color = 'red';
        result_image.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimpKtspceL47HWV8CIjCG83OLzaXss2VrjPQt65pfItad0LzQVB13lABAZ8zvViixYeemTkX9O3F2W9vfmDrv2u00nRzGmVD4OIj81oM6zOk84edl8Loj2BvpLIkT4TgWCiPJr4YMSzQZE/s1600/omikuji_daikichi.png">';
    } else if (num === 1) {
        result.style.color = 'green';
        result_image.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDPy0X_GAJUV8pauG2Pwpn1dC5O7FfDAJdfDQNxcDB2JpPK85arrtw_qaLKdlvD1YQ9KqkHVrWe_Yfo1hJbYOQNwp8Zb-IZmaISp7_jFDX9pwXINlc7aJtIrlwEAMk6lCkQbweriNT9Lvx/s1600/omikuji_chuukichi.png">';
    } else {
        result.style.color = 'blue';
        result_image.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhjqxIjcS2_4hGG8FLlhHSDe1pnMU-XeAXEGWUy10y8Nj-Ohhuchx2ZqxYmPcW2FexxQAdbPyVbJvyCqnAbJ9_DGY7nN3WK0-P0Rz8UlfeouDwdfqgjlx0cBtwXWrTLe7zY8JUGciZcia8/s1600/omikuji_syoukichi.png">';

    }
}

function changeButtonText() {
    this.innerText = 'もう一度ひく';
}

// ボタンの文字を一度だけ変更
button.addEventListener('click', changeButtonText, { once: true });