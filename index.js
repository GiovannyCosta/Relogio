const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const greetingEl = document.querySelector(".greeting");
const imgEl = document.querySelector("#img");
const langBtn = document.getElementById("lang-btn");

// inicializa padrão PT-BR
let langConfig = "pt-br";
const optionsDate = {
  day: "2-digit",
  month: "long",
  year: "numeric",
};
const optionsTime = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

// Evento de clique do botão de linguagem
langBtn.addEventListener("click", () => {
  // Alterna entre PT e EN
  changLangOpt(langConfig === "pt-br" ? "en-US" : "pt-br");
});

function changLangOpt(newLang) {
  langConfig = newLang;
  langBtn.textContent = newLang === "en-US" ? "PT" : "EN";
  localStorage.setItem("language", newLang);
  update(); // Força a atualização visual imediata
}

function updateHours() {
  const now = new Date();
  let timeString = now.toLocaleTimeString(langConfig, optionsTime);

  // Verifica se a string contém AM ou PM - en
  if (timeString.includes("AM") || timeString.includes("PM")) {
    // Separa a hora do marcador (AM/PM)
    timeString = timeString.replace(/(AM|PM)/, '<span class="ampm">$1</span>');
    timeEl.innerHTML = timeString; // Usa innerHTML para renderizar o span
  } else {
    timeEl.textContent = timeString;
  }
}

function updateDate() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString(langConfig, optionsDate);
  dayEl.textContent = now.toLocaleDateString(langConfig, { weekday: "long" });
}
let currentPeriod = "";

function updateWeather() {
  const hour = new Date().getHours();
  const isEn = langConfig === "en-US"; // TRUE OU FALSE
  if (hour >= 6 && hour < 12) {
    greetingEl.textContent = isEn ? "Good morning!" : "Bom dia!";
    imgEl.src = "./img/weather01.png";
    imgEl.alt = "Ícone de manhã";
  } else if (hour >= 12 && hour < 18) {
    greetingEl.textContent = isEn ? "Good afternoon!" : "Boa tarde!";
    imgEl.src = "./img/weather02.png";
    imgEl.alt = "Ícone de tarde";
  } else {
    greetingEl.textContent = isEn ? "Goodnight!" : "Boa noite!";
    imgEl.src = "./img/weather03.png";
    imgEl.alt = "Ícone de noite";
  }
}

function update() {
  updateHours();
  updateDate();
  updateWeather();
}

// Carrega preferência de linguagem do localStorage
const savedLang = localStorage.getItem("language");
if (savedLang) {
  langConfig = savedLang;
  langBtn.textContent = savedLang === "en-US" ? "PT" : "EN";
} else {
  langBtn.textContent = "EN";
}

update(); // executa imediatamente
setInterval(update, 1000); // atualiza a cada segundo
