import test from "node:test";
import assert from "node:assert/strict";
import { obterPeriodo, formatarRelogio } from "../assets/js/modulos/relogio.js";
test("identifica manhã", () => assert.equal(obterPeriodo(8).saudacao, "Good morning"));
test("identifica tarde", () => assert.equal(obterPeriodo(14).saudacao, "Good afternoon"));
test("identifica noite", () => assert.equal(obterPeriodo(22).saudacao, "Good evening"));
test("formata data e horário", () => {
  const resultado = formatarRelogio(new Date("2026-08-23T14:05:09"));
  assert.match(resultado.hora, /14:05/);
  assert.equal(resultado.segundos, "9");
  assert.equal(resultado.diaSemana, "Sunday");
});
