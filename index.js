function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById("tipPercent").innerHTML = `${tipPercent}%`;
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue, 2);
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal, 2);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(billTotal / split, 2);
}

function formatMoney(value, qtdDecimal) {
    return `$${Math.ceil(Number((value * 100) / 100).toFixed(Number(qtdDecimal)))}`;
}

function formatSplit(value) {
    return Number(value) === 1?`${value} person`:`${value} people`
}