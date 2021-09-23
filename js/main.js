    $("#imgDW").hide();
    $("#imgPET").hide();
    $("#imgEmails").hide();
    $("#imgProyectos").hide();
    $("#imgInnovacion").hide();

let flechaDiseñoWeb = document.getElementById("flechaDW");
let DiseñoShow=0;

flechaDiseñoWeb.onclick = () => { 

    if (DiseñoShow===0){
        $("#flechaDW").css("transform", "rotate(180deg)");
        $("#imgDW").show("slow");
        DiseñoShow=1;
    } else {
        $("#flechaDW").css("transform", "rotate(360deg)");
        $("#imgDW").hide("slow");
        DiseñoShow=0;
    }

}

let flechaEmails = document.getElementById("flechaEmails");
let EmailsShow=0;

flechaEmails.onclick = () => { 

    if (EmailsShow===0){
        $("#flechaEmails").css("transform", "rotate(180deg)");
        $("#imgEmails").show("slow");
        EmailsShow=1;
    } else {
        $("#flechaEmails").css("transform", "rotate(360deg)");
        $("#imgEmails").hide("slow");
        EmailsShow=0;
    }

}

let flechaProyectos = document.getElementById("flechaProyectos");
let proyectosShow=0;

flechaProyectos.onclick = () => { 

    if (proyectosShow===0){
        $("#flechaProyectos").css("transform", "rotate(180deg)");
        $("#imgProyectos").show("slow");
        proyectosShow=1;
    } else {
        $("#flechaProyectos").css("transform", "rotate(360deg)");
        $("#imgProyectos").hide("slow");
        proyectosShow=0;
    }

}

let flechaInnovacion = document.getElementById("flechaInnovacion");
let innovacionShow=0;

flechaInnovacion.onclick = () => { 

    if (innovacionShow===0){
        $("#flechaInnovacion").css("transform", "rotate(180deg)");
        $("#imgInnovacion").show("slow");
        innovacionShow=1;
    } else {
        $("#flechaInnovacion").css("transform", "rotate(360deg)");
        $("#imgInnovacion").hide("slow");
        innovacionShow=0;
    }

}


let flechaPET = document.getElementById("flechaPET");
let petShow=0;

flechaPET.onclick = () => { 

    if (petShow===0){
        $("#flechaPET").css("transform", "rotate(180deg)");
        $("#imgPET").show("slow");
        petShow=1;
    } else {
        $("#flechaPET").css("transform", "rotate(360deg)");
        $("#imgPET").hide("slow");
        petShow=0;
    }

}