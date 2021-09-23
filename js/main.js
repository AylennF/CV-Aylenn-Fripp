    $("#imgDW").hide();
    $("#imgIngenieria").hide();

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

let flechaIngenieria = document.getElementById("flechaIngenieria");
let IngenieriaShow=0;

flechaIngenieria.onclick = () => { 

    if (IngenieriaShow===0){
        $("#flechaIngenieria").css("transform", "rotate(180deg)");
        $("#imgIngenieria").show("slow");
        IngenieriaShow=1;
    } else {
        $("#flechaIngenieria").css("transform", "rotate(360deg)");
        $("#imgIngenieria").hide("slow");
        IngenieriaShow=0;
    }

}