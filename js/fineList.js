"use strict";
window.fineList = {
    searchFines: searchFines
}


let DB = data.finesData;

function searchFines() {

let numberToSearch = document.getElementById("searchInput2").value.trim();
let typeToSearch = document.getElementById("searchInput").value.trim();


 return DB.filter(obj => {
    let hasSearchNumber = false;
    let hasSearchType = false;
    if (obj.hasOwnProperty('номер') && obj.номер === numberToSearch) {
        hasSearchNumber = true;
    }
    if (obj.hasOwnProperty('тип') && obj.тип.toLowerCase() === typeToSearch.toLowerCase()) {
        hasSearchType = true;
    }
    if (hasSearchNumber === true || hasSearchType === true) {
        return obj
    }
    else return false
 }
 )
}






