
var tableResult = "<table>";

function Persona(nombre, marcadores)
{
    this.nombre = nombre;
    this.marcadores = marcadores;
    this.puntaje ;
    this.getPuntaje = function()
    {
        var puntajeParcial = 0;
        console.log(this.nombre)
        tableResult += "<tr> <td> " + this.nombre + "</td></tr>" 
        var j = 0
        for(i in this.marcadores){
            j++;
            if( marcadoresGlobal[i][0] == marcadores[i][0] &&
                marcadoresGlobal[i][1] == marcadores[i][1]){
                puntajeParcial = puntajeParcial + 5;
                tableResult += "<tr>" 
                    + "<td>"  + j + "</td>" 
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 5 </td>" 
                    + "</tr>";


                console.log(i + ' marcador global : ' + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] );
                console.log('PUNTAJE 5');
                continue;
            }

            if(marcadoresGlobal[i][0] == marcadoresGlobal[i][1] &&
                marcadores[i][0] == marcadores[i][1] ){
                puntajeParcial = puntajeParcial + 3;

                tableResult += "<tr>" 
                    + "<td>"  + j + "</td>" 
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 3 </td>" 
                    + "</tr>";

               console.log(i + ' marcador global : ' + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + " Marcador : " +  marcadores[i][0] + " - " +marcadores[i][1] );
                console.log('PUNTAJE 3');
               

                continue;
            }

            if( (marcadoresGlobal[i][0] > marcadoresGlobal[i][1] && 
                marcadores[i][0] > marcadores[i][1]) ||

                (marcadoresGlobal[i][0] < marcadoresGlobal[i][1] && 
                marcadores[i][0] < marcadores[i][1])){
                puntajeParcial = puntajeParcial + 2;

                tableResult += "<tr>" 
                    + "<td>"  + j + "</td>" 
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 2</td>" 
                    + "</tr>";

               console.log(i + ' marcador global : ' + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + " Marcador : " +  marcadores[i][0] + " - " +marcadores[i][1] );
                console.log('PUNTAJE 2');
      
                continue;

            }

            mgt = marcadoresGlobal[i][0] + marcadoresGlobal[i][1];
            mt = marcadores[i][0] + marcadores[i][1];

            if(mgt == mt){
                puntajeParcial = puntajeParcial + 1;
                tableResult += "<tr>" 
                    + "<td>"  + j + "</td>" 
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 1 </td>" 
                    + "</tr>";

               console.log(i + ' marcador global : ' + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1]+ " Marcador : " +  marcadores[i][0] + " - " +marcadores[i][1] );
               console.log('PUNTAJE 1'  );
     
                continue;
            }
        tableResult += "<tr>" 
                    + "<td>"  + j + "</td>" 
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 0 </td>" 
                    + "</tr>";
        }

        this.puntaje = puntajeParcial;
        tableResult += "<tr> <td> </td> <td> </td><td> </td><td> Puntaje total " + this.puntaje;+ "</td></tr>" 
        return this.puntaje;
    }
}

function inicio ()
{
   
    var participantes = {
        "isa" : new Persona("Isa", isaPuntajes),
        "german" :new Persona("german", germanPuntajes),
        "andres" :new Persona("andres", andresPuntajes),
        "leonardo" :new Persona("leonardo", leonardoPuntajes),
        "juanZuluaga" :new Persona("juanZuluaga", juanZuluagaPuntajes),
        "juanRamos" :new Persona("juanRamos", juanRamosPuntajes),
        "diego" :new Persona("diego", diegoPuntajes),
        "paola" :new Persona("paola", paolaPuntajes),
        "fabian" :new Persona("fabian", fabianPuntajes),
        "lenin" :new Persona("lenin", leninPuntajes)
    
    }
    var resultados = [],
           tablaPosicion = "<table>",
           i = 0;
    for(j in participantes){
       puntajeF = participantes[j].getPuntaje(); 
       resultados.push(  {"nombre": j,  "puntaje" : puntajeF} );
    }
    resultados.sort(compare);
    for(p in resultados){
        i++;
        tablaPosicion += "<tr><td>"+ i +"</td><td>" + resultados[p].nombre + "</td>" +  "<td>" + resultados[p].puntaje + "</td></tr>";
    }
    tablaPosicion += "</table>"

    idTablaResultados = document.getElementById('resultados')
    idTablaResultados.innerHTML = tableResult;  

    idTablaPosicion= document.getElementById('posicion')
    idTablaPosicion.innerHTML = tablaPosicion;  
}
function compare(a,b) {
      if (a.puntaje > b.puntaje)
        return -1;
      if (a.puntaje <b.puntaje)
        return 1;
      return 0;
}





