import test from 'node:test';
import assert from 'node:assert/strict';

import {
  calculateCalendarAge,
  formatDateInput,
  getAgeGroup,
  validateBirthDate
} from '../src/logic/ageCalculator.js';

const today = { year: 2026, month: 8, day: 16 };

test('formata a digitação como DD/MM/AAAA', () => {
  assert.equal(formatDateInput('01022000'), '01/02/2000');
  assert.equal(formatDateInput('01a02/200012'), '01/02/2000');
});

test('calcula zero anos para quem nasceu hoje', () => {
  assert.deepEqual(calculateCalendarAge(today, today), { years: 0, months: 0, days: 0 });
});

test('classifica jovens com menos de 19 e exatamente 19 anos', () => {
  assert.equal(calculateCalendarAge({ year: 2007, month: 8, day: 17 }, today).years, 18);
  assert.equal(getAgeGroup(18), 'Jovem');
  assert.equal(calculateCalendarAge({ year: 2007, month: 8, day: 16 }, today).years, 19);
  assert.equal(getAgeGroup(19), 'Jovem');
});

test('classifica exatamente 20 e 59 anos como adulto', () => {
  assert.equal(getAgeGroup(calculateCalendarAge({ year: 2006, month: 8, day: 16 }, today).years), 'Adulto');
  assert.equal(getAgeGroup(calculateCalendarAge({ year: 1967, month: 8, day: 16 }, today).years), 'Adulto');
});

test('classifica exatamente 60 e mais de 60 anos como idoso', () => {
  assert.equal(getAgeGroup(calculateCalendarAge({ year: 1966, month: 8, day: 16 }, today).years), 'Idoso');
  assert.equal(getAgeGroup(calculateCalendarAge({ year: 1940, month: 1, day: 1 }, today).years), 'Idoso');
});

test('trata aniversário antes e depois da data de referência', () => {
  assert.deepEqual(calculateCalendarAge({ year: 2000, month: 8, day: 15 }, today), { years: 26, months: 0, days: 1 });
  assert.deepEqual(calculateCalendarAge({ year: 2000, month: 8, day: 17 }, today), { years: 25, months: 11, days: 30 });
});

test('trata o fim de mês e meses de 28 dias', () => {
  assert.deepEqual(calculateCalendarAge({ year: 2026, month: 1, day: 31 }, { year: 2026, month: 2, day: 28 }), { years: 0, months: 1, days: 0 });
  assert.deepEqual(calculateCalendarAge({ year: 2026, month: 2, day: 28 }, { year: 2026, month: 3, day: 28 }), { years: 0, months: 1, days: 0 });
});

test('trata nascimento em 29 de fevereiro em ano não bissexto', () => {
  assert.deepEqual(calculateCalendarAge({ year: 2024, month: 2, day: 29 }, { year: 2025, month: 2, day: 28 }), { years: 1, months: 0, days: 0 });
});

test('rejeita entrada vazia, formato, dia, mês, ano, datas inexistentes e futuras', () => {
  assert.equal(validateBirthDate('', today).message, 'Informe sua data de nascimento.');
  assert.equal(validateBirthDate('1/1/2000', today).message, 'Use o formato DD/MM/AAAA.');
  assert.equal(validateBirthDate('32/01/2000', today).message, 'Informe um dia entre 01 e 31.');
  assert.equal(validateBirthDate('01/13/2000', today).message, 'Informe um mês entre 01 e 12.');
  assert.equal(validateBirthDate('01/01/0000', today).message, 'Informe um ano válido.');
  assert.equal(validateBirthDate('31/04/2020', today).message, 'Essa data não existe no calendário.');
  assert.equal(validateBirthDate('29/02/2025', today).message, 'Essa data não existe no calendário.');
  assert.equal(validateBirthDate('17/08/2026', today).message, 'A data de nascimento não pode estar no futuro.');
});
