const CHAVE="orbit-language";
export const textosInterface={en:{welcome:"Welcome",live:"Live",theme:"Switch theme",language:"Mudar para português"},br:{welcome:"Bem-vindo",live:"Ao vivo",theme:"Mudar tema",language:"Switch to English"}};
export function carregarIdioma(){return localStorage.getItem(CHAVE)||"en"}
export function salvarIdioma(idioma){localStorage.setItem(CHAVE,idioma)}
