function showDate() {
    let out = document.getElementById('current-date');
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let today = new Date();
    let today1 = new Date();
    let today2 = new Date();
    let today3 = new Date();
    let today4 = new Date();
    let today5 = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out1.innerHTML = 'Дата и время для арабской локали: ' + today1.toLocaleString('ar-JO');
    out2.innerHTML = 'Дата и время для белорусской локали: ' + today2.toLocaleString('be-BY');
    out3.innerHTML = 'Дата и время для чешской локали: ' + today3.toLocaleString('cs-CZ');
    out4.innerHTML = 'Дата и время для германской локали: ' + today4.toLocaleString('de-DE');
    out5.innerHTML = 'Дата и время для английской локали: ' + today5.toLocaleString('en-GB');
}