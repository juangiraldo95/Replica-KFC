//Seleccion de tema
function cambiarTema(){
    let temaSelect = document.getElementById("tema").value;

    if(temaSelect == "claro"){
        document.getElementById("cambioTema").classList.remove("theme-dark");
        document.getElementById("cambioTema").classList.add("theme-light");
        localStorage.setItem(`theme-dark`, `true`)


    }else{
        document.getElementById("cambioTema").classList.remove("theme-ligth");
        document.getElementById("cambioTema").classList.add("theme-dark");
        localStorage.setItem(`theme-dark`, `false`)
    }
    
    

}

function botonIngles(){
    //Idioma ingles

    let seleccion = document.getElementById('idioma').value;

    if( seleccion == 'en'){
        let botones = document.querySelectorAll('.button-buy')
        for (let i = 0; i < botones.length; i++) {
        botones[i].innerHTML = 'Buy';

        document.getElementById("text1").innerHTML="1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + pan crujiente al horno artesanal"
        document.getElementById("text2").innerHTML=
        document.getElementById("text3").innerHTML="5 Nuggets + 5 Hot Wings (Spicy hot wings are equivalent to a wing piece) + 1 Personal Coleslaw..."
        document.getElementById("text4").innerHTML="1 Kentucky Coronel Sandwich (1 Breaded chicken breast fillet, Salad"
        document.getElementById("text5").innerHTML="1 Combo Kentucky Sandwich (1 Breaded chicken breast fillet) + bread dorado with batelly"
        document.getElementById("text6").innerHTML="1 Combo Kentucky Colonel Sandwich (1 Breaded chicken breast fillet) + brad , potato"
        document.getElementById("text7").innerHTML="1 Crispy BBQ Sandwich (1 Breaded chicken breast fillet) + 1 potato salad , potato..."
        document.getElementById("text8").innerHTML="1 Combo Crispy BBQ Sandwich (1 Extra-large, triple-breaded chicken breast fillet, onion...)"
        
    }
    } //Idioma español
    else if ( seleccion == 'es'){
        let botones = document.querySelectorAll('.button-buy')
        for (let i = 0; i < botones.length; i++) {
            botones[i].innerHTML = 'Comprar';

            document.getElementById("text1").innerHTML="1 Sándwich BBQ Crunch (1 Filete de pollo apanado)"
            document.getElementById("text2").innerHTML="1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)"
            document.getElementById("text3").innerHTML="1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa pequeña + 1 Gaseosa Pet..."
            document.getElementById("text4").innerHTML="1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechiga de pollo apanado..."
            document.getElementById("text5").innerHTML="1 Kentucky coronel hamburguesa / Sandwich 1 filete de pechuga de pollo"
            document.getElementById("text6").innerHTML="1 Kentucky coronel hamburguesa / Sandwich 1 filete de pechuga de pollo"
            document.getElementById("text7").innerHTML="5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada..."
            document.getElementById("text8").innerHTML="1 Sandwich Crispy BBQ + 1 FIlete de pechuga de pollo extra grande, triple empanizado, cebolla.."
            
        }
        localStorage.setItem(`es`, `false`)
    }
    function cambiarTema(){
        let tema = document.getElementById("tema").value;

        if (tema == `theme-dark`){
            cambiarTema("claro");
        }else{
            cambiarTema("oscuro");
        }
    }
}