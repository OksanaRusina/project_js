"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");


let DB = data.finesData;



buttonSubmit.addEventListener('click', payFine);

function payFine() {
    let passportCheck = /^[а-яА-ЯЄї]{2}[0-9]{6}$/;
    let creditCardCheck = /^[0-9]{16}$/;
    let cvvCheck = /^[0-9]{3}$/;



    let fineToDelete = DB.find(obj => {
        return obj.номер === fineNumber.value && obj.сума === parseInt(amount.value);
    });

    if (!fineToDelete) {
        alert("Номер/сума не співпадає");
        return;
    }


    if (!passportCheck.test(passport.value)) {
        alert("Не вірний паспортний номер");
        return;
    }

    if (!creditCardCheck.test(creditCardNumber.value)) {
        alert("Не вірна кредитна картка");
        return;
    }

    if (!cvvCheck.test(cvv.value)) {
        alert("Не вірний CVV");
        return;
    }


    let indexToDelete = DB.indexOf(fineToDelete);
    DB.splice(indexToDelete, 1);

    alert("Штраф успішно оплачено!");
}
