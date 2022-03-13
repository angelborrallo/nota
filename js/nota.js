function calculoNota(){
    /* entrada de datos */
    let notaWordpress=Number(document.getElementById("wordPress").value);
    let notaJs=Number(document.getElementById("js").value);

    /* calculo de nota */
    let notaFinal=(75*notaWordpress+25*notaJs)/100;

    /* salida de resultados */

    document.getElementById("resultado").innerHTML=
    "La nota final es: "+notaFinal;

    if (notaFinal>=5){
     document.getElementById("indicacion").innerHTML=
    "Enhorabuena, estás aprobado!";
    } else {
     document.getElementById("indicacion").innerHTML=
    "Ánimo, tendrás que volver a intentarlo";
    }
 }