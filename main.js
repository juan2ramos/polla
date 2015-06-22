
function Persona(nombre, marcadores)
{
    this.nombre = nombre;
    this.marcadores = marcadores;
    this.puntaje ;
    this.getPuntaje = function()
    {
        var puntajeParcial = 0;
        for(i in this.marcadores){
            
            if( marcadoresGlobal[i][0] == marcadores[i][0] &&
                marcadoresGlobal[i][1] == marcadores[i][1]){
                puntajeParcial = puntajeParcial + 5;
                console.log(i);
                console.log('marcador global');
                console.log(marcadoresGlobal[i][0]);
                console.log(marcadoresGlobal[i][1]);
                console.log('marcador');
                console.log(marcadores[i][0]);
                console.log(marcadores[i][1]);
                console.log('PUNFAJE');
                console.log(5);
                continue;
            }

            if(marcadoresGlobal[i][0] == marcadoresGlobal[i][1] &&
                marcadores[i][0] && marcadores[i][1] ){
                puntajeParcial = puntajeParcial + 3;

                console.log(i);
                console.log('marcador global');
                console.log(marcadoresGlobal[i][0]);
                console.log(marcadoresGlobal[i][1]);
                console.log('marcador');
                console.log(marcadores[i][0]);
                console.log(marcadores[i][1]);
                console.log('PUNFAJE');
                console.log(3);

                continue;
            }

            if( (marcadoresGlobal[i][0] > marcadoresGlobal[i][1] && 
                marcadores[i][0] > marcadores[i][1]) ||

                (marcadoresGlobal[i][0] < marcadoresGlobal[i][1] && 
                marcadores[i][0] < marcadores[i][1])){
                puntajeParcial = puntajeParcial + 2;

                console.log(i);
                console.log('marcador global');
                console.log(marcadoresGlobal[i][0]);
                console.log(marcadoresGlobal[i][1]);
                console.log('marcador');
                console.log(marcadores[i][0]);
                console.log(marcadores[i][1]);
                console.log('PUNFAJE');
                console.log(2);
                continue;

            }

            mgt = marcadoresGlobal[i][0] + marcadoresGlobal[i][1];
            mt = marcadores[i][0] + marcadores[i][1];

            if(mgt == mt){
                puntajeParcial = puntajeParcial + 1;

                console.log(i);
                console.log('marcador global');
                console.log(marcadoresGlobal[i][0]);
                console.log(marcadoresGlobal[i][1]);
                console.log('marcador');
                console.log(marcadores[i][0]);
                console.log(marcadores[i][1]);
                console.log('PUNFAJE');
                console.log(1);
                continue;
            }

        }
        this.puntaje = puntajeParcial;
        return this.puntaje;
    }
}

function inicio ()
{
    //nombre = document.getElementById('id')
    //nombre.innerText = isa.nombre;
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
    
    
}



