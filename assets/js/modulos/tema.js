const CHAVE = "orbit-theme";
export function carregarTema() {
  return localStorage.getItem(CHAVE) || "light";
}
export function salvarTema(tema) {
  localStorage.setItem(CHAVE, tema);
}
export function aplicarTema(tema) {
  document.documentElement.classList.toggle("light", tema === "light");
}
