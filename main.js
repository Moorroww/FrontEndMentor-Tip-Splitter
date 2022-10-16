addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})









const billValue = (document.getElementById('bill-value'))
const billPercent = document.getElementsByClassName('tip-section-btn')
const numberOfPpl = document.getElementById('number-of-ppl')
const resetBtn = document.getElementById('reset-btn')
let percent = 0



document.addEventListener('input', () => {
    resetBtn.disabled = false
    resetBtn.classList.add('btn-active')
    showValue()

})


billPercent[0].addEventListener('click', () => {
    buttonFocusState()
    billPercent[0].classList.add('btn-active')
    percent = 5
    showValue()
})
billPercent[1].addEventListener('click', () => {
    buttonFocusState()
    billPercent[1].classList.add('btn-active')
    percent = 10
    showValue()
})
billPercent[2].addEventListener('click', () => {
    buttonFocusState()
    billPercent[2].classList.add('btn-active')
    percent = 15
    showValue()
})
billPercent[3].addEventListener('click', () => {
    buttonFocusState()
    billPercent[3].classList.add('btn-active')
    percent = 25
    showValue()
})
billPercent[4].addEventListener('click', () => {
    buttonFocusState()
    billPercent[4].classList.add('btn-active')
    percent = 50
    showValue()
})
billPercent[5].addEventListener('input', () => {
    if(document.getElementById('custom-btn').value == NaN) {
        alert("Wrong custom % format")
    }
    else {
        buttonFocusState()
        percent = document.getElementById('custom-btn').value
        showValue()
    }
})

function buttonFocusState(){
    for (let i =0; i<5; i++) {
        billPercent[i].classList.remove('btn-active')
    }
}



function showValue() {
    let tipValuePerPerson = Number(((billValue.value*(percent/100))/numberOfPpl.value).toFixed(2))
    let total = Number(((Number(billValue.value)+(tipValuePerPerson*numberOfPpl.value))/Number(numberOfPpl.value)).toFixed(2))

    if(!isNaN(tipValuePerPerson) && !isNaN(total) && tipValuePerPerson != Infinity && total != Infinity) {
        document.getElementById('tip-amount-counted').innerHTML = tipValuePerPerson
        document.getElementById('final-price-counted').innerHTML = total
    }
}



resetBtn.addEventListener('click', () => {
    document.getElementById('form').reset()
    document.getElementById('tip-amount-counted').innerHTML = "0.00"
    document.getElementById('final-price-counted').innerHTML = "0.00"
    buttonFocusState()
    resetBtn.disabled = true
    resetBtn.classList.remove('btn-active')
})