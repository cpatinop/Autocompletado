let orden_correcto = ['Noche', 'Dorsal', 'Desconocido', 'Temerosos', 'Sombras', 'Aterradoras', 'Inminente'];
let palabras_juego = ['Dorsal', 'Desconocido', 'Sombras', 'Noche', 'Aterradoras', 'Inminente', 'Temerosos'];
let contenedorOpciones = document.getElementById("opciones");
let comprobar = document.getElementById("comprobar");
let txtResultado = document.getElementById("resultado");
let posDisponible = ["", "", "", "", "", "", ""];

function agregarOpciones(){
    palabras_juego.forEach(element => {
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = element;
        div.setAttribute("onclick", "completar(this)");
        contenedorOpciones.appendChild(div);
    });
}
agregarOpciones();

function agregarEliminarAspan(){
    var spans = document.getElementsByTagName("span");
    for(let i=0; i < spans.length; i++){
        spans[i].setAttribute("onclick", "remove(this)");
    }
}
agregarEliminarAspan();

function completar(palabra){
    let posLibre = posDisponible.indexOf("");
    document.getElementById(posLibre).innerHTML = palabra.innerHTML;
    posDisponible[posLibre] = palabra.innerHTML;
    contenedorOpciones.removeChild(palabra);
}

function remove(palabra){
    if(palabra.innerHTML!=""){
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = palabra.innerHTML;
        div.setAttribute("onclick", "completar(this)");
        contenedorOpciones.appendChild(div);

        palabra.innerHTML = "";
        posDisponible[palabra.id] = "";

        document.getElementById(palabra.id).style.background = "#ccc";

        txtResultado.innerHTML = "";
    }
}

comprobar.onclick = function(){
    let posLibre = posDisponible.indexOf("");
    let totalAciertos = 0;

    if(posLibre==-1){
        for(i=0; i <orden_correcto.length;i++){
            if(orden_correcto[i]==posDisponible[i]){
                document.getElementById(i).style.background = "#c0ff33";
                totalAciertos++;
            }else{
                document.getElementById(i).style.background = "#fb4b4b";
            }
        }

        if(totalAciertos==orden_correcto.length){
            txtResultado.innerHTML = "Muy bien!!";
        }else{
            txtResultado.innerHTML = "Existen errores!!";
        }
    }else{
        alert("Completa las palabras");
    }

}
