
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
        for(i in this.marcadores){
            
            if( marcadoresGlobal[i][0] == marcadores[i][0] &&
                marcadoresGlobal[i][1] == marcadores[i][1]){
                puntajeParcial = puntajeParcial + 5;
                tableResult += "<tr>" 
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
                    + "<td>"  + i + "</td>"  
                    + "<td>"  +"marcador global : " + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1] + "</td>"  
                    +  "<td>"  + " Marcador : " +  marcadores[i][0] + " - " + marcadores[i][1] + "</td>"  
                    + "<td> Puntaje 1 </td>" 
                    + "</tr>";

               console.log(i + ' marcador global : ' + marcadoresGlobal[i][0] + "  -  " + marcadoresGlobal[i][1]+ " Marcador : " +  marcadores[i][0] + " - " +marcadores[i][1] );
               console.log('PUNTAJE 1'  );
     
                continue;
            }

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
    for(i in participantes){
       console.log(i + " : " +participantes[i].getPuntaje()); 
    }
     nombre = document.getElementById('id')
     console.log(tableResult)
    nombre.innerHTML = tableResult;
    
}



