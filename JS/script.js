function calcularVazaoMetodoRacional() {
    var TR = parseFloat(document.getElementById("TR").value);
    var K = parseFloat(document.getElementById("K").value);
    var m = parseFloat(document.getElementById("m").value);
    var t0 = parseFloat(document.getElementById("t0").value);
    var n = parseFloat(document.getElementById("n").value);
    var tc = parseFloat(document.getElementById("tc").value);
    var area = parseFloat(document.getElementById("area").value);
    var c = parseFloat(document.getElementById("c").value);

    // Verificando se os campos estão preenchidos com números
    if (isNaN(TR) || isNaN(K) || isNaN(m) || isNaN(t0) || isNaN(n) || isNaN(tc) || isNaN(area) || isNaN(c)) {
        window.alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }
    
    var intensidade = ((TR**m)*K)/((tc+t0)**n);
    var vazao = (c*intensidade*area)/3.6;
    document.getElementById("vazao").textContent = "A vazão da sua bacia pelo Método Racional é: " + vazao.toFixed(2) + " m" + "\u00B3" + "/s";
}

function calcularVazaoMetodoRacionalModificado() {
    var TR = parseFloat(document.getElementById("TR").value);
    var K = parseFloat(document.getElementById("K").value);
    var m = parseFloat(document.getElementById("m").value);
    var t0 = parseFloat(document.getElementById("t0").value);
    var n = parseFloat(document.getElementById("n").value);
    var tc = parseFloat(document.getElementById("tc").value);
    var area = parseFloat(document.getElementById("area").value);
    var c = parseFloat(document.getElementById("c").value);

    // Verificando se os campos estão preenchidos com números
    if (isNaN(TR) || isNaN(K) || isNaN(m) || isNaN(t0) || isNaN(n) || isNaN(tc) || isNaN(area) || isNaN(c)) {
        window.alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    var tipoBacia = document.getElementById("tipoBacia").value;
    var vazaoModificado;
    var intensidade = ((TR**m)*K)/((tc+t0)**n);
    var vazao = (c*intensidade*area)/3.6;

    if (tipoBacia === "urbana") {
        vazaoModificado = vazao*(area**-0.15);
        document.getElementById("vazaoModificado").textContent = "A vazão da bacia urbana pelo Método Racional Modificado é: " + vazaoModificado.toFixed(2) + " m" + "\u00B3" + "/s";
    } else if (tipoBacia === "rural") {
        vazaoModificado = vazao*(area**-0.1);
        document.getElementById("vazaoModificado").textContent = "A vazão da bacia rural pelo Método Racional Modificado é: " + vazaoModificado.toFixed(2) + " m" + "\u00B3" + "/s";
    } else {
        document.getElementById("vazaoModificado").textContent = "Para realizar o cálculo é preciso selecionar o tipo de bacia.";
    }
}

function calcularCoeficienteC() {
    var permeavel = parseFloat(document.getElementById("permeavel").value);
    var impermeavel = parseFloat(document.getElementById("impermeavel").value);
    var Atotal = permeavel+impermeavel;
    var cp = parseFloat(document.getElementById("cp").value);
    var ci = parseFloat(document.getElementById("ci").value);

    // Verificando se os campos estão preenchidos com números
    if (isNaN(permeavel) || isNaN(impermeavel) || isNaN(Atotal) || isNaN(cp) || isNaN(ci)) {
        window.alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }
    
    var coeficienteC = ((cp*permeavel)+(ci*impermeavel))/Atotal;
    document.getElementById("coeficienteC").textContent = "O coeficiente C para sua bacia é: " + coeficienteC.toFixed(2);
}
