import { formatarRelogio } from "./modulos/relogio.js";
import { carregarTema, salvarTema, aplicarTema } from "./modulos/tema.js";
const elementos = {
  hora: document.querySelector("#time"),
  dia: document.querySelector("#weekday"),
  data: document.querySelector("#full-date"),
  saudacao: document.querySelector("#greeting"),
  imagem: document.querySelector("#period-image"),
  periodo: document.querySelector("#period-label"),
  fuso: document.querySelector("#timezone"),
  tema: document.querySelector("#theme-button"),
};
let temaAtual = carregarTema();
function atualizar() {
  const agora = new Date();
  const relogio = formatarRelogio(agora);
  elementos.hora.innerHTML = `${relogio.hora}<span>:${relogio.segundos}</span>`;
  elementos.hora.dateTime = relogio.iso;
  elementos.dia.textContent = relogio.diaSemana;
  elementos.data.textContent = relogio.dataCompleta;
  elementos.saudacao.textContent = relogio.periodo.saudacao;
  elementos.periodo.textContent = relogio.periodo.nome;
  elementos.imagem.src = `./assets/images/${relogio.periodo.imagem}`;
  elementos.imagem.alt = relogio.periodo.nome;
  elementos.fuso.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone.replaceAll("_", " ");
}
elementos.tema.addEventListener("click", () => {
  temaAtual = temaAtual === "dark" ? "light" : "dark";
  aplicarTema(temaAtual);
  salvarTema(temaAtual);
});
aplicarTema(temaAtual);
atualizar();
window.setInterval(atualizar, 1000);
