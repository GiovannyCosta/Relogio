export function obterPeriodo(hora) {
  if (hora >= 5 && hora < 12) return { nome: "morning", saudacao: "Good morning", imagem: "weather01.png" };
  if (hora >= 12 && hora < 18) return { nome: "afternoon", saudacao: "Good afternoon", imagem: "weather02.png" };
  return { nome: "evening", saudacao: "Good evening", imagem: "weather03.png" };
}

export function formatarRelogio(data) {
  const hora = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(data);
  const segundos = new Intl.DateTimeFormat("en-US", { second: "2-digit" }).format(data);
  const diaSemana = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(data);
  const dataCompleta = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    data,
  );
  return { hora, segundos, diaSemana, dataCompleta, iso: data.toISOString(), periodo: obterPeriodo(data.getHours()) };
}
