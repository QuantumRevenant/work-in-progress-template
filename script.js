const texts = {
    es: {
        title: "¡Estamos trabajando!",
        message1: "Este sitio está actualmente en construcción",
        message2: "Por favor, vuelva a visitarnos pronto.",
        message3: "",
        button: "Volver"
    },
    en: {
        title: "We're working on it!",
        message1: "This site is currently under construction.",
        message2: "Please, check back soon.",
        message3: "",
        button: "Go back"
    },
    de: {
        title: "Wir arbeiten!",
        message1: "Diese Website befindet sich derzeit im Aufbau",
        message2: "Besuchen Sie uns bald wieder.",
        message3: "",
        button: "Zurück"
    },
    pt: {
        title: "Estamos trabalhando!",
        message1: "Este site está em construção",
        message2: "Visite-nos novamente em breve.",
        message3: "",
        button: "Voltar"
    }
};

function updateTexts(lang) {
    const content = texts[lang];
    if (!content) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (content[key] !== undefined) {
            el.textContent = content[key];
        }
    });
}

document.getElementById("langSelector").addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    updateTexts(selectedLang);
});

document.getElementById("alertButton").addEventListener("click", () => {
    window.history.back();
});

// Inicializar con el idioma actual del <select>
updateTexts(document.getElementById("langSelector").value);
