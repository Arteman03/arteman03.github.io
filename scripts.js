

document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
    const card = document.getElementById("card");
    const theme1 = document.getElementById("theme1");
    const theme2 = document.getElementById("theme2");
    const newCardButton = document.getElementById("newCardButton");
    const fullscreenButton = document.getElementById("fullscreenButton");

    const themes = [
        ["Caliente", "Frío"],
        ["Dulce", "Salado"],
        ["Grande", "Pequeño"],
        ["Antiguo", "Moderno"],
        ["Rápido", "Lento"],
        ["Duro", "Suave"],
        ["Brillante", "Oscuro"],
        ["Divertido", "Aburrido"],
        ["Ligero", "Pesado"],
        ["Barato", "Caro"],
        ["Simple", "Complejo"],
        ["Peligroso", "Seguro"],
        ["Feliz", "Triste"],
        ["Común", "Raro"],
        ["Sano", "Enfermo"],
        ["Amigable", "Hostil"],
        ["Relajante", "Estresante"],
        ["Seco", "Mojado"],
        ["Fuerte", "Débil"],
        ["Limpio", "Sucio"],
        ["Natural", "Artificial"],
        ["Claro", "Oscuro"],
        ["Frágil", "Resistente"],
        ["Educado", "Grosero"],
        ["Largo", "Corto"],
        ["Inteligente", "Tonto"],
        ["Pobre", "Rico"],
        ["Privado", "Público"],
        ["Ordenado", "Desordenado"],
        ["Pacífico", "Violento"],
        ["SuperFamoso", "Desconocido"],
        ["Ecológico", "Contaminante"],
        ["Joven", "Viejo"],
        ["Tierno", "Cruel"],
        ["Saludable", "No saludable"],
        ["Lejano", "Cercano"],
        ["Convencional", "Excéntrico"],
        ["Colorido", "Monocromático"],

        ["Se ve como una persona", "No se ve como una persona"],
        ["Temporal", "Permanente"],
        ["Suave", "Duro"],
        ["Compañía malévola", "Compañía menos malévola"]
        ["Bueno", "Malo"],
        ["Medianamente Adictivo", "Altamente Adictivo"],
        ["Creíble", "Increíble"],
        ["Lugar Tranquilo", "Lugar Ruidoso"],
        ["Se Ve Como Una Persona", "No Se Ve Como Una Persona"],
        ["Temporal", "Permanente"],
        ["Suave", "Duro"],
        ["Compañía Malévola", "Compañía Menos Malévola"],
        ["Actividad No Popular", "Actividad Popular"],
        ["Completo", "Dividido"],
        ["Comedia", "Drama"],
        ["Mejor Atleta", "Peor Atleta"],
        ["Poco Útil Durante Una Emergencia", "Útil Durante Una Emergencia"],
        ["Nombre de Perro", "Nombre de Gato"],
        ["Legal", "Ilegal"],
        ["Saludo Normal", "Saludo Raro"],
        ["Mascota Común", "Mascota Exótica"],
        ["Feo", "Hermoso"],
        ["Modelo a Seguir", "Mala Influencia"],
        ["Invento Útil", "Invento Inútil"],
        ["Oscuro", "Claro"],
        ["Buena Materia", "Mala Materia"],
        ["Hábito Necesario", "Hábito Innecesario"],
        ["Lugar Fácil de Sentarse", "Lugar Difícil de Sentarse"],
        ["Lugar Fácil de Conseguir Agua", "Lugar Dificil de Conseguir Agua"],
        ["Héroe", "Villano"],
        ["Gusto Rico", "Gusto Feo"],
        ["Peludo", "Sin Pelo"],
        ["Fácil de Hacer", "Difícil de Hacer"],
        ["Mejor Caliente", "Mejor Frío"],
        ["Peligroso", "Seguro"],
        ["Buena Película", "Mala Película"],
        ["Sabroso", "Sin Sabor"],
        ["Horizontal", "Vertical"],
        ["Difícil de Encontrar", "Fácil de Encontrar"],
        ["Aburrido", "Divertido"],
        ["Incoloro", "Colorido"],
        ["Te Hace Sentir Mal", "Te Hace Sentir Bien"],
        ["Perdonable", "Imperdonable"],
        ["Persona Aburrida", "Persona Divertida"],
        ["La Peor Tarea", "La Mejor Tarea"],
        ["Fobia Racional", "Fobia Irracional"],
        ["Sin Importancia", "Importante"],
        ["Vicio", "Virtud"],
        ["Poco Fiable", "Fiable"],
        ["Inestable", "Estable"],
        ["Actividad Popular", "Actividad Impopular"],
        ["Buen Ingrediente Para Pizza", "Mal Ingrediente Para Pizza"]
        ["Viaje Largo", "Viaje Corto"],
        ["Lugar Grande", "Lugar Pequeño"],
        ["Comida Saludable", "Comida Chatarra"]
    ];

    let usedThemes = [];

    newCardButton.addEventListener("click", function() {
        if (usedThemes.length === themes.length) {
            alert("Se han utilizado todas las tarjetas.");
            return;
        }

        // Apply spin animation
        card.classList.add("spin");

        setTimeout(() => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * themes.length);
            } while (usedThemes.includes(randomIndex));
            
            const [theme1Text, theme2Text] = themes[randomIndex];
            usedThemes.push(randomIndex);
            
            theme1.textContent = theme1Text;
            theme2.textContent = theme2Text;
            
            card.classList.remove("hidden");
            card.classList.add("visible");
            card.classList.remove("spin");
        }, 600); // Duration of the spin animation
    });

    fullscreenButton.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});