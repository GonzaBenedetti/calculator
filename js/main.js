function symbol(valor) {
 document.getElementById(`windows`).value += valor;   
}

function clean () {
    document.getElementById(`windows`).value = ``;   
}

function eq () {
    const oper = document.getElementById(`windows`).value;
    const result = eval(oper);
    document.getElementById(`windows`).value = result;
}