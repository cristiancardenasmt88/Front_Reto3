//Categoria
function traerInformacionCategorias(){
    $.ajax({
        //url:"http://localhost:8080/api/Category/all",
        url:"http://129.151.112.6:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCategoria").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        //url:"http://localhost:8080/api/Category/save"
        url:"http://129.151.112.6:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

//Quadbike
function traerInformacionQuadbikes(){
    $.ajax({
        //url:"http://localhost:8080/api/Quadbike/all"
        url:"http://129.151.112.6:8080/api/Quadbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaQuadbikes(respuesta);
        }
    });
}

function pintarRespuestaQuadbikes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionQuadbikes(){
    let var3 = {
        name:$("#Kname").val(),
        brand:$("#Kbrand").val(),
        year:$("#Kyear").val(),
        description:$("#Kdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        //url:"http://localhost:8080/api/Quadbike/save",
        url:"http://129.151.112.6:8080/api/Quadbike/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

//Clientes
function traerInformacionClientes(){
    $.ajax({
        //url:"http://localhost:8080/api/Client/all",
        url:"http://129.151.112.6:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        //url:"http://localhost:8080/api/Client/save",
        url:"http://129.151.112.6:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

//Mensaje
function traerInformacionMensajes(){
    $.ajax({
        //url:"http://localhost:8080/api/Message/all",
        url:"http://129.151.112.6:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    
    })

}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";        
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var2 = {
        
        messageText:$("#messagetext").val(),
        };
       
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        //url:"http://localhost:8080/api/Message/save",
        url:"http://129.151.112.6:8080/api/Message/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
             window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });
    }

//Reservaciones
function agregarReservation() {
    
    if($("#startDate").val().length == 0 || $("#devolutionDate").val().length == 0 || $("#status").val().length == 0){
        alert("Todos los campos son Obligatorios")
    }else{  
        let elemento = {
            startDate: $("#startDate").val(),
            devolutionDate: $("#devolutionDate").val(),
            status: $("#status").val(),
            quadbike:{id: +$("#select-quadbike").val()},
            client:{idClient: +$("#select-client").val()},
            
        }

        let dataToSend = JSON.stringify(elemento);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            //url: "http://localhost:8080/api/Reservation/save",
            url: "http://129.151.112.6:8080/api/Reservation/save",
            data: dataToSend,
            datatype: "json",

            success: function (response) {
                console.log(response);
                //Limpiar Campos
                $("#resultado5").empty();
                $("#startDate").val("");
                $("#devolutionDate").val("");
                $("#status").val("");

                //Listar Tabla

                alert("Se ha guardado Correctamente!")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se guardo Correctamente!")
            }
        });
    }
}



function listarReservation(){
    $.ajax({
        //url: "http://localhost:8080/api/Reservation/all",
        url: "http://129.151.112.6:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            pintarRespuestaReservation(response);
        }
    });
}

function pintarRespuestaReservation(response){
   
    let myTable="<table>";
    myTable+="<tr>";
        myTable+="<td>Fecha Inicio</td>";
        myTable+="<td>fecha Devolucion</td>";
        myTable+="<td>Estado</td>";
        myTable+="<td>Cuatrimoto</td>";
        myTable+="<td>Cliente</td>";
     "</tr>";
      
    for(i=0;i<response.length;i++){
    myTable+="<tr>";
        myTable+="<td>"+response[i].startDate+"</td>";
        myTable+="<td>"+response[i].devolutionDate+"</td>";
        myTable+="<td>"+response[i].quadbike+"</td>";
        myTable+="<td>"+response[i].quadbike.name+"</td>";
        myTable+="<td>"+response[i].client.name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}