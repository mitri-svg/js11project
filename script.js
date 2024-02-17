let player;
let reqem;
let netice;
let netice2;
let victory;

function kagiz() {
    reqem = 0;
    document.getElementById('netice1').innerHTML = `Siz kagiz-i secmisiniz`;

    let komputer = Math.floor(Math.random() * 3);

    komputer == 0 ? netice2 = `Komputer ise das-i secir` :
        komputer == 1 ? netice2 = 'Komputer ise kagiz-i secir' :
            netice2 = `Komputer ise qayci-ni secir`;

    document.getElementById('netice2').innerHTML = netice2;

    reqem == 0 && komputer == 0 ? victory = 'Siz qalib geldiniz' :
        reqem == 0 && komputer == 1 ? victory = 'Hec kes qalib olmadi' :
            reqem == 0 && komputer == 2 ? victory = 'Siz uduzdunuz' :
                victory = `.`;
                document.getElementById('victory').innerHTML = victory;
}
function das() {
    reqem = 1;
    document.getElementById('netice1').innerHTML = `Siz das-i secmisiniz `;

    let komputer = Math.floor(Math.random() * 3);

    komputer == 0 ? netice2 = `Komputer ise das-i secir` :
        komputer == 1 ? netice2 = 'Komputer ise kagiz-i secir' :
            netice2 = `Komputer ise qayci-ni secir`;

    document.getElementById('netice2').innerHTML = netice2;

    reqem == 1 && komputer == 0 ? victory = 'Hec kes qalib olmadi' :
        reqem == 1 && komputer == 1 ? victory = 'Siz uduzdunuz' :
            reqem == 1 && komputer == 2 ? victory = 'Siz qalib geldiniz' :
                victory = '.';
                document.getElementById('victory').innerHTML = victory;
}
function qayci() {
    reqem = 2;
    document.getElementById('netice1').innerHTML = `Siz qayci-ni secmisiniz`;

    let komputer = Math.floor(Math.random() * 3);

    komputer == 0 ? netice2 = `Komputer ise das-i secir` :
        komputer == 1 ? netice2 = 'Komputer ise kagiz-i secir' :
            netice2 = `Komputer ise qayci-ni secir`;

    document.getElementById('netice2').innerHTML = netice2;

    reqem == 2 && komputer == 0 ? victory = 'Siz uduzdunuz' :
        reqem == 2 && komputer == 1 ? victory = 'Siz qalib geldini' :
            reqem == 2 && komputer == 2 ? victory = 'Hec kes qalib olmadi' :
                victory = '.';
                document.getElementById('victory').innerHTML = victory;
}