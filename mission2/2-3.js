const date = document.getElementById('datetime');

function dateTimeShow() {
    const dateTime = new Date();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    date.innerText = `${year}年${month}月${day}日${hour}時${minute}分${second}秒`;
}