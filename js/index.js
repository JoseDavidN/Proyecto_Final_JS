var estudiantes = '{"alumnos":[]}';

var jsObj = JSON.parse(estudiantes);

function registro(){
    var cod = document.getElementById('cod').value;
    var nom = document.getElementById('name').value;
    var not = document.getElementById('nota').value;

    jsObj.alumnos.push({"codigo":cod, "nombre":nom, "nota":not});

    var tabla = document.getElementById('tabla');
    var row = tabla.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = cod;
    cell2.innerHTML = nom;
    cell3.innerHTML = not;

};

function promedio(){
    var out = "<b>El Promedio es de: </b>";
    var prom = 0.0;

    for(i=0; i<jsObj.alumnos.length; i++){
        prom += jsObj.alumnos[i].nota/jsObj.alumnos.length;
        document.getElementById('promedio').innerHTML = out + prom;
    }
};

function notaMayor(){
    var notM = "<b>El estudiante con la mayor nota es: </b><br><br>";

    for(i=0; i < jsObj.alumnos.length; i++){
        if(jsObj.alumnos[i].nota >= 5){
            notM += "<b>Codigo: </b>" + jsObj.alumnos[i].codigo +" <b>Nombre: </b>" + jsObj.alumnos[i].nombre + " <b>Nota: </b>" + jsObj.alumnos[i].nota + "<br>";
        }
        document.getElementById('notaMayor').innerHTML = notM;
    }
};

function notaMenor(){
    var notm = "<b>El estudiante con la menor nota es: </b><br><br>";

    for(i=0; i < jsObj.alumnos.length; i++){
        if(jsObj.alumnos[i].nota <= 3){
            notm += "<b>Codigo: </b>" + jsObj.alumnos[i].codigo + "<b> Nombre: </b>" + jsObj.alumnos[i].nombre + "<b> Nota: </b>" + jsObj.alumnos[i].nota + "<br>";
        }
        document.getElementById('notaMenor').innerHTML = notm;
    }
};


//eventos onclick
document.getElementById('btn').addEventListener("click", registro);
document.getElementById('btn2').addEventListener("click", promedio);
document.getElementById('btn3').addEventListener("click", notaMayor);
document.getElementById('btn4').addEventListener("click", notaMenor);