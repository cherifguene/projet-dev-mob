function calculIMC(){
    
    let imc = poids.value / Math.pow(taille.value, 2); 
    let message = "votre imc est de :"+ imc.toFixed(2) +"</br>";
    message += "vous êtes en de: "

    if (poids.value.trim() != "" && taille.value.trim() != "") {
        if (imc < 16.5) {
            message += "Dénutrition ou anoroxie";
        }else if (imc >= 16.5 && imc < 18.5 ) {
            message += "maigre";
        }else if (imc >= 18.5 && imc < 25 ) {
            message += "Poids normal";
        }else if (imc >= 25 && imc < 30 ) {
            message += "Surpoids";
        }else if (imc >= 18.5 && imc < 25 ) {
            message += "Obésité modérée";
        }else if (imc >25 ) {
            message += "Obésité exéssive";
        }
    
        diagnostique.innerHTML = message;
    } else {
        diagnostique.innerHTML = "Veilleur renseigner les données";
    }

}
