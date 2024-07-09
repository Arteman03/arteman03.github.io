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
    ["Introvertido", "Extrovertido"],
    ["Claro", "Oscuro"],
    ["Frágil", "Resistente"],
    ["Educado", "Grosero"],
    ["Largo", "Corto"],
    ["Inteligente", "Tonto"],
    ["Sabio", "Ignorante"],
    ["Creativo", "Rígido"],
    ["Pobre", "Rico"],
    ["Privado", "Público"],
    ["Ordenado", "Desordenado"],
    ["Pacífico", "Agresivo"],
    ["Rico en detalles", "Sencillo"],
    ["Atrevido", "Tímido"],
    ["Famoso", "Desconocido"],
    ["Ecológico", "Contaminante"],
    ["Juvenil", "Maduro"],
    ["Práctico", "Teórico"],
    ["Justo", "Injusto"],
    ["Tierno", "Cruel"],
    ["Saludable", "No saludable"],
    ["Optimista", "Pesimista"],
    ["Lejano", "Cercano"],
    ["Original", "Copia"],
    ["Innovador", "Conservador"],
    ["Preciso", "Vago"],
    ["Convencional", "Excéntrico"],
    ["Paciente", "Impaciente"],
    ["Colorido", "Monocromático"],
    ["Independiente", "Dependiente"],
    ["Meticuloso", "Descuidado"],
    ["Histórico", "Futurista"],
    ["Formal", "Informal"],
    ["Simpático", "Antipático"],
    ["Abundante", "Escaso"],
    ["Seguro", "Inseguro"],
    ["Tradicional", "Moderno"],
    ["Honesto", "Deshonesto"],
    ["Delicado", "Tosco"],
    ["Placentero", "Desagradable"],
    ["Optimista", "Pesimista"],
    ["Sincero", "Hipócrita"],
    ["Flexible", "Rígido"],
    ["Innovador", "Tradicional"],
    ["Energético", "Apático"],
    ["Motivador", "Desmotivador"],
    ["Generoso", "Tacaño"],
    ["Puntual", "Impuntual"],
    ["Curioso", "Indiferente"],
    ["Compasivo", "Insensible"],
    ["Inspirador", "Desalentador"],
    ["Calmado", "Ansioso"],
    ["Tolerante", "Intolerante"],
    ["Activo", "Pasivo"],
    ["Humilde", "Arrogante"],
    ["Decidido", "Indeciso"],
    ["Conservador", "Liberal"],
    ["Atractivo", "Repulsivo"],
    ["Serio", "Juguetón"],
    ["Modesto", "Presuntuoso"],
    ["Dinámico", "Estático"],
    ["Calmado", "Enérgico"],
    ["Refinado", "Grosero"]
];

let usedThemes = [];

document.getElementById("newCardButton").addEventListener("click", function() {
    const card = document.getElementById("card");
    const theme1 = document.getElementById("theme1");
    const theme2 = document.getElementById("theme2");

    if (usedThemes.length === themes.length) {
        alert("Se han utilizado todas las tarjetas.");
        return;
    }
    
    // Apply spin animation
    card.classList.add("spin");

    setTimeout(() => {
        // Choose a random theme that hasn't been used yet
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * themes.length);
        } while (usedThemes.includes(randomIndex));
        
        const [theme1Text, theme2Text] = themes[randomIndex];
        usedThemes.push(randomIndex);
        
        // Set the text
        theme1.textContent = theme1Text;
        theme2.textContent = theme2Text;
        
        // Show the card
        card.classList.remove("hidden");
        card.classList.add("visible");

        // Remove spin animation
        card.classList.remove("spin");
    }, 600); // Match the duration of the CSS animation
});